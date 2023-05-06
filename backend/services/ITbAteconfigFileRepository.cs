using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface ITbAteconfigFileRepository
    {

        IEnumerable<TbAteconfigFile> GetTbAteconfigFileAll(string configType,string hardwareType);

        List<string> GetTbAteconfigFileForFilterConfigType(string configType);

        List<string> GetTbAteconfigFileForFilterHardwareType(string hardwareType);

        TbAteconfigFile GetTbAteconfigFileByID(int id);

        List<string> GetTbAteconfigFileByHardwareType();

         List<string> GetTbAteconfigFileByConfigType();

        TbAteconfigFile AddTbAteconfigFile(TbAteconfigFile model);

        TbAteconfigFile UpdateTbAteconfigFile(TbAteconfigFile model);

        void DeleteTbAteconfigFile(TbAteconfigFile model );


    }
}
