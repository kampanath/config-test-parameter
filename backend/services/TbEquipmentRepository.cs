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
    public class TbEquipmentRepository : ITbEquipmentRepository
    {
          private readonly DatabaseContext databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

        public TbEquipmentRepository(
            DatabaseContext databaseContext,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }

        public IEnumerable<TbEquipment> GetTbEquipmentAll()
        {
            return databaseContext.TbEquipment.ToList();
        }

            public IEnumerable<TbEquipment> GetTbEquipmentByProfileID(int id)
        {
            return databaseContext.TbEquipment.Where(p => p.EquipId == id);
        }

        public TbEquipment AddTbEquipment(TbEquipment model)
        {
          //  model.ProfileDateCreate = DateTime.Now;
            databaseContext.TbEquipment.Add(model);
            databaseContext.SaveChanges();
            return model;
        }

         public void DeleteTbEquipment(TbEquipment result)
        {
            databaseContext.TbEquipment.Remove(result);
            databaseContext.SaveChanges();
        }

          public TbEquipment GetTbEquipmentByID(int id)
        {
            return databaseContext.TbEquipment.SingleOrDefault(p => p.EquipId == id);
        }

          public TbEquipment UpdateTbEquipment(TbEquipment model)
        {
          
            databaseContext.TbEquipment.Update(model);
            databaseContext.SaveChanges();
            return model;
        }


    }
}