using System.Collections.Generic;
using backend.Models;

namespace backend.services
{
    public interface IproductRepository
    {
         IEnumerable<Products> GetProductAll();
         Products GetProductByID(int id);

         Products Addproduct(Products model);

         Products UpdateProduct(Products model);

         void DeleteProduct(Products model);
    }
}