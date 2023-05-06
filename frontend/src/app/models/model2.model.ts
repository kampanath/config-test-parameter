export class model2 {
  
    seq : number;
    model_No : string
    model_Name : string
    hardware_Type : string
    kB_Kit : string
    cal_Type : string

    sn_Type : string
    eerroM_Size : string
    flash_Size : string
    boot_Code_Ver : string
    cP_Ver : string

    modem_Ver : string
    vocoder : string
    eeproM_Ver : string
    model_Type : string
    model_Select : string

    gateway : string
    sequence_File : string
    configuration_Revision : string
    test_Spec_Fix_Version : string

    main_board_kit : string
    hardwarE_VERSION : string
    modeL_INDENTIFICATION : string
    isGold : Blob
   

}

export interface modelAll{
    result: model2[],
    message: string
}


export interface modelBY{
    result: model2,
    message: string
}
