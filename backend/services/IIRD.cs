using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IIRD
    {
         IEnumerable<TbUutstatustType> GetIRDAll();

          TbUutstatustType AddIrd(TbUutstatustType model);

          void DeleteIrd(TbUutstatustType model);

           TbUutstatustType GetIrdByID(int id);

            TbUutstatustType UpdateIrd(TbUutstatustType model);

    }
}