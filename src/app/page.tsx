"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import products from '../utils/products';
import { FiSearch } from 'react-icons/fi';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Função para lidar com a pesquisa global dos produtos
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filtrando os produtos com base no título que corresponde ao termo de pesquisa
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  // Função que será passada ao Sidebar para filtrar pelas categorias
  const handleFilterByCategory = (filteredByCategory: Array<any>) => {
    setFilteredProducts(filteredByCategory);
  };

  return (
    <div>
      <main className="mt-0">
        <section className="flex flex-col lg:flex-row items-center justify-between bg-orange-500 text-white h-auto lg:h-72 w-full">
          <div className="flex-1 p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
              Estilo e conforto para os seus pés
            </h1>
          </div>
          <div className="flex-1 h-72 lg:h-full">
            <img
              src="/sneakers.jpg"
              alt="Sneakers"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <div className="max-w-7xl mx-auto mt-0 px-4"> {/* Remove top margin */}
          {/* Texto e barra de pesquisa */}
          <div className="max-w-7xl mx-auto px-4 mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0"> {/* Responsividade */}
              <p className="text-gray-700 font-semibold">{filteredProducts.length} itens encontrados</p>
              <div className="relative w-full sm:max-w-xs"> {/* Responsividade da barra de pesquisa */}
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  value={searchTerm}
                  onChange={handleSearch} // Função de pesquisa dos produtos
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <FiSearch className="w-5 h-5 text-orange-600 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <Sidebar className="w-full lg:w-1/4 mb-8 lg:mb-0" onFilter={handleFilterByCategory} />
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price.toFixed(2)}
                  oldPrice={product.oldPrice.toFixed(2)}
                  imageUrl={product.imageUrl}
                  productId={product.id.toString()}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
