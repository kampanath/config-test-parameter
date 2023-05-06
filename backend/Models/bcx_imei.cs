using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("bcx_imei", Schema = "pk20")]
    public partial class bcx_imei
    {
        [Key]
        public Int64 idbcx_imei { get; set; }
        public string imei { get; set; }

        public string sn { get; set; }

         public string mac_addr { get; set; }

        public string remodel { get; set; }
    }
}