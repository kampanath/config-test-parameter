using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9602rImeiRepository
    {
        
     IEnumerable<a9602r_imei> Geta9602r_imeiAll();
     
         a9602r_imei Geta9602r_imeiByID(int id);

         a9602r_imei Adda9602r_imei(a9602r_imei model);

         a9602r_imei Updatea9602r_imei(a9602r_imei model);

         void Deletea9602r_imei(a9602r_imei model);

        IEnumerable<a9602r_imei> GetImei_9602r_imei(string sn);

        IEnumerable<a9602r_imei> GetSN_9602r_imei(string sn);

        IEnumerable<a9602r_imei> GetImei_9602r_imei_Array(string[] sn);

         IEnumerable<a9602r_imei> GetSN_9602r_imei_Array(string[] sn);
       
    }
}
