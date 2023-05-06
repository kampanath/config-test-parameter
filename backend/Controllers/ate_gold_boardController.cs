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
    public class ate_gold_boardController : ControllerBase
    {
        ILogger<ate_gold_boardController> _logger;
        private readonly IateGoldBoardRepository iateGoldBoardRepository;

        public ate_gold_boardController(ILogger<ate_gold_boardController> logger, IateGoldBoardRepository iateGoldBoardRepository)
        {
            _logger = logger;
            this.iateGoldBoardRepository = iateGoldBoardRepository;

        }


          [HttpGet]
        public IActionResult Getate_gold_boardAll()
        {


   //         Debug.WriteLine("XXXXXXXX Get MySQL All");
            try
            {
                var result = iateGoldBoardRepository.Getate_gold_boardAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

    
           [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult Getate_gold_boardBySN(string id)
        {
            try
            {
                var result = iateGoldBoardRepository.Getate_gold_boardBySN(id);
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
        public IActionResult Addate_gold_board([FromForm] ate_gold_board model)
        {
            try
            {
                var result = iateGoldBoardRepository.Addate_gold_board(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult Editate_gold_board([FromForm] ate_gold_board model, string id)
        {
            try
            {

                var result = iateGoldBoardRepository.Getate_gold_boardBySN(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

             //   result.serial_no = model.serial_no;
                 result.model_no = model.model_no;

                result = iateGoldBoardRepository.Updateate_gold_board(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deleteate_gold_board(string id)
        {
            try
            {
                var result = iateGoldBoardRepository.Getate_gold_boardBySN(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                iateGoldBoardRepository.Deleteate_gold_board(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
     

    
    }

}