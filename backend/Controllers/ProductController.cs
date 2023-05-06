using System;
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
    public class ProductController : ControllerBase
    {

        ILogger<ProductController> _logger;
        private readonly IproductRepository productRepository;

        public ProductController(ILogger<ProductController> logger, IproductRepository productRepository)
        {
            _logger = logger;
            this.productRepository = productRepository;
        }

        [HttpGet]
        public IActionResult GetProductAll()
        {
            try
            {
                var result = productRepository.GetProductAll();
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }

        [HttpGet("{id}")] //:5001/api/product/{2}
        public IActionResult GetProductById(int id)
        {
            try
            {
                var result = productRepository.GetProductByID(id);
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
        public IActionResult AddProduct([FromForm] Products model)
        {
            try
            {
                var result = productRepository.Addproduct(model);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }


        [HttpPut("{id}")]
        public IActionResult EditProduct([FromForm] Products model, int id)
        {
            try
            {

                var result = productRepository.GetProductByID(id);
                if (result == null)
                {

                    return NotFound(new { result = result, message = "fsilure" });

                }

                result.Name = model.Name;
                result.Price = model.Price;
                result.Stock = model.Stock;
                result = productRepository.UpdateProduct(result);
                return Ok(new { result = result, message = "successfully" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });

            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                var result = productRepository.GetProductByID(id);
                if (result == null)
                {
                    return NotFound(new { result = result, message = "failure" });
                }
                productRepository.DeleteProduct(result);
                return Ok(new { result = result, message = "successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { result = ex, message = "failure" });
            }
        }
        [AllowAnonymous]
        [HttpGet("images/{name}")]
        public ActionResult GetImage(string name)
        {
            return File("~/images/" + name, "image/jpg");

        }

    }
}