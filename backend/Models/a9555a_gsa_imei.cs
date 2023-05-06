using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("9555a_gsa_imei", Schema = "pk20")]
    public partial class a9555a_gsa_imei
    {
        [Key]
        public Int64 id9555a_gsa_imei { get; set; }
        public string imei { get; set; }

        public string sn { get; set; }

        public string remodel { get; set; }
    }
}