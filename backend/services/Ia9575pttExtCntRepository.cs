using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575pttExtCntRepository
    {
        IEnumerable<a9575ptt_ext_cnt> Geta9575ptt_ext_cntAll();
         a9575ptt_ext_cnt Geta9575ptt_ext_cntByID(int id);

         a9575ptt_ext_cnt Adda9575ptt_ext_cnt(a9575ptt_ext_cnt model);

         a9575ptt_ext_cnt Updatea9575ptt_ext_cnt(a9575ptt_ext_cnt model);

         void Deletea9575ptt_ext_cnt(a9575ptt_ext_cnt model);
       
    }
}