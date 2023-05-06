using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace backend.services
{
    public class equipmentCalRepository :IequipmentCalRepository
    {
          private readonly DatabaseContext2 databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;
   public equipmentCalRepository(
            DatabaseContext2 databaseContext,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public void DeleteequipmentCal(ate_equipment_cal result)
        {
            databaseContext.ate_equipment_cal.Remove(result);
            databaseContext.SaveChanges();
        }

        public IEnumerable<ate_equipment_cal> GetequipmentCalAll(string Location,string ATE_No)  
        {
        
          //  return databaseContext.equipmentCal.ToList();
             return databaseContext.ate_equipment_cal.Where(p => p.Location == Location).Where(p => p.ATE_No == ATE_No);
        }

          public List<string> GetequipmentCalForFilterLocation(string Location)  
        {
          //  return databaseContext.equipmentCal.ToList();
          
             return databaseContext.ate_equipment_cal.Where(p => p.Location == Location).Select(p => p.ATE_No ).Distinct().ToList();
        }

           public List<string> GetequipmentCalForFilterATE_No(string ATE_No)  
        {

          
         //     Console.WriteLine("ssssssssssss");
          //     Console.WriteLine(hardwareType.ToString());

               if(ATE_No.ToString() == "undefined")
               {
                  return databaseContext.ate_equipment_cal.Select(p => p.Location ).Distinct().ToList();

               }

            
          //  return databaseContext.equipmentCal.ToList();
             return databaseContext.ate_equipment_cal.Where(p => p.ATE_No == ATE_No).Select(p => p.Location ).Distinct().ToList();
        }

         public List<string> GetequipmentCalByATE_No()
        {
      
       //     return databaseContext.equipmentCal.SingleOrDefault(p => p.Seq == id);
            return databaseContext.ate_equipment_cal.Select(p => p.ATE_No ).Distinct().ToList();

        }


           public int GetequipmentCalByID2()
        {
      
       //     return databaseContext.equipmentCal.SingleOrDefault(p => p.Seq == id);
            return databaseContext.ate_equipment_cal.Select(p => p.Equipment_ID ).Distinct().ToList().Max();

        }

          public List<string> GetequipmentCalByLocation()
        {
     
            return databaseContext.ate_equipment_cal.Select(p => p.Location ).Distinct().ToList();
      //    return databaseContext.equipmentCal.Where(p => p.ConfigType == "CAL").Select(p => p.HardwareType ).Distinct().ToList();

        }


  
        public ate_equipment_cal GetequipmentCalByID(int id)
        {
            return databaseContext.ate_equipment_cal.SingleOrDefault(p => p.Equipment_ID == id);
        }


        public ate_equipment_cal UpdateequipmentCal(ate_equipment_cal model )
        {
          
            databaseContext.ate_equipment_cal.Update(model);
            databaseContext.SaveChanges();
            return model;
        }


        public ate_equipment_cal AddequipmentCal(ate_equipment_cal model)
        {
           
            databaseContext.ate_equipment_cal.Add(model);
            databaseContext.SaveChanges();
            return model;
        }
    }
}