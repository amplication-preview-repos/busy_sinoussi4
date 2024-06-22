import { Guest } from "../guest/Guest";

export type GuestAttendance = {
  createdAt: Date;
  guest?: Guest | null;
  id: string;
  isPresent: boolean | null;
  updatedAt: Date;
};
