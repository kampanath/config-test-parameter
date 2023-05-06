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
    public class a9602sb_ext_cntController : ControllerBase
    {

        ILogger<a9602sb_ext_cntController> _logger;
        private readonly Ia9602sbExtCntRepository ia9602sbExtCntRepository;

        public a9602sb_ext_cntController(ILogger<a9602sb_ext_cntController> logger, Ia9602sbExtCntRepository ia9602sbExtCntRepository)
        {
            _logger = logger;
            this.ia9602sbExtCntRepository = ia9602sbExtCntRepository;

            Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Geta9602sb_ext_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = ia9602sbExtCntRepository.Geta9602sb_ext_cntAll();
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
                var result = ia9602sbExtCntRepository.Geta9602sb_ext_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9602sb_ext_cntById(int id)
        {
            try
            {
                var result = ia9602sbExtCntRepository.Geta9602sb_ext_cntByID(id);
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
        public IActionResult Adda9602sb_ext_cnt([FromForm] a9602sb_ext_cnt model)
        {
            try
            {
                var result = ia9602sbExtCntRepository.Adda9602sb_ext_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9602sb_ext_cnt([FromForm] a9602sb_ext_cnt model, int id)
        {
            try
            {

                var result = ia9602sbExtCntRepository.Geta9602sb_ext_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = ia9602sbExtCntRepository.Updatea9602sb_ext_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9602sb_ext_cnt(int id)
        {
            try
            {
                var result = ia9602sbExtCntRepository.Geta9602sb_ext_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                ia9602sbExtCntRepository.Deletea9602sb_ext_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}