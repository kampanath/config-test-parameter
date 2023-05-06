using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface ImodelRepository
    {

        IEnumerable<model> GetmodelAll();

        model GetmodelByID(int id);

        List<string> GetmodelByHardwareType();

        model Addmodel(model model);

        model Updatemodel(model model);

        void Deletemodel(model model);


    }
}
