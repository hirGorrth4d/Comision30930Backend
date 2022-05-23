import mongoose from 'mongoose';

export const productsCollectionName = 'productos';

const productsSchema = new mongoose.Schema(
  { 
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    thumbnail: {type: String, required: true },
    descripcion: { type: String, required: true },
    stock: { type: Number, required: true }
  },
  { timestamps: true, versionKey: false }
);

export const ProductsModel = mongoose.model(
  productsCollectionName,
  productsSchema
);
