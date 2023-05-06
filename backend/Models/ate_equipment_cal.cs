using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("ate_equipment_cal", Schema = "pk20")]
    public partial class ate_equipment_cal
    {
        [Key]
        public int Equipment_ID { get; set; }
        public string Equipment_Name { get; set; }
        public string Model { get; set; }
        public string Serial_No { get; set; }
        public string Manufacturer { get; set; }
        public string ATE_No { get; set; }
        public string Location { get; set; }
        public string Asset_No { get; set; }
        public DateTime Last_Cal_Date { get; set; }
        public DateTime Next_Cal_Due_Date { get; set; }
        public int Cal_Cycle { get; set; }
        public string Remark { get; set; }
    }
}