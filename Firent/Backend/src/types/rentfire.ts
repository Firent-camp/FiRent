export interface User {
  firebaseId: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  role: UserRole;
  address: string;
  trips: Trip[];
  cart: Cart[];
  wishlist: Wishlist[];
  profile?: Profile;
  images: Image[];
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
  tripId?: number;
  trip?: Trip;
}

export interface Wishlist {
  id: number;
  userId: string;
  tripId: number;
  user: User;
  trip: Trip;
}

export interface Cart {
  id: number;
  userId: string;
  tripId: number;
  user: User;
  trip: Trip;
}

export interface Notification {
  id: number;
  type: NotificationType;
  time: Date;
}

export interface Profile {
  id: number;
  userId: string;
  user: User;
}

export interface Chat {
  id: string;
  firebaseId: string;
  latestMessage: string | null;
  messages: Message[];
}

export interface Message {
  id: string;
  sender: string | null;
  content: string | null;
  createdAt: Date | null;
  chat: Chat | null;
  chatId: string;
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum EntityType {
  CAMPGROUND = 'CAMPGROUND',
  USER = 'USER',
  EQUIPMENT = 'EQUIPMENT',
}

export enum NotificationType {
  TYPE1 = 'TYPE1',
  TYPE2 = 'TYPE2',
}
