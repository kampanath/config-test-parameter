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
    public class TbProfileController : ControllerBase
    {
        ILogger<TbProfileController> _logger;
        private readonly ITbProfileRepository tbProfileRepository;

        public TbProfileController(ILogger<TbProfileController> logger, ITbProfileRepository tbProfileRepository)
        {
            _logger = logger;
            this.tbProfileRepository = tbProfileRepository;

            Debug.WriteLine("Init");
        }

        [HttpGet]
        public IActionResult GetTbProfileAll()
        {

            Debug.WriteLine("XXXXXXXX  GetIRDAll");
            try
            {
                var result = tbProfileRepository.GetTbProfileAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpGet("ByProfileID/{id}")]
        public IActionResult GetTbProfileByProfileID(int id)
        {
              try
            {
                var result = tbProfileRepository.GetTbProfileByProfileID(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }


        [HttpPost]
        public IActionResult AddTbProfile([FromForm] TbProfile model)
        {
            try
            {
                var result = tbProfileRepository.AddTbProfile(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteTbProfile(int id)
        {
            try
            {
                var result = tbProfileRepository.GetTbProfileByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                tbProfileRepository.DeleteTbProfile(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetTbProfileById(int id)
        {
            Debug.WriteLine("XXXXXXXX  GetIrdById");
            try
            {
                var result = tbProfileRepository.GetTbProfileByID(id);
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


        [HttpPut("{id}")]
        public IActionResult EditTbProfile([FromForm] TbProfile model, int id)
        {
            
            try
            {

                var result = tbProfileRepository.GetTbProfileByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.ProfileName = model.ProfileName;
                result.ProfileDesc = model.ProfileDesc;
                result.ProfileReqDocNo = model.ProfileReqDocNo;
                result.ProfileVersion = model.ProfileVersion;
                result.Calid = model.Calid;
                result.IsActive = model.IsActive;
                result.Remark = model.Remark;

                result = tbProfileRepository.UpdateTbProfile(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


    }
}