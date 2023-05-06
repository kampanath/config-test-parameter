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
    public class a9555aGsaImeiRepository : Ia9555aGsaImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public a9555aGsaImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

          public IEnumerable<a9555a_gsa_imei> GetImei_9555a_gsa_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9555a_gsa_imei.Where(p => p.sn == sn);
          return databaseContext2.a9555a_gsa_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<a9555a_gsa_imei> GetSN_9555a_gsa_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9555a_gsa_imei.Where(p => p.sn == sn);
          return databaseContext2.a9555a_gsa_imei.Where(p => imei.Contains(p.imei) );
        }
        

        public IEnumerable<a9555a_gsa_imei> Geta9555a_gsa_imeiAll()
        {
            var items = databaseContext2.a9555a_gsa_imei.OrderBy(u => u.id9555a_gsa_imei).Take(5);
           return items.ToList();
           // return databaseContext2.a9555a_gsa_imei.ToList();
        
        }

        
        public void Deletea9555a_gsa_imei(a9555a_gsa_imei result)
        {
            databaseContext2.a9555a_gsa_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9555a_gsa_imei Geta9555a_gsa_imeiByID(int id)
        {
           
            return databaseContext2.a9555a_gsa_imei.SingleOrDefault(p => p.id9555a_gsa_imei == id);
        }


          public IEnumerable<a9555a_gsa_imei> GetImei_9555a_gsa_imei(string sn)
        {
            
            return databaseContext2.a9555a_gsa_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<a9555a_gsa_imei> GetSN_9555a_gsa_imei(string sn)
        {
            return databaseContext2.a9555a_gsa_imei.Where(p => p.imei == sn);
        }


        public a9555a_gsa_imei Updatea9555a_gsa_imei(a9555a_gsa_imei model)
        {
         
            databaseContext2.a9555a_gsa_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9555a_gsa_imei Adda9555a_gsa_imei(a9555a_gsa_imei model)
        {
       
            databaseContext2.a9555a_gsa_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

