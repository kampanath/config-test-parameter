using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IbcxCntRepository
    {
        IEnumerable<bcx_cnt> Getbcx_cntAll();
         bcx_cnt Getbcx_cntByID(int id);

         bcx_cnt Addbcx_cnt(bcx_cnt model);

         bcx_cnt Updatebcx_cnt(bcx_cnt model);

         void Deletebcx_cnt(bcx_cnt model);
       
    }
}