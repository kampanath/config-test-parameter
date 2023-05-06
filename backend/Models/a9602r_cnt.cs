using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    
    [Table("9602r_cnt", Schema = "pk20")]
    public class a9602r_cnt
    {
        
        [Key]
        public int idcnt { get; set; }
        public string cnt_val { get; set; }
   
    }
}