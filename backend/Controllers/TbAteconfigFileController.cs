using System;
using System.Diagnostics;
using System.Linq;
using backend.Models;
using backend.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    // [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TbAteconfigFileController : ControllerBase
    {
        ILogger<TbAteconfigFileController> _logger;
        private readonly ITbAteconfigFileRepository iTbAteconfigFileRepository;

        public TbAteconfigFileController(ILogger<TbAteconfigFileController> logger, ITbAteconfigFileRepository iTbAteconfigFileRepository)
        {
            _logger = logger;
            this.iTbAteconfigFileRepository = iTbAteconfigFileRepository;

        }

        [HttpGet("filter/{id}")]
        public IActionResult GetTbAteconfigFileAll(string id)
        {

            string[] array = id.Split('&');

         //   Debug.WriteLine(array[0]);
         //    Debug.WriteLine(array[1]);

            try
            {
                var result = iTbAteconfigFileRepository.GetTbAteconfigFileAll(array[0], array[1]);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("filterConfigType/{id}")]
        public IActionResult GetTbAteconfigFileForFilterConfigType(string id)
        {
          //  Debug.WriteLine("aaaaa");
         //    Debug.WriteLine(id);

            try
            {
                var result = iTbAteconfigFileRepository.GetTbAteconfigFileForFilterConfigType(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("filterHardwareType/{id}")]
        public IActionResult GetTbAteconfigFileForFilterHardwareType(string id)
        {



            try
            {
                var result = iTbAteconfigFileRepository.GetTbAteconfigFileForFilterHardwareType(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("report")]
        public IActionResult GetTbAteconfigFileByHardwareType()
        {
            try
            {
                var result = iTbAteconfigFileRepository.GetTbAteconfigFileByHardwareType();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("report2")]
        public IActionResult GetTbAteconfigFileByConfigType()
        {
            try
            {
                var result = iTbAteconfigFileRepository.GetTbAteconfigFileByConfigType();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpPost]
        public IActionResult AddTbAteconfigFile([FromForm] TbAteconfigFile model)
        {
            try
            {
                var result = iTbAteconfigFileRepository.AddTbAteconfigFile(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteTbAteconfigFile(int id)
        {
            try
            {
                var result = iTbAteconfigFileRepository.GetTbAteconfigFileByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                iTbAteconfigFileRepository.DeleteTbAteconfigFile(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetTbAteconfigFileByID(int id)
        {

            try
            {
                var result = iTbAteconfigFileRepository.GetTbAteconfigFileByID(id);
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
        public IActionResult EditTbAteconfigFile([FromForm] TbAteconfigFile model, int id)
        {

                Debug.WriteLine("Edit");
             Debug.WriteLine(id);
              Debug.WriteLine(model.StationId);
              Debug.WriteLine(model.ConfigType);
            
               Debug.WriteLine("XX255");

            try
            {

                var result = iTbAteconfigFileRepository.GetTbAteconfigFileByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                //  result.Seq = model.Seq;
                result.StationId = model.StationId;
                result.ConfigType = model.ConfigType;
                result.HardwareType = model.HardwareType;
                result.UserId = model.UserId;
                result.ConfigName = model.ConfigName;
                result.ConfigRevNo = model.ConfigRevNo;
                result.ConfigData = model.ConfigData;
                result.CheckSum = model.CheckSum;
                result.TestLimitNote = model.TestLimitNote;
                result.IsActive = model.IsActive;

                result = iTbAteconfigFileRepository.UpdateTbAteconfigFile(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


    }
}