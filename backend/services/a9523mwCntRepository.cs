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
    public class a9523mwCntRepository : Ia9523mwCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9523mwCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9523mw_cnt> Geta9523mw_cntAll()
        {

            return databaseContext2.a9523mw_cnt.ToList();
        
        }

        
        public void Deletea9523mw_cnt(a9523mw_cnt result)
        {
            databaseContext2.a9523mw_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9523mw_cnt Geta9523mw_cntByID(int id)
        {
            return databaseContext2.a9523mw_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9523mw_cnt Updatea9523mw_cnt(a9523mw_cnt model)
        {
         
            databaseContext2.a9523mw_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9523mw_cnt Adda9523mw_cnt(a9523mw_cnt model)
        {
       
            databaseContext2.a9523mw_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}