using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
       public partial class genericIMEI
    {
        [Key]
        public Int64 id { get; set; }
        public string imei { get; set; }
        public string sn { get; set; }
        public string remodel { get; set; }
    

        
    }
}