using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575ExtImeiRepository
    {
        
     IEnumerable<a9575_ext_imei> Geta9575_ext_imeiAll();
     
         a9575_ext_imei Geta9575_ext_imeiByID(int id);

         a9575_ext_imei Adda9575_ext_imei(a9575_ext_imei model);

         a9575_ext_imei Updatea9575_ext_imei(a9575_ext_imei model);

         void Deletea9575_ext_imei(a9575_ext_imei model);

        IEnumerable<a9575_ext_imei> GetImei_9575_ext_imei(string sn);

        IEnumerable<a9575_ext_imei> GetSN_9575_ext_imei(string sn);

        IEnumerable<a9575_ext_imei> GetImei_9575_ext_imei_Array(string[] sn);

         IEnumerable<a9575_ext_imei> GetSN_9575_ext_imei_Array(string[] sn);
       
    }
}
