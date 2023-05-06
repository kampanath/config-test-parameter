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
    public class a9602sbCntRepository : Ia9602sbCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9602sbCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9602sb_cnt> Geta9602sb_cntAll()
        {

            return databaseContext2.a9602sb_cnt.ToList();
        
        }

        
        public void Deletea9602sb_cnt(a9602sb_cnt result)
        {
            databaseContext2.a9602sb_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9602sb_cnt Geta9602sb_cntByID(int id)
        {
            return databaseContext2.a9602sb_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9602sb_cnt Updatea9602sb_cnt(a9602sb_cnt model)
        {
         
            databaseContext2.a9602sb_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9602sb_cnt Adda9602sb_cnt(a9602sb_cnt model)
        {
       
            databaseContext2.a9602sb_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}