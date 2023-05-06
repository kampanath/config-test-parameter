using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9522bExtImeiRepository
    {
        
     IEnumerable<a9522b_ext_imei> Geta9522b_ext_imeiAll();
     
         a9522b_ext_imei Geta9522b_ext_imeiByID(int id);

         a9522b_ext_imei Adda9522b_ext_imei(a9522b_ext_imei model);

         a9522b_ext_imei Updatea9522b_ext_imei(a9522b_ext_imei model);

         void Deletea9522b_ext_imei(a9522b_ext_imei model);

        IEnumerable<a9522b_ext_imei> GetImei_9522b_ext_imei(string sn);

        IEnumerable<a9522b_ext_imei> GetSN_9522b_ext_imei(string sn);

        IEnumerable<a9522b_ext_imei> GetImei_9522b_ext_imei_Array(string[] sn);

         IEnumerable<a9522b_ext_imei> GetSN_9522b_ext_imei_Array(string[] sn);
       
    }
}
