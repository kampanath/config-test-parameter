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
    public class a9575gsaCntRepository : Ia9575gsaCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9575gsaCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9575gsa_cnt> Geta9575gsa_cntAll()
        {

            return databaseContext2.a9575gsa_cnt.ToList();
        
        }

        
        public void Deletea9575gsa_cnt(a9575gsa_cnt result)
        {
            databaseContext2.a9575gsa_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9575gsa_cnt Geta9575gsa_cntByID(int id)
        {
            return databaseContext2.a9575gsa_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9575gsa_cnt Updatea9575gsa_cnt(a9575gsa_cnt model)
        {
         
            databaseContext2.a9575gsa_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9575gsa_cnt Adda9575gsa_cnt(a9575gsa_cnt model)
        {
       
            databaseContext2.a9575gsa_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}