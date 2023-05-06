export class TbProfileDetail {
    profiledetailId: number;
    profileId: number;
    detailSqNo: number;
    detailTestName: string;
    detailDesc :string;
    detailLsl: number;
    detailUsl: number;
    detailUom: string;
    detailReqSection: string;

    detailCategory: string;
    detailOption: string;
    detailCmaoption: string;
    detailDebugoption: string;
    isActive: boolean;
}

export interface TbProfileDetailAll{
    result: TbProfileDetail[],
    message: string
}


export interface TbProfileDetailBY{
    result: TbProfileDetail,
    message: string
}
