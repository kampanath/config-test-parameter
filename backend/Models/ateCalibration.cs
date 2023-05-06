using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public partial class ateCalibration
    {
        [Key]
        public int CalID { get; set; }

        public byte? socketNo { get; set; }

        public int? UUTNameID { get; set; }

        public string stationName { get; set; }

        public DateTime CalDateTime { get; set; }

        public int userID { get; set; }

        public string Remark { get; set; }

        public string softwareVer { get; set; }

        public bool isActive { get; set; }

        public string fixtureName { get; set; }

        public int stationID { get; set; }

        public int? fixtureID { get; set; }

        public string userName { get; set; }


    }
}