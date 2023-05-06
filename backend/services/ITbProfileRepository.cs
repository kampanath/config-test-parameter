using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface ITbProfileRepository
    {
         IEnumerable<TbProfile> GetTbProfileAll();

          TbProfile AddTbProfile(TbProfile model);

          void DeleteTbProfile(TbProfile model);

           TbProfile GetTbProfileByID(int id);

            TbProfile UpdateTbProfile(TbProfile model);

              IEnumerable<TbProfile> GetTbProfileByProfileID(int id);
    }
}