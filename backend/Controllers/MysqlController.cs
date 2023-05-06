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
    public class MysqlController : ControllerBase
    {

        ILogger<MysqlController> _logger;
        private readonly IMySQLRepository mySQLRepository;

        public MysqlController(ILogger<MysqlController> logger, IMySQLRepository mySQLRepository)
        {
            _logger = logger;
            this.mySQLRepository = mySQLRepository;

            Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Geta9522b_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = mySQLRepository.Geta9522b_cntAll();
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
                var result = mySQLRepository.Geta9522b_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9522b_cntById(int id)
        {
            try
            {
                var result = mySQLRepository.Geta9522b_cntByID(id);
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
        public IActionResult Adda9522b_cnt([FromForm] a9522b_cnt model)
        {
            try
            {
                var result = mySQLRepository.Adda9522b_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9522b_cnt([FromForm] a9522b_cnt model, int id)
        {
            try
            {

                var result = mySQLRepository.Geta9522b_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = mySQLRepository.Updatea9522b_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9522b_cnt(int id)
        {
            try
            {
                var result = mySQLRepository.Geta9522b_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                mySQLRepository.Deletea9522b_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}