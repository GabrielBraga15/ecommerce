// src/utils/cartUtils.ts
export const addToCart = (product: { title: string; price: string; imageUrl: string; productId: string }) => {
    // Recupera o carrinho do localStorage ou inicializa como um array vazio
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Atualiza o carrinho com o novo item
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  