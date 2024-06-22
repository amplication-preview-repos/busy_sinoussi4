import { GuestAttendanceCreateNestedManyWithoutGuestsInput } from "./GuestAttendanceCreateNestedManyWithoutGuestsInput";

export type GuestCreateInput = {
  attendanceStatus?: boolean | null;
  email?: string | null;
  guestAttendances?: GuestAttendanceCreateNestedManyWithoutGuestsInput;
  name?: string | null;
  phone?: string | null;
};
