using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575ImeiRepository
    {
        
     IEnumerable<a9575_imei> Geta9575_imeiAll();
     
         a9575_imei Geta9575_imeiByID(int id);

         a9575_imei Adda9575_imei(a9575_imei model);

         a9575_imei Updatea9575_imei(a9575_imei model);

         void Deletea9575_imei(a9575_imei model);

        IEnumerable<a9575_imei> GetImei_9575_imei(string sn);

        IEnumerable<a9575_imei> GetSN_9575_imei(string sn);

        IEnumerable<a9575_imei> GetImei_9575_imei_Array(string[] sn);

         IEnumerable<a9575_imei> GetSN_9575_imei_Array(string[] sn);
       
    }
}
