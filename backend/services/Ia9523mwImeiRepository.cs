
using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9523mwImeiRepository
    {
        
     IEnumerable<a9523mw_imei> Geta9523mw_imeiAll();
     
         a9523mw_imei Geta9523mw_imeiByID(int id);

         a9523mw_imei Adda9523mw_imei(a9523mw_imei model);

         a9523mw_imei Updatea9523mw_imei(a9523mw_imei model);

         void Deletea9523mw_imei(a9523mw_imei model);

        IEnumerable<a9523mw_imei> GetImei_a9523mw_imei(string sn);

        IEnumerable<a9523mw_imei> GetSN_a9523mw_imei(string sn);

        IEnumerable<a9523mw_imei> GetImei_a9523mw_imei_Array(string[] sn);

         IEnumerable<a9523mw_imei> GetSN_a9523mw_imei_Array(string[] sn);
       
    }
}
