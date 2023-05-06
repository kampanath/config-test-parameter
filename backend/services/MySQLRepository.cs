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
    public class MySQLRepository : IMySQLRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public MySQLRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9522b_cnt> Geta9522b_cntAll()
        {

            return databaseContext2.a9522b_cnt.ToList();
        
        }

        
        public void Deletea9522b_cnt(a9522b_cnt result)
        {
            databaseContext2.a9522b_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9522b_cnt Geta9522b_cntByID(int id)
        {
            return databaseContext2.a9522b_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9522b_cnt Updatea9522b_cnt(a9522b_cnt model)
        {
         
            databaseContext2.a9522b_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9522b_cnt Adda9522b_cnt(a9522b_cnt model)
        {
       
            databaseContext2.a9522b_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}