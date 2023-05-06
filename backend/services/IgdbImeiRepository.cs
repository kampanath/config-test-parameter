using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IgdbImeiRepository
    {
        
     IEnumerable<gdb_imei> Getgdb_imeiAll();
     
         gdb_imei Getgdb_imeiByID(int id);

         gdb_imei Addgdb_imei(gdb_imei model);

         gdb_imei Updategdb_imei(gdb_imei model);

         void Deletegdb_imei(gdb_imei model);

        IEnumerable<gdb_imei> GetImei_gdb_imei(string sn);

        IEnumerable<gdb_imei> GetSN_gdb_imei(string sn);

        IEnumerable<gdb_imei> GetImei_gdb_imei_Array(string[] sn);

         IEnumerable<gdb_imei> GetSN_gdb_imei_Array(string[] sn);
       
    }
}
