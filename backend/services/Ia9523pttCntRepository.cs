using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9523pttCntRepository
    {
        IEnumerable<a9523ptt_cnt> Geta9523ptt_cntAll();
         a9523ptt_cnt Geta9523ptt_cntByID(int id);

         a9523ptt_cnt Adda9523ptt_cnt(a9523ptt_cnt model);

         a9523ptt_cnt Updatea9523ptt_cnt(a9523ptt_cnt model);

         void Deletea9523ptt_cnt(a9523ptt_cnt model);
       
    }
}