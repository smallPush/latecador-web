import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

export const Cart: React.FC = () => {
  const {
    isCartOpen,
    toggleCart,
    cartItems,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [issubmitted, setIsSubmitted] = useState(false);

  if (!isCartOpen) return null;

  const getProductDetails = (id: string) => {
    for (const product of products) {
      const variant = product.items.find((item) => item.id === id);
      if (variant) return { ...variant, image: product.image };
    }
    return null;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct email body
    const itemsList = cartItems
      .map((item) => {
        const details = getProductDetails(item.id);
        return details
          ? `- ${item.quantity}x ${details.name} (${details.price.toFixed(2)}€) = ${(
              item.quantity * details.price
            ).toFixed(2)}€`
          : '';
      })
      .join('\n');

    const emailBody = `
Nova Comanda de: ${formData.name}
Email: ${formData.email}
Telèfon: ${formData.phone}

Comentaris:
${formData.comments}

Detall de la comanda:
${itemsList}

Total: ${cartTotal.toFixed(2)}€
    `.trim();

    const subject = `Comanda Latecador - ${formData.name}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success state
    setIsSubmitted(true);

    // Optional: Clear cart after submission
    // clearCart();
  };

  if (issubmitted) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleCart}></div>
        <div className="fixed inset-y-0 right-0 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Comanda Generada!</h2>
                <p className="text-gray-600 mb-6">
                  S'ha obert el teu gestor de correu per enviar la comanda.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    clearCart();
                    toggleCart();
                  }}
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  Tancar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleCart}></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">La teva cistella</h2>
                <div className="ml-3 h-7 flex items-center">
                  <button
                    type="button"
                    className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    onClick={toggleCart}
                  >
                    <span className="sr-only">Tancar</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cartItems.length === 0 ? (
                      <li className="py-6 text-center text-gray-500">
                        No hi ha productes a la cistella.
                      </li>
                    ) : (
                      cartItems.map((item) => {
                        const details = getProductDetails(item.id);
                        if (!details) return null;
                        return (
                          <li key={item.id} className="py-6 flex">
                            <div className="flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{details.name}</h3>
                                  <p className="ml-4">{(details.price * item.quantity).toFixed(2)}€</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{details.price.toFixed(2)}€ / unit</p>
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center border rounded-md">
                                  <button
                                    className="p-1 hover:bg-gray-100"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    <Minus size={16} />
                                  </button>
                                  <span className="px-2 font-medium">{item.quantity}</span>
                                  <button
                                    className="p-1 hover:bg-gray-100"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <Plus size={16} />
                                  </button>
                                </div>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-red-600 hover:text-red-500 flex items-center"
                                    onClick={() => removeFromCart(item.id)}
                                  >
                                    <Trash2 size={16} className="mr-1" />
                                    Eliminar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>{cartTotal.toFixed(2)}€</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm border p-2"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm border p-2"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telèfon</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm border p-2"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comentaris</label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm border p-2"
                      value={formData.comments}
                      onChange={handleInputChange}
                    />
                  </div>

                  <p className="mt-0.5 text-sm text-gray-500">
                    El pagament es realitzarà posteriorment. Se t'enviarà un correu amb els detalls.
                  </p>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-yellow-400 hover:bg-yellow-300"
                    >
                      Enviar comanda
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
