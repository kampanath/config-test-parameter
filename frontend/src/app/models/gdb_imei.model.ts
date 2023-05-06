


export class gdb_imei {
    idgdb_imei: number;
    imei: string;
    sn: string;
    psk: string;
    remodel: string;
    terminal: string;
}

export interface gdb_imeiAll {
    result: gdb_imei[],
    message: string
}

export interface gdb_imeiBy{
    result: gdb_imei,
    message: string
}