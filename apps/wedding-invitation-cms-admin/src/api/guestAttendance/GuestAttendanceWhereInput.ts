import { GuestWhereUniqueInput } from "../guest/GuestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type GuestAttendanceWhereInput = {
  guest?: GuestWhereUniqueInput;
  id?: StringFilter;
  isPresent?: BooleanNullableFilter;
};
