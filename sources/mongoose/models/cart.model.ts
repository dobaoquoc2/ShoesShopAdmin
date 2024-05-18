import { model, Schema, Types } from 'mongoose';

export interface Cart {
  user: Types.ObjectId;
  items: {
    product: Types.ObjectId;
    quantity: number;
    size: string;
    price: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export const CartSchema = new Schema<Cart>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
  },

  createdAt: { type: 'Date', default: Date.now },
  updatedAt: { type: 'Date', default: Date.now },
});

export const CartModel = model<Cart>('Cart', CartSchema);
