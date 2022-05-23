import mongoose from 'mongoose';

export const carritosCollectionName = 'carritos';

const carritosSchema = new mongoose.Schema(
  {
    productos: { type: Array},
    timestamps: { createdAt: true, updatedAt: true }
  }  
  
);

export const CarritoModel = mongoose.model(
carritosCollectionName,
  carritosSchema
);
