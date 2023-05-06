export class TbProfile {
    profileId: number;
    profileName: string;
    profileDesc: string;
    profileReqDocNo: string;
    profileVersion :string;
    profileDateCreate: Date;
    calid: number;
    isActive: boolean;
    remark: string;
}

export interface TbProfileAll{
    result: TbProfile[],
    message: string
}


export interface TbProfileBY{
    result: TbProfile,
    message: string
}
