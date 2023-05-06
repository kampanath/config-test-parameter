using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Pomelo.EntityFrameworkCore.MySql;
using backend.Models;
using MySql.Data.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;


//TEDEV , New Notebook
//"server=localhost;database=pk20;user=root;pwd=Develop;"

//Iridium Server
// optionsBuilder.UseMySQL("server=192.168.7.9;database=pk20;user=root;pwd=test123;");


namespace backend.Data
{
    public partial class DatabaseContext2 : DbContext
    {


        public DatabaseContext2()
        {
        }

        public DatabaseContext2(DbContextOptions<DatabaseContext2> options)
            : base(options)
        {
        }

        
        

        public virtual DbSet<ate_equipment_cal> ate_equipment_cal { get; set; }

        public virtual DbSet<getTableNames> getTableNames { get; set; }
         public virtual DbSet<genericCheckDuplicate> genericCheckDuplicate { get; set; }

        public virtual DbSet<model> model { get; set; }
        public virtual DbSet<ate_gold_board> ate_gold_board { get; set; }
        public virtual DbSet<a9522b_cnt> a9522b_cnt { get; set; }
        public virtual DbSet<a9522b_imei> a9522b_imei { get; set; }
        public virtual DbSet<a9575_cnt> a9575_cnt { get; set; }

        public virtual DbSet<a9522b_ext_imei> a9522b_ext_imei { get; set; }
        public virtual DbSet<a9522b_ext_cnt> a9522b_ext_cnt { get; set; }

        public virtual DbSet<a9523_cnt> a9523_cnt { get; set; }
        public virtual DbSet<a9523_ext_cnt> a9523_ext_cnt { get; set; }
        public virtual DbSet<a9523_ext_imei> a9523_ext_imei { get; set; }

        public virtual DbSet<a9523_imei> a9523_imei { get; set; }

        public virtual DbSet<a9523mw_cnt> a9523mw_cnt { get; set; }

        public virtual DbSet<a9523mw_ext_cnt> a9523mw_ext_cnt { get; set; }

        public virtual DbSet<a9523mw_ext_imei> a9523mw_ext_imei { get; set; }

        public virtual DbSet<a9523mw_imei> a9523mw_imei { get; set; }

        public virtual DbSet<a9523ptt_cnt> a9523ptt_cnt { get; set; }

        public virtual DbSet<a9523ptt_imei> a9523ptt_imei { get; set; }

        public virtual DbSet<a9555a_cnt> a9555a_cnt { get; set; }

        public virtual DbSet<a9555a_ext_cnt> a9555a_ext_cnt { get; set; }

        public virtual DbSet<a9555a_ext_imei> a9555a_ext_imei { get; set; }

        public virtual DbSet<a9555a_gsa_cnt> a9555a_gsa_cnt { get; set; }

        public virtual DbSet<a9555a_gsa_imei> a9555a_gsa_imei { get; set; }

        public virtual DbSet<a9555a_imei> a9555a_imei { get; set; }


        public virtual DbSet<a9575_ext_cnt> a9575_ext_cnt { get; set; }

        public virtual DbSet<a9575_ext_imei> a9575_ext_imei { get; set; }

        public virtual DbSet<a9575_imei> a9575_imei { get; set; }

        public virtual DbSet<a9575e_cnt> a9575e_cnt { get; set; }

        public virtual DbSet<a9575e_ext_cnt> a9575e_ext_cnt { get; set; }

        public virtual DbSet<a9575e_ext_imei> a9575e_ext_imei { get; set; }

        public virtual DbSet<a9575e_imei> a9575e_imei { get; set; }

        public virtual DbSet<a9575gsa_cnt> a9575gsa_cnt { get; set; }

        public virtual DbSet<a9575gsa_imei> a9575gsa_imei { get; set; }

        public virtual DbSet<a9575ptt_cnt> a9575ptt_cnt { get; set; }

        public virtual DbSet<a9575ptt_ext_cnt> a9575ptt_ext_cnt { get; set; }

        public virtual DbSet<a9575ptt_ext_imei> a9575ptt_ext_imei { get; set; }

        public virtual DbSet<a9575ptt_imei> a9575ptt_imei { get; set; }

        public virtual DbSet<a9602_cnt> a9602_cnt { get; set; }

        public virtual DbSet<a9602_imei> a9602_imei { get; set; }

        public virtual DbSet<a9602n_ext_cnt> a9602n_ext_cnt { get; set; }

        public virtual DbSet<a9602n_ext_imei> a9602n_ext_imei { get; set; }

        public virtual DbSet<a9602r_cnt> a9602r_cnt { get; set; }

        public virtual DbSet<a9602r_imei> a9602r_imei { get; set; }

        public virtual DbSet<a9602sb_cnt> a9602sb_cnt { get; set; }

        public virtual DbSet<a9602sb_ext_cnt> a9602sb_ext_cnt { get; set; }

        public virtual DbSet<a9602sb_ext_imei> a9602sb_ext_imei { get; set; }

        public virtual DbSet<a9602sb_imei> a9602sb_imei { get; set; }

        public virtual DbSet<a9603_cnt> a9603_cnt { get; set; }

        public virtual DbSet<a9603_imei> a9603_imei { get; set; }

        public virtual DbSet<a9603r_cnt> a9603r_cnt { get; set; }

        public virtual DbSet<a9603r_imei> a9603r_imei { get; set; }


        public virtual DbSet<bcx_cnt> bcx_cnt { get; set; }

        public virtual DbSet<bcx_imei> bcx_imei { get; set; }

        public virtual DbSet<gdb_cnt> gdb_cnt { get; set; }

        public virtual DbSet<gdb_imei> gdb_imei { get; set; }


        public virtual DbSet<sfx_cnt> sfx_cnt { get; set; }

        public virtual DbSet<sfx_imei> sfx_imei { get; set; }

          public virtual DbSet<genericIMEI> genericIMEI { get; set; }






        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured) //No use in this if, Already config in ServiceExtenstion
            {       
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            //    optionsBuilder.UseMySQL("server=localhost;database=pk20;user=root123;pwd=password;");
            }
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            /*
                          modelBuilder.Entity<a9522b_cnt>(entity =>
                        {
                            entity.HasKey(e => e.idcnt);

                            entity.Property(e => e.idcnt).HasColumnName("idcnt");

                        });
            */

            OnModelCreatingPartial(modelBuilder);
        }


        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}