import { GuestAttendance } from "../guestAttendance/GuestAttendance";

export type Guest = {
  attendanceStatus: boolean | null;
  createdAt: Date;
  email: string | null;
  guestAttendances?: Array<GuestAttendance>;
  id: string;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
