using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Pomelo.EntityFrameworkCore.MySql;
using MySql.Data.EntityFrameworkCore;
using System.Diagnostics;


namespace backend.services
{
    public class a9575_cntRepository : I9575_cntRepository
    {
        
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9575_cntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9575_cnt> Geta9575_cntAll()
        {

            return databaseContext2.a9575_cnt.ToList();
        
        }

        
        public void Deletea9575_cnt(a9575_cnt result)
        {
            databaseContext2.a9575_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9575_cnt Geta9575_cntByID(int id)
        {
            return databaseContext2.a9575_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9575_cnt Updatea9575_cnt(a9575_cnt model)
        {
         
            databaseContext2.a9575_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9575_cnt Adda9575_cnt(a9575_cnt model)
        {
       
            databaseContext2.a9575_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}
    
