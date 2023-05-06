using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575CntRepository
    {
        IEnumerable<a9575_cnt> Geta9575_cntAll();
         a9575_cnt Geta9575_cntByID(int id);

         a9575_cnt Adda9575_cnt(a9575_cnt model);

         a9575_cnt Updatea9575_cnt(a9575_cnt model);

         void Deletea9575_cnt(a9575_cnt model);
       
    }
}