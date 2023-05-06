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
    public class TbUutnameController : ControllerBase
    {
        ILogger<TbUutnameController> _logger;
        private readonly ITbUutnameRepository iTbUutnameRepository;

        public TbUutnameController(ILogger<TbUutnameController> logger, ITbUutnameRepository iTbUutnameRepository)
        {
            _logger = logger;
            this.iTbUutnameRepository = iTbUutnameRepository;

        }

        [HttpGet]
        public IActionResult GetTbUutnameAll()
        {

            try
            {
                var result = iTbUutnameRepository.GetTbUutnameAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
    
        [HttpPost]
        public IActionResult AddTbUutname([FromForm] TbUutname model)
        {
            try
            {
                var result = iTbUutnameRepository.AddTbUutname(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }
    

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteTbUutname(int id)
        {
            try
            {
                var result = iTbUutnameRepository.GetTbUutnameByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                iTbUutnameRepository.DeleteTbUutname(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


          [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetTbUutnameById(int id)
        {
             
            try
            {
                var result = iTbUutnameRepository.GetTbUutnameByID(id);
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
        public IActionResult EditTbUutname([FromForm] TbUutname model, int id)
        {
         
            try
            {

                var result = iTbUutnameRepository.GetTbUutnameByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.Uutname = model.Uutname;
                result.Uutdesc = model.Uutdesc;

                result.ModelId = model.ModelId;
                result.FactoryId = model.FactoryId;

                result.PfsWorkSt = model.PfsWorkSt;
                result.PfsOp = model.PfsOp;

                result.Calrequire = model.Calrequire;

                
                result.Calcycle = model.Calcycle;

                result.GoldTestRequire = model.GoldTestRequire;
                result.IsActive = model.IsActive;
                result = iTbUutnameRepository.UpdateTbUutname(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        
    }
}