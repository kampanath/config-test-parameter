using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IequipmentCalRepository
    {

        IEnumerable<ate_equipment_cal> GetequipmentCalAll(string Location,string ATE_No);

        List<string> GetequipmentCalForFilterLocation(string Location);

        List<string> GetequipmentCalForFilterATE_No(string ATE_No);

        ate_equipment_cal GetequipmentCalByID(int id);

        List<string> GetequipmentCalByATE_No();

        int GetequipmentCalByID2();


         List<string> GetequipmentCalByLocation();

        ate_equipment_cal AddequipmentCal(ate_equipment_cal model);

        ate_equipment_cal UpdateequipmentCal(ate_equipment_cal model);

        void DeleteequipmentCal(ate_equipment_cal model );


    }
}
