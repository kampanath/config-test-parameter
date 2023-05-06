using System.Collections.Generic;
using backend.Models;



namespace backend.services
{
    public interface ITbUutnameRepository
    {
          IEnumerable<TbUutname> GetTbUutnameAll();
         TbUutname GetTbUutnameByID(int id);

         TbUutname AddTbUutname(TbUutname model);

         TbUutname UpdateTbUutname(TbUutname model);

         void DeleteTbUutname(TbUutname model);
    }
}