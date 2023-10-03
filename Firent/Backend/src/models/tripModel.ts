import { PrismaClient} from '@prisma/client';
import { Trip, Image, EntityType,  } from '../types/rentfire';

const prisma = new PrismaClient();

export type TripUpdateInput = {
  location?: string;
  duration?: string;
  rating?: number;
  text?: string;
  date?: Date;
  userId?: string;
};


export const updateTrip = async (
  id: string,
  tripData: TripUpdateInput,
  imageDatas: Image[]
) => {
  try {
    const trip = await prisma.trip.findUnique({
      where: { id: Number(id) },
      include: { images: true },
    });

    if (!trip) {
      throw new Error('Trip not found');
    }

    const imagesToDelete = trip.images.filter(
      (image) => !imageDatas.some((i) => i.id === image.id)
    );

    await prisma.image.deleteMany({
      where: {
        id: {
          in: imagesToDelete.map((image) => image.id),
        },
      },
    });

    const newImages = imageDatas.filter(
      (imageData) => !trip.images.some((image) => image.id === imageData.id)
    );

    await prisma.image.createMany({
      data: newImages.map((imageData) => ({
        imageId: imageData.imageId,
        entityType: 'CAMPGROUND',
        entityId: id,
      })),
    });

    const updatedImages = await Promise.all(
      trip.images.map(async (image) => {
        const matchingImageData = imageDatas.find((i) => i.id === image.id);
        if (matchingImageData) {
          return await prisma.image.update({
            where: { id: image.id },
            data: { imageId: matchingImageData.imageId },
          });
        }
        return image;
      })
    );

    const updatedTrip = await prisma.trip.update({
      where: { id: Number(id) },
      data: tripData,
    });

    return {
      trip: updatedTrip,
      images: updatedImages,
    };
  } catch (error) {
    throw error;
  }
};


export const createTrip = async (tripData: any, imageUrls: string[]) => {
  try {
    const { location, duration, rating, text, date, userId } = tripData;
    
    
    const createdTrip = await prisma.trip.create({
      data: {
        location,
        duration,
        rating,
        text,
        date,
        userId,
        images: {
          create: imageUrls.map(url => ({
            imageId: url, 
            entityType: 'CAMPGROUND',  
            entityId: 'someEntityId',  
          })),
        },
      },
      include: {
        images: true,
      },
    });
    
    return createdTrip;
  } catch (error) {
    console.error(error); 
    throw error;
  }
};

export const getAllTrips = async () => {
  try {
    return await prisma.trip.findMany({
      include: {
        images: true,
      },
    });
  } catch (error) {
    throw error;
  }
};


export const getTrip = async (id: string) => {
  try {
    const trip = await prisma.trip.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        images: {
          where: {
            entityType: EntityType.CAMPGROUND,
          },
        },
      },
    });

    if (!trip) {
      return null;
    }

    const campgroundImages = trip.images || [];

    return {
      ...trip,
      campgroundImages,
    };
  } catch (error) {
    console.error('Error fetching trip:', error);
    throw error;
  }
};

export const deleteTrip = async (id: string) => {
  try {
    const trip = await prisma.trip.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        images: true,
      },
    });

    if (!trip) {
      return null;
    }

    await prisma.image.deleteMany({
      where: {
        entityId: id,
      },
    });

    await prisma.trip.delete({
      where: {
        id: Number(id),
      },
    });

    return {
      trip,
      images: trip.images,
    };
  } catch (error) {
    console.error('Error deleting trip:', error);
    throw error;
  }
};
