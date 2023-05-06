using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    
    [Table("9602sb_ext_cnt", Schema = "pk20")]
    public class a9602sb_ext_cnt
    {
        
        [Key]
        public int id9602sb_ext_cnt { get; set; }
        public string cnt_val { get; set; }
   
    }
}