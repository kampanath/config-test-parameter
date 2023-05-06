using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9602nExtImeiRepository
    {
        
     IEnumerable<a9602n_ext_imei> Geta9602n_ext_imeiAll();
     
         a9602n_ext_imei Geta9602n_ext_imeiByID(int id);

         a9602n_ext_imei Adda9602n_ext_imei(a9602n_ext_imei model);

         a9602n_ext_imei Updatea9602n_ext_imei(a9602n_ext_imei model);

         void Deletea9602n_ext_imei(a9602n_ext_imei model);

        IEnumerable<a9602n_ext_imei> GetImei_9602n_ext_imei(string sn);

        IEnumerable<a9602n_ext_imei> GetSN_9602n_ext_imei(string sn);

        IEnumerable<a9602n_ext_imei> GetImei_9602n_ext_imei_Array(string[] sn);

         IEnumerable<a9602n_ext_imei> GetSN_9602n_ext_imei_Array(string[] sn);
       
    }
}
