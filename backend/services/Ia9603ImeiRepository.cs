using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9603ImeiRepository
    {
        
     IEnumerable<a9603_imei> Geta9603_imeiAll();
     
         a9603_imei Geta9603_imeiByID(int id);

         a9603_imei Adda9603_imei(a9603_imei model);

         a9603_imei Updatea9603_imei(a9603_imei model);

         void Deletea9603_imei(a9603_imei model);

        IEnumerable<a9603_imei> GetImei_9603_imei(string sn);

        IEnumerable<a9603_imei> GetSN_9603_imei(string sn);

        IEnumerable<a9603_imei> GetImei_9603_imei_Array(string[] sn);

         IEnumerable<a9603_imei> GetSN_9603_imei_Array(string[] sn);
       
    }
}
