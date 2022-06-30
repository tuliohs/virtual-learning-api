import { SortOrder } from "../../util/SortOrder";

export type PreRegisterOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  name?: SortOrder;
  origin?: SortOrder;
  phone?: SortOrder;
  processed?: SortOrder;
  updatedAt?: SortOrder;
};
