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
    public class TbUutprofileController : ControllerBase
    {
                ILogger<TbUutprofileController> _logger;
        private readonly ITbUutprofileRepository iTbUutprofileRepository;

        public TbUutprofileController(ILogger<TbUutprofileController> logger, ITbUutprofileRepository iTbUutprofileRepository)
        {
            _logger = logger;
            this.iTbUutprofileRepository = iTbUutprofileRepository;

        }

        [HttpGet]
        public IActionResult GetTbUutprofileAll()
        {

            try
            {
                var result = iTbUutprofileRepository.GetTbUutprofileAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
        [HttpGet("ByUUTNameID/{id}")]
        public IActionResult GetTbUutprofileByUUTNameID(int id)
        {
              try
            {
                var result = iTbUutprofileRepository.GetTbUutprofileByUUTNameID(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }

        
    
        [HttpPost]
        public IActionResult AddTbUutprofile([FromForm] TbUutprofile model)
        {
            try
            {
                var result = iTbUutprofileRepository.AddTbUutprofile(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }
    

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteTbUutprofile(int id)
        {
            try
            {
                var result = iTbUutprofileRepository.GetTbUutprofileByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                iTbUutprofileRepository.DeleteTbUutprofile(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


          [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetTbUutprofileById(int id)
        {
             
            try
            {
                var result = iTbUutprofileRepository.GetTbUutprofileByID(id);
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
        public IActionResult EditTbUutprofile([FromForm] TbUutprofile model, int id)
        {
         
            try
            {

                var result = iTbUutprofileRepository.GetTbUutprofileByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.ProfileId = model.ProfileId;
                result.UutnameId = model.UutnameId;

                result.RevId = model.RevId;
                result.StationId = model.StationId;

                result.FixtureId = model.FixtureId;
            
                result.IsActive = model.IsActive;
                result.Remark = model.Remark;

                result = iTbUutprofileRepository.UpdateTbUutprofile(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        
    }
}