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
    public class a9575pttImeiRepository : Ia9575pttImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9575pttImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

          public IEnumerable<a9575ptt_imei> GetImei_9575ptt_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9575ptt_imei.Where(p => p.sn == sn);
          return databaseContext2.a9575ptt_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<a9575ptt_imei> GetSN_9575ptt_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9575ptt_imei.Where(p => p.sn == sn);
          return databaseContext2.a9575ptt_imei.Where(p => imei.Contains(p.imei) );
        }
        

        public IEnumerable<a9575ptt_imei> Geta9575ptt_imeiAll()
        {
            var items = databaseContext2.a9575ptt_imei.OrderBy(u => u.id9575ptt_imei).Take(5);
           return items.ToList();
           // return databaseContext2.a9575ptt_imei.ToList();
        
        }

        
        public void Deletea9575ptt_imei(a9575ptt_imei result)
        {
            databaseContext2.a9575ptt_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9575ptt_imei Geta9575ptt_imeiByID(int id)
        {
           
            return databaseContext2.a9575ptt_imei.SingleOrDefault(p => p.id9575ptt_imei == id);
        }


          public IEnumerable<a9575ptt_imei> GetImei_9575ptt_imei(string sn)
        {
            
            return databaseContext2.a9575ptt_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<a9575ptt_imei> GetSN_9575ptt_imei(string sn)
        {
            return databaseContext2.a9575ptt_imei.Where(p => p.imei == sn);
        }


        public a9575ptt_imei Updatea9575ptt_imei(a9575ptt_imei model)
        {
         
            databaseContext2.a9575ptt_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9575ptt_imei Adda9575ptt_imei(a9575ptt_imei model)
        {
       
            databaseContext2.a9575ptt_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

