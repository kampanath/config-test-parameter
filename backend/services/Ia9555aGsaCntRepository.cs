using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9555aGsaCntRepository
    {
        IEnumerable<a9555a_gsa_cnt> Geta9555a_gsa_cntAll();
         a9555a_gsa_cnt Geta9555a_gsa_cntByID(int id);

         a9555a_gsa_cnt Adda9555a_gsa_cnt(a9555a_gsa_cnt model);

         a9555a_gsa_cnt Updatea9555a_gsa_cnt(a9555a_gsa_cnt model);

         void Deletea9555a_gsa_cnt(a9555a_gsa_cnt model);
       
    }
}