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
    public class gdb_cntController : ControllerBase
    {

        ILogger<gdb_cntController> _logger;
        private readonly IgdbCntRepository gdbCntRepository;

        public gdb_cntController(ILogger<gdb_cntController> logger, IgdbCntRepository gdbCntRepository)
        {
            _logger = logger;
            this.gdbCntRepository = gdbCntRepository;

            Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Getgdb_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = gdbCntRepository.Getgdb_cntAll();
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
                var result = gdbCntRepository.Getgdb_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Getgdb_cntById(int id)
        {
            try
            {
                var result = gdbCntRepository.Getgdb_cntByID(id);
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
        public IActionResult Addgdb_cnt([FromForm] gdb_cnt model)
        {
            try
            {
                var result = gdbCntRepository.Addgdb_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Editgdb_cnt([FromForm] gdb_cnt model, int id)
        {
            try
            {

                var result = gdbCntRepository.Getgdb_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = gdbCntRepository.Updategdb_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletegdb_cnt(int id)
        {
            try
            {
                var result = gdbCntRepository.Getgdb_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                gdbCntRepository.Deletegdb_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}