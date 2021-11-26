"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogM = void 0;
exports.AuditLogM = `
    mutation AuditLogM($description: String = "", $id: uuid = "") {
        insert_audit(objects: {id: $id, description: $description}) {
            affected_rows
            returning {
                id
                description
                created_at
            }
        }
    }
`;
//# sourceMappingURL=index.js.map