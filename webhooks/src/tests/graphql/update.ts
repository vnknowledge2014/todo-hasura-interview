export const testUpdateCompletedFieldEventM = `
    mutation UpdateCompletedFieldEventM($_eq: uuid = "", $completed: Boolean = false) {
        update_todo(where: {id: {_eq: $_eq}}, _set: {completed: $completed}) {
            returning {
                user_id
                id
                title
                completed
            }
            affected_rows
        }
    }
`;

export const testUpdateTitleFieldEventM = `
    mutation UpdateTitleFieldEventM($_eq: uuid = "", $title: String = "") {
        update_todo(where: {id: {_eq: $_eq}}, _set: {title: $title}) {
            returning {
                user_id
                id
                title
                completed
            }
            affected_rows
        }
    }
`;