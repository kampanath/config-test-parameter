using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public partial class getTableNames
    {
        [Key]
        [Column("Tables_in_pk20 (%imei)")]
        public string Tables_in_pk20 { get; set; }
 

    }
}