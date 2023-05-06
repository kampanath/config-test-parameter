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
    public class a9575eImeiRepository : Ia9575eImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9575eImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

          public IEnumerable<a9575e_imei> GetImei_9575e_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9575e_imei.Where(p => p.sn == sn);
          return databaseContext2.a9575e_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<a9575e_imei> GetSN_9575e_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9575e_imei.Where(p => p.sn == sn);
          return databaseContext2.a9575e_imei.Where(p => imei.Contains(p.imei) );
        }
        

        public IEnumerable<a9575e_imei> Geta9575e_imeiAll()
        {
            var items = databaseContext2.a9575e_imei.OrderBy(u => u.id9575e_imei).Take(5);
           return items.ToList();
           // return databaseContext2.a9575e_imei.ToList();
        
        }

        
        public void Deletea9575e_imei(a9575e_imei result)
        {
            databaseContext2.a9575e_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9575e_imei Geta9575e_imeiByID(int id)
        {
           
           return databaseContext2.a9575e_imei.SingleOrDefault(p => p.id9575e_imei == id);

         

        }

          public List<long> Geta9575e_imei_Row()
        {
           
    
           var items = databaseContext2.a9575e_imei.OrderByDescending(u => u.id9575e_imei).Take(1).Select(p => p.id9575e_imei ).ToList();
           return items;

        }


          public IEnumerable<a9575e_imei> GetImei_9575e_imei(string sn)
        {
            
            return databaseContext2.a9575e_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<a9575e_imei> GetSN_9575e_imei(string sn)
        {
            return databaseContext2.a9575e_imei.Where(p => p.imei == sn);
        }


        public a9575e_imei Updatea9575e_imei(a9575e_imei model)
        {
         
            databaseContext2.a9575e_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9575e_imei Adda9575e_imei(a9575e_imei model)
        {
       
            databaseContext2.a9575e_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

