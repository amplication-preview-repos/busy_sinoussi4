import { SortOrder } from "../../util/SortOrder";

export type GuestOrderByInput = {
  attendanceStatus?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
