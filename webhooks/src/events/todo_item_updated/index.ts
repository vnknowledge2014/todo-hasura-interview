import { Application, Request, Response } from "express";
import { AuditLogDescription, AuditResult } from "../../types";
import { v4 as uuidv4 } from 'uuid';
import { GraphqlServicePost, AuditLogM } from "../../graphql";
import { auditLogDataFormat, extractEventData } from "../../utils/eventData";

export const todoItemUpdatedEvent = async (app: Application): Promise<void> => {
    app.post("/todo_item_updated", async (req: Request, res: Response) => {
        if (Object.keys(req.body).length > 0) {
            try {
                const {
                    operation_name,
                    table_name,
                    event_name,
                    update_event_data_prev,
                    update_event_data_next
                } = extractEventData(req.body);

                if (operation_name === "UPDATE") {
                    if (update_event_data_prev.title !== update_event_data_next.title && update_event_data_prev.completed !== update_event_data_next.completed) {
                        const jsonAuditLogFormat = {
                            ...auditLogDataFormat(
                                update_event_data_next,
                                operation_name,
                                event_name,
                                table_name),
                            id: update_event_data_next.id,
                            updated_field: {
                                title: update_event_data_next.title,
                                completed: update_event_data_next.completed
                            }
                        } as AuditLogDescription;

                        const audit_log_data = await GraphqlServicePost({ description: JSON.stringify(jsonAuditLogFormat), id: uuidv4() }, AuditLogM) as AuditResult;

                        audit_log_data.data?.insert_audit?.affected_rows === 1 ? res.sendStatus(200) : res.sendStatus(400);
                    } else if (update_event_data_prev.title !== update_event_data_next.title) {
                        const jsonAuditLogFormat = {
                            ...auditLogDataFormat(
                                update_event_data_next,
                                operation_name,
                                event_name,
                                table_name),
                            id: update_event_data_next.id,
                            updated_field: {
                                title: update_event_data_next.title
                            }
                        } as AuditLogDescription;

                        const audit_log_data = await GraphqlServicePost({ description: JSON.stringify(jsonAuditLogFormat), id: uuidv4() }, AuditLogM) as AuditResult;

                        audit_log_data.data?.insert_audit?.affected_rows === 1 ? res.sendStatus(200) : res.sendStatus(400);
                    } else {
                        const jsonAuditLogFormat = {
                            ...auditLogDataFormat(
                                update_event_data_next,
                                operation_name,
                                event_name,
                                table_name),
                            id: update_event_data_next.id,
                            updated_field: {
                                completed: update_event_data_next.completed
                            }
                        } as AuditLogDescription;

                        const audit_log_data = await GraphqlServicePost({ description: JSON.stringify(jsonAuditLogFormat), id: uuidv4() }, AuditLogM) as AuditResult;

                        audit_log_data.data?.insert_audit?.affected_rows === 1 ? res.sendStatus(200) : res.sendStatus(400);
                    }
                } else {
                    res.sendStatus(400);
                }
            } catch (error) {
                res.sendStatus(400);
            }
        } else {
            res.sendStatus(400);
        }
    });
}