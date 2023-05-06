using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9603rImeiRepository
    {
        
     IEnumerable<a9603r_imei> Geta9603r_imeiAll();
     
         a9603r_imei Geta9603r_imeiByID(int id);

         a9603r_imei Adda9603r_imei(a9603r_imei model);

         a9603r_imei Updatea9603r_imei(a9603r_imei model);

         void Deletea9603r_imei(a9603r_imei model);

        IEnumerable<a9603r_imei> GetImei_9603r_imei(string sn);

        IEnumerable<a9603r_imei> GetSN_9603r_imei(string sn);

        IEnumerable<a9603r_imei> GetImei_9603r_imei_Array(string[] sn);

         IEnumerable<a9603r_imei> GetSN_9603r_imei_Array(string[] sn);
       
    }
}
