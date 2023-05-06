using System.Collections.Generic;
using backend.Models;


namespace backend.services
{
    public interface ITbUutprofileRepository
    {
           IEnumerable<TbUutprofile> GetTbUutprofileAll();
         TbUutprofile GetTbUutprofileByID(int id);
         TbUutprofile AddTbUutprofile(TbUutprofile model);

         TbUutprofile UpdateTbUutprofile(TbUutprofile model);

         void DeleteTbUutprofile(TbUutprofile model);

         IEnumerable<TbUutprofile> GetTbUutprofileByUUTNameID(int id);
    }
}