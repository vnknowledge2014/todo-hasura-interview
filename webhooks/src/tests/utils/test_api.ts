import fetch from "node-fetch";

export const testEventPostM = async (url: string, data: object): Promise<number> => {
    try {
        const fetchResponse = await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data
            }),
        });

        return fetchResponse.status;
    } catch (error) {
        throw new Error(`${error}`);
    }
};