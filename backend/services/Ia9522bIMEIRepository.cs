
using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9522bIMEIRepository
    {
        
     IEnumerable<a9522b_imei> Geta9522b_imeiAll();
     
         a9522b_imei Geta9522b_imeiByID(int id);

         a9522b_imei Adda9522b_imei(a9522b_imei model);

         a9522b_imei Updatea9522b_imei(a9522b_imei model);

         void Deletea9522b_imei(a9522b_imei model);

        IEnumerable<a9522b_imei> GetImei_9522b_imei(string sn);

        IEnumerable<a9522b_imei> GetSN_9522b_imei(string sn);

        IEnumerable<a9522b_imei> GetImei_9522b_imei_Array(string[] sn);

         IEnumerable<a9522b_imei> GetSN_9522b_imei_Array(string[] sn);
       
    }
}
