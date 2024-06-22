import { GuestAttendanceUpdateManyWithoutGuestsInput } from "./GuestAttendanceUpdateManyWithoutGuestsInput";

export type GuestUpdateInput = {
  attendanceStatus?: boolean | null;
  email?: string | null;
  guestAttendances?: GuestAttendanceUpdateManyWithoutGuestsInput;
  name?: string | null;
  phone?: string | null;
};
