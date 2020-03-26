import {Request, Response, NextFunction} from 'express';

export class Book {
    _model: any;
    constructor(norm: any) {
        this.model = [{
            id: { type: Number, key: 'primary' },
            name: { type: String, maxlength: 24 },
            author: { type: String, maxlength: 24 },
            isbn: { type: String, maxlength: 24 },
            description: { type: String, maxlength: 99 },
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
            }
        ]
        ];
    }

    getAllBooks(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*']
            }
            let bookCtrl = model.controller;
            let resp = await bookCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    getBookById(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
                get: ['*'],
                where: {
                    id: req.params.id
                }
            }
            let bookCtrl = model.controller;
            let resp = await bookCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        }
    }

    set model(model: any) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

}