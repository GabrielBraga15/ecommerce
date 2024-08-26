// src/app/productcard/ProductCard.tsx
'use client'; // Adicione esta linha para garantir que o componente seja renderizado no lado do cliente

import { useState } from 'react';
import Link from 'next/link';
import { addToCart } from '../utils/cartUtils'; // Importe a função de utilitário

type ProductCardProps = {
  title: string;
  price: string;
  oldPrice?: string; // Pode ser opcional
  imageUrl: string;
  productId: string;
};

export default function ProductCard({
  title,
  price,
  oldPrice,
  imageUrl,
  productId,
}: ProductCardProps) {
  // Função para exibir uma mensagem de confirmação
  const messageClick = () => {
    alert("Produto adicionado ao carrinho!");
  };

  // Função para adicionar o produto ao carrinho
  const handleAddToCart = () => {
    const newItem = { title, price, imageUrl, productId };
    addToCart(newItem);
    messageClick(); // Exibe a mensagem de confirmação
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${productId}`}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <div className="flex items-center space-x-2">
          <p className="text-gray-700 text-xl font-semibold">R$ {price}</p>
          {oldPrice && (
            <p className="text-gray-400 line-through text-sm">R$ {oldPrice}</p>
          )}
        </div>
      </div>
      <div className="p-4 mt-auto">
        <button
          onClick={handleAddToCart}
          className="w-full border-2 border-orange-500 text-orange-500 bg-white py-2 rounded-lg font-bold hover:bg-orange-100 transition duration-300"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
