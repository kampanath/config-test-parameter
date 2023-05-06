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
    public class a9523_ext_imeiController : ControllerBase
    {
        ILogger<a9523_ext_imeiController> _logger;
        private readonly Ia9523ExtImeiRepository Ia9523ExtImeiRepository;

        public a9523_ext_imeiController(ILogger<a9523_ext_imeiController> logger, Ia9523ExtImeiRepository Ia9523ExtImeiRepository)
        {
            _logger = logger;
            this.Ia9523ExtImeiRepository = Ia9523ExtImeiRepository;

        }


        [HttpGet]
        public IActionResult Geta9523_ext_imeiAll()
        {


            //     Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = Ia9523ExtImeiRepository.Geta9523_ext_imeiAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("GetImeiArray/{id}")]
        [AllowAnonymous]
        public IActionResult GetImei_9523_ext_imei_Array(string id)
        {
            //    Debug.WriteLine("Array");
            //     Debug.WriteLine(id);
            // string phrase = "CB0010&CB00FM&CB0BK4";
            string[] array = id.Split('&');

            //String[] array = new String[] { "CB0010", "CB00FM", "CB000C" };

            try
            {
                var result = Ia9523ExtImeiRepository.GetImei_9523_ext_imei_Array(array);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetSNArray/{id}")]
        [AllowAnonymous]
        public IActionResult GetSN_9523_ext_imei_Array(string id)
        {
            //    Debug.WriteLine("Array");
            //     Debug.WriteLine(id);
            // string phrase = "CB0010&CB00FM&CB0BK4";
            string[] array = id.Split('&');

            //String[] array = new String[] { "CB0010", "CB00FM", "CB000C" };

            try
            {
                var result = Ia9523ExtImeiRepository.GetSN_9523_ext_imei_Array(array);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetImei/{id}")]
        [AllowAnonymous]
        public IActionResult GetImei_9523_ext_imei(string id)
        {
            try
            {
                var result = Ia9523ExtImeiRepository.GetImei_9523_ext_imei(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetSN/{id}")]
        [AllowAnonymous]
        public IActionResult GetSN_9523_ext_imei(string id)
        {
            try
            {
                var result = Ia9523ExtImeiRepository.GetSN_9523_ext_imei(id);
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
                var result = Ia9523ExtImeiRepository.Geta9523_ext_imeiAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9523_ext_imeiById(int id)
        {
            try
            {
                var result = Ia9523ExtImeiRepository.Geta9523_ext_imeiByID(id);
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
        public IActionResult Adda9523_ext_imei([FromForm] a9523_ext_imei model)
        {
            try
            {
                var result = Ia9523ExtImeiRepository.Adda9523_ext_imei(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9523_ext_imei([FromForm] a9523_ext_imei model, int id)
        {
            try
            {

                var result = Ia9523ExtImeiRepository.Geta9523_ext_imeiByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.imei = model.imei;
                result.sn = model.sn;
                result.remodel = model.remodel;

                result = Ia9523ExtImeiRepository.Updatea9523_ext_imei(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9523_ext_imei(int id)
        {
            try
            {
                var result = Ia9523ExtImeiRepository.Geta9523_ext_imeiByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                Ia9523ExtImeiRepository.Deletea9523_ext_imei(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }



    }

}