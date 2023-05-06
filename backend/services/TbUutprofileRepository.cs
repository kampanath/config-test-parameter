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
    public class TbUutprofileRepository : ITbUutprofileRepository
    {
                  private readonly DatabaseContext databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public TbUutprofileRepository(
            DatabaseContext databaseContext,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public void DeleteTbUutprofile(TbUutprofile result)
        {
            databaseContext.TbUutprofile.Remove(result);
            databaseContext.SaveChanges();
        }

        public IEnumerable<TbUutprofile> GetTbUutprofileAll()  
        {
            return databaseContext.TbUutprofile.ToList();
        }

        public TbUutprofile GetTbUutprofileByID(int id)
        {
            return databaseContext.TbUutprofile.SingleOrDefault(p => p.UutprofileId == id);
        }

          public IEnumerable<TbUutprofile> GetTbUutprofileByUUTNameID(int id)
        {
            return databaseContext.TbUutprofile.Where(p => p.UutnameId == id);
        }


        public TbUutprofile UpdateTbUutprofile(TbUutprofile model)
        {
        
            databaseContext.TbUutprofile.Update(model);
            databaseContext.SaveChanges();
            return model;
        }


        public TbUutprofile AddTbUutprofile(TbUutprofile model)
        {
            model.UutprofileDate = DateTime.Now;
            databaseContext.TbUutprofile.Add(model);
            databaseContext.SaveChanges();
            return model;
        }
    }
}