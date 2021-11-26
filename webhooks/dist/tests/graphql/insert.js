"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testInsertEventM = void 0;
exports.testInsertEventM = `
    mutation InsertTodoItem($user_id: uuid = "", $id: uuid = "", $title: String = "", $completed: Boolean = false) {
        insert_todo_one(object: {id: $id, title: $title, completed: $completed, user_id: $user_id}) {
            user_id
            id
            title
            completed
        }
    }
`;
//# sourceMappingURL=insert.js.map