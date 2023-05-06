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
    public class IRD2 : IIRD
    {
        private readonly DatabaseContext databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

        public IRD2(
            DatabaseContext databaseContext,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }

        public IEnumerable<TbUutstatustType> GetIRDAll()
        {
            return databaseContext.TbUutstatustType.ToList();
        }

        public TbUutstatustType AddIrd(TbUutstatustType model)
        {
            databaseContext.TbUutstatustType.Add(model);
            databaseContext.SaveChanges();
            return model;
        }

         public void DeleteIrd(TbUutstatustType result)
        {
            databaseContext.TbUutstatustType.Remove(result);
            databaseContext.SaveChanges();
        }

          public TbUutstatustType GetIrdByID(int id)
        {
            return databaseContext.TbUutstatustType.SingleOrDefault(p => p.UutstatusTypeId == id);
        }

          public TbUutstatustType UpdateIrd(TbUutstatustType model)
        {
          
            databaseContext.TbUutstatustType.Update(model);
            databaseContext.SaveChanges();
            return model;
        }


    }
}