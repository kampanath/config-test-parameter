using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Extensions;
using backend.services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Pomelo.EntityFrameworkCore.MySql.Storage;
using System.Globalization;
using Microsoft.AspNetCore.Localization;
using Microsoft.Extensions.Options;

namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddCors(options =>
          {
              options.AddPolicy("EnableCORS", builder =>
              {
                  builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().Build();

              });
          });

            services.ConfigJSONNormal();
            services.ConfigDatabase(Configuration);
            services.ConfigDatabase2(Configuration);

            services.ConfigJWT(Configuration);
            services.ConfigCORS();

            services.Configure<RequestLocalizationOptions>(opts => {
                var supportedCultures = new List<CultureInfo> {
                    new CultureInfo("en"),
                    new CultureInfo("en-US"),
                };

                opts.DefaultRequestCulture = new RequestCulture("en-US");
                opts.SupportedCultures = supportedCultures;
                opts.SupportedUICultures = supportedCultures;
            
            });



            services.AddScoped<IAuthRepository, AuthRepository>(); //AddSingleton AddTransient AddScoped
            //Transient
            //Create new object evertime when called , then destroy when not use
            //when not use , not in memory but create every time object is called ( low performance )
            //SingleTon 
            //Create first time , no destroy
            //When not use stil in memory
            //Scoped
            //Hybrid between singleton and transient
            //If numbers of object was called in the same time , 
            services.AddScoped<IproductRepository, ProductRepository>();
            services.AddScoped<IIRD, IRD2>();
            services.AddScoped<ITbProfileRepository ,TbProfileRepository>();
            services.AddScoped<ITbProfileDetailRepository ,TbProfileDetailRepository>();
              services.AddScoped<IMySQLRepository ,MySQLRepository>();
              services.AddScoped<ITbUutnameRepository ,TbUutnameRepository>();
              services.AddScoped<ITbUutprofileRepository ,TbUutprofileRepository>();
                 services.AddScoped<Ia9522bIMEIRepository ,a9522bIMEIRepository>();
                 services.AddScoped<Ia9522bExtImeiRepository ,a9522bExtImeiRepository>();
                 services.AddScoped<Ia9522bExtCntRepository ,a9522bExtCntRepository>();

                 services.AddScoped<Ia9523CntRepository ,a9523CntRepository>();
                 services.AddScoped<Ia9523ExtCntRepository ,a9523ExtCntRepository>();
                 services.AddScoped<Ia9523ExtImeiRepository ,a9523ExtImeiRepository>();
                  services.AddScoped<Ia9523ImeiRepository ,a9523ImeiRepository>();
                 services.AddScoped<Ia9523mwCntRepository ,a9523mwCntRepository>();
             services.AddScoped<Ia9523mwExtCntRepository ,a9523mwExtCntRepository>();

              services.AddScoped<Ia9523mwExtImeiRepository ,a9523mwExtImeiRepository>();
               
                services.AddScoped<Ia9523mwImeiRepository ,a9523mwImeiRepository>();

                services.AddScoped<Ia9523pttCntRepository ,a9523pttCntRepository>();

                services.AddScoped<Ia9523pttImeiRepository ,a9523pttImeiRepository>();

                 services.AddScoped<Ia9555aCntRepository ,a9555aCntRepository>();

                 services.AddScoped<Ia9555aExtCntRepository ,a9555aExtCntRepository>();

                 services.AddScoped<Ia9555aExtImeiRepository ,a9555aExtImeiRepository>();

                  services.AddScoped<Ia9555aGsaCntRepository ,a9555aGsaCntRepository>();

                   services.AddScoped<Ia9555aGsaImeiRepository ,a9555aGsaImeiRepository>();

        services.AddScoped<Ia9555aImeiRepository ,a9555aImeiRepository>();
               
         services.AddScoped<Ia9575CntRepository ,a9575CntRepository>();

         services.AddScoped<Ia9575ExtCntRepository ,a9575ExtCntRepository>();


         services.AddScoped<Ia9575ExtImeiRepository ,a9575ExtImeiRepository>();

    services.AddScoped<Ia9575ImeiRepository ,a9575ImeiRepository>();

    services.AddScoped<Ia9575eCntRepository ,a9575eCntRepository>();

    services.AddScoped<Ia9575eExtCntRepository ,a9575eExtCntRepository>();

    services.AddScoped<Ia9575eExtImeiRepository ,a9575eExtImeiRepository>();

        
    services.AddScoped<Ia9575eImeiRepository ,a9575eImeiRepository>();

    services.AddScoped<Ia9575gsaCntRepository ,a9575gsaCntRepository>();

    services.AddScoped<Ia9575gsaImeiRepository ,a9575gsaImeiRepository>();

     services.AddScoped<Ia9575pttCntRepository ,a9575pttCntRepository>();

    services.AddScoped<Ia9575pttExtCntRepository ,a9575pttExtCntRepository>();

 services.AddScoped<Ia9575pttExtImeiRepository ,a9575pttExtImeiRepository>();

 services.AddScoped<Ia9575pttImeiRepository ,a9575pttImeiRepository>();

 services.AddScoped<Ia9602CntRepository ,a9602CntRepository>();


 services.AddScoped<Ia9602ImeiRepository ,a9602ImeiRepository>();

 services.AddScoped<Ia9602nExtCntRepository ,a9602nExtCntRepository>();

 services.AddScoped<Ia9602nExtImeiRepository ,a9602nExtImeiRepository>();


 services.AddScoped<Ia9602rCntRepository ,a9602rCntRepository>();

 services.AddScoped<Ia9602rImeiRepository ,a9602rImeiRepository>();

 services.AddScoped<Ia9602sbCntRepository ,a9602sbCntRepository>();


 services.AddScoped<Ia9602sbExtCntRepository ,a9602sbExtCntRepository>();
services.AddScoped<Ia9602sbExtImeiRepository ,a9602sbExtImeiRepository>();

services.AddScoped<Ia9602sbImeiRepository ,a9602sbImeiRepository>();


services.AddScoped<Ia9603CntRepository ,a9603CntRepository>();

services.AddScoped<Ia9603ImeiRepository ,a9603ImeiRepository>();

    services.AddScoped<Ia9603rCntRepository ,a9603rCntRepository>();

    services.AddScoped<Ia9603rImeiRepository ,a9603rImeiRepository>();

services.AddScoped<IbcxCntRepository ,bcxCntRepository>();

services.AddScoped<IbcxImeiRepository ,bcxImeiRepository>();
 
services.AddScoped<IgdbCntRepository ,gdbCntRepository>();

services.AddScoped<IgdbImeiRepository ,gdbImeiRepository>();
services.AddScoped<IsfxCntRepository ,sfxCntRepository>();


services.AddScoped<IsfxImeiRepository ,sfxImeiRepository>();
services.AddScoped<ITbEquipmentRepository ,TbEquipmentRepository>();

services.AddScoped<IateGoldBoardRepository ,ateGoldBoardRepository>();
services.AddScoped<ImodelRepository , modelRepository>();

services.AddScoped<ITbAteconfigFileRepository , TbAteconfigFileRepository>();

services.AddScoped<IgenericRepository , genericRepository>();

services.AddScoped<IequipmentCalRepository , equipmentCalRepository>();

services.AddHttpContextAccessor(); //upload image


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("AllowAll");

            app.UseAuthentication();

            app.UseAuthorization();

            var options = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>();
            app.UseRequestLocalization(options.Value);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}