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
    public class bcxCntRepository : IbcxCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public bcxCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<bcx_cnt> Getbcx_cntAll()
        {

            return databaseContext2.bcx_cnt.ToList();
        
        }

        
        public void Deletebcx_cnt(bcx_cnt result)
        {
            databaseContext2.bcx_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public bcx_cnt Getbcx_cntByID(int id)
        {
            return databaseContext2.bcx_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public bcx_cnt Updatebcx_cnt(bcx_cnt model)
        {
         
            databaseContext2.bcx_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public bcx_cnt Addbcx_cnt(bcx_cnt model)
        {
       
            databaseContext2.bcx_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}