using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace backend.Models
{

    public class cnt {
    private static cnt instance;
    public string cnt_tableName = "9522b_cnt";

    private cnt() {
        
    }

    public static cnt getInstance() {
        if (instance == null) {
            instance = new cnt();
        }
        return instance;
    }
}
}