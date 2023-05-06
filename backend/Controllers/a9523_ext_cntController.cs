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
    public class a9523_ext_cntController : ControllerBase
    {

        ILogger<a9523_ext_cntController> _logger;
        private readonly Ia9523ExtCntRepository Ia9523ExtCntRepository;

        public a9523_ext_cntController(ILogger<a9523_ext_cntController> logger, Ia9523ExtCntRepository Ia9523ExtCntRepository)
        {
            _logger = logger;
            this.Ia9523ExtCntRepository = Ia9523ExtCntRepository;

          //  Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Geta9523_ext_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = Ia9523ExtCntRepository.Geta9523_ext_cntAll();
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
                var result = Ia9523ExtCntRepository.Geta9523_ext_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9523_ext_cntById(int id)
        {
            try
            {
                var result = Ia9523ExtCntRepository.Geta9523_ext_cntByID(id);
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
        public IActionResult Adda9523_ext_cnt([FromForm] a9523_ext_cnt model)
        {
            try
            {
                var result = Ia9523ExtCntRepository.Adda9523_ext_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9523_ext_cnt([FromForm] a9523_ext_cnt model, int id)
        {
            try
            {

                var result = Ia9523ExtCntRepository.Geta9523_ext_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = Ia9523ExtCntRepository.Updatea9523_ext_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9523_ext_cnt(int id)
        {
            try
            {
                var result = Ia9523ExtCntRepository.Geta9523_ext_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                Ia9523ExtCntRepository.Deletea9523_ext_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}