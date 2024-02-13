import { type Database } from "./database";

export type LinktEntity = Database["public"]["Tables"]["links"]["Row"];
export type UserEntity = Database["public"]["Tables"]["users"]["Row"];

export type LinkType = LinktEntity & {
  user: UserEntity;
};