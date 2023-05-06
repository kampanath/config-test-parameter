


export class sfx_imei {
    idsfx_imei: number;
    imei: string;
    sn: string;

    remodel: string;
  
}

export interface sfx_imeiAll {
    result: sfx_imei[],
    message: string
}

export interface sfx_imeiBy{
    result: sfx_imei,
    message: string
}