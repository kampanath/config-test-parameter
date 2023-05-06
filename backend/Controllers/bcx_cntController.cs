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
    public class bcx_cntController : ControllerBase
    {

        ILogger<bcx_cntController> _logger;
        private readonly IbcxCntRepository bcxCntRepository;

        public bcx_cntController(ILogger<bcx_cntController> logger, IbcxCntRepository bcxCntRepository)
        {
            _logger = logger;
            this.bcxCntRepository = bcxCntRepository;

            Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Getbcx_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = bcxCntRepository.Getbcx_cntAll();
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
                var result = bcxCntRepository.Getbcx_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Getbcx_cntById(int id)
        {
            try
            {
                var result = bcxCntRepository.Getbcx_cntByID(id);
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
        public IActionResult Addbcx_cnt([FromForm] bcx_cnt model)
        {
            try
            {
                var result = bcxCntRepository.Addbcx_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Editbcx_cnt([FromForm] bcx_cnt model, int id)
        {
            try
            {

                var result = bcxCntRepository.Getbcx_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = bcxCntRepository.Updatebcx_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletebcx_cnt(int id)
        {
            try
            {
                var result = bcxCntRepository.Getbcx_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                bcxCntRepository.Deletebcx_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}