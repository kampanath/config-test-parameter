using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class TbProfile
    {
        public int ProfileId { get; set; }
        public string ProfileName { get; set; }
        public string ProfileDesc { get; set; }
        public string ProfileReqDocNo { get; set; }
        public string ProfileVersion { get; set; }
        public DateTime? ProfileDateCreate { get; set; }
        public int? Calid { get; set; }
        public bool IsActive { get; set; }
        public string Remark { get; set; }
    }
}
