export class ateCalibration {
    calID: number;
    socketNo: number;
    uutNameID: number;
    stationName: string;
    calDateTime: Date;
    userID: number;
    remark: string;
    softwareVer: string;
    isActive: boolean;
    fixtureName: string;
    stationID: number;
    fixtureID:number;
    userName:string;

}

export interface ateCalibrationAll {
    result: ateCalibration[],
    message: string
}

export interface ateCalibrationBy{
    result: ateCalibration,
    message: string
}
