using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public partial class genericCheckDuplicate
    {
        [Key]
        public string imei { get; set; }

    }
}