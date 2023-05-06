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
    public class a9522b_imeiController : ControllerBase
    {
        ILogger<a9522b_imeiController> _logger;
        private readonly Ia9522bIMEIRepository ia9522BIMEIRepository;

        public a9522b_imeiController(ILogger<a9522b_imeiController> logger, Ia9522bIMEIRepository ia9522BIMEIRepository)
        {
            _logger = logger;
            this.ia9522BIMEIRepository = ia9522BIMEIRepository;

        }


        [HttpGet]
        public IActionResult Geta9522b_imeiAll()
        {


            //     Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = ia9522BIMEIRepository.Geta9522b_imeiAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("GetImeiArray/{id}")]
        [AllowAnonymous]
        public IActionResult GetImei_9522b_imei_Array(string id)
        {
            //    Debug.WriteLine("Array");
            //     Debug.WriteLine(id);
            // string phrase = "CB0010&CB00FM&CB0BK4";
            string[] array = id.Split('&');

            //String[] array = new String[] { "CB0010", "CB00FM", "CB000C" };

            try
            {
                var result = ia9522BIMEIRepository.GetImei_9522b_imei_Array(array);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetSNArray/{id}")]
        [AllowAnonymous]
        public IActionResult GetSN_9522b_imei_Array(string id)
        {
            //    Debug.WriteLine("Array");
            //     Debug.WriteLine(id);
            // string phrase = "CB0010&CB00FM&CB0BK4";
            string[] array = id.Split('&');

            //String[] array = new String[] { "CB0010", "CB00FM", "CB000C" };

            try
            {
                var result = ia9522BIMEIRepository.GetSN_9522b_imei_Array(array);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetImei/{id}")]
        [AllowAnonymous]
        public IActionResult GetImei_9522b_imei(string id)
        {
            try
            {
                var result = ia9522BIMEIRepository.GetImei_9522b_imei(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("GetSN/{id}")]
        [AllowAnonymous]
        public IActionResult GetSN_9522b_imei(string id)
        {
            try
            {
                var result = ia9522BIMEIRepository.GetSN_9522b_imei(id);
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
                var result = ia9522BIMEIRepository.Geta9522b_imeiAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9522b_imeiById(int id)
        {
            try
            {
                var result = ia9522BIMEIRepository.Geta9522b_imeiByID(id);
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
        public IActionResult Adda9522b_imei([FromForm] a9522b_imei model)
        {
            try
            {
                var result = ia9522BIMEIRepository.Adda9522b_imei(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9522b_imei([FromForm] a9522b_imei model, int id)
        {
            try
            {

                var result = ia9522BIMEIRepository.Geta9522b_imeiByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.imei = model.imei;
                result.sn = model.sn;
                result.remodel = model.remodel;

                result = ia9522BIMEIRepository.Updatea9522b_imei(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9522b_imei(int id)
        {
            try
            {
                var result = ia9522BIMEIRepository.Geta9522b_imeiByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                ia9522BIMEIRepository.Deletea9522b_imei(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }



    }

}