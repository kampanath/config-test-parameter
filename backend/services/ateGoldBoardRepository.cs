
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
    public class ateGoldBoardRepository : IateGoldBoardRepository
    {
        
            private readonly DatabaseContext2 databaseContext2;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

         public ateGoldBoardRepository(
            DatabaseContext2 databaseContext2,
            IHttpContextAccessor httpContextAccessor,
            IWebHostEnvironment webHostEnvironment
            )
        {
            this.databaseContext2 = databaseContext2;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;
          
        }

     
        public IEnumerable<ate_gold_board> Getate_gold_boardAll()
        {
         
            return databaseContext2.ate_gold_board.ToList();
        
        }

    
        public void Deleteate_gold_board(ate_gold_board result)
        {
            databaseContext2.ate_gold_board.Remove(result);
            databaseContext2.SaveChanges();
        }


        public ate_gold_board Getate_gold_boardBySN(string id)
        {
           
            return databaseContext2.ate_gold_board.SingleOrDefault(p => p.serial_no == id);
        }



        public ate_gold_board Updateate_gold_board(ate_gold_board model)
        {
         
            databaseContext2.ate_gold_board.Update(model);
            databaseContext2.SaveChanges();
            return model;
        }

        public ate_gold_board Addate_gold_board(ate_gold_board model)
        {
       
            databaseContext2.ate_gold_board.Add(model);
            databaseContext2.SaveChanges();
            return model;
        }


    }
}

