using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9555aImeiRepository
    {
        
     IEnumerable<a9555a_imei> Geta9555a_imeiAll();
     
         a9555a_imei Geta9555a_imeiByID(int id);

         a9555a_imei Adda9555a_imei(a9555a_imei model);

         a9555a_imei Updatea9555a_imei(a9555a_imei model);

         void Deletea9555a_imei(a9555a_imei model);

        IEnumerable<a9555a_imei> GetImei_9555a_imei(string sn);

        IEnumerable<a9555a_imei> GetSN_9555a_imei(string sn);

        IEnumerable<a9555a_imei> GetImei_9555a_imei_Array(string[] sn);

         IEnumerable<a9555a_imei> GetSN_9555a_imei_Array(string[] sn);
       
    }
}
