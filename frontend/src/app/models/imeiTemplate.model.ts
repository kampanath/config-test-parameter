export class imeiTemplate {
    id: number;
    imei: string;
    sn: string;
    remodel: string;
}

export interface imeiTemplateAll {
    result: imeiTemplate[],
    message: string
}

export interface imeiTemplateBy{
    result: imeiTemplate,
    message: string
}