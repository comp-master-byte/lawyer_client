import $api from "@/shared/api/http";


export default class Message {
    static async sendMessage(message: {message: string}, chatId: number) {
        try {
            const response = await $api.post(`/api/send_message/${chatId}`, message);
            return true;
        } catch(error: any) {
            //err
        }
    }
}