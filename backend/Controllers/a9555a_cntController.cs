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
    public class a9555a_cntController : ControllerBase
    {

        ILogger<a9555a_cntController> _logger;
        private readonly Ia9555aCntRepository ia9555aCntRepository;

        public a9555a_cntController(ILogger<a9555a_cntController> logger, Ia9555aCntRepository ia9555aCntRepository)
        {
            _logger = logger;
            this.ia9555aCntRepository = ia9555aCntRepository;

            Debug.WriteLine("Init");
        }


          [HttpGet]
        public IActionResult Geta9555a_cntAll()
        {


            Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = ia9555aCntRepository.Geta9555a_cntAll();
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
                var result = ia9555aCntRepository.Geta9555a_cntAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Geta9555a_cntById(int id)
        {
            try
            {
                var result = ia9555aCntRepository.Geta9555a_cntByID(id);
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
        public IActionResult Adda9555a_cnt([FromForm] a9555a_cnt model)
        {
            try
            {
                var result = ia9555aCntRepository.Adda9555a_cnt(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Edita9555a_cnt([FromForm] a9555a_cnt model, int id)
        {
            try
            {

                var result = ia9555aCntRepository.Geta9555a_cntByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.cnt_val = model.cnt_val;
              
                result = ia9555aCntRepository.Updatea9555a_cnt(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletea9555a_cnt(int id)
        {
            try
            {
                var result = ia9555aCntRepository.Geta9555a_cntByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                ia9555aCntRepository.Deletea9555a_cnt(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}