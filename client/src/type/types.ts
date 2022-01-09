/* eslint-disable @typescript-eslint/naming-convention */
export interface UserTypes {
  name: string;
  email: string;
}

export interface ProductTypes {
  description: string;
  _id: string;
  image: string;
  name: string;
  price: number;
  stock: number;
  updated_at: string;
  category: string;
}

export interface PaymentTypes {
  bankName: string;
  _id: string;
  name: string;
  noRekening: string;
  type: string;
}

export interface CategoryTypes {
  _id: string;
  name: string;
}

export interface TransactionTypes {
  historyProduct: ProductTypes;
  historyPayment: PaymentTypes;
  historyCustomer: UserTypes;
  category: string;
  _id: string;
  totalItem: number;
  totalPrice: number;
  customer?: string;
  status: string;
}

export interface CheckoutTypes {
  productID: string;
  paymentID: string;
  totalItem: number;
  totalPrice: number;
}
