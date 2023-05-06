export class Ate_Equipment_cal222 {
    equipment_ID: number;
    equipment_Name: string;
    model: string;
    serial_No: string;
    manufacturer: string;
    atE_No: string;
    location: string;
    asset_No: string;
    last_Cal_Date: Date;
    next_Cal_Due_Date: Date;
    cal_Cycle: number;
    remark: string;
}

export interface Ate_Equipment_cal222All {
    result: Ate_Equipment_cal222[],
    message: string
}

export interface Ate_Equipment_cal222By{
    result: Ate_Equipment_cal222,
    message: string
}

