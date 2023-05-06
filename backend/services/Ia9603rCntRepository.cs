using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9603rCntRepository
    {
        IEnumerable<a9603r_cnt> Geta9603r_cntAll();
         a9603r_cnt Geta9603r_cntByID(int id);

         a9603r_cnt Adda9603r_cnt(a9603r_cnt model);

         a9603r_cnt Updatea9603r_cnt(a9603r_cnt model);

         void Deletea9603r_cnt(a9603r_cnt model);
       
    }
}