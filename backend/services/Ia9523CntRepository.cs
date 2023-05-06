using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9523CntRepository
    {
        IEnumerable<a9523_cnt> Geta9523_cntAll();
         a9523_cnt Geta9523_cntByID(int id);

         a9523_cnt Adda9523_cnt(a9523_cnt model);

         a9523_cnt Updatea9523_cnt(a9523_cnt model);

         void Deletea9523_cnt(a9523_cnt model);
       
    }
}