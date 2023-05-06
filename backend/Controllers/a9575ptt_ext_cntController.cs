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
    public class a9575ptt_ext_cntController : ControllerBase
    {

        ILogger<a9575ptt_ext_cntController> _logger;
        private readonly Ia9575pttExtCntRepository ia9575pttExtCntRepository;

        public a9575ptt_ext_cntController(ILogger<a9575ptt_ext_cntController> logger, Ia9575pttExtCntRepository ia9575pttExtCntRepository)
        {
            _logger = logger;
            this.ia9575pttExtCntRepository = ia9575pttExtCntRepository;

            Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Geta9575ptt_ext_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = ia9575pttExtCntRepository.Geta9575ptt_ext_cntAll();
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
                var result = ia9575pttExtCntRepository.Geta9575ptt_ext_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9575ptt_ext_cntById(int id)
        {
            try
            {
                var result = ia9575pttExtCntRepository.Geta9575ptt_ext_cntByID(id);
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
        public IActionResult Adda9575ptt_ext_cnt([FromForm] a9575ptt_ext_cnt model)
        {
            try
            {
                var result = ia9575pttExtCntRepository.Adda9575ptt_ext_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9575ptt_ext_cnt([FromForm] a9575ptt_ext_cnt model, int id)
        {
            try
            {

                var result = ia9575pttExtCntRepository.Geta9575ptt_ext_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = ia9575pttExtCntRepository.Updatea9575ptt_ext_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9575ptt_ext_cnt(int id)
        {
            try
            {
                var result = ia9575pttExtCntRepository.Geta9575ptt_ext_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                ia9575pttExtCntRepository.Deletea9575ptt_ext_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}