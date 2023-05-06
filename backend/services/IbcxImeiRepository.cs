using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IbcxImeiRepository
    {
        
     IEnumerable<bcx_imei> Getbcx_imeiAll();
     
         bcx_imei Getbcx_imeiByID(int id);

         bcx_imei Addbcx_imei(bcx_imei model);

         bcx_imei Updatebcx_imei(bcx_imei model);

         void Deletebcx_imei(bcx_imei model);

        IEnumerable<bcx_imei> GetImei_bcx_imei(string sn);

        IEnumerable<bcx_imei> GetSN_bcx_imei(string sn);

        IEnumerable<bcx_imei> GetImei_bcx_imei_Array(string[] sn);

         IEnumerable<bcx_imei> GetSN_bcx_imei_Array(string[] sn);
       
    }
}
