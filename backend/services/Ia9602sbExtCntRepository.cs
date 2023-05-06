using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9602sbExtCntRepository
    {
        IEnumerable<a9602sb_ext_cnt> Geta9602sb_ext_cntAll();
         a9602sb_ext_cnt Geta9602sb_ext_cntByID(int id);

         a9602sb_ext_cnt Adda9602sb_ext_cnt(a9602sb_ext_cnt model);

         a9602sb_ext_cnt Updatea9602sb_ext_cnt(a9602sb_ext_cnt model);

         void Deletea9602sb_ext_cnt(a9602sb_ext_cnt model);
       
    }
}