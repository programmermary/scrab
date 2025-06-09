import React, { useState, useEffect } from "react";
import axios from "axios";

const Woman = () => {
  const [products, setProducts] = useState([]);

  const HandleGetProducts = async () => {
    try {
      const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:F7Hzs_kS/products');
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    HandleGetProducts();
  }, []);

  return (
    <div>
      {
      products
        .filter(product => product.gender === "woman")
        .map(product => (
          <div key={product.id || product._id}>
            <h1>{product.name}</h1>
          </div>
      ))}
    </div>
  );
};

export default Woman;
