import { PurchaseModel } from "../models";

export interface LaodPurchases {
  loadAll: () => Promise<Array<LaodPurchases.Result>>;
}

export namespace LaodPurchases {
  export type Result = PurchaseModel;
}
