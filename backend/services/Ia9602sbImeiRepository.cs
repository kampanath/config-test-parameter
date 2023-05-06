using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9602sbImeiRepository
    {
        
     IEnumerable<a9602sb_imei> Geta9602sb_imeiAll();
     
         a9602sb_imei Geta9602sb_imeiByID(int id);

         a9602sb_imei Adda9602sb_imei(a9602sb_imei model);

         a9602sb_imei Updatea9602sb_imei(a9602sb_imei model);

         void Deletea9602sb_imei(a9602sb_imei model);

        IEnumerable<a9602sb_imei> GetImei_9602sb_imei(string sn);

        IEnumerable<a9602sb_imei> GetSN_9602sb_imei(string sn);

        IEnumerable<a9602sb_imei> GetImei_9602sb_imei_Array(string[] sn);

         IEnumerable<a9602sb_imei> GetSN_9602sb_imei_Array(string[] sn);
       
    }
}
