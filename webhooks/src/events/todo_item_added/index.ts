import { Application, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { GraphqlServicePost, AuditLogM } from "../../graphql";
import { AuditLogDescription, AuditResult } from "../../types";
import { auditLogDataFormat, extractEventData } from "../../utils/eventData";

export const todoItemAddedEvent = async (app: Application): Promise<void> => {
    app.post("/todo_item_added", async (req: Request, res: Response) => {
        if (Object.keys(req.body).length > 0) {
            try {
                const {
                    operation_name,
                    table_name,
                    event_name,
                    update_event_data_next
                } = extractEventData(req.body);

                if (operation_name === "INSERT") {
                    const jsonAuditLogFormat = {
                        ...auditLogDataFormat(
                            update_event_data_next,
                            operation_name,
                            event_name,
                            table_name),
                        insert_field: {
                            id: update_event_data_next.id,
                            title: update_event_data_next.title,
                            completed: update_event_data_next.completed
                        }
                    } as AuditLogDescription;

                    const audit_log_data = await GraphqlServicePost({ description: JSON.stringify(jsonAuditLogFormat), id: uuidv4() }, AuditLogM) as AuditResult;

                    audit_log_data.data?.insert_audit?.affected_rows === 1 ? res.sendStatus(200) : res.sendStatus(400);
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
