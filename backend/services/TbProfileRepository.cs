using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace backend.services
{
    public class TbProfileRepository : ITbProfileRepository
    {
          private readonly DatabaseContext databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

        public TbProfileRepository(
            DatabaseContext databaseContext,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }

        public IEnumerable<TbProfile> GetTbProfileAll()
        {
            return databaseContext.TbProfile.ToList();
        }

            public IEnumerable<TbProfile> GetTbProfileByProfileID(int id)
        {
            return databaseContext.TbProfile.Where(p => p.ProfileId == id);
        }

        public TbProfile AddTbProfile(TbProfile model)
        {
            model.ProfileDateCreate = DateTime.Now;
            databaseContext.TbProfile.Add(model);
            databaseContext.SaveChanges();
            return model;
        }

         public void DeleteTbProfile(TbProfile result)
        {
            databaseContext.TbProfile.Remove(result);
            databaseContext.SaveChanges();
        }

          public TbProfile GetTbProfileByID(int id)
        {
            return databaseContext.TbProfile.SingleOrDefault(p => p.ProfileId == id);
        }

          public TbProfile UpdateTbProfile(TbProfile model)
        {
          
            databaseContext.TbProfile.Update(model);
            databaseContext.SaveChanges();
            return model;
        }


    }
}