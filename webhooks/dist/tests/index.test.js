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
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const data_1 = require("./data");
const test_api_1 = require("./utils/test_api");
const prisma = new client_1.PrismaClient();
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.$transaction([
        prisma.audit.deleteMany(),
        prisma.todo.deleteMany(),
        prisma.user.deleteMany(),
        prisma.user.create({
            data: {
                id: "bf4481bc-4883-41b2-ab5e-5deca59c79a1",
                name: "mike"
            }
        })
    ]);
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.$transaction([
        prisma.audit.deleteMany(),
        prisma.todo.deleteMany(),
        prisma.user.deleteMany(),
    ]);
}));
describe('Event Todo Item Added', () => {
    it("Should return status code 200 with right todo item added", () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, test_api_1.testEventPostM)(`${process.env.BASE_URL_TEST}/todo_item_added`, data_1.eventTodoItemAddedMock).then(data => {
            expect(data).toEqual(200);
        });
    }));
    it("Should return status code 400 with wrong todo item added", () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, test_api_1.testEventPostM)(`${process.env.BASE_URL_TEST}/todo_item_added`, data_1.eventTodoItemEmptyMock).then(data => {
            expect(data).toEqual(400);
        });
    }));
});
describe("Event Todo Item Updated", () => {
    test('Should return status code 400 with wrong todo item updated', () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, test_api_1.testEventPostM)(`${process.env.BASE_URL_TEST}/todo_item_updated`, data_1.eventTodoItemEmptyMock).then(data => {
            expect(data).toEqual(400);
        });
    }));
    test('Should return status code 200 with right todo item updated', () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, test_api_1.testEventPostM)(`${process.env.BASE_URL_TEST}/todo_item_updated`, data_1.eventTodoItemUpdatedMock).then(data => {
            expect(data).toEqual(200);
        });
    }));
});
//# sourceMappingURL=index.test.js.map