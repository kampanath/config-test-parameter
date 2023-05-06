using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface ITbEquipmentRepository
    {
         IEnumerable<TbEquipment> GetTbEquipmentAll();

          TbEquipment AddTbEquipment(TbEquipment model);

          void DeleteTbEquipment(TbEquipment model);

           TbEquipment GetTbEquipmentByID(int id);

            TbEquipment UpdateTbEquipment(TbEquipment model);

              IEnumerable<TbEquipment> GetTbEquipmentByProfileID(int id);
    }
}