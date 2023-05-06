using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9602rCntRepository
    {
        IEnumerable<a9602r_cnt> Geta9602r_cntAll();
         a9602r_cnt Geta9602r_cntByID(int id);

         a9602r_cnt Adda9602r_cnt(a9602r_cnt model);

         a9602r_cnt Updatea9602r_cnt(a9602r_cnt model);

         void Deletea9602r_cnt(a9602r_cnt model);
       
    }
}