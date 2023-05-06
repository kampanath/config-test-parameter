
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
    public class TbProfileDetailRepository : ITbProfileDetailRepository
    {
        private readonly DatabaseContext databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

        public TbProfileDetailRepository(
            DatabaseContext databaseContext,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }

        public IEnumerable<TbProfileDetail> GetTbProfileDetailAll()
        {
            return databaseContext.TbProfileDetail.ToList();
        }

        public TbProfileDetail AddTbProfileDetail(TbProfileDetail model)
        {
            databaseContext.TbProfileDetail.Add(model);
            databaseContext.SaveChanges();
            return model;
        }

        

            public IEnumerable<TbProfileDetail> GetTbProfileDetailByProfileID(int id)
        {
            return databaseContext.TbProfileDetail.Where(p => p.ProfileId == id);
        }

         public void DeleteTbProfileDetail(TbProfileDetail result)
        {
            databaseContext.TbProfileDetail.Remove(result);
            databaseContext.SaveChanges();
        }

          public TbProfileDetail GetTbProfileDetailByID(int id)
        {
            return databaseContext.TbProfileDetail.SingleOrDefault(p => p.ProfiledetailId == id);
        }

          public TbProfileDetail UpdateTbProfileDetail(TbProfileDetail model)
        {
          
            databaseContext.TbProfileDetail.Update(model);
            databaseContext.SaveChanges();
            return model;
        }
    }
}