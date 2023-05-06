
using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9523mwExtImeiRepository
    {
        
     IEnumerable<a9523mw_ext_imei> Geta9523mw_ext_imeiAll();
     
         a9523mw_ext_imei Geta9523mw_ext_imeiByID(int id);

         a9523mw_ext_imei Adda9523mw_ext_imei(a9523mw_ext_imei model);

         a9523mw_ext_imei Updatea9523mw_ext_imei(a9523mw_ext_imei model);

         void Deletea9523mw_ext_imei(a9523mw_ext_imei model);

        IEnumerable<a9523mw_ext_imei> GetImei_9523mw_ext_imei(string sn);

        IEnumerable<a9523mw_ext_imei> GetSN_9523mw_ext_imei(string sn);

        IEnumerable<a9523mw_ext_imei> GetImei_9523mw_ext_imei_Array(string[] sn);

         IEnumerable<a9523mw_ext_imei> GetSN_9523mw_ext_imei_Array(string[] sn);
       
    }
}
