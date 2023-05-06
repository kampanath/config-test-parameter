using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9555aExtCntRepository
    {
        IEnumerable<a9555a_ext_cnt> Geta9555a_ext_cntAll();
         a9555a_ext_cnt Geta9555a_ext_cntByID(int id);

         a9555a_ext_cnt Adda9555a_ext_cnt(a9555a_ext_cnt model);

         a9555a_ext_cnt Updatea9555a_ext_cnt(a9555a_ext_cnt model);

         void Deletea9555a_ext_cnt(a9555a_ext_cnt model);
       
    }
}