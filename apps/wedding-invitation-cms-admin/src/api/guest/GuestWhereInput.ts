import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GuestAttendanceListRelationFilter } from "../guestAttendance/GuestAttendanceListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type GuestWhereInput = {
  attendanceStatus?: BooleanNullableFilter;
  email?: StringNullableFilter;
  guestAttendances?: GuestAttendanceListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
