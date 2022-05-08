import { ProductModel } from "../services/databases";


export const getAllProducts = async () => {
	const products = await ProductModel.get();

	return products;
}

export const createProduct = async (name: string, stock: number, price: number) => {
	const newProduct = await ProductModel.create({
		name, stock, price
	})

	return newProduct;
}