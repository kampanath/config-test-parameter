export class Ird {

    uutstatusTypeId: number;
    uutstatusTypeName: string;
    uutstatusTypeDesc: string;

    fruits: string[] = [
        'uutstatusTypeId',
        'uutstatusTypeName',
        'uutstatusTypeDesc'
      ];
   

}

export interface IrdAll {
    result: Ird[],
    message: string
}

export interface IrdBY{
    result: Ird,
    message: string
}



