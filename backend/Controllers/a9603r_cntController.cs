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
    public class a9603r_cntController : ControllerBase
    {

        ILogger<a9603r_cntController> _logger;
        private readonly Ia9603rCntRepository ia9603rCntRepository;

        public a9603r_cntController(ILogger<a9603r_cntController> logger, Ia9603rCntRepository ia9603rCntRepository)
        {
            _logger = logger;
            this.ia9603rCntRepository = ia9603rCntRepository;

            Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Geta9603r_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = ia9603rCntRepository.Geta9603r_cntAll();
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
                var result = ia9603rCntRepository.Geta9603r_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9603r_cntById(int id)
        {
            try
            {
                var result = ia9603rCntRepository.Geta9603r_cntByID(id);
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
        public IActionResult Adda9603r_cnt([FromForm] a9603r_cnt model)
        {
            try
            {
                var result = ia9603rCntRepository.Adda9603r_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9603r_cnt([FromForm] a9603r_cnt model, int id)
        {
            try
            {

                var result = ia9603rCntRepository.Geta9603r_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = ia9603rCntRepository.Updatea9603r_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9603r_cnt(int id)
        {
            try
            {
                var result = ia9603rCntRepository.Geta9603r_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                ia9603rCntRepository.Deletea9603r_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}