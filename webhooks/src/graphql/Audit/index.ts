export const AuditLogM = `
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

