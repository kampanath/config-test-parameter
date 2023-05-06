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
    public class genericController : ControllerBase
    {

        ILogger<genericController> _logger;
        private readonly IgenericRepository igenericRepository;

        public genericController(ILogger<genericController> logger, IgenericRepository igenericRepository)
        {
            _logger = logger;
            this.igenericRepository = igenericRepository;

            Debug.WriteLine("Init");
        }


        [HttpGet]
        public IActionResult GetAllTableNames()
        {

            Debug.WriteLine("pllkkkkk");
            Debug.WriteLine("getTable");

            try
            {
                var result = igenericRepository.GetAllTableNames();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("GetIMEILatestRow/{id}")]
        public IActionResult GetIMEILatestRow(string id)
        {

            try
            {
                var result = igenericRepository.GetIMEILatestRow(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpGet("ateCalAllToday/{id}")]
        public IActionResult ateCalAllToday(string id)
        {

            Debug.WriteLine("ateCalAllToday");
            Debug.WriteLine(id);
            string[] array = id.Split('&');

            try
            {
                var result = igenericRepository.ateCalAllToday(array[0],array[1],array[2],array[3]);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("GetIMEIAllTable/{id}")]
        public IActionResult GetIMEIAllTable(string id)
        {

            Debug.WriteLine("wwwwwww");
            Debug.WriteLine(id);

            try
            {
                var result = igenericRepository.GetIMEIAllTable(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("GetTbAteCalByATENameColumn")]
        public IActionResult GetTbAteCalByATENameColumn()
        {

         

            try
            {
                var result = igenericRepository.GetTbAteCalByATENameColumn();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("GetateCalFixtureNameByATEName/{id}")]
        public IActionResult GetateCalFixtureNameByATEName(string id)
        {

            try
            {
                var result = igenericRepository.GetateCalFixtureNameByATEName(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpGet("checkIMEIDuplicate/{id}")]
        public IActionResult checkIMEIDuplicate(string id)
        {

            Debug.WriteLine("Check duplicate array in table ");
            Debug.WriteLine(id);
            string[] array = id.Split('&');



            try
            {
                var result = igenericRepository.checkIMEIDuplicate(array[0], array);

                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {

                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }



        /*
                [HttpGet("report")]
               [AllowAnonymous]
                public IActionResult GetReport()
                {
                    try
                    {
                        var result = ia9522BExtCntRepository.Geta9522b_ext_cntAll();
                        return Ok(new { result = result, message = "successfully" });
                    }
                    catch (Exception ex)
                    {
                        return StatusCode(500, new { result = ex, message = "failure" });
                    }

                }

                   [HttpGet("{id}")] //:5001/api/product/{2}
                public IActionResult Geta9522b_ext_cntById(int id)
                {
                    try
                    {
                        var result = ia9522BExtCntRepository.Geta9522b_ext_cntByID(id);
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
                */



        [HttpPost]
        public IActionResult AddGenericIMEI([FromForm] genericIMEI model)
        {

            Debug.WriteLine("Add generic IMEI");

            string id = "9575e_imei";
            try
            {
                var result = igenericRepository.AddGenericIMEI(model, id);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }
        /*

                [HttpPut("{id}")]
                public IActionResult Edita9522b_ext_cnt([FromForm] a9522b_ext_cnt model, int id)
                {
                    try
                    {

                        var result = ia9522BExtCntRepository.Geta9522b_ext_cntByID(id);
                        if (result == null)
                        {

                            return NotFound(new { result = result, message = "fsilure" });

                        }

                        result.cnt_val = model.cnt_val;

                        result = ia9522BExtCntRepository.Updatea9522b_ext_cnt(result);
                        return Ok(new { result = result, message = "successfully" });

                    }
                    catch (Exception ex)
                    {
                        return StatusCode(500, new { result = ex, message = "failure" });

                    }
                }

                [Authorize(Roles = "Admin")]
                [HttpDelete("{id}")]
                public IActionResult Deletea9522b_ext_cnt(int id)
                {
                    try
                    {
                        var result = ia9522BExtCntRepository.Geta9522b_ext_cntByID(id);
                        if (result == null)
                        {
                            return NotFound(new { result = result, message = "failure" });
                        }
                        ia9522BExtCntRepository.Deletea9522b_ext_cnt(result);
                        return Ok(new { result = result, message = "successfully" });
                    }
                    catch (Exception ex)
                    {
                        return StatusCode(500, new { result = ex, message = "failure" });
                    }
                }
             */


    }

}