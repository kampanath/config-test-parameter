using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575ExtCntRepository
    {
        IEnumerable<a9575_ext_cnt> Geta9575_ext_cntAll();
         a9575_ext_cnt Geta9575_ext_cntByID(int id);

         a9575_ext_cnt Adda9575_ext_cnt(a9575_ext_cnt model);

         a9575_ext_cnt Updatea9575_ext_cnt(a9575_ext_cnt model);

         void Deletea9575_ext_cnt(a9575_ext_cnt model);
       
    }
}