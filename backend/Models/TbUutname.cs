using System;
using System.Collections.Generic;

namespace backend.Models
{
    public partial class TbUutname
    {
        public int UutnameId { get; set; }
        public string Uutname { get; set; }
        public string Uutdesc { get; set; }
        public int ModelId { get; set; }
        public int FactoryId { get; set; }
        public string PfsWorkSt { get; set; }
        public string PfsOp { get; set; }
        public bool Calrequire { get; set; }
        public int? Calcycle { get; set; }
        public int? GoldTestRequire { get; set; }
        public bool? IsActive { get; set; }
    }
}
