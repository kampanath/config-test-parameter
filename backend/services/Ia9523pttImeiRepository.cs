
using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9523pttImeiRepository
    {
        
     IEnumerable<a9523ptt_imei> Geta9523ptt_imeiAll();
     
         a9523ptt_imei Geta9523ptt_imeiByID(int id);

         a9523ptt_imei Adda9523ptt_imei(a9523ptt_imei model);

         a9523ptt_imei Updatea9523ptt_imei(a9523ptt_imei model);

         void Deletea9523ptt_imei(a9523ptt_imei model);

        IEnumerable<a9523ptt_imei> GetImei_9523ptt_imei(string sn);

        IEnumerable<a9523ptt_imei> GetSN_9523ptt_imei(string sn);

        IEnumerable<a9523ptt_imei> GetImei_9523ptt_imei_Array(string[] sn);

         IEnumerable<a9523ptt_imei> GetSN_9523ptt_imei_Array(string[] sn);
       
    }
}
