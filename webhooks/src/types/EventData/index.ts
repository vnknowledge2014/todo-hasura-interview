import { Todo } from "../Todo";

export type EventData = {
    event: {
        session_variables: {
            [key: string]: string;
        };
        op: string;
        data: {
            old: Todo;
            new: Todo;
        };
        trace_context: {
            trace_id: string;
            span_id: string;
        };
    };
    created_at: string;
    id: string;
    delivery_info: {
        max_retries: number;
        current_retry: number;
    };
    trigger: {
        name: string;
    };
    table: {
        schema: string;
        name: string;
    }
}