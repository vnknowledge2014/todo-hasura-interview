"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUserTable = exports.eventTodoItemEmptyMock = exports.eventTodoItemUpdatedMock = exports.eventTodoItemAddedMock = exports.descriptionInsertFieldAuditLogMock = exports.newItemMock = void 0;
exports.newItemMock = {
    "user_id": "bf4481bc-4883-41b2-ab5e-5deca59c79a1",
    "id": "c85e193b-df28-4bba-bb61-90c683afc882",
    "title": "Test 01",
    "completed": false
};
exports.descriptionInsertFieldAuditLogMock = "{\"user_id\":\"bf4481bc-4883-41b2-ab5e-5deca59c79a1\",\"operation\":\"INSERT\",\"event\":\"todo_item_added\",\"table\":\"todo\",\"updated_at\":\"2021-11-21T12:09:50.416966+00:00\",\"insert_field\":{\"id\":\"d06ed8cf-051c-4e23-9210-a0f18e336ec5\",\"title\":\"test\",\"completed\":false}}";
exports.eventTodoItemAddedMock = {
    event: {
        session_variables: { 'x-hasura-role': 'admin' },
        op: 'INSERT',
        data: {
            old: null,
            new: {
                updated_at: "2021-11-21T12:09:50.416966+00:00",
                created_at: "2021-11-21T12:09:50.416966+00:00",
                completed: false,
                id: "d06ed8cf-051c-4e23-9210-a0f18e336ec5",
                title: "test",
                user_id: "bf4481bc-4883-41b2-ab5e-5deca59c79a1"
            }
        },
        trace_context: {
            trace_id: 3478149144579484000,
            span_id: 12147723404758176000
        }
    },
    created_at: "2021-11-21T12:09:50.416966Z",
    id: '39b3f4c1-f82f-4b0f-86e1-c4c8bbb0bafd',
    delivery_info: { max_retries: 0, current_retry: 0 },
    trigger: { name: 'todo_item_added' },
    table: { schema: 'public', name: 'todo' }
};
exports.eventTodoItemUpdatedMock = {
    "event": {
        "session_variables": {
            "x-hasura-role": "admin"
        },
        "op": "UPDATE",
        "data": {
            "old": {
                "updated_at": "2021-11-22T08:26:11.745645+00:00",
                "created_at": "2021-11-21T16:36:14.157462+00:00",
                "completed": false,
                "id": "c85e193b-df28-4bba-bb61-90c683afc888",
                "title": "Test 01",
                "user_id": "bf4481bc-4883-41b2-ab5e-5deca59c79a1"
            },
            "new": {
                "updated_at": "2021-11-22T08:26:29.090385+00:00",
                "created_at": "2021-11-21T16:36:14.157462+00:00",
                "completed": true,
                "id": "c85e193b-df28-4bba-bb61-90c683afc888",
                "title": "Test 01",
                "user_id": "bf4481bc-4883-41b2-ab5e-5deca59c79a1"
            }
        },
        "trace_context": {
            "trace_id": 14554358101072310000,
            "span_id": 13574192169725774000
        }
    },
    "created_at": "2021-11-22T08:26:29.090385Z",
    "id": "f0b52bf5-bda5-4ac7-b85f-5abd52dc7bbb",
    "delivery_info": {
        "max_retries": 0,
        "current_retry": 0
    },
    "trigger": {
        "name": "todo_item_updated"
    },
    "table": {
        "schema": "public",
        "name": "todo"
    }
};
exports.eventTodoItemEmptyMock = {};
exports.initUserTable = {
    id: "bf4481bc-4883-41b2-ab5e-5deca59c79a1",
    name: "mike"
};
//# sourceMappingURL=index.js.map