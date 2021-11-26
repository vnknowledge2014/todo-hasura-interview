export const deleteAuditLogByIdM = `
    mutation DeleteAuditLogByIdM($id: uuid! = "") {
        delete_audit_by_pk(id: $id) {
            id
            description
            created_at
        }
    }
`;