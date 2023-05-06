using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575gsaCntRepository
    {
        IEnumerable<a9575gsa_cnt> Geta9575gsa_cntAll();
         a9575gsa_cnt Geta9575gsa_cntByID(int id);

         a9575gsa_cnt Adda9575gsa_cnt(a9575gsa_cnt model);

         a9575gsa_cnt Updatea9575gsa_cnt(a9575gsa_cnt model);

         void Deletea9575gsa_cnt(a9575gsa_cnt model);
       
    }
}