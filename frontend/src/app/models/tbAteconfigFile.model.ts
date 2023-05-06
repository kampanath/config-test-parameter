export class tbAteconfigFile {


    configId : number;
    stationId : number;
    configType : string;
    hardwareType : string;
    userId : number;
    dateAdd : Date;
    dateModify : Date;
    dateRelease : Date;
    configName : string;
    configRevNo : string;
    configData : string;
    checkSum : string;
    testLimitNote : string;
    isActive : boolean;
}

export interface tbAteconfigFileAll{
    result: tbAteconfigFile[],
    message: string
}


export interface tbAteconfigFileBY{
    result: tbAteconfigFile,
    message: string
}
