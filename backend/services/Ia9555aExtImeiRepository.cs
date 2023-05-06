using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9555aExtImeiRepository
    {
        
     IEnumerable<a9555a_ext_imei> Geta9555a_ext_imeiAll();
     
         a9555a_ext_imei Geta9555a_ext_imeiByID(int id);

         a9555a_ext_imei Adda9555a_ext_imei(a9555a_ext_imei model);

         a9555a_ext_imei Updatea9555a_ext_imei(a9555a_ext_imei model);

         void Deletea9555a_ext_imei(a9555a_ext_imei model);

        IEnumerable<a9555a_ext_imei> GetImei_9555a_ext_imei(string sn);

        IEnumerable<a9555a_ext_imei> GetSN_9555a_ext_imei(string sn);

        IEnumerable<a9555a_ext_imei> GetImei_9555a_ext_imei_Array(string[] sn);

         IEnumerable<a9555a_ext_imei> GetSN_9555a_ext_imei_Array(string[] sn);
       
    }
}
