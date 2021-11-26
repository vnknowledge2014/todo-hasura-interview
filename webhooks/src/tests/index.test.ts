import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

import { eventTodoItemAddedMock, eventTodoItemEmptyMock, eventTodoItemUpdatedMock } from "./data";
import { testEventPostM } from "./utils/test_api";

const prisma = new PrismaClient();

beforeAll(async () => {
    return await prisma.$transaction([
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
});

afterAll(async () => {
    await prisma.$transaction([
        prisma.audit.deleteMany(),
        prisma.todo.deleteMany(),
        prisma.user.deleteMany(),
    ]);
    await prisma.$disconnect();
});

describe('Event Todo Item Added', () => {
    afterAll(async () => {
        await prisma.$transaction([
            prisma.audit.deleteMany()
        ]);
        await prisma.$disconnect();
    });

    it("Should return status code 200 with right todo item added", async () => {
        return testEventPostM(`${process.env.BASE_URL_TEST}/todo_item_added`, eventTodoItemAddedMock).then(data => {
            expect(data).toEqual(200);
        })
    })

    it("Should return status code 400 with wrong todo item added", async () => {
        return testEventPostM(`${process.env.BASE_URL_TEST}/todo_item_added`, eventTodoItemEmptyMock).then(data => {
            expect(data).toEqual(400);
        })
    })
});

describe("Event Todo Item Updated", () => {
    afterAll(async () => {
        await prisma.$transaction([
            prisma.audit.deleteMany()
        ]);
        await prisma.$disconnect();
    });

    test('Should return status code 400 with wrong todo item updated', async () => {
        return testEventPostM(`${process.env.BASE_URL_TEST}/todo_item_updated`, eventTodoItemEmptyMock).then(data => {
            expect(data).toEqual(400);
        })
    });

    test('Should return status code 200 with right todo item updated', async () => {
        return testEventPostM(`${process.env.BASE_URL_TEST}/todo_item_updated`, eventTodoItemUpdatedMock).then(data => {
            expect(data).toEqual(200);
        })
    });
});
