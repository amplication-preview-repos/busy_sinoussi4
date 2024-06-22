import { GuestAttendanceWhereInput } from "./GuestAttendanceWhereInput";
import { GuestAttendanceOrderByInput } from "./GuestAttendanceOrderByInput";

export type GuestAttendanceFindManyArgs = {
  where?: GuestAttendanceWhereInput;
  orderBy?: Array<GuestAttendanceOrderByInput>;
  skip?: number;
  take?: number;
};
