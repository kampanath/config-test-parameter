using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class TbEquipment
    {
        public int EquipId { get; set; }
        public string EquipName { get; set; }
        public string EquipManufact { get; set; }
        public string EquipModel { get; set; }
        public string EquipModelNo { get; set; }
        public string EquipSerialNo { get; set; }
        public string EquipDeviceId { get; set; }
        public string EquipIrdassetNo { get; set; }
        public bool? EquipIsCal { get; set; }
        public DateTime? EquipCaldue { get; set; }
        public int? StationId { get; set; }
        public string EquipOwner { get; set; }
        public bool? IsActive { get; set; }
        public string Remark { get; set; }
        
    }
}
