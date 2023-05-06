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
    public class a9603rImeiRepository : Ia9603rImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9603rImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

           public IEnumerable<a9603r_imei> GetImei_9603r_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.a9603r_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<a9603r_imei> GetSN_9603r_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.a9603r_imei.Where(p => imei.Contains(p.imei) );
        }


        public IEnumerable<a9603r_imei> Geta9603r_imeiAll()
        {
            var items = databaseContext2.a9603r_imei.OrderBy(u => u.id9603r_imei).Take(5);
           return items.ToList();
           // return databaseContext2.a9603r_imei.ToList();
        
        }

        
        public void Deletea9603r_imei(a9603r_imei result)
        {
            databaseContext2.a9603r_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9603r_imei Geta9603r_imeiByID(int id)
        {
           
            return databaseContext2.a9603r_imei.SingleOrDefault(p => p.id9603r_imei == id);
        }


          public IEnumerable<a9603r_imei> GetImei_9603r_imei(string sn)
        {
            
            return databaseContext2.a9603r_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<a9603r_imei> GetSN_9603r_imei(string sn)
        {
            return databaseContext2.a9603r_imei.Where(p => p.imei == sn);
        }


        public a9603r_imei Updatea9603r_imei(a9603r_imei model)
        {
         
            databaseContext2.a9603r_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9603r_imei Adda9603r_imei(a9603r_imei model)
        {
       
            databaseContext2.a9603r_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

