export class genericimei {
    id: number;
    imei: string;
    sn: string;
    remodel: string;
}

export interface genericimeiAll {
    result: genericimei[],
    message: string
}

export interface genericimeiBy{
    result: genericimei,
    message: string
}