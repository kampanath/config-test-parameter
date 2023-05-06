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
    public class a9555aCntRepository : Ia9555aCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9555aCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9555a_cnt> Geta9555a_cntAll()
        {

            return databaseContext2.a9555a_cnt.ToList();
        
        }

        
        public void Deletea9555a_cnt(a9555a_cnt result)
        {
            databaseContext2.a9555a_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9555a_cnt Geta9555a_cntByID(int id)
        {
            return databaseContext2.a9555a_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9555a_cnt Updatea9555a_cnt(a9555a_cnt model)
        {
         
            databaseContext2.a9555a_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9555a_cnt Adda9555a_cnt(a9555a_cnt model)
        {
       
            databaseContext2.a9555a_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}