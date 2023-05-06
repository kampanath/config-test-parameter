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
using System.Threading;

namespace backend.services
{
    public class genericRepository : IgenericRepository
    {

        private readonly DatabaseContext2 databaseContext2;

        private readonly DatabaseContext databaseContext;
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly IWebHostEnvironment webHostEnvironment;

        public genericRepository(
           DatabaseContext2 databaseContext2,
            DatabaseContext databaseContext,
           IHttpContextAccessor httpContextAccessor,
           IWebHostEnvironment webHostEnvironment
           )
        {
            this.databaseContext2 = databaseContext2;
            this.databaseContext = databaseContext;
            this.httpContextAccessor = httpContextAccessor;
            this.webHostEnvironment = webHostEnvironment;

        }

        public IEnumerable<getTableNames> GetAllTableNames()
        {

            Debug.WriteLine("BBBBBBBBBBBBBB");
            return databaseContext2.getTableNames.FromSqlRaw("show tables like '%imei'").ToList();
            // return databaseContext2.getTableNames.FromSqlRaw("show tables").ToList();

        }

        public IEnumerable<genericIMEI> GetIMEILatestRow(string tableName)
        {


            var items = databaseContext2.genericIMEI.FromSqlRaw("SELECT " + "id" + tableName + " as id, imei ,sn,remodel FROM " + tableName + " ORDER BY id DESC LIMIT 1;");

            //    var items = databaseContext2.a9575e_imei.OrderByDescending(u => u.id9575e_imei).Take(1).Select(p => p.id9575e_imei).ToList();
            return items;

        }

        public IEnumerable<genericIMEI> GetIMEIAllTable(string tableName)
        {

            //            Debug.WriteLine("MOONONON");
            //            Debug.WriteLine(tableName);
            //         return dataContext.ProdSnyields.FromSqlRaw("SELECT UUTSerialNo, testResult,socketNo ,testDateTime , testMessage FROM [iridiumDB].[dbo].[tbTestResult] Where cast ([testDateTime] as date) = '2019-01-29'");

            var items = databaseContext2.genericIMEI.FromSqlRaw("SELECT " + "id" + tableName + " as id, imei ,sn,remodel FROM " + tableName + " ORDER BY id;");

            //  var items = databaseContext2.getTableNames.OrderByDescending(u => u.id9575e_imei).Take(1).Select(p => p.id9575e_imei).ToList();
            return items;
        }


        public genericIMEI AddGenericIMEI(genericIMEI model, string tableName)
        {

            Debug.WriteLine(model.id);
            Debug.WriteLine(model.imei);


            var commandText = "INSERT INTO 9575e_imei VALUES ({0}, '300415040806524', '0','0');";

            databaseContext2.Database.ExecuteSqlRaw(commandText, 15);

            databaseContext2.SaveChanges();
            return model;
        }

        public IEnumerable<ateCalibration> ateCalAllToday(string stationNameParam, string fixtureNameParam, string startDateParm, string stopDateParam)
        {

            DateTime myDateTime = DateTime.Now;

             Debug.WriteLine("fixtureName");
             Debug.WriteLine(fixtureNameParam);


            //Frontend send datetime like "2017-10-11" so it pass to SQL parameter without edit

            string startDate = myDateTime.ToString("2017-10-11");
            string stopDate = myDateTime.ToString("2020-05-11");


            string startDateToday = myDateTime.ToString(startDateParm + "T00:00:00");
            string stopDateToday = myDateTime.ToString(stopDateParam + "T23:59:59");


            //		where tbCalibration.CalDateTime > CONVERT(datetime,'2018-01-21T00:00:00')
            //		and tbCalibration.CalDateTime <= CONVERT(datetime,'2018-01-21T23:59:59')

            /*
           myDateTime.ToString("s");
           => 2013-12-31T00:00:00
            */

            Debug.WriteLine("myDateTime");
            Debug.WriteLine(myDateTime);

            Debug.WriteLine("startDate");
            Debug.WriteLine(startDate);
            /*
                string query = @"SELECT TOP (5) tbCalibration.CalID, tbCalibration.socketNo, tbCalibration.UUTNameID, tbCalibration.CalDateTime, tbCalibration.userID, tbCalibration.Remark, tbCalibration.softwareVer, tbCalibration.isActive, tbStation.stationName, 
                                                 tbFixture.fixtureName, tbCalibration.stationID, tbCalibration.fixtureID, tbUser.userName
                                 FROM tbCalibration LEFT OUTER JOIN
                                        tbUUTName ON tbCalibration.UUTNameID = tbUUTName.UUTNameID LEFT OUTER JOIN
                                        tbFixture ON tbCalibration.fixtureID = tbFixture.fixtureID LEFT OUTER JOIN
                                        tbStation ON tbCalibration.stationID = tbStation.stationID LEFT OUTER JOIN
                                        tbUser ON tbCalibration.userID = tbUser.userID
                                 where tbCalibration.CalDateTime >= CONVERT(datetime,'2017-10-02') 
                                        and tbCalibration.CalDateTime < CONVERT(datetime,'2020-10-03')";
            */


            string query = @"SELECT TOP (100) tbCalibration.CalID, tbCalibration.socketNo, tbCalibration.UUTNameID, tbCalibration.CalDateTime, tbCalibration.userID, tbCalibration.Remark, tbCalibration.softwareVer, tbCalibration.isActive, tbStation.stationName, 
                                             tbFixture.fixtureName, tbCalibration.stationID, tbCalibration.fixtureID, tbUser.userName
                             FROM tbCalibration LEFT OUTER JOIN
                                    tbUUTName ON tbCalibration.UUTNameID = tbUUTName.UUTNameID LEFT OUTER JOIN
                                    tbFixture ON tbCalibration.fixtureID = tbFixture.fixtureID LEFT OUTER JOIN
                                    tbStation ON tbCalibration.stationID = tbStation.stationID LEFT OUTER JOIN
                                    tbUser ON tbCalibration.userID = tbUser.userID
					     	 where tbCalibration.CalDateTime >= CONVERT(datetime,'" + startDateToday + @"')
                                and tbCalibration.CalDateTime < CONVERT(datetime,'" + stopDateToday + @"')
                                and tbStation.stationName LIKE '" + stationNameParam + @"'
                                and tbFixture.fixtureName LIKE '" + fixtureNameParam + @"'";


            Debug.WriteLine("query");
            Debug.WriteLine(query);

            var items = databaseContext.ateCalibration.FromSqlRaw(query);

            return items;
        }

        public IEnumerable<ateCalibrationATEName> GetTbAteCalByATENameColumn()
        {

            string query = @"SELECT DISTINCT  tbStation.stationName
                     FROM tbCalibration LEFT OUTER JOIN
                            tbUUTName ON tbCalibration.UUTNameID = tbUUTName.UUTNameID LEFT OUTER JOIN
                            tbFixture ON tbCalibration.fixtureID = tbFixture.fixtureID LEFT OUTER JOIN
                            tbStation ON tbCalibration.stationID = tbStation.stationID LEFT OUTER JOIN
                            tbUser ON tbCalibration.userID = tbUser.userID";


            //  return databaseContext.TbAteconfigFile.Select(p => p.HardwareType ).Distinct().ToList();
            var items = databaseContext.ateCalibrationATEName.FromSqlRaw(query).ToList();

            return items;

        }

        public IEnumerable<ateCalibrationFixtureName> GetateCalFixtureNameByATEName(string ATEName)
        {
            string query = @"SELECT DISTINCT tbFixture.fixtureName
                     FROM tbCalibration LEFT OUTER JOIN
                            tbUUTName ON tbCalibration.UUTNameID = tbUUTName.UUTNameID LEFT OUTER JOIN
                            tbFixture ON tbCalibration.fixtureID = tbFixture.fixtureID LEFT OUTER JOIN
                            tbStation ON tbCalibration.stationID = tbStation.stationID LEFT OUTER JOIN
                            tbUser ON tbCalibration.userID = tbUser.userID
                            where tbStation.stationName LIKE '" + ATEName +"'";

            var items = databaseContext.ateCalibrationFixtureName.FromSqlRaw(query).ToList();

            return items;
        }


        //       public IEnumerable<genericCheckDuplicate> checkIMEIDuplicate(string tableName , string IMEI)
        public IEnumerable<genericCheckDuplicate> checkIMEIDuplicate(string tableName, string[] IMEI)
        {

            Debug.WriteLine("Check duplicate repository ");

            IEnumerable<genericCheckDuplicate> items = new genericCheckDuplicate[] { };

            bool IsDuplicate = true;

            long index = 1;  //not include first index that is table name

            while (index < IMEI.Length)
            {
                items = databaseContext2.genericCheckDuplicate.FromSqlRaw("SELECT DISTINCT imei FROM " + tableName + " where imei='" + IMEI[index] + "';");

                Debug.WriteLine("Count");
                Debug.WriteLine(items.First().imei);
                if (items.Count() > 0)
                {
                    return items;
                }
                index++;
            }


            Debug.WriteLine("index at finish  ");
            Debug.WriteLine(index);

            //----------------------------- Find Lastest Row ---------------------------------------------
            var LastestRow = databaseContext2.genericIMEI.FromSqlRaw("SELECT " + "id" + tableName + " as id, imei ,sn,remodel FROM " + tableName + " ORDER BY id DESC LIMIT 1;").ToList();

            long addIMEIIndex = LastestRow[0].id + 1;

            index = 1;

            //=============================   End Find Lastest Row =========================================

            Debug.WriteLine("Before loop  ");
            Debug.WriteLine("index ");
            Debug.WriteLine(index);

            Debug.WriteLine("addIMEIIndex ");
            Debug.WriteLine(addIMEIIndex);

            Debug.WriteLine("IMEI LENGTH ");
            Debug.WriteLine(IMEI.Length);

            var commandText = "TEST";
            var commandTextTemp = "TEST";

            //----------------------- ----- Add IMEI ----------------------------------------



            int maxRowPerINsertCount = 0;
            int roundCount = 0;

            while (index < IMEI.Length)
            {
                commandText = "INSERT INTO " + tableName + " VALUES ";
                maxRowPerINsertCount = 0;

                while ((index < IMEI.Length) & (maxRowPerINsertCount < 999))
                {
                    //  Debug.WriteLine("Inside Loop );
                    Debug.WriteLine(index + " Round : " + roundCount);

                    //    commandText = "INSERT INTO " + tableName +  " VALUES ({0}, {1}, '0','0');";
                    //    commandTextTemp = "(8, '300025060001099', '0','0')";
                    commandTextTemp = "(" + addIMEIIndex + ",'" + IMEI[index] + "', '0','0')";



                    if (index < (IMEI.Length - 1))
                    {
                        commandTextTemp += ",";
                    }
                    else
                    {
                        commandTextTemp += ";";
                    }

                    commandText += commandTextTemp;

                    //   INSERT INTO 9575e_imei VALUES (5,'300025060001099','0','0'),(6,'300025060001488','0','0');


                    //     databaseContext2.Database.ExecuteSqlRaw(commandText, addIMEIIndex, IMEI[index]);


                    index++;
                    addIMEIIndex++;
                    maxRowPerINsertCount++;
                }

                Debug.WriteLine("Before SQLRaw");

                int effectRow = 0;
                effectRow = databaseContext2.Database.ExecuteSqlRaw(commandText);

                while (effectRow < IMEI.Length - 2)
                {
                    Debug.WriteLine("Command Text");
                    Debug.WriteLine(effectRow);
                    Thread.Sleep(200);
                }

                Debug.WriteLine("Fnish");
                Debug.WriteLine(commandText);
                roundCount++;

            }// loop add IMEI

            //---------------------- ---- End Add IMEI --------------------------------------

            databaseContext2.SaveChanges();

            Debug.WriteLine("Items");
            Debug.WriteLine(items);
            return items;

        }// end function

    }
}

