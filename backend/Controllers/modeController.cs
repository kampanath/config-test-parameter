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
   // [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class modeController : ControllerBase
    {
        ILogger<modeController> _logger;
        private readonly ImodelRepository imodelRepository;

        public modeController(ILogger<modeController> logger, ImodelRepository imodelRepository)
        {
            _logger = logger;
            this.imodelRepository = imodelRepository;

        }

        [HttpGet]
        public IActionResult GetmodelAll()
        {

            try
            {
                var result = imodelRepository.GetmodelAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

       [HttpGet("report")]
        public IActionResult GetmodelByHardwareType()
        {
            try
            {
                var result = imodelRepository.GetmodelByHardwareType();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }
    
        [HttpPost]
        public IActionResult Addmodel([FromForm] model model)
        {
            try
            {
                var result = imodelRepository.Addmodel(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }
    

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult Deletemodel(int id)
        {
            try
            {
                var result = imodelRepository.GetmodelByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                imodelRepository.Deletemodel(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


          [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetmodelById(int id)
        {
             
            try
            {
                var result = imodelRepository.GetmodelByID(id);
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
        public IActionResult Editmodel([FromForm] model model, int id)
        {
         

          Debug.WriteLine("Edit Equipment Cal");
             
                Debug.WriteLine("model");
                Debug.WriteLine(model.Hardware_Type);
                Debug.WriteLine(model.Cal_Type);
                Debug.WriteLine(model.EERROM_Size);

            try
            {

                var result = imodelRepository.GetmodelByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }
                
              //  result.Seq = model.Seq;
                result.Model_No = model.Model_No;
                result.Model_Name = model.Model_Name;
                result.Hardware_Type = model.Hardware_Type;
                result.KB_Kit = model.KB_Kit;
                result.Cal_Type = model.Cal_Type;
                result.Sn_Type = model.Sn_Type;
                result.EERROM_Size = model.EERROM_Size;
                result.Flash_Size = model.Flash_Size;
                result.Boot_Code_Ver = model.Boot_Code_Ver;
                result.CP_Ver = model.CP_Ver;
                result.Modem_Ver = model.Modem_Ver;
                result.Vocoder = model.Vocoder;
                result.EEPROM_Ver = model.EEPROM_Ver;
                
                result.Model_Type = model.Model_Type;
                result.Model_Select = model.Model_Select;
                result.Gateway = model.Gateway;
                result.Sequence_File = model.Sequence_File;
                result.Configuration_Revision = model.Configuration_Revision;
                result.isGold = model.isGold;
                result.Test_Spec_Fix_Version = model.Test_Spec_Fix_Version;
                result.main_board_kit = model.main_board_kit;
                result.HARDWARE_VERSION = model.HARDWARE_VERSION;
                result.MODEL_INDENTIFICATION = model.MODEL_INDENTIFICATION;

                result = imodelRepository.Updatemodel(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        
    }
}