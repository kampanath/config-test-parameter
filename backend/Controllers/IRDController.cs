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
    public class IRDController : ControllerBase
    {   
        ILogger<IRDController> _logger;
        private readonly IIRD iRD;

        public IRDController(ILogger<IRDController> logger, IIRD iRD)
        {
            _logger = logger;
            this.iRD = iRD;

            Debug.WriteLine("Init");
        }

        [HttpGet]
        public IActionResult GetIRDAll()
        {

            Debug.WriteLine("XXXXXXXX  GetIRDAll");
            try
            {
                var result = iRD.GetIRDAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
    
        [HttpPost]
        public IActionResult AddIrd([FromForm] TbUutstatustType model)
        {
            try
            {
                var result = iRD.AddIrd(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }
    

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteIrd(int id)
        {
            try
            {
                var result = iRD.GetIrdByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                iRD.DeleteIrd(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


          [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetIrdById(int id)
        {
              Debug.WriteLine("XXXXXXXX  GetIrdById");
            try
            {
                var result = iRD.GetIrdByID(id);
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
        public IActionResult EditIrd([FromForm] TbUutstatustType model, int id)
        {
            Debug.WriteLine("XXXXXXXX  EditIrd");
            try
            {

                var result = iRD.GetIrdByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.UutstatusTypeName = model.UutstatusTypeName;
                result.UutstatusTypeDesc = model.UutstatusTypeDesc;
                result = iRD.UpdateIrd(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        
    }
}