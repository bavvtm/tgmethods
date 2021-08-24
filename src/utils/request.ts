import got from "got";

export const API_URL: string = 'https://api.telegram.org/bot';

export async function request(
    action: string,
    token: string,
    params?: any
): Promise<any> {
    const POST_URL: string = `${API_URL+token}/${action}`;
    const response = await got.post(POST_URL, {
        json: params
    }).json();

    return response;
}