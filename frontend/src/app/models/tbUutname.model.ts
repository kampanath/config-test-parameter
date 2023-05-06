export class TbUutname {
    uutnameId: number;
    uutname: string;
    uutdesc: string;
    modelId: number;
    factoryId :number;
    pfsWorkSt: string;
    pfsOp: string;
    calrequire: boolean;
    calcycle: number;
    goldTestRequire: number;
    isActive: boolean;
 
}

export interface TbUutnameAll{
    result: TbUutname[],
    message: string
}


export interface TbUutnameBy{
    result: TbUutname,
    message: string
}