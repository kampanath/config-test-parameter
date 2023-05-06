using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using backend.Models;

//TEDEV
//"ConnectionSQLServer": "Server=TestDevelopment\\IRDSQL;user id=sa; password=Develop; Database=CMPOS;"

//New Notebook
//optionsBuilder.UseSqlServer("Server=localhost;user id=sa; password=Develop; Database=CMPOS;");

//Iridium Server
//optionsBuilder.UseSqlServer("Server=192.168.7.8;user id=sa; password=IrdProd2; Database=iridiumdb;");
//Server name = IRDSQL



namespace backend.Data
{
    public partial class DatabaseContext : DbContext
    {

        public DatabaseContext()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }



       public virtual DbSet<ateCalibrationFixtureName> ateCalibrationFixtureName { get; set; }
        public virtual DbSet<ateCalibrationATEName> ateCalibrationATEName { get; set; }

        public virtual DbSet<ateCalibration> ateCalibration { get; set; }

        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        public virtual DbSet<TbUutstatustType> TbUutstatustType { get; set; }

        public virtual DbSet<TbProfile> TbProfile { get; set; }
        public virtual DbSet<TbProfileDetail> TbProfileDetail { get; set; }

        public virtual DbSet<TbUutname> TbUutname { get; set; }
        public virtual DbSet<TbUutprofile> TbUutprofile { get; set; }

        public virtual DbSet<TbEquipment> TbEquipment { get; set; }

        public virtual DbSet<TbAteconfigFile> TbAteconfigFile { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            /*
            "ConnectionStrings": {
    "ConnectionSQLServer": "Server=.\\SQLEXPRESS;user id=sa; password=1; Database=iridiumDB;",
    "ConnectionMySQLServer": "server=localhost;database=pk20;user=root;pwd=password;"
  }*/
            if (!optionsBuilder.IsConfigured) ////No use in this if, Already config in ServiceExtenstion
            {

              //  optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;user id=sa; password=1; Database=iridiumDB;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Products>(entity =>
            {
                entity.HasKey(e => e.ProductId);

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.Created).HasDefaultValueSql("(getdate())");
            });

            modelBuilder.Entity<TbUutstatustType>(entity =>
         {
             entity.HasKey(e => e.UutstatusTypeId);

             entity.ToTable("tbUUTStatustType");

             entity.Property(e => e.UutstatusTypeId).HasColumnName("UUTStatusTypeID");

             entity.Property(e => e.UutstatusTypeDesc).HasColumnName("UUTStatusTypeDesc");

             entity.Property(e => e.UutstatusTypeName)
                 .IsRequired()
                 .HasColumnName("UUTStatusTypeName")
                 .HasMaxLength(50);
         });



            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasIndex(e => e.Username)
                    .HasName("AK_Users_Username")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Created).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Position).HasDefaultValueSql("(N'Cashier')");

                entity.Property(e => e.Username).IsRequired();
            });

            modelBuilder.Entity<TbProfile>(entity =>
           {
               entity.HasKey(e => e.ProfileId);

               entity.ToTable("tbProfile");

               entity.Property(e => e.ProfileId).HasColumnName("profileID");

               entity.Property(e => e.Calid).HasColumnName("CALID");

               entity.Property(e => e.IsActive).HasColumnName("isActive");

               entity.Property(e => e.ProfileDateCreate).HasColumnName("profileDateCreate")
                    .HasColumnType("datetime");

               entity.Property(e => e.ProfileDesc).HasColumnName("profileDesc");

               entity.Property(e => e.ProfileName)
                   .HasColumnName("profileName")
                   .HasMaxLength(100);

               entity.Property(e => e.ProfileReqDocNo)
                   .HasColumnName("profileReqDocNo")
                   .HasMaxLength(50);

               entity.Property(e => e.ProfileVersion)
                   .IsRequired()
                   .HasColumnName("profileVersion")
                   .HasMaxLength(20);
           });

            modelBuilder.Entity<TbProfileDetail>(entity =>
            {
                entity.HasKey(e => new { e.ProfiledetailId, e.ProfileId });

                entity.ToTable("tbProfileDetail");

                entity.Property(e => e.ProfiledetailId)
                    .HasColumnName("profiledetailID")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.ProfileId).HasColumnName("profileID");

                entity.Property(e => e.DetailCategory).HasColumnName("detailCategory");

                entity.Property(e => e.DetailCmaoption)
                    .HasColumnName("detailCMAOption")
                    .HasMaxLength(10);

                entity.Property(e => e.DetailDebugoption)
                    .HasColumnName("detailDEBUGOption")
                    .HasMaxLength(10);

                entity.Property(e => e.DetailDesc).HasColumnName("detailDesc");

                entity.Property(e => e.DetailLsl).HasColumnName("detailLSL");

                entity.Property(e => e.DetailOption).HasColumnName("detailOption");

                entity.Property(e => e.DetailReqSection)
                    .HasColumnName("detailReqSection")
                    .HasMaxLength(10);

                entity.Property(e => e.DetailSqNo).HasColumnName("detailSqNo");

                entity.Property(e => e.DetailTestName)
                    .IsRequired()
                    .HasColumnName("detailTestName")
                    .HasMaxLength(120);

                entity.Property(e => e.DetailUom)
                    .IsRequired()
                    .HasColumnName("detailUOM")
                    .HasMaxLength(25);

                entity.Property(e => e.DetailUsl).HasColumnName("detailUSL");

                entity.Property(e => e.IsActive).HasColumnName("isActive");
            });


            modelBuilder.Entity<TbUutname>(entity =>
           {
               entity.HasKey(e => e.UutnameId)
                   .HasName("PK_tbUUT");

               entity.ToTable("tbUUTName");

               entity.Property(e => e.UutnameId).HasColumnName("UUTNameID");

               entity.Property(e => e.Calcycle).HasColumnName("CALCycle");

               entity.Property(e => e.Calrequire).HasColumnName("CALRequire");

               entity.Property(e => e.FactoryId).HasColumnName("factoryID");

               entity.Property(e => e.IsActive).HasColumnName("isActive");

               entity.Property(e => e.ModelId).HasColumnName("modelID");

               entity.Property(e => e.PfsOp)
                   .HasColumnName("PFS_OP")
                   .HasMaxLength(50);

               entity.Property(e => e.PfsWorkSt)
                   .HasColumnName("PFS_Work_ST")
                   .HasMaxLength(50);

               entity.Property(e => e.Uutdesc).HasColumnName("UUTDesc");

               entity.Property(e => e.Uutname)
                   .IsRequired()
                   .HasColumnName("UUTName")
                   .HasMaxLength(50);
           });

            modelBuilder.Entity<TbUutprofile>(entity =>
            {
                entity.HasKey(e => e.UutprofileId);

                entity.ToTable("tbUUTProfile");

                entity.Property(e => e.UutprofileId).HasColumnName("UUTProfileID");

                entity.Property(e => e.FixtureId).HasColumnName("fixtureID");

                entity.Property(e => e.IsActive).HasColumnName("isActive");

                entity.Property(e => e.ProfileId).HasColumnName("profileID");

                entity.Property(e => e.RevId).HasColumnName("RevID");

                entity.Property(e => e.StationId).HasColumnName("stationID");

                entity.Property(e => e.UutnameId).HasColumnName("UUTNameID");

                entity.Property(e => e.UutprofileDate)
                    .HasColumnName("UUTProfileDate")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<TbEquipment>(entity =>
          {
              entity.HasKey(e => e.EquipId);

              entity.ToTable("tbEquipment");

              entity.Property(e => e.EquipId).HasColumnName("equipID");

              entity.Property(e => e.EquipCaldue)
                  .HasColumnName("equipCALDue")
                  .HasColumnType("datetime");

              entity.Property(e => e.EquipDeviceId)
                  .HasColumnName("equipDeviceID")
                  .HasMaxLength(25);

              entity.Property(e => e.EquipIrdassetNo)
                  .HasColumnName("equipIRDAssetNo")
                  .HasMaxLength(10)
                  .IsFixedLength();

              entity.Property(e => e.EquipIsCal).HasColumnName("equipIsCAL");

              entity.Property(e => e.EquipManufact)
                  .HasColumnName("equipManufact")
                  .HasMaxLength(100);

              entity.Property(e => e.EquipModel)
                  .HasColumnName("equipModel")
                  .HasMaxLength(40);

              entity.Property(e => e.EquipModelNo)
                  .HasColumnName("equipModelNO")
                  .HasMaxLength(25)
                  .IsFixedLength();

              entity.Property(e => e.EquipName)
                  .IsRequired()
                  .HasColumnName("equipName")
                  .HasMaxLength(150);

              entity.Property(e => e.EquipOwner)
                  .HasColumnName("equipOwner")
                  .HasMaxLength(50);

              entity.Property(e => e.EquipSerialNo)
                  .HasColumnName("equipSerialNo")
                  .HasMaxLength(50)
                  .IsFixedLength();

              entity.Property(e => e.IsActive)
                  .HasColumnName("isActive")
                  .HasDefaultValueSql("((1))");

              entity.Property(e => e.StationId).HasColumnName("stationID");
          });

           modelBuilder.Entity<TbAteconfigFile>(entity =>
            {
                entity.HasKey(e => e.ConfigId);

                entity.ToTable("tbATEConfigFile");

                entity.Property(e => e.ConfigId).HasColumnName("ConfigID");

                entity.Property(e => e.CheckSum)
                    .HasColumnName("Check_Sum")
                    .HasMaxLength(65);

                entity.Property(e => e.ConfigData)
                    .IsRequired()
                    .IsUnicode(false);

                entity.Property(e => e.ConfigName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ConfigRevNo)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ConfigType)
                    .IsRequired()
                    .HasColumnName("Config_Type")
                    .HasMaxLength(10)
                    .HasDefaultValueSql("(N'Test')");

                entity.Property(e => e.DateAdd).HasColumnType("datetime");

                entity.Property(e => e.DateModify).HasColumnType("datetime");

                entity.Property(e => e.DateRelease).HasColumnType("datetime");

                entity.Property(e => e.HardwareType)
                    .IsRequired()
                    .HasColumnName("Hardware_Type")
                    .HasMaxLength(10);

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasColumnName("isActive")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.StationId).HasColumnName("stationID");

                entity.Property(e => e.TestLimitNote).HasColumnName("Test_Limit_Note");

                entity.Property(e => e.UserId).HasColumnName("UserID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}
