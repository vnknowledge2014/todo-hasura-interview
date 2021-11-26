"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditLogDataFormat = exports.extractEventData = void 0;
const extractEventData = (event_data) => {
    const operation_name = event_data.event.op;
    const table_name = event_data.table.name;
    const event_name = event_data.trigger.name;
    const update_event_data_prev = Object.assign({}, event_data.event.data.old);
    const update_event_data_next = Object.assign({}, event_data.event.data.new);
    return {
        operation_name,
        table_name,
        event_name,
        update_event_data_prev,
        update_event_data_next
    };
};
exports.extractEventData = extractEventData;
const auditLogDataFormat = (update_event_data_next, operation_name, event_name, table_name) => {
    return {
        user_id: update_event_data_next.user_id,
        operation: operation_name,
        event: event_name,
        table: table_name,
        updated_at: update_event_data_next.updated_at
    };
};
exports.auditLogDataFormat = auditLogDataFormat;
//# sourceMappingURL=eventData.js.map