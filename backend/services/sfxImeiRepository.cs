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
    public class sfxImeiRepository : IsfxImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public sfxImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

           public IEnumerable<sfx_imei> GetImei_sfx_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.sfx_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<sfx_imei> GetSN_sfx_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.sfx_imei.Where(p => imei.Contains(p.imei) );
        }


        public IEnumerable<sfx_imei> Getsfx_imeiAll()
        {
            var items = databaseContext2.sfx_imei.OrderBy(u => u.idsfx_imei).Take(5);
           return items.ToList();
           // return databaseContext2.sfx_imei.ToList();
        
        }

        
        public void Deletesfx_imei(sfx_imei result)
        {
            databaseContext2.sfx_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public sfx_imei Getsfx_imeiByID(int id)
        {
           
            return databaseContext2.sfx_imei.SingleOrDefault(p => p.idsfx_imei == id);
        }


          public IEnumerable<sfx_imei> GetImei_sfx_imei(string sn)
        {
            
            return databaseContext2.sfx_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<sfx_imei> GetSN_sfx_imei(string sn)
        {
            return databaseContext2.sfx_imei.Where(p => p.imei == sn);
        }


        public sfx_imei Updatesfx_imei(sfx_imei model)
        {
         
            databaseContext2.sfx_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public sfx_imei Addsfx_imei(sfx_imei model)
        {
       
            databaseContext2.sfx_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

