using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9523mwCntRepository
    {
        IEnumerable<a9523mw_cnt> Geta9523mw_cntAll();
         a9523mw_cnt Geta9523mw_cntByID(int id);

         a9523mw_cnt Adda9523mw_cnt(a9523mw_cnt model);

         a9523mw_cnt Updatea9523mw_cnt(a9523mw_cnt model);

         void Deletea9523mw_cnt(a9523mw_cnt model);
       
    }
}