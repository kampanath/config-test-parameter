using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9523mwExtCntRepository
    {
        IEnumerable<a9523mw_ext_cnt> Geta9523mw_ext_cntAll();
         a9523mw_ext_cnt Geta9523mw_ext_cntByID(int id);

         a9523mw_ext_cnt Adda9523mw_ext_cnt(a9523mw_ext_cnt model);

         a9523mw_ext_cnt Updatea9523mw_ext_cnt(a9523mw_ext_cnt model);

         void Deletea9523mw_ext_cnt(a9523mw_ext_cnt model);
       
    }
}