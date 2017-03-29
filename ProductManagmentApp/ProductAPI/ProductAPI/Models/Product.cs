using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ProductAPI.Models
{
    [DataContract]
    public class Product
    {
        [DataMember(Name = "productId")]
        public int ProductId { get; set; }

        [DataMember(Name = "productName")]
        public string ProductName { get; set; }

        [DataMember(Name = "productDate")]
        public DateTime ProductDate { get; set; }

        [DataMember(Name = "productCode")]
        public string ProductCode { get; set; }

        [DataMember(Name = "productPrice")]
        public double ProductPrice { get; set; }

        [DataMember(Name = "productImageName")]
        public string ProductImageName { get; set; }

    }
}