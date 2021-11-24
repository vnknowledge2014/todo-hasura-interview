import { GraphQLError } from "graphql";

export type GraphQLResult = {
    data?: {
        [key: string]: {
            [key: string]: object | [] | string | number | null;
        };
    };
    errors?: Array<GraphQLError>;
}