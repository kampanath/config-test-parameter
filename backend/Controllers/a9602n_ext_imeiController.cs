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
    public class a9602n_ext_imeiController : ControllerBase
    {
        ILogger<a9602n_ext_imeiController> _logger;
        private readonly Ia9602nExtImeiRepository ia9602nExtImeiRepository;

        public a9602n_ext_imeiController(ILogger<a9602n_ext_imeiController> logger, Ia9602nExtImeiRepository ia9602nExtImeiRepository)
        {
            _logger = logger;
            this.ia9602nExtImeiRepository = ia9602nExtImeiRepository;

        }

          [HttpGet("GetImeiArray/{id}")]
        [AllowAnonymous]
        public IActionResult GetImei_9602n_ext_imei_Array(string id)
        {
            //    Debug.WriteLine("Array");
            //     Debug.WriteLine(id);
            // string phrase = "CB0010&CB00FM&CB0BK4";
            string[] array = id.Split('&');

            //String[] array = new String[] { "CB0010", "CB00FM", "CB000C" };

            try
            {
                var result = ia9602nExtImeiRepository.GetImei_9602n_ext_imei_Array(array);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetSNArray/{id}")]
        [AllowAnonymous]
        public IActionResult GetSN_9602n_ext_imei_Array(string id)
        {
            //    Debug.WriteLine("Array");
            //     Debug.WriteLine(id);
            // string phrase = "CB0010&CB00FM&CB0BK4";
            string[] array = id.Split('&');

            //String[] array = new String[] { "CB0010", "CB00FM", "CB000C" };

            try
            {
                var result = ia9602nExtImeiRepository.GetSN_9602n_ext_imei_Array(array);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }


          [HttpGet]
        public IActionResult Geta9602n_ext_imeiAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = ia9602nExtImeiRepository.Geta9602n_ext_imeiAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

       [HttpGet("GetImei/{id}")]
       [AllowAnonymous]
        public IActionResult GetImei_9602n_ext_imei(string id)
        {
            try
            {
                var result = ia9602nExtImeiRepository.GetImei_9602n_ext_imei(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

       [HttpGet("GetSN/{id}")]
       [AllowAnonymous]
        public IActionResult GetSN_9602n_ext_imei(string id)
        {
            try
            {
                var result = ia9602nExtImeiRepository.GetSN_9602n_ext_imei(id);
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
                var result = ia9602nExtImeiRepository.Geta9602n_ext_imeiAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }
        
           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9602n_ext_imeiById(int id)
        {
            try
            {
                var result = ia9602nExtImeiRepository.Geta9602n_ext_imeiByID(id);
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
        public IActionResult Adda9602n_ext_imei([FromForm] a9602n_ext_imei model)
        {
            try
            {
                var result = ia9602nExtImeiRepository.Adda9602n_ext_imei(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9602n_ext_imei([FromForm] a9602n_ext_imei model, int id)
        {
            try
            {

                var result = ia9602nExtImeiRepository.Geta9602n_ext_imeiByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.imei = model.imei;
                 result.sn = model.sn;
                  result.remodel = model.remodel;
              
                result = ia9602nExtImeiRepository.Updatea9602n_ext_imei(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9602n_ext_imei(int id)
        {
            try
            {
                var result = ia9602nExtImeiRepository.Geta9602n_ext_imeiByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                ia9602nExtImeiRepository.Deletea9602n_ext_imei(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}