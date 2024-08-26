'use client';
import { useState } from 'react';
import products from '../../../utils/products'; // O array de produtos
import { notFound } from 'next/navigation'; // Para lidar com 404

interface Params {
  params: {
    productId: string;
  };
}

export default function ProductPage({ params }: Params) {
  const { productId } = params;

  // Busca o produto correspondente ao productId
  const product = products.find((p) => p.id === parseInt(productId, 10));

  // Se o produto não for encontrado, retorna 404
  if (!product) {
    return notFound();
  }

  // Estado para a imagem principal
  const [mainImage, setMainImage] = useState(product.imageUrl);

  // Função para adicionar o produto ao carrinho
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { 
      title: product.title, 
      price: product.price, 
      oldPrice: product.oldPrice,
      imageUrl: product.imageUrl, 
      productId: product.id 
    };
    localStorage.setItem('cart', JSON.stringify([...cart, newItem]));
    alert('Produto adicionado ao carrinho!');
  };

  return (
    <div className="flex flex-col bg-white min-h-screen"> {/* Ajuste para ocupar toda a tela */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 lg:py-12 lg:px-6 gap-8 h-full">
        
        {/* Seção da imagem do produto */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center mb-4 lg:mb-0">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full max-h-96 object-cover rounded-md" // Ajuste da altura da imagem principal
            style={{ borderBottom: 'none' }} // Remove a linha inferior
          />

          {/* Thumbnails abaixo da imagem principal */}
          <div className="flex mt-4 space-x-4 overflow-x-auto no-scrollbar"> {/* Remove scrollbar padrão */}
            {product.thumbnails?.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-24 object-cover cursor-pointer rounded-md flex-shrink-0" // Thumbnails
                onClick={() => setMainImage(thumb)}
              />
            ))}
          </div>
        </div>

        {/* Seção de detalhes do produto */}
        <div className="w-full lg:w-1/3 lg:pl-6 flex flex-col justify-between">
          <div>
            <p className="text-gray-500 mb-2 text-sm lg:text-base">{product.category}</p> {/* Exibe a categoria */}
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">{product.title}</h1>

            <div className="bg-gray-100 p-4 lg:p-6 rounded-md shadow-md space-y-2 mb-4">
              <p className="text-lg text-gray-500 line-through">De R$ {product.oldPrice}</p>
              <p className="text-2xl lg:text-3xl text-orange-600 font-bold">R$ {product.price}</p>
              <p className="text-sm text-gray-700">
                no pix <span className="text-orange-600">10%</span> de desconto
              </p>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-orange-500 text-white py-3 rounded-md font-bold mt-4"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
