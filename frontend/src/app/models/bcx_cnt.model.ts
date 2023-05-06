
export class bcx_cnt {
    idcnt: number;
    cnt_val: string;
}

export interface bcx_cntAll {
    result: bcx_cnt[],
    message: string
}

export interface bcx_cntBy{
    result: bcx_cnt,
    message: string
}