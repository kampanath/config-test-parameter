using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575eExtImeiRepository
    {
        
     IEnumerable<a9575e_ext_imei> Geta9575e_ext_imeiAll();
     
         a9575e_ext_imei Geta9575e_ext_imeiByID(int id);

         a9575e_ext_imei Adda9575e_ext_imei(a9575e_ext_imei model);

         a9575e_ext_imei Updatea9575e_ext_imei(a9575e_ext_imei model);

         void Deletea9575e_ext_imei(a9575e_ext_imei model);

        IEnumerable<a9575e_ext_imei> GetImei_9575e_ext_imei(string sn);

        IEnumerable<a9575e_ext_imei> GetSN_9575e_ext_imei(string sn);

        IEnumerable<a9575e_ext_imei> GetImei_9575e_ext_imei_Array(string[] sn);

         IEnumerable<a9575e_ext_imei> GetSN_9575e_ext_imei_Array(string[] sn);
       
    }
}
