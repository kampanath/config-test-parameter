using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("9575gsa_imei", Schema = "pk20")]
    public partial class a9575gsa_imei
    {
        [Key]
        public Int64 id9575gsa_imei { get; set; }
        public string imei { get; set; }

        public string sn { get; set; }

        public string remodel { get; set; }
    }
}