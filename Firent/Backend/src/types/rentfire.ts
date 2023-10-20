// rentfire.ts
export interface User {
  firebaseId: string;
  lastName: string;
  userName: string;
  email: string;
  role: UserRoles;
  image:string;
  address: string;
  trips: Trip[];
  cart: Cart[];
  wishlist: Wishlist[];
  profile: Profile | null;
  chat: Chat | null;
  chatId: number | null;
}

export interface Trip {
  id: number;
  location: string;
  duration: string;
  rating: number;
  text: string;
  date: Date;
  userId: string;
  user: User;
  images: Image[];
  wishlist: Wishlist[];
  carts: Cart[];
}

export interface Image {
  id: number;
  imageId: string;
  entityType: EntityType;
  entityId: string;
  tripId: number | null;
  trip: Trip | null;
}

export interface Wishlist {
  userId: string;
  tripId: number;
  user: User;
  trip: Trip;
}

export interface Cart {
  userId: string;
  tripId: number;
  user: User;
  trip: Trip;
}

export interface Notification {
  id: number;
  type: NotificationTypes;
  time: Date;
}

export interface Profile {
  userId: string;
  user: User;
}

export interface Chat {
  id: number;
  participants: User[];
  messages: Message[];
}

export interface Message {
  id: number;
  content: string;
  senderId: string;
  chat: Chat;
  chatId: number;
}

export enum UserRoles {
  USER = "USER",
  ADMIN = "ADMIN",
}

export enum EntityType {
  CAMPGROUND = "CAMPGROUND",
  USER = "USER",
  EQUIPMENT = "EQUIPMENT",
}

export enum NotificationTypes {
  TYPE1 = "TYPE1",
  TYPE2 = "TYPE2",
}
