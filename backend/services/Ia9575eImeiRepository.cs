
using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575eImeiRepository
    {
        
     IEnumerable<a9575e_imei> Geta9575e_imeiAll();
     
         a9575e_imei Geta9575e_imeiByID(int id);

         a9575e_imei Adda9575e_imei(a9575e_imei model);

         a9575e_imei Updatea9575e_imei(a9575e_imei model);

         void Deletea9575e_imei(a9575e_imei model);

        IEnumerable<a9575e_imei> GetImei_9575e_imei(string sn);

        IEnumerable<a9575e_imei> GetSN_9575e_imei(string sn);

        IEnumerable<a9575e_imei> GetImei_9575e_imei_Array(string[] sn);

         IEnumerable<a9575e_imei> GetSN_9575e_imei_Array(string[] sn);

          List<long> Geta9575e_imei_Row();
       
    }
}
