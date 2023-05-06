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
    public class a9602rCntRepository : Ia9602rCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9602rCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<a9602r_cnt> Geta9602r_cntAll()
        {

            return databaseContext2.a9602r_cnt.ToList();
        
        }

        
        public void Deletea9602r_cnt(a9602r_cnt result)
        {
            databaseContext2.a9602r_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9602r_cnt Geta9602r_cntByID(int id)
        {
            return databaseContext2.a9602r_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public a9602r_cnt Updatea9602r_cnt(a9602r_cnt model)
        {
         
            databaseContext2.a9602r_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9602r_cnt Adda9602r_cnt(a9602r_cnt model)
        {
       
            databaseContext2.a9602r_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}