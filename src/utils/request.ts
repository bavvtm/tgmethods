import fetch from "node-fetch";

export const API_URL: string = 'https://api.telegram.org/bot';

export async function request(
    action: string,
    token: string,
    params?: any
): Promise<any> {
    const POST_URL: string = `${API_URL+token}/${action}`;
    const response = await fetch(POST_URL, {
        method: 'post',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    return data;
}