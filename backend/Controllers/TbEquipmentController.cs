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
    public class TbEquipmentController : ControllerBase
    {
        ILogger<TbEquipmentController> _logger;
        private readonly ITbEquipmentRepository tbEquipmentRepository;

        public TbEquipmentController(ILogger<TbEquipmentController> logger, ITbEquipmentRepository tbEquipmentRepository)
        {
            _logger = logger;
            this.tbEquipmentRepository = tbEquipmentRepository;

     //       Debug.WriteLine("Init");
        }

        [HttpGet]
        public IActionResult GetTbEquipmentAll()
        {

      //      Debug.WriteLine("XXXXXXXX  GetIRDAll");
            try
            {
                var result = tbEquipmentRepository.GetTbEquipmentAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpGet("ByEquipmentID/{id}")]
        public IActionResult GetTbEquipmentByProfileID(int id)
        {
              try
            {
                var result = tbEquipmentRepository.GetTbEquipmentByProfileID(id);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }

        }


        [HttpPost]
        public IActionResult AddTbEquipment([FromForm] TbEquipment model)
        {
            try
            {
                var result = tbEquipmentRepository.AddTbEquipment(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteTbEquipment(int id)
        {
            try
            {
                var result = tbEquipmentRepository.GetTbEquipmentByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                tbEquipmentRepository.DeleteTbEquipment(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }


        [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetTbEquipmentById(int id)
        {
          //  Debug.WriteLine("XXXXXXXX  GetIrdById");
            try
            {
                var result = tbEquipmentRepository.GetTbEquipmentByID(id);
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
        public IActionResult EditTbEquipment([FromForm] TbEquipment model, int id )
        {
            
            try
            {

                var result = tbEquipmentRepository.GetTbEquipmentByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }
            /*
                if(model.EquipModelNo == null)
                {
                        Debug.WriteLine("NULLLLLLL");
                        result.EquipModelNo = null;
                }
                else
                {
                    Debug.WriteLine("NOT NULLLLLLLLLLL");
                    Debug.WriteLine(null);
                     Debug.WriteLine(model.EquipModelNo);
                         result.EquipModelNo = model.EquipModelNo;


                }*/

                result.EquipName = model.EquipName;
                result.EquipManufact = model.EquipManufact;
                result.EquipModel = model.EquipModel;
                result.EquipModelNo = model.EquipModelNo;
                result.EquipSerialNo = model.EquipSerialNo;
                result.EquipDeviceId = model.EquipDeviceId;
                result.EquipIrdassetNo = model.EquipIrdassetNo;

                result.EquipIsCal = model.EquipIsCal;
               // result.EquipCaldue = DateTime.Parse("2099-01-01 00:00:00.000");
               result.EquipCaldue = model.EquipCaldue;
                result.StationId = model.StationId;

                result.EquipOwner = model.EquipOwner;
                result.IsActive = model.IsActive;
                result.Remark = model.Remark;

                result = tbEquipmentRepository.UpdateTbEquipment(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


    }
}