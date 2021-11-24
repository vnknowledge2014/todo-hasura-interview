import { Todo, EventData, AuditLogDescription } from "../types";

export const extractEventData = (event_data: EventData): { operation_name: string; table_name: string; event_name: string; update_event_data_prev: Todo; update_event_data_next: Todo } => {
    const operation_name = event_data.event.op;
    const table_name = event_data.table.name;
    const event_name = event_data.trigger.name;

    const update_event_data_prev = { ...event_data.event.data.old } as Todo;

    const update_event_data_next = { ...event_data.event.data.new } as Todo;

    return {
        operation_name,
        table_name,
        event_name,
        update_event_data_prev,
        update_event_data_next
    }
}

export const auditLogDataFormat = (update_event_data_next: Todo, operation_name: string, event_name: string, table_name: string): AuditLogDescription => {
    return {
        user_id: update_event_data_next.user_id,
        operation: operation_name,
        event: event_name,
        table: table_name,
        updated_at: update_event_data_next.updated_at
    } as AuditLogDescription;
}