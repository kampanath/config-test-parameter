using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575pttExtImeiRepository
    {
        
     IEnumerable<a9575ptt_ext_imei> Geta9575ptt_ext_imeiAll();
     
         a9575ptt_ext_imei Geta9575ptt_ext_imeiByID(int id);

         a9575ptt_ext_imei Adda9575ptt_ext_imei(a9575ptt_ext_imei model);

         a9575ptt_ext_imei Updatea9575ptt_ext_imei(a9575ptt_ext_imei model);

         void Deletea9575ptt_ext_imei(a9575ptt_ext_imei model);

        IEnumerable<a9575ptt_ext_imei> GetImei_9575ptt_ext_imei(string sn);

        IEnumerable<a9575ptt_ext_imei> GetSN_9575ptt_ext_imei(string sn);

        IEnumerable<a9575ptt_ext_imei> GetImei_9575ptt_ext_imei_Array(string[] sn);

         IEnumerable<a9575ptt_ext_imei> GetSN_9575ptt_ext_imei_Array(string[] sn);
       
    }
}
