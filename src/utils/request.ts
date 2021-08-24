import fetch from "node-fetch";

export const API_URL: string = 'https://api.telegram.org/bot';

export async function request(
    action: string,
    token: string,
    params?: any
): Promise<any> {
    const POST_URL: string = `${API_URL+token}/${action}`;
    const headers: Record<string, string> = {
      'content-type': 'application/json',
    };
    const body = JSON.stringify(params);
    const response = await fetch(POST_URL, {
        compress: false,
        method: 'POST',
        headers,
        body: body
    });

    if (response !== undefined) {
        const json = await response.json();
        if (json.ok) return json.result;
    } else {
        return "ERROR";
    }
}