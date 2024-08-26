'use client';

import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import products from '../utils/products';

interface SidebarProps {
  className?: string;
  onFilter: (filteredProducts: Array<any>) => void; // Propriedade obrigatória para filtrar produtos
}

const Sidebar: React.FC<SidebarProps> = ({ className, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  // Manipulador da mudança na barra de pesquisa
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  // Manipulador da mudança nas categorias
  const handleCategoryChange = (category: string, isChecked: boolean) => {
    const updatedCategories = isChecked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    setSelectedCategories(updatedCategories);
  };

  // Manipulador da mudança no preço
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = Number(e.target.value);
    if (type === 'min') {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  // Função que aplica os filtros com base na pesquisa, categorias e preços
  const applyFilters = () => {
    const filtered = products.filter(product => {
      const matchesQuery = searchQuery.trim() === '' || product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchesQuery && matchesCategory && matchesPrice;
    });

    onFilter(filtered); // Retorna os produtos filtrados para o componente pai
  };

  // Efeito para aplicar filtros sempre que searchQuery, selectedCategories, minPrice ou maxPrice mudarem
  useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedCategories, minPrice, maxPrice]);

  return (
    <aside className={`w-full max-w-xs p-4 bg-gray-50 ${className}`}>
      {/* Barra de pesquisa */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 pr-10 border border-gray-300 rounded"
        />
        <FiSearch className="w-5 h-5 text-orange-600 absolute right-3 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Caixa de categorias */}
      <div className="bg-white p-4 border border-gray-200 rounded mb-8">
        <h2 className="font-bold mb-4">Categorias</h2>
        <ul>
          {['Botas', 'Chinelos', 'Chuteira', 'Sandália', 'Sapatênis', 'Tênis'].map(category => (
            <li key={category} className="flex items-center mb-4">
              <input
                type="checkbox"
                id={category}
                className="form-checkbox h-5 w-5"
                onChange={(e) => handleCategoryChange(category, e.target.checked)}
              />
              <label htmlFor={category} className="ml-3">{category}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* Caixa de preço */}
      <div className="bg-white p-4 border border-gray-200 rounded">
        <h2 className="font-bold mb-4">Preço</h2>
        <div className="flex items-center mb-4 text-orange-600">
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => handlePriceChange(e, 'max')}
            className="mr-4 range-input"
          />
          <span>R$ {minPrice} - R$ {maxPrice}</span>
        </div>

        {/* Preço mínimo e máximo */}
        <div className="flex flex-col">
          <label htmlFor="precoMinimo" className="font-bold mb-1">Preço Mínimo</label>
          <input
            type="number"
            id="precoMinimo"
            value={minPrice}
            onChange={(e) => handlePriceChange(e, 'min')}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="R$ 0"
          />
          <label htmlFor="precoMaximo" className="font-bold mb-1">Preço Máximo</label>
          <input
            type="number"
            id="precoMaximo"
            value={maxPrice}
            onChange={(e) => handlePriceChange(e, 'max')}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="R$ 1000"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
