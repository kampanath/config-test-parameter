


export class a9602_imei {
    id9602_imei: number;
    imei: string;
    sn: string;
    remodel: string;
}

export interface a9602_imeiAll {
    result: a9602_imei[],
    message: string
}

export interface a9602_imeiBy{
    result: a9602_imei,
    message: string
}