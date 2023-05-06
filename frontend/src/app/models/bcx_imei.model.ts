


export class bcx_imei {
    idbcx_imei: number;
    imei: string;
    sn: string;
    mac_addr: string;
    remodel: string;
}

export interface bcx_imeiAll {
    result: bcx_imei[],
    message: string
}

export interface bcx_imeiBy{
    result: bcx_imei,
    message: string
}