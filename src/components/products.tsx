import React, { useEffect, useState } from 'react';

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=4')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className='py-8'>
      <h2 className="text-3xl font-bold text-center py-8">Danh sách sản phẩm</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <img src={product.images[0]} alt={product.title} className="mx-auto mb-2 w-64 h-64 object-cover" />
            <p className="font-bold">{product.title}</p>
            <div className="flex ">
              <p className="text-red-500 font-bold mr-2">{product.price}</p>
            </div>
            <p className="text-gray-500 mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
