using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IsfxCntRepository
    {
        IEnumerable<sfx_cnt> Getsfx_cntAll();
         sfx_cnt Getsfx_cntByID(int id);

         sfx_cnt Addsfx_cnt(sfx_cnt model);

         sfx_cnt Updatesfx_cnt(sfx_cnt model);

         void Deletesfx_cnt(sfx_cnt model);
       
    }
}