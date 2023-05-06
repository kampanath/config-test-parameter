using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575eCntRepository
    {
        IEnumerable<a9575e_cnt> Geta9575e_cntAll();
         a9575e_cnt Geta9575e_cntByID(int id);

         a9575e_cnt Adda9575e_cnt(a9575e_cnt model);

         a9575e_cnt Updatea9575e_cnt(a9575e_cnt model);

         void Deletea9575e_cnt(a9575e_cnt model);
       
    }
}