using System;
using System.Diagnostics;
using System.Linq;
using backend.Models;
using backend.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Globalization;

namespace backend.Controllers
{
    // [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class equipmentCalController : ControllerBase
    {
        ILogger<equipmentCalController> _logger;
        private readonly IequipmentCalRepository iequipmentCalRepository;

        public equipmentCalController(ILogger<equipmentCalController> logger, IequipmentCalRepository iequipmentCalRepository)
        {
            _logger = logger;
            this.iequipmentCalRepository = iequipmentCalRepository;

        }

        [HttpGet("filter/{id}")]
        public IActionResult GetequipmentCalAll(string id)
        {

            string[] array = id.Split('&');

         //   Debug.WriteLine(array[0]);
         //    Debug.WriteLine(array[1]);

            try
            {
                var result = iequipmentCalRepository.GetequipmentCalAll(array[0], array[1]);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("filterLocation/{id}")]
        public IActionResult GetequipmentCalForFilterLocation(string id)
        {
          //  Debug.WriteLine("aaaaa");
         //    Debug.WriteLine(id);

            try
            {
                var result = iequipmentCalRepository.GetequipmentCalForFilterLocation(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("filterATE_No/{id}")]
        public IActionResult GetequipmentCalForFilterATE_No(string id)
        {



            try
            {
                var result = iequipmentCalRepository.GetequipmentCalForFilterATE_No(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("getATE")]
        public IActionResult GetequipmentCalByATE_No()
        {
            try
            {
                var result = iequipmentCalRepository.GetequipmentCalByATE_No();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }


        [HttpGet("getMaxID")]
        public IActionResult GetequipmentCalByID2()
        {
            try
            {
                 euipmentCalMaxID  mymaxid = new euipmentCalMaxID();
                mymaxid.maxIdmax = iequipmentCalRepository.GetequipmentCalByID2();

                var result = mymaxid;
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("getLocation")]
        public IActionResult GetequipmentCalByLocation()
        {
            try
            {
                var result = iequipmentCalRepository.GetequipmentCalByLocation();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpPost]
        public IActionResult AddequipmentCal([FromForm] ate_equipment_cal model456)
        {
            try
            {
             
                 model456.Equipment_ID = iequipmentCalRepository.GetequipmentCalByID2();
                 model456.Equipment_ID++;
                var result = iequipmentCalRepository.AddequipmentCal(model456);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteequipmentCal(int id)
        {
            try
            {
                var result = iequipmentCalRepository.GetequipmentCalByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                iequipmentCalRepository.DeleteequipmentCal(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetequipmentCalByID(int id)
        {

            try
            {
                var result = iequipmentCalRepository.GetequipmentCalByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "fsilure" });
                }
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpPut("{id}")]
        public IActionResult EditequipmentCal([FromForm] ate_equipment_cal model123, int id)
        {

            try
            {

                var result = iequipmentCalRepository.GetequipmentCalByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });
    
                }

/*
                Debug.WriteLine("Edit Equipment Cal");
                Debug.WriteLine("result");
                Debug.WriteLine(result.Equipment_ID);
                Debug.WriteLine(result.Equipment_Name);
                Debug.WriteLine("model");
                Debug.WriteLine("model.Equipment_ID");
                 Debug.WriteLine(model.Equipment_ID);
                Debug.WriteLine("model.Equipment_Name");
                 Debug.WriteLine(model.Equipment_Name);
                  Debug.WriteLine("model");
                   Debug.WriteLine(model.Model123);
                Debug.WriteLine("model.Serial_No");
                 Debug.WriteLine(model.Serial_No);
                   Debug.WriteLine("model.Manufacturer");
                     Debug.WriteLine(model.Manufacturer);
                 Debug.WriteLine("model.ATE_No");
                  Debug.WriteLine(model.ATE_No);
                Debug.WriteLine("model.Location");
                 Debug.WriteLine(model.Location);
                Debug.WriteLine("model.Asset_No");
                 Debug.WriteLine(model.Asset_No);
                 Debug.WriteLine("model.Last_Cal_Date");
                Debug.WriteLine(model.Last_Cal_Date);
                     Debug.WriteLine("model.Next_Cal_Due_Date");
                          Debug.WriteLine(model.Next_Cal_Due_Date);
                Debug.WriteLine("model.Cal_Cycle");
                 Debug.WriteLine(model.Cal_Cycle);
                Debug.WriteLine("model.Remark");
                 Debug.WriteLine(model.Remark);
           */

              Debug.WriteLine("model.Last_Cal_Date");
                Debug.WriteLine(model123.Last_Cal_Date);
                     Debug.WriteLine("model.Next_Cal_Due_Date");
                          Debug.WriteLine(model123.Next_Cal_Due_Date);

Debug.WriteLine("Datetime Now");
Debug.WriteLine(DateTime.Now);



// 4/7/2563 14:34:09

        //SQL accept this format
 //       string date = "2563-10-15";
//        DateTime time = DateTime.Parse(date);

      
        


                //  result.Seq = model.Seq;
                result.Equipment_Name = model123.Equipment_Name;
                result.Model = model123.Model;
                result.Serial_No = model123.Serial_No;
                result.Manufacturer = model123.Manufacturer;
                result.ATE_No = model123.ATE_No;
                result.Location = model123.Location;
                result.Asset_No = model123.Asset_No;
                result.Last_Cal_Date = model123.Last_Cal_Date;
                result.Next_Cal_Due_Date = model123.Next_Cal_Due_Date;
                result.Cal_Cycle = model123.Cal_Cycle;
                result.Remark = model123.Remark;

                result = iequipmentCalRepository.UpdateequipmentCal(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


    }
}