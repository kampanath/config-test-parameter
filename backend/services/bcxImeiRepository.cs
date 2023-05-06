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
    public class bcxImeiRepository : IbcxImeiRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public bcxImeiRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

           public IEnumerable<bcx_imei> GetImei_bcx_imei_Array(string[] sn)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.bcx_imei.Where(p => sn.Contains(p.sn) );
        }

             public IEnumerable<bcx_imei> GetSN_bcx_imei_Array(string[] imei)
        {
            
          //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
          return databaseContext2.bcx_imei.Where(p => imei.Contains(p.imei) );
        }


        public IEnumerable<bcx_imei> Getbcx_imeiAll()
        {
            var items = databaseContext2.bcx_imei.OrderBy(u => u.idbcx_imei).Take(5);
           return items.ToList();
           // return databaseContext2.bcx_imei.ToList();
        
        }

        
        public void Deletebcx_imei(bcx_imei result)
        {
            databaseContext2.bcx_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public bcx_imei Getbcx_imeiByID(int id)
        {
           
            return databaseContext2.bcx_imei.SingleOrDefault(p => p.idbcx_imei == id);
        }


          public IEnumerable<bcx_imei> GetImei_bcx_imei(string sn)
        {
            
            return databaseContext2.bcx_imei.Where(p => p.sn == sn);
        }

          public IEnumerable<bcx_imei> GetSN_bcx_imei(string sn)
        {
            return databaseContext2.bcx_imei.Where(p => p.imei == sn);
        }


        public bcx_imei Updatebcx_imei(bcx_imei model)
        {
         
            databaseContext2.bcx_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public bcx_imei Addbcx_imei(bcx_imei model)
        {
       
            databaseContext2.bcx_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

