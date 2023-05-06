
export class sfx_cnt {
    idcnt: number;
    cnt_val: string;
}

export interface sfx_cntAll {
    result: sfx_cnt[],
    message: string
}

export interface sfx_cntBy{
    result: sfx_cnt,
    message: string
}