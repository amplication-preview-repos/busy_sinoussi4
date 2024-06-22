import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";

export type GuestAttendanceCreateInput = {
  guest?: GuestWhereUniqueInput | null;
  isPresent?: boolean | null;
};
