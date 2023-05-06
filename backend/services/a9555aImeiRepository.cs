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
    public class a9555aImeiRepository : Ia9555aImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9555aImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

          public IEnumerable<a9555a_imei> GetImei_9555a_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9555a_imei.Where(p => p.sn == sn);
          return databaseContext2.a9555a_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<a9555a_imei> GetSN_9555a_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9555a_imei.Where(p => p.sn == sn);
          return databaseContext2.a9555a_imei.Where(p => imei.Contains(p.imei) );
        }
        

        public IEnumerable<a9555a_imei> Geta9555a_imeiAll()
        {
            var items = databaseContext2.a9555a_imei.OrderBy(u => u.id9555a_imei).Take(5);
           return items.ToList();
           // return databaseContext2.a9555a_imei.ToList();
        
        }

        
        public void Deletea9555a_imei(a9555a_imei result)
        {
            databaseContext2.a9555a_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9555a_imei Geta9555a_imeiByID(int id)
        {
           
            return databaseContext2.a9555a_imei.SingleOrDefault(p => p.id9555a_imei == id);
        }


          public IEnumerable<a9555a_imei> GetImei_9555a_imei(string sn)
        {
            
            return databaseContext2.a9555a_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<a9555a_imei> GetSN_9555a_imei(string sn)
        {
            return databaseContext2.a9555a_imei.Where(p => p.imei == sn);
        }


        public a9555a_imei Updatea9555a_imei(a9555a_imei model)
        {
         
            databaseContext2.a9555a_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9555a_imei Adda9555a_imei(a9555a_imei model)
        {
       
            databaseContext2.a9555a_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

