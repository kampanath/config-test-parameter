export class TbEquipment {


    equipId: number;
    equipName: string;
    equipManufact: string;
    equipModel: string;
    equipModelNo: string;
    equipSerialNo: string;
    equipDeviceId: string;
    equipIrdassetNo: string;
    equipIsCal: boolean;
    equipCaldue: Date;
    stationId: number;
    equipOwner: string;
    isActive: boolean;
    remark: string;
    tempDate : string;

}

export interface TbEquipmentAll{
    result: TbEquipment[],
    message: string
}


export interface TbEquipmentBY{
    result: TbEquipment,
    message: string
}
