using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9602nExtCntRepository
    {
        IEnumerable<a9602n_ext_cnt> Geta9602n_ext_cntAll();
         a9602n_ext_cnt Geta9602n_ext_cntByID(int id);

         a9602n_ext_cnt Adda9602n_ext_cnt(a9602n_ext_cnt model);

         a9602n_ext_cnt Updatea9602n_ext_cnt(a9602n_ext_cnt model);

         void Deletea9602n_ext_cnt(a9602n_ext_cnt model);
       
    }
}