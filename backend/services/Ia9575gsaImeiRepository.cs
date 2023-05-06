using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9575gsaImeiRepository
    {
        
     IEnumerable<a9575gsa_imei> Geta9575gsa_imeiAll();
     
         a9575gsa_imei Geta9575gsa_imeiByID(int id);

         a9575gsa_imei Adda9575gsa_imei(a9575gsa_imei model);

         a9575gsa_imei Updatea9575gsa_imei(a9575gsa_imei model);

         void Deletea9575gsa_imei(a9575gsa_imei model);

        IEnumerable<a9575gsa_imei> GetImei_9575gsa_imei(string sn);

        IEnumerable<a9575gsa_imei> GetSN_9575gsa_imei(string sn);

        IEnumerable<a9575gsa_imei> GetImei_9575gsa_imei_Array(string[] sn);

         IEnumerable<a9575gsa_imei> GetSN_9575gsa_imei_Array(string[] sn);
       
    }
}
