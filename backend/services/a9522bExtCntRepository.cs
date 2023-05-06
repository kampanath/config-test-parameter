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
    public class a9522bExtCntRepository : Ia9522bExtCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9522bExtCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9522b_ext_cnt> Geta9522b_ext_cntAll()
        {

            return databaseContext2.a9522b_ext_cnt.ToList();
        
        }

        
        public void Deletea9522b_ext_cnt(a9522b_ext_cnt result)
        {
            databaseContext2.a9522b_ext_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9522b_ext_cnt Geta9522b_ext_cntByID(int id)
        {
            return databaseContext2.a9522b_ext_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9522b_ext_cnt Updatea9522b_ext_cnt(a9522b_ext_cnt model)
        {
         
            databaseContext2.a9522b_ext_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9522b_ext_cnt Adda9522b_ext_cnt(a9522b_ext_cnt model)
        {
       
            databaseContext2.a9522b_ext_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}