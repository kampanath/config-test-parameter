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
using Microsoft.EntityFrameworkCore;

namespace backend.services
{
    public class gdbImeiRepository : IgdbImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public gdbImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

           public IEnumerable<gdb_imei> GetImei_gdb_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.gdb_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<gdb_imei> GetSN_gdb_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.gdb_imei.Where(p => imei.Contains(p.imei) );
        }


        public IEnumerable<gdb_imei> Getgdb_imeiAll()
        {

           

            var items = databaseContext2.gdb_imei.OrderBy(u => u.idgdb_imei).Take(5);
           return items.ToList();
           // return databaseContext2.gdb_imei.ToList();
        
        }

        
        public void Deletegdb_imei(gdb_imei result)
        {
            databaseContext2.gdb_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public gdb_imei Getgdb_imeiByID(int id)
        {
           
            return databaseContext2.gdb_imei.SingleOrDefault(p => p.idgdb_imei == id);
        }


          public IEnumerable<gdb_imei> GetImei_gdb_imei(string sn)
        {
        
            return databaseContext2.gdb_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<gdb_imei> GetSN_gdb_imei(string sn)
        {
            return databaseContext2.gdb_imei.Where(p => p.imei == sn);
        }


        public gdb_imei Updategdb_imei(gdb_imei model)
        {
         
        
            databaseContext2.gdb_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public gdb_imei Addgdb_imei(gdb_imei model)
        {
       
            databaseContext2.gdb_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

