using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9602ImeiRepository
    {
        
     IEnumerable<a9602_imei> Geta9602_imeiAll();
     
         a9602_imei Geta9602_imeiByID(int id);

         a9602_imei Adda9602_imei(a9602_imei model);

         a9602_imei Updatea9602_imei(a9602_imei model);

         void Deletea9602_imei(a9602_imei model);

        IEnumerable<a9602_imei> GetImei_9602_imei(string sn);

        IEnumerable<a9602_imei> GetSN_9602_imei(string sn);

        IEnumerable<a9602_imei> GetImei_9602_imei_Array(string[] sn);

         IEnumerable<a9602_imei> GetSN_9602_imei_Array(string[] sn);
       
    }
}
