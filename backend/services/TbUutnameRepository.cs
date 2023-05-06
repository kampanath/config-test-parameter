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
    public class TbUutnameRepository :ITbUutnameRepository
    {
          private readonly DatabaseContext databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;
   public TbUutnameRepository(
            DatabaseContext databaseContext,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public void DeleteTbUutname(TbUutname result)
        {
            databaseContext.TbUutname.Remove(result);
            databaseContext.SaveChanges();
        }

        public IEnumerable<TbUutname> GetTbUutnameAll()  
        {
            return databaseContext.TbUutname.ToList();
        }

        public TbUutname GetTbUutnameByID(int id)
        {
            return databaseContext.TbUutname.SingleOrDefault(p => p.UutnameId == id);
        }


        public TbUutname UpdateTbUutname(TbUutname model)
        {
        
            databaseContext.TbUutname.Update(model);
            databaseContext.SaveChanges();
            return model;
        }


        public TbUutname AddTbUutname(TbUutname model)
        {
    
            databaseContext.TbUutname.Add(model);
            databaseContext.SaveChanges();
            return model;
        }
    }
}