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
    public class sfx_cntController : ControllerBase
    {

        ILogger<sfx_cntController> _logger;
        private readonly IsfxCntRepository isfxCntRepository;

        public sfx_cntController(ILogger<sfx_cntController> logger, IsfxCntRepository isfxCntRepository)
        {
            _logger = logger;
            this.isfxCntRepository = isfxCntRepository;

            Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Getsfx_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = isfxCntRepository.Getsfx_cntAll();
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
                var result = isfxCntRepository.Getsfx_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Getsfx_cntById(int id)
        {
            try
            {
                var result = isfxCntRepository.Getsfx_cntByID(id);
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
        public IActionResult Addsfx_cnt([FromForm] sfx_cnt model)
        {
            try
            {
                var result = isfxCntRepository.Addsfx_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Editsfx_cnt([FromForm] sfx_cnt model, int id)
        {
            try
            {

                var result = isfxCntRepository.Getsfx_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = isfxCntRepository.Updatesfx_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletesfx_cnt(int id)
        {
            try
            {
                var result = isfxCntRepository.Getsfx_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                isfxCntRepository.Deletesfx_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}