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
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoItemUpdatedEvent = void 0;
const uuid_1 = require("uuid");
const graphql_1 = require("../../graphql");
const eventData_1 = require("../../utils/eventData");
const todoItemUpdatedEvent = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.post("/todo_item_updated", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        if (Object.keys(req.body).length > 0) {
            try {
                const { operation_name, table_name, event_name, update_event_data_prev, update_event_data_next } = (0, eventData_1.extractEventData)(req.body);
                if (operation_name === "UPDATE") {
                    if (update_event_data_prev.title !== update_event_data_next.title && update_event_data_prev.completed !== update_event_data_next.completed) {
                        const jsonAuditLogFormat = Object.assign(Object.assign({}, (0, eventData_1.auditLogDataFormat)(update_event_data_next, operation_name, event_name, table_name)), { id: update_event_data_next.id, updated_field: {
                                title: update_event_data_next.title,
                                completed: update_event_data_next.completed
                            } });
                        const audit_log_data = yield (0, graphql_1.GraphqlServicePost)({ description: JSON.stringify(jsonAuditLogFormat), id: (0, uuid_1.v4)() }, graphql_1.AuditLogM);
                        ((_b = (_a = audit_log_data.data) === null || _a === void 0 ? void 0 : _a.insert_audit) === null || _b === void 0 ? void 0 : _b.affected_rows) === 1 ? res.sendStatus(200) : res.sendStatus(400);
                    }
                    else if (update_event_data_prev.title !== update_event_data_next.title) {
                        const jsonAuditLogFormat = Object.assign(Object.assign({}, (0, eventData_1.auditLogDataFormat)(update_event_data_next, operation_name, event_name, table_name)), { id: update_event_data_next.id, updated_field: {
                                title: update_event_data_next.title
                            } });
                        const audit_log_data = yield (0, graphql_1.GraphqlServicePost)({ description: JSON.stringify(jsonAuditLogFormat), id: (0, uuid_1.v4)() }, graphql_1.AuditLogM);
                        ((_d = (_c = audit_log_data.data) === null || _c === void 0 ? void 0 : _c.insert_audit) === null || _d === void 0 ? void 0 : _d.affected_rows) === 1 ? res.sendStatus(200) : res.sendStatus(400);
                    }
                    else {
                        const jsonAuditLogFormat = Object.assign(Object.assign({}, (0, eventData_1.auditLogDataFormat)(update_event_data_next, operation_name, event_name, table_name)), { id: update_event_data_next.id, updated_field: {
                                completed: update_event_data_next.completed
                            } });
                        const audit_log_data = yield (0, graphql_1.GraphqlServicePost)({ description: JSON.stringify(jsonAuditLogFormat), id: (0, uuid_1.v4)() }, graphql_1.AuditLogM);
                        ((_f = (_e = audit_log_data.data) === null || _e === void 0 ? void 0 : _e.insert_audit) === null || _f === void 0 ? void 0 : _f.affected_rows) === 1 ? res.sendStatus(200) : res.sendStatus(400);
                    }
                }
                else {
                    res.sendStatus(400);
                }
            }
            catch (error) {
                res.sendStatus(400);
            }
        }
        else {
            res.sendStatus(400);
        }
    }));
});
exports.todoItemUpdatedEvent = todoItemUpdatedEvent;
//# sourceMappingURL=index.js.map