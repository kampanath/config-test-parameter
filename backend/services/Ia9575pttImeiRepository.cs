using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575pttImeiRepository
    {
        
     IEnumerable<a9575ptt_imei> Geta9575ptt_imeiAll();
     
         a9575ptt_imei Geta9575ptt_imeiByID(int id);

         a9575ptt_imei Adda9575ptt_imei(a9575ptt_imei model);

         a9575ptt_imei Updatea9575ptt_imei(a9575ptt_imei model);

         void Deletea9575ptt_imei(a9575ptt_imei model);

        IEnumerable<a9575ptt_imei> GetImei_9575ptt_imei(string sn);

        IEnumerable<a9575ptt_imei> GetSN_9575ptt_imei(string sn);

        IEnumerable<a9575ptt_imei> GetImei_9575ptt_imei_Array(string[] sn);

         IEnumerable<a9575ptt_imei> GetSN_9575ptt_imei_Array(string[] sn);
       
    }
}
