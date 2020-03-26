"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                name: { type: String, maxlength: 24 },
                author: { type: String, maxlength: 24 },
                isbn: { type: String, maxlength: 24 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store user book', []];
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Book = Book;
