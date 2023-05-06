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
    public class gdbCntRepository : IgdbCntRepository
    {
          private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public gdbCntRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment)
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
        }


        public IEnumerable<gdb_cnt> Getgdb_cntAll()
        {

            return databaseContext2.gdb_cnt.ToList();
        
        }

        
        public void Deletegdb_cnt(gdb_cnt result)
        {
            databaseContext2.gdb_cnt.Remove(result);
            databaseContext2.SaveChanges();
        }


        public gdb_cnt Getgdb_cntByID(int id)
        {
            return databaseContext2.gdb_cnt.SingleOrDefault(p => p.idcnt == id);
        }


        public gdb_cnt Updategdb_cnt(gdb_cnt model)
        {
         
            databaseContext2.gdb_cnt.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public gdb_cnt Addgdb_cnt(gdb_cnt model)
        {
       
            databaseContext2.gdb_cnt.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}