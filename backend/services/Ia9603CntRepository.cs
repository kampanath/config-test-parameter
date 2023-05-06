using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9603CntRepository
    {
        IEnumerable<a9603_cnt> Geta9603_cntAll();
         a9603_cnt Geta9603_cntByID(int id);

         a9603_cnt Adda9603_cnt(a9603_cnt model);

         a9603_cnt Updatea9603_cnt(a9603_cnt model);

         void Deletea9603_cnt(a9603_cnt model);
       
    }
}