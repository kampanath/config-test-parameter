using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575eExtCntRepository
    {
        IEnumerable<a9575e_ext_cnt> Geta9575e_ext_cntAll();
         a9575e_ext_cnt Geta9575e_ext_cntByID(int id);

         a9575e_ext_cnt Adda9575e_ext_cnt(a9575e_ext_cnt model);

         a9575e_ext_cnt Updatea9575e_ext_cnt(a9575e_ext_cnt model);

         void Deletea9575e_ext_cnt(a9575e_ext_cnt model);
       
    }
}