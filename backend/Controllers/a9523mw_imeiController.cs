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
    [ApiController]
    [Route("api/[controller]")]
    public class a9523mw_imeiController : ControllerBase
    {
        ILogger<a9523mw_imeiController> _logger;
        private readonly Ia9523mwImeiRepository ia9523mwImeiRepository;

        public a9523mw_imeiController(ILogger<a9523mw_imeiController> logger, Ia9523mwImeiRepository ia9523mwImeiRepository)
        {
            _logger = logger;
            this.ia9523mwImeiRepository = ia9523mwImeiRepository;

        }


        [HttpGet]
        public IActionResult Geta9523mw_imeiAll()
        {


            //     Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = ia9523mwImeiRepository.Geta9523mw_imeiAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("GetImeiArray/{id}")]
        [AllowAnonymous]
        public IActionResult GetImei_9523mw_imei_Array(string id)
        {
            //    Debug.WriteLine("Array");
            //     Debug.WriteLine(id);
            // string phrase = "CB0010&CB00FM&CB0BK4";
            string[] array = id.Split('&');

            //String[] array = new String[] { "CB0010", "CB00FM", "CB000C" };

            try
            {
                var result = ia9523mwImeiRepository.GetImei_a9523mw_imei_Array(array);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetSNArray/{id}")]
        [AllowAnonymous]
        public IActionResult GetSN_9523mw_imei_Array(string id)
        {
            //    Debug.WriteLine("Array");
            //     Debug.WriteLine(id);
            // string phrase = "CB0010&CB00FM&CB0BK4";
            string[] array = id.Split('&');

            //String[] array = new String[] { "CB0010", "CB00FM", "CB000C" };

            try
            {
                var result = ia9523mwImeiRepository.GetSN_a9523mw_imei_Array(array);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetImei/{id}")]
        [AllowAnonymous]
        public IActionResult GetImei_9523mw_imei(string id)
        {
            try
            {
                var result = ia9523mwImeiRepository.GetImei_a9523mw_imei(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetSN/{id}")]
        [AllowAnonymous]
        public IActionResult GetSN_9523mw_imei(string id)
        {
            try
            {
                var result = ia9523mwImeiRepository.GetSN_a9523mw_imei(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }


        [HttpGet("report")]
        [AllowAnonymous]
        public IActionResult GetReport()
        {
            try
            {
                var result = ia9523mwImeiRepository.Geta9523mw_imeiAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9523mw_imeiById(int id)
        {
            try
            {
                var result = ia9523mwImeiRepository.Geta9523mw_imeiByID(id);
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

        [HttpPost]
        public IActionResult Adda9523mw_imei([FromForm] a9523mw_imei model)
        {
            try
            {
                var result = ia9523mwImeiRepository.Adda9523mw_imei(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9523mw_imei([FromForm] a9523mw_imei model, int id)
        {
            try
            {

                var result = ia9523mwImeiRepository.Geta9523mw_imeiByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.imei = model.imei;
                result.sn = model.sn;
                result.remodel = model.remodel;

                result = ia9523mwImeiRepository.Updatea9523mw_imei(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9523mw_imei(int id)
        {
            try
            {
                var result = ia9523mwImeiRepository.Geta9523mw_imeiByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                ia9523mwImeiRepository.Deletea9523mw_imei(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }



    }

}