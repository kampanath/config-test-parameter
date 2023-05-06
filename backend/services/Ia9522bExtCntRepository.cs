using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9522bExtCntRepository
    {
        IEnumerable<a9522b_ext_cnt> Geta9522b_ext_cntAll();
         a9522b_ext_cnt Geta9522b_ext_cntByID(int id);

         a9522b_ext_cnt Adda9522b_ext_cnt(a9522b_ext_cnt model);

         a9522b_ext_cnt Updatea9522b_ext_cnt(a9522b_ext_cnt model);

         void Deletea9522b_ext_cnt(a9522b_ext_cnt model);
       
    }
}