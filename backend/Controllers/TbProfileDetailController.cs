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
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TbProfileDetailController :ControllerBase
    {
                ILogger<TbProfileDetailController> _logger;
        private readonly ITbProfileDetailRepository tbProfileDetailRepository;

        public TbProfileDetailController(ILogger<TbProfileDetailController> logger, ITbProfileDetailRepository tbProfileDetailRepository)
        {
            _logger = logger;
            this.tbProfileDetailRepository = tbProfileDetailRepository;

            Debug.WriteLine("Init");
        }

        [HttpGet]
        public IActionResult GetTbProfileDetailAll()
        {

            Debug.WriteLine("XXXXXXXX  GetIRDAll");
            try
            {
                var result = tbProfileDetailRepository.GetTbProfileDetailAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


         [HttpGet("ByProfileID/{id}")]
        public IActionResult GetTbProfileDetailByProfileID(int id)
        {
              try
            {
                var result = tbProfileDetailRepository.GetTbProfileDetailByProfileID(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        [HttpPost]
        public IActionResult AddTbProfileDetail([FromForm] TbProfileDetail model)
        {
            try
            {
                var result = tbProfileDetailRepository.AddTbProfileDetail(model);
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
                var result = tbProfileDetailRepository.GetTbProfileDetailByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                tbProfileDetailRepository.DeleteTbProfileDetail(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetTbProfileDetailById(int id)
        {
            try
            {
                var result = tbProfileDetailRepository.GetTbProfileDetailByID(id);
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
        public IActionResult EditTbProfileDetail([FromForm] TbProfileDetail model, int id)
        {
            Debug.WriteLine("XXXXXXXX  EditIrd");
            try
            {

                var result = tbProfileDetailRepository.GetTbProfileDetailByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }
                
                result.ProfileId = model.ProfileId;
                result.DetailSqNo = model.DetailSqNo;
                result.DetailTestName = model.DetailTestName;
                result.DetailDesc = model.DetailDesc;
                result.DetailLsl = model.DetailLsl;
                result.DetailUsl = model.DetailUsl;
                result.DetailUom = model.DetailUom;
                result.DetailReqSection = model.DetailReqSection;
                result.DetailCategory = model.DetailCategory;

                 result.DetailOption = model.DetailOption;
                  result.DetailCmaoption = model.DetailCmaoption;

                result.DetailDebugoption = model.DetailDebugoption;
                result.IsActive = model.IsActive;

                result = tbProfileDetailRepository.UpdateTbProfileDetail(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


    }
}