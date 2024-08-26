'use client';

import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Modal from '../Modal'; // Certifique-se de que o componente Modal está configurado corretamente

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const handleRemoveItem = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = item.quantity || 1;
        return total + price * quantity;
      }, 0)
      .toFixed(2);
  };

  const openCheckout = () => setCheckoutOpen(true);
  const closeCheckout = () => setCheckoutOpen(false);

  // Função para limpar o carrinho e finalizar o pedido
  const handleCheckoutConfirm = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    closeCheckout();
    alert('Pedido finalizado com sucesso!');
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Seu carrinho está vazio.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.productId} className="flex items-center justify-between mb-4 p-4 border rounded-lg">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover mr-4" />
                  <div>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-green-500 font-semibold">R$ {parseFloat(item.price || 0).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemoveItem(item.productId)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    <FaTrash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border rounded-lg p-4 bg-gray-100">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Sub total:</span>
              <span>R$ {calculateTotal()}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Frete:</span>
              <span className="text-green-500">Grátis</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold">Valor total:</span>
              <span className="text-2xl font-bold">R$ {calculateTotal()}</span>
            </div>
            <button
              onClick={openCheckout}
              className="bg-orange-500 text-white w-full py-2 rounded-lg font-bold"
            >
              Finalizar pedido
            </button>
          </div>
        </div>
      )}
      <Modal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
        onConfirm={handleCheckoutConfirm} // Passe a função de confirmação para o Modal
      />
    </div>
  );
};

export default CartPage;
