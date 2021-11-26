"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlServicePost = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const GraphqlServicePost = (variables, graphqlQ) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchResponse = yield (0, node_fetch_1.default)(`${process.env.GRAPHQL_API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret": `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
                "X-Hasura-Role": `${process.env.Role}`,
            },
            body: JSON.stringify({ query: graphqlQ, variables: variables })
        });
        return yield fetchResponse.json();
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.GraphqlServicePost = GraphqlServicePost;
//# sourceMappingURL=resolvers.js.map