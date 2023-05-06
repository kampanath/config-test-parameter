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
    public class a9602CntRepository : Ia9602CntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9602CntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9602_cnt> Geta9602_cntAll()
        {

            return databaseContext2.a9602_cnt.ToList();
        
        }

        
        public void Deletea9602_cnt(a9602_cnt result)
        {
            databaseContext2.a9602_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9602_cnt Geta9602_cntByID(int id)
        {
            return databaseContext2.a9602_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9602_cnt Updatea9602_cnt(a9602_cnt model)
        {
         
            databaseContext2.a9602_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9602_cnt Adda9602_cnt(a9602_cnt model)
        {
       
            databaseContext2.a9602_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}