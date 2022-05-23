import mongoose from 'mongoose';

const connectionString = process.env.MONGO_ATLAS_SRV || 'mongodb://localhost:27017/ecommerce'

export const initMongoDB = async () => {
  try {
    console.log('CONECTANDO A MI DB');
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('YA ESTOY CONECTADO');
  } catch (error) {
    console.log(`ERROR => ${error}`);
    return error;
  }
};
