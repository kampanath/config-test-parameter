export class TbUutprofile {
    uutprofileId: number;
    profileId: number;
    uutnameId: number;
    revId: number;
    stationId :number;
    fixtureId: number;
    uutprofileDate: Date;
    isActive: boolean;
    remark: string;

}

export interface TbUutprofileAll{
    result: TbUutprofile[],
    message: string
}


export interface TbUutprofileBy{
    result: TbUutprofile,
    message: string
}