using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface Ia9555aGsaImeiRepository
    {
        
     IEnumerable<a9555a_gsa_imei> Geta9555a_gsa_imeiAll();
     
         a9555a_gsa_imei Geta9555a_gsa_imeiByID(int id);

         a9555a_gsa_imei Adda9555a_gsa_imei(a9555a_gsa_imei model);

         a9555a_gsa_imei Updatea9555a_gsa_imei(a9555a_gsa_imei model);

         void Deletea9555a_gsa_imei(a9555a_gsa_imei model);

        IEnumerable<a9555a_gsa_imei> GetImei_9555a_gsa_imei(string sn);

        IEnumerable<a9555a_gsa_imei> GetSN_9555a_gsa_imei(string sn);

        IEnumerable<a9555a_gsa_imei> GetImei_9555a_gsa_imei_Array(string[] sn);

         IEnumerable<a9555a_gsa_imei> GetSN_9555a_gsa_imei_Array(string[] sn);
       
    }
}
