using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9602CntRepository
    {
        IEnumerable<a9602_cnt> Geta9602_cntAll();
         a9602_cnt Geta9602_cntByID(int id);

         a9602_cnt Adda9602_cnt(a9602_cnt model);

         a9602_cnt Updatea9602_cnt(a9602_cnt model);

         void Deletea9602_cnt(a9602_cnt model);
       
    }
}