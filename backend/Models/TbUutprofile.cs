using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class TbUutprofile
    {
        public int UutprofileId { get; set; }
        public int ProfileId { get; set; }
        public int UutnameId { get; set; }
        public int? RevId { get; set; }
        public int? StationId { get; set; }
        public int? FixtureId { get; set; }
        public DateTime? UutprofileDate { get; set; }
        public bool IsActive { get; set; }
        public string Remark { get; set; }
    }
}
