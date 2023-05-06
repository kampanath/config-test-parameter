using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IsfxImeiRepository
    {
        
     IEnumerable<sfx_imei> Getsfx_imeiAll();
     
         sfx_imei Getsfx_imeiByID(int id);

         sfx_imei Addsfx_imei(sfx_imei model);

         sfx_imei Updatesfx_imei(sfx_imei model);

         void Deletesfx_imei(sfx_imei model);

        IEnumerable<sfx_imei> GetImei_sfx_imei(string sn);

        IEnumerable<sfx_imei> GetSN_sfx_imei(string sn);

        IEnumerable<sfx_imei> GetImei_sfx_imei_Array(string[] sn);

         IEnumerable<sfx_imei> GetSN_sfx_imei_Array(string[] sn);
       
    }
}
