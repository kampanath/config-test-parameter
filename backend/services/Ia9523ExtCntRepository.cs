using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9523ExtCntRepository
    {
        IEnumerable<a9523_ext_cnt> Geta9523_ext_cntAll();
         a9523_ext_cnt Geta9523_ext_cntByID(int id);

         a9523_ext_cnt Adda9523_ext_cnt(a9523_ext_cnt model);

         a9523_ext_cnt Updatea9523_ext_cnt(a9523_ext_cnt model);

         void Deletea9523_ext_cnt(a9523_ext_cnt model);
       
    }
}