using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9555aCntRepository
    {
        IEnumerable<a9555a_cnt> Geta9555a_cntAll();
         a9555a_cnt Geta9555a_cntByID(int id);

         a9555a_cnt Adda9555a_cnt(a9555a_cnt model);

         a9555a_cnt Updatea9555a_cnt(a9555a_cnt model);

         void Deletea9555a_cnt(a9555a_cnt model);
       
    }
}