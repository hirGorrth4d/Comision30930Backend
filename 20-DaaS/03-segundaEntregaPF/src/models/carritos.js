import mongoose from 'mongoose';
import { productsCollectionName } from './productos';

export const carritosCollectionName = 'carritos';

const carritosSchema = new mongoose.Schema(
  {
    productos: [{type: mongoose.Schema.Types.ObjectId,
                  ref: productsCollectionName,
                  required: true}]
  },
    { timestamps:true, versionKey: false}
);

export const CarritoModel = mongoose.model(
carritosCollectionName,
  carritosSchema
);
