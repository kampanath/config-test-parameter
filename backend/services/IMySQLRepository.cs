using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IMySQLRepository
    {
        IEnumerable<a9522b_cnt> Geta9522b_cntAll();
         a9522b_cnt Geta9522b_cntByID(int id);

         a9522b_cnt Adda9522b_cnt(a9522b_cnt model);

         a9522b_cnt Updatea9522b_cnt(a9522b_cnt model);

         void Deletea9522b_cnt(a9522b_cnt model);
       
    }
}