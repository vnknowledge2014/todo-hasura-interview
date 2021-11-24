import { Todo } from "../Todo"

export type AuditLog = {
    id: string;
    description: string | AuditLogDescription;
}

export type AuditLogDescription = {
    user_id: string;
    id?: string;
    operation: string;
    event: string;
    table: string;
    insert_field?: Todo;
    updated_field?: {
        title?: string;
        completed?: boolean;
    };
    updated_at: string;
}

export type AuditResult = {
    data: {
        insert_audit: {
            affected_rows: number;
            returning: AuditLog[];
        }
    }

}