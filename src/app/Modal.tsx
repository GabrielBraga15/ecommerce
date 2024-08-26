import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void; // Nova propriedade para função de confirmação
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [isRegistrationComplete, setRegistrationComplete] = useState(false);

  const handleRegistration = (event: React.FormEvent) => {
    event.preventDefault();
    setRegistrationComplete(true);
  };

  const handleClose = () => {
    if (isRegistrationComplete) {
      onConfirm(); // Chama a função de confirmação se o pedido foi concluído
    } else {
      setRegistrationComplete(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-sm w-full">
        {isRegistrationComplete ? (
          <>
            <h1 className="text-xl font-bold text-center mb-4">Seu pedido foi concluído!</h1>
            <p className="text-gray-700 text-center mb-8">
              Retornaremos com atualizações no seu e-mail.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-orange-500 text-white py-2 rounded-md"
            >
              Entendi!
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Cadastre-se</h2>
              <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
                &times;
              </button>
            </div>
            <form onSubmit={handleRegistration}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
                <span className="absolute right-3 top-3 cursor-pointer">
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      fillRule="evenodd"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md">
                Criar minha conta
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
