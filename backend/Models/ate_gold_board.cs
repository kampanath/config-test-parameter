
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("ate_gold_board", Schema = "pk20")]
    public partial class ate_gold_board
    {
        [Key]
        public string serial_no { get; set; }

        public string model_no { get; set; }
    }
}