using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;


namespace backend.services
{
    public class modelRepository :ImodelRepository
    {
          private readonly DatabaseContext2 databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;
   public modelRepository(
            DatabaseContext2 databaseContext,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public void Deletemodel(model result)
        {
            databaseContext.model.Remove(result);
            databaseContext.SaveChanges();
        }

        public IEnumerable<model> GetmodelAll()  
        {
            return databaseContext.model.ToList();
        }

         public List<string> GetmodelByHardwareType()
        {
       //     return databaseContext.model.SingleOrDefault(p => p.Seq == id);
            return databaseContext.model.Select(p => p.Hardware_Type ).Distinct().ToList();

        }

        public model GetmodelByID(int id)
        {
            return databaseContext.model.SingleOrDefault(p => p.Seq == id);
        }


        public model Updatemodel(model model)
        {
        
            databaseContext.model.Update(model);
            databaseContext.SaveChanges();
            return model;
        }


        public model Addmodel(model model)
        {
    
            databaseContext.model.Add(model);
            databaseContext.SaveChanges();
            return model;
        }
    }
}