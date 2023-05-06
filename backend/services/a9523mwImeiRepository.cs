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
    public class a9523mwImeiRepository : Ia9523mwImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9523mwImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

          public IEnumerable<a9523mw_imei> GetImei_a9523mw_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9523mw_imei.Where(p => p.sn == sn);
          return databaseContext2.a9523mw_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<a9523mw_imei> GetSN_a9523mw_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9523mw_imei.Where(p => p.sn == sn);
          return databaseContext2.a9523mw_imei.Where(p => imei.Contains(p.imei) );
        }
        

        public IEnumerable<a9523mw_imei> Geta9523mw_imeiAll()
        {
            var items = databaseContext2.a9523mw_imei.OrderBy(u => u.id9523mw_imei).Take(5);
           return items.ToList();
           // return databaseContext2.a9523mw_imei.ToList();
        
        }

        
        public void Deletea9523mw_imei(a9523mw_imei result)
        {
            databaseContext2.a9523mw_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9523mw_imei Geta9523mw_imeiByID(int id)
        {
           
            return databaseContext2.a9523mw_imei.SingleOrDefault(p => p.id9523mw_imei == id);
        }


          public IEnumerable<a9523mw_imei> GetImei_a9523mw_imei(string sn)
        {
            
            return databaseContext2.a9523mw_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<a9523mw_imei> GetSN_a9523mw_imei(string sn)
        {
            return databaseContext2.a9523mw_imei.Where(p => p.imei == sn);
        }


        public a9523mw_imei Updatea9523mw_imei(a9523mw_imei model)
        {
         
            databaseContext2.a9523mw_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9523mw_imei Adda9523mw_imei(a9523mw_imei model)
        {
       
            databaseContext2.a9523mw_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

