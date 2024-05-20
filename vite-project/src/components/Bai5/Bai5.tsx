import React, { useState } from 'react';

interface Product {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}
export default function Bai5() {
    
        const [productId, setProductId] = useState<string>('');
        const [productName, setProductName] = useState<string>('');
        const [price, setPrice] = useState<number>(0);
        const [quantity, setQuantity] = useState<number>(0);
      
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const product: Product = {
            productId,
            productName,
            price,
            quantity,
          };
          console.log('Submitted Product:', product);
        };
  return (
    <div>Bai5
       <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productId">Product ID:</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}
