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
    public class a9522bIMEIRepository : Ia9522bIMEIRepository
    {

        private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

        public a9522bIMEIRepository(
           DatabaseContext2 databaseContext2,
           IHttpContextAccessor httpContextAccessor,
           IWebHostEnvironment webHostEnvironment
           )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;

        }

        public IEnumerable<a9522b_imei> GetImei_9522b_imei_Array(string[] sn)
        {

            //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
            return databaseContext2.a9522b_imei.Where(p => sn.Contains(p.sn));
        }

        public IEnumerable<a9522b_imei> GetSN_9522b_imei_Array(string[] imei)
        {

            //  return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
            return databaseContext2.a9522b_imei.Where(p => imei.Contains(p.imei));
        }


        public IEnumerable<a9522b_imei> Geta9522b_imeiAll()
        {
       //     Debug.WriteLine("MOONONON");
      //      Debug.WriteLine(databaseContext2.a9522b_imei.FromSqlRaw("SELECT * FROM 9522b_imei").ToList());
               
          



            var items = databaseContext2.a9522b_imei.OrderBy(u => u.id9522b_imei).Take(5);
            return items.ToList();
         

        }


        public void Deletea9522b_imei(a9522b_imei result)
        {
            databaseContext2.a9522b_imei.Remove(result);
            databaseContext2.SaveChanges();
        }


        public a9522b_imei Geta9522b_imeiByID(int id)
        {

            return databaseContext2.a9522b_imei.SingleOrDefault(p => p.id9522b_imei == id);
        }


        public IEnumerable<a9522b_imei> GetImei_9522b_imei(string sn)
        {

            return databaseContext2.a9522b_imei.Where(p => p.sn == sn);
        }

        public IEnumerable<a9522b_imei> GetSN_9522b_imei(string sn)
        {
            return databaseContext2.a9522b_imei.Where(p => p.imei == sn);
        }


        public a9522b_imei Updatea9522b_imei(a9522b_imei model)
        {

            databaseContext2.a9522b_imei.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public a9522b_imei Adda9522b_imei(a9522b_imei model)
        {

            databaseContext2.a9522b_imei.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

