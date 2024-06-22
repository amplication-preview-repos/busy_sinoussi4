import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";

export type GuestAttendanceUpdateInput = {
  guest?: GuestWhereUniqueInput | null;
  isPresent?: boolean | null;
};
