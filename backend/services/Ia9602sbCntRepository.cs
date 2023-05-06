using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9602sbCntRepository
    {
        IEnumerable<a9602sb_cnt> Geta9602sb_cntAll();
         a9602sb_cnt Geta9602sb_cntByID(int id);

         a9602sb_cnt Adda9602sb_cnt(a9602sb_cnt model);

         a9602sb_cnt Updatea9602sb_cnt(a9602sb_cnt model);

         void Deletea9602sb_cnt(a9602sb_cnt model);
       
    }
}