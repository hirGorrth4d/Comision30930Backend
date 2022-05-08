import { MsgModel } from "../services/databases";


export const getAllMsgs = async () => {
	const msgs = await MsgModel.get();

	return msgs;
}

export const createMsg = async (name: string, msg: string) => {
	const newMsg = await MsgModel.create({
		name,msg
	})

	return newMsg;
}