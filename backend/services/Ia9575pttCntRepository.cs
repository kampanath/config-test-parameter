using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575pttCntRepository
    {
        IEnumerable<a9575ptt_cnt> Geta9575ptt_cntAll();
         a9575ptt_cnt Geta9575ptt_cntByID(int id);

         a9575ptt_cnt Adda9575ptt_cnt(a9575ptt_cnt model);

         a9575ptt_cnt Updatea9575ptt_cnt(a9575ptt_cnt model);

         void Deletea9575ptt_cnt(a9575ptt_cnt model);
       
    }
}