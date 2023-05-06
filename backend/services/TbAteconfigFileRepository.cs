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
    public class TbAteconfigFileRepository :ITbAteconfigFileRepository
    {
          private readonly DatabaseContext databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;
   public TbAteconfigFileRepository(
            DatabaseContext databaseContext,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public void DeleteTbAteconfigFile(TbAteconfigFile result)
        {
            databaseContext.TbAteconfigFile.Remove(result);
            databaseContext.SaveChanges();
        }

        public IEnumerable<TbAteconfigFile> GetTbAteconfigFileAll(string configType,string hardwareType)  
        {
        
          //  return databaseContext.TbAteconfigFile.ToList();
             return databaseContext.TbAteconfigFile.Where(p => p.ConfigType == configType).Where(p => p.HardwareType == hardwareType);
        }

          public List<string> GetTbAteconfigFileForFilterConfigType(string configType)  
        {
          //  return databaseContext.TbAteconfigFile.ToList();
          
             return databaseContext.TbAteconfigFile.Where(p => p.ConfigType == configType).Select(p => p.HardwareType ).Distinct().ToList();
        }

           public List<string> GetTbAteconfigFileForFilterHardwareType(string hardwareType)  
        {

          
         //     Console.WriteLine("ssssssssssss");
          //     Console.WriteLine(hardwareType.ToString());

               if(hardwareType.ToString() == "undefined")
               {
                  return databaseContext.TbAteconfigFile.Select(p => p.ConfigType ).Distinct().ToList();

               }

            
          //  return databaseContext.TbAteconfigFile.ToList();
             return databaseContext.TbAteconfigFile.Where(p => p.HardwareType == hardwareType).Select(p => p.ConfigType ).Distinct().ToList();
        }

         public List<string> GetTbAteconfigFileByHardwareType()
        {
      
       //     return databaseContext.TbAteconfigFile.SingleOrDefault(p => p.Seq == id);
            return databaseContext.TbAteconfigFile.Select(p => p.ConfigType ).Distinct().ToList();

        }

          public List<string> GetTbAteconfigFileByConfigType()
        {
     
            return databaseContext.TbAteconfigFile.Select(p => p.HardwareType ).Distinct().ToList();
      //    return databaseContext.TbAteconfigFile.Where(p => p.ConfigType == "CAL").Select(p => p.HardwareType ).Distinct().ToList();

        }



        public TbAteconfigFile GetTbAteconfigFileByID(int id)
        {
            return databaseContext.TbAteconfigFile.SingleOrDefault(p => p.ConfigId == id);
        }


        public TbAteconfigFile UpdateTbAteconfigFile(TbAteconfigFile model )
        {
            model.DateModify = DateTime.Now;
            databaseContext.TbAteconfigFile.Update(model);
            databaseContext.SaveChanges();
            return model;
        }


        public TbAteconfigFile AddTbAteconfigFile(TbAteconfigFile model)
        {
            model.DateAdd = DateTime.Now;
            model.DateModify = DateTime.Now;
            model.DateRelease = DateTime.Now;

            databaseContext.TbAteconfigFile.Add(model);
            databaseContext.SaveChanges();
            return model;
        }
    }
}