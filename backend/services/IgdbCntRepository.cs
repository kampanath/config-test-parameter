using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IgdbCntRepository
    {
        IEnumerable<gdb_cnt> Getgdb_cntAll();
         gdb_cnt Getgdb_cntByID(int id);

         gdb_cnt Addgdb_cnt(gdb_cnt model);

         gdb_cnt Updategdb_cnt(gdb_cnt model);

         void Deletegdb_cnt(gdb_cnt model);
       
    }
}