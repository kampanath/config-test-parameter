using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public partial class ateCalibrationFixtureName
    {
        [Key]
        public string fixtureName { get; set; }

    }
}