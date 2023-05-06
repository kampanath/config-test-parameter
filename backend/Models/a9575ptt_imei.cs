using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("9575ptt_imei", Schema = "pk20")]
    public partial class a9575ptt_imei
    {
        [Key]
        public Int64 id9575ptt_imei { get; set; }
        public string imei { get; set; }

        public string sn { get; set; }

        public string remodel { get; set; }
    }
}