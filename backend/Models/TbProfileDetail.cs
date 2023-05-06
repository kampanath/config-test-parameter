using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class TbProfileDetail
    {
        public int ProfiledetailId { get; set; }
        public int ProfileId { get; set; }
        public int DetailSqNo { get; set; }
        public string DetailTestName { get; set; }
        public string DetailDesc { get; set; }
        public double DetailLsl { get; set; }
        public double DetailUsl { get; set; }
        public string DetailUom { get; set; }
        public string DetailReqSection { get; set; }
        public string DetailCategory { get; set; }
        public string DetailOption { get; set; }
        public string DetailCmaoption { get; set; }
        public string DetailDebugoption { get; set; }
        public bool IsActive { get; set; }
    }
}
