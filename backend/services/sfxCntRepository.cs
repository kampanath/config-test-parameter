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
    public class sfxCntRepository : IsfxCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public sfxCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<sfx_cnt> Getsfx_cntAll()
        {

            return databaseContext2.sfx_cnt.ToList();
        
        }

        
        public void Deletesfx_cnt(sfx_cnt result)
        {
            databaseContext2.sfx_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public sfx_cnt Getsfx_cntByID(int id)
        {
            return databaseContext2.sfx_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public sfx_cnt Updatesfx_cnt(sfx_cnt model)
        {
         
            databaseContext2.sfx_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public sfx_cnt Addsfx_cnt(sfx_cnt model)
        {
       
            databaseContext2.sfx_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}