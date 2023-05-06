using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class TbAteconfigFile
    {
        public int ConfigId { get; set; }
        public int? StationId { get; set; }
        public string ConfigType { get; set; }
        public string HardwareType { get; set; }
        public int UserId { get; set; }
        public DateTime DateAdd { get; set; }
        public DateTime? DateModify { get; set; }
        public DateTime? DateRelease { get; set; }
        public string ConfigName { get; set; }
        public string ConfigRevNo { get; set; }
        public string ConfigData { get; set; }
        public string CheckSum { get; set; }
        public string TestLimitNote { get; set; }
        public bool? IsActive { get; set; }
    }
}
