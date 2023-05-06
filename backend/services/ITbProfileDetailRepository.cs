using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface ITbProfileDetailRepository
    {
         IEnumerable<TbProfileDetail> GetTbProfileDetailAll();

          TbProfileDetail AddTbProfileDetail(TbProfileDetail model);

          void DeleteTbProfileDetail(TbProfileDetail model);

           TbProfileDetail GetTbProfileDetailByID(int id);

            TbProfileDetail UpdateTbProfileDetail(TbProfileDetail model);

            IEnumerable<TbProfileDetail> GetTbProfileDetailByProfileID(int id);
    }
}