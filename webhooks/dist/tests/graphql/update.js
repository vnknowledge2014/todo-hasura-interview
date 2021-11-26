"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testUpdateTitleFieldEventM = exports.testUpdateCompletedFieldEventM = void 0;
exports.testUpdateCompletedFieldEventM = `
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
exports.testUpdateTitleFieldEventM = `
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
//# sourceMappingURL=update.js.map