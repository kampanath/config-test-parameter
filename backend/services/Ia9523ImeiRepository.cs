
using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9523ImeiRepository
    {
        
     IEnumerable<a9523_imei> Geta9523_imeiAll();
     
         a9523_imei Geta9523_imeiByID(int id);

         a9523_imei Adda9523_imei(a9523_imei model);

         a9523_imei Updatea9523_imei(a9523_imei model);

         void Deletea9523_imei(a9523_imei model);

        IEnumerable<a9523_imei> GetImei_9523_imei(string sn);

        IEnumerable<a9523_imei> GetSN_9523_imei(string sn);

        IEnumerable<a9523_imei> GetImei_9523_imei_Array(string[] sn);

         IEnumerable<a9523_imei> GetSN_9523_imei_Array(string[] sn);
       
    }
}
