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
    public class A9575CntController : ControllerBase
    {
                ILogger<MysqlController> _logger;
        private readonly I9575_cntRepository a9575_cntRepository_ ;

        public A9575CntController(ILogger<MysqlController> logger, I9575_cntRepository a9575_cntRepository_)
        {
            _logger = logger;
            this.a9575_cntRepository_ = a9575_cntRepository_;

            Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Geta9575_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = a9575_cntRepository_.Geta9575_cntAll();
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
                var result = a9575_cntRepository_.Geta9575_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9575_cntById(int id)
        {
            try
            {
                var result = a9575_cntRepository_.Geta9575_cntByID(id);
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
        public IActionResult Adda9575_cnt([FromForm] a9575_cnt model)
        {
            try
            {
                var result = a9575_cntRepository_.Adda9575_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9575_cnt([FromForm] a9575_cnt model, int id)
        {
            try
            {

                var result = a9575_cntRepository_.Geta9575_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = a9575_cntRepository_.Updatea9575_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9575_cnt(int id)
        {
            try
            {
                var result = a9575_cntRepository_.Geta9575_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                a9575_cntRepository_.Deletea9575_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}