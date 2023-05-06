using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    
    [Table("9522b_cnt", Schema = "pk20")]
    public class a9522b_cnt
    {
        
        [Key]
        public int idcnt { get; set; }
        public string cnt_val { get; set; }
   
    }
}