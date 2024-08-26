'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { addToCart } from '../utils/cartUtils';
import { FaShoppingCart } from 'react-icons/fa';

const ProductDetail = () => {
  const router = useRouter();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const product = {
    id: '1',
    title: 'Sapatênis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa',
    imageUrl: '/shoe2.jpg',
    price: '270,00',
    oldPrice: '8.999,00',
    description: 'no pix 10% de desconto',
  };

  const handleAddToCart = () => {
    const newItem = {
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      productId: product.id,
    };
    addToCart(newItem);
    router.push('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={150} height={40} />
        </div>
        <div className="flex items-center space-x-6">
          <a href="/cart" className="text-gray-600 flex items-center space-x-2">
            <FaShoppingCart className="text-lg" />
            <span>Carrinho</span>
          </a>
          <a href="#" className="text-gray-600">Entrar</a>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="flex flex-row lg:flex-col space-y-4 space-x-4 lg:space-x-0">
          <Image
            src={product.imageUrl}
            alt="Thumbnail 1"
            width={100}
            height={100}
            className="object-cover rounded-md"
          />
          <Image
            src={product.imageUrl}
            alt="Thumbnail 2"
            width={100}
            height={100}
            className="object-cover rounded-md"
          />
          <Image
            src={product.imageUrl}
            alt="Thumbnail 3"
            width={100}
            height={100}
            className="object-cover rounded-md"
          />
        </div>
        
        <div className="flex-1">
          <Image
            src={product.imageUrl}
            alt="Product Image"
            width={600}
            height={600}
            className="object-cover rounded-md"
          />
        </div>
        
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          
          <div className="space-y-2">
            <p className="text-gray-500 line-through">De R$ {product.oldPrice}</p>
            <p className="text-4xl font-bold text-orange-500">R$ {product.price}</p>
            <p className="text-gray-500">
              {product.description} <span className="text-orange-500">10% de desconto</span>
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white px-6 py-3 rounded-md w-full lg:w-auto"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
