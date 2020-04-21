"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(norm) {
        this.model = [{
                id: { type: Number, key: 'primary' },
                name: { type: String, maxlength: 24 },
                author: { type: String, maxlength: 24 },
                isbn: { type: String, maxlength: 24 },
                description: { type: String, maxlength: 99 },
                image_url: { type: String, maxlength: 1000 },
                quantity: { type: String, maxlength: 10 },
                price: { type: String, maxlength: 20 },
                user_id: {
                    type: Number,
                    key: 'foreign',
                    references: { table: 'User', foreignKey: 'id' },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                },
            }, 'A table to store user book',
            [
                {
                    route: '/get-all-books',
                    method: 'POST',
                    callback: this.getAllBooks,
                    requireToken: true,
                },
                {
                    route: '/get-book-by-id/:id',
                    method: 'POST',
                    callback: this.getBookById,
                    requireToken: true,
                },
                {
                    route: '/create-book',
                    method: 'POST',
                    callback: this.createBook,
                    requireToken: true,
                },
                {
                    route: '/update-book/id/:id',
                    method: 'PUT',
                    callback: this.updateBook,
                    requireToken: true,
                },
                {
                    route: '/delete-book/id/:id',
                    method: 'DELETE',
                    callback: this.deleteBook,
                    requireToken: true,
                }
            ]];
    }
    //delete books
    deleteBook(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('deleteBook ----->', req.body);
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.remove(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    //update books
    updateBook(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('updateBook ----->', req.body);
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.update(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    //create books
    createBook(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('createBook ----->', req.body);
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    // get books
    getAllBooks(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*']
            };
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getBookById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            };
            let bookCtrl = model.controller;
            let resp = yield bookCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Book = Book;
