import { SortOrder } from "../../util/SortOrder";

export type GuestAttendanceOrderByInput = {
  createdAt?: SortOrder;
  guestId?: SortOrder;
  id?: SortOrder;
  isPresent?: SortOrder;
  updatedAt?: SortOrder;
};
