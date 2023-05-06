using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    
    [Table("9523mw_ext_cnt", Schema = "pk20")]
    public class a9523mw_ext_cnt
    {
        
        [Key]
        public int idcnt { get; set; }
        public string cnt_val { get; set; }
   
    }
}