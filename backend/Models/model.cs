using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public partial class model
    {
        [Key]
        public int Seq { get; set; }
        public string Model_No { get; set; }
        public string Model_Name { get; set; }
        public string Hardware_Type { get; set; }
        public string KB_Kit { get; set; }
        public string Cal_Type { get; set; }
        public string Sn_Type { get; set; }
        public string EERROM_Size { get; set; }
        public string Flash_Size { get; set; }
        public string Boot_Code_Ver { get; set; }
        public string CP_Ver { get; set; }
        public string Modem_Ver { get; set; }
        public string Vocoder { get; set; }
        public string EEPROM_Ver { get; set; }
        public string Model_Type { get; set; }
        public string Model_Select { get; set; }
        public string Gateway { get; set; }
        public string Sequence_File { get; set; }
        public string Configuration_Revision { get; set; }
        public byte[] isGold { get; set; }
        public string Test_Spec_Fix_Version { get; set; }
        public string main_board_kit { get; set; }
        public string HARDWARE_VERSION { get; set; }
        public string MODEL_INDENTIFICATION { get; set; }

    }
}