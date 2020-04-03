import { Request, Response, NextFunction } from 'express';
export declare class Book {
    _model: any;
    constructor(norm: any);
    deleteBook(model: any): (req: Request<import("../../../../../../../../../Users/NJAQUINO/Documents/CSUFFiles/Spring2020/IS183/ApiLab/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    updateBook(model: any): (req: Request<import("../../../../../../../../../Users/NJAQUINO/Documents/CSUFFiles/Spring2020/IS183/ApiLab/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    createBook(model: any): (req: Request<import("../../../../../../../../../Users/NJAQUINO/Documents/CSUFFiles/Spring2020/IS183/ApiLab/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getAllBooks(model: any): (req: Request<import("../../../../../../../../../Users/NJAQUINO/Documents/CSUFFiles/Spring2020/IS183/ApiLab/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getBookById(model: any): (req: Request<import("../../../../../../../../../Users/NJAQUINO/Documents/CSUFFiles/Spring2020/IS183/ApiLab/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
