import { GuestAttendance as TGuestAttendance } from "../api/guestAttendance/GuestAttendance";

export const GUESTATTENDANCE_TITLE_FIELD = "id";

export const GuestAttendanceTitle = (record: TGuestAttendance): string => {
  return record.id?.toString() || String(record.id);
};
