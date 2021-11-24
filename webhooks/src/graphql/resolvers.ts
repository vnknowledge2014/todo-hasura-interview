import fetch from "node-fetch";
export const GraphqlServicePost = async (variables: object, graphqlQ: string) => {
    try {
        const fetchResponse = await fetch(`${process.env.GRAPHQL_API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret": `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
                "X-Hasura-Role": `${process.env.Role}`,
            },
            body: JSON.stringify({ query: graphqlQ, variables: variables })
        });
        return await fetchResponse.json();
    } catch (error) {
        throw new Error(`${error}`);
    }
};