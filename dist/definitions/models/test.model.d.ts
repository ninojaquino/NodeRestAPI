import { Request, Response, NextFunction } from 'express';
export declare class Test {
    private norm;
    _model: any;
    constructor(norm: any);
    model: any;
    testFunc: (model: any) => (req: Request<import("../../../../../../../../../Users/NJAQUINO/Documents/CSUFFiles/Spring2020/IS183/ApiLab/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => void;
}
