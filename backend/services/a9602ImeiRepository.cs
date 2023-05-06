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
    public class a9602ImeiRepository : Ia9602ImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9602ImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

           public IEnumerable<a9602_imei> GetImei_9602_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.a9602_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<a9602_imei> GetSN_9602_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.a9602_imei.Where(p => imei.Contains(p.imei) );
        }


        public IEnumerable<a9602_imei> Geta9602_imeiAll()
        {
            var items = databaseContext2.a9602_imei.OrderBy(u => u.id9602_imei).Take(5);
           return items.ToList();
           // return databaseContext2.a9602_imei.ToList();
        
        }

        
        public void Deletea9602_imei(a9602_imei result)
        {
            databaseContext2.a9602_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9602_imei Geta9602_imeiByID(int id)
        {
           
            return databaseContext2.a9602_imei.SingleOrDefault(p => p.id9602_imei == id);
        }


          public IEnumerable<a9602_imei> GetImei_9602_imei(string sn)
        {
            
            return databaseContext2.a9602_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<a9602_imei> GetSN_9602_imei(string sn)
        {
            return databaseContext2.a9602_imei.Where(p => p.imei == sn);
        }


        public a9602_imei Updatea9602_imei(a9602_imei model)
        {
         
            databaseContext2.a9602_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9602_imei Adda9602_imei(a9602_imei model)
        {
       
            databaseContext2.a9602_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

