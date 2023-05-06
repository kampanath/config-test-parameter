export class ate_equipment_cal {
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

export interface ate_equipment_calAll {
    result: ate_equipment_cal[],
    message: string
}

export interface ate_equipment_calBy{
    result: ate_equipment_cal,
    message: string
}

