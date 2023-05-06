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
    public class a9603rCntRepository : Ia9603rCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9603rCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9603r_cnt> Geta9603r_cntAll()
        {

            return databaseContext2.a9603r_cnt.ToList();
        
        }

        
        public void Deletea9603r_cnt(a9603r_cnt result)
        {
            databaseContext2.a9603r_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9603r_cnt Geta9603r_cntByID(int id)
        {
            return databaseContext2.a9603r_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9603r_cnt Updatea9603r_cnt(a9603r_cnt model)
        {
         
            databaseContext2.a9603r_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9603r_cnt Adda9603r_cnt(a9603r_cnt model)
        {
       
            databaseContext2.a9603r_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}