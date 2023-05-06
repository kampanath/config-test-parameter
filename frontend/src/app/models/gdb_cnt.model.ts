
export class gdb_cnt {
    idcnt: number;
    cnt_val: string;
}

export interface gdb_cntAll {
    result: gdb_cnt[],
    message: string
}

export interface gdb_cntBy{
    result: gdb_cnt,
    message: string
}