using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("gdb_imei", Schema = "pk20")]
    public partial class gdb_imei
    {
        [Key]
        public Int64 idgdb_imei { get; set; }
        public string imei { get; set; }
        public string sn { get; set; }
        public string remodel { get; set; }
        public string psk { get; set; }
        public string terminal { get; set; }

        
    }
}