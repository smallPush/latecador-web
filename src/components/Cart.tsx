import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { X, Minus, Plus, Trash2, Loader2, ShoppingBag, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { sendTelegramMessage } from '../services/telegram';

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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gdprAccepted, setGdprAccepted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gdprAccepted) {
      setError('Has d\'acceptar la política de privadesa per continuar.');
      return;
    }
    setIsSending(true);
    setError(null);

    // Construct email items list
    const itemsList = cartItems
      .map((item) => {
        const details = getProductDetails(item.id);
        return details
          ? `${item.quantity}x ${details.name} (${details.price.toFixed(2)}€) = ${(
            item.quantity * details.price
          ).toFixed(2)}€`
          : '';
      })
      .filter(Boolean)
      .join('\n');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      comments: formData.comments,
      items_list: itemsList,
      total_amount: `${cartTotal.toFixed(2)}€`,
      admin_email: import.meta.env.VITE_ADMIN_EMAIL,
    };

    // Construct Telegram message
    const telegramMessage = `
<b>Nova Comanda Rebuda! 🛒</b>

<b>Client:</b> ${formData.name}
<b>Email:</b> ${formData.email}
<b>Telèfon:</b> ${formData.phone}
<b>Comentaris:</b> ${formData.comments || 'Cap'}

<b>Comanda:</b>
${itemsList}

<b>Total: ${cartTotal.toFixed(2)}€</b>
    `.trim();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );
      }
      sendTelegramMessage(telegramMessage).catch(err => console.error('Telegram error:', err));
      setIsSubmitted(true);
      clearCart();
    } catch (err) {
      console.error('Error sending email:', err);
      setError('S\'ha produït un error en enviar la comanda. Si us plau, torna-ho a intentar.');
    } finally {
      setIsSending(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-brand-900/40 backdrop-blur-sm transition-opacity" onClick={() => {
          setIsSubmitted(false);
          toggleCart();
        }}></div>
        <div className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden p-12 text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8 mx-auto border border-green-100">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="font-serif text-4xl text-brand-900 mb-4 text-center">Comanda enviada amb èxit!</h2>
          <p className="text-brand-600 mb-10 text-lg">
            Hem rebut la teva comanda correctament. T'enviarem un correu de confirmació a <span className="font-bold text-brand-900">{formData.email}</span> aviat.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              toggleCart();
            }}
            className="w-full bg-brand-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gold-500 transition-all shadow-lg uppercase tracking-widest text-sm"
          >
            Tancar la cistella
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-brand-900/40 backdrop-blur-sm transition-opacity" onClick={toggleCart}></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-xl">
          <div className="h-full flex flex-col bg-brand-50 shadow-2xl relative">
            {/* Header */}
            <div className="px-8 py-8 flex items-center justify-between border-b border-brand-200">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-brand-900" size={24} />
                <h2 className="font-serif text-3xl text-brand-900">La teva cistella</h2>
              </div>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-brand-200 text-brand-500 transition-colors"
                onClick={toggleCart}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-8 py-8">
              <div className="flow-root">
                <ul className="space-y-8">
                  {cartItems.length === 0 ? (
                    <li className="py-12 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mb-6 opacity-50">
                        <ShoppingBag className="text-brand-400" size={32} />
                      </div>
                      <p className="text-brand-500 font-serif text-xl">
                        Encara no hi ha productes.
                      </p>
                    </li>
                  ) : (
                    cartItems.map((item) => {
                      const details = getProductDetails(item.id);
                      if (!details) return null;
                      return (
                        <li key={item.id} className="flex gap-6 group">
                          <div className="flex-shrink-0 w-24 h-24 bg-brand-200 rounded-2xl overflow-hidden border border-brand-200">
                            {details.image ? (
                              <img src={details.image} alt={details.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-brand-300">
                                <ShoppingBag size={24} />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 flex flex-col pt-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-bold text-brand-900 text-lg leading-tight">{details.name}</h3>
                              <p className="text-brand-900 font-bold">{(details.price * item.quantity).toFixed(2)}€</p>
                            </div>

                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center bg-white rounded-full p-1 border border-brand-200 shadow-sm scale-90 -ml-2">
                                <button
                                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-50 text-brand-600 transition-all"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="px-3 font-bold text-brand-900 min-w-[1.5rem] text-center">{item.quantity}</span>
                                <button
                                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-50 text-brand-600 transition-all"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus size={14} />
                                </button>
                              </div>

                              <button
                                type="button"
                                className="text-red-400 hover:text-red-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <Trash2 size={14} />
                                Eliminar
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    })
                  )}
                </ul>
              </div>
            </div>

            {/* Checkout Section */}
            {cartItems.length > 0 && (
              <div className="bg-white border-t border-brand-200 p-8 shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-baseline mb-8">
                  <p className="font-serif text-2xl text-brand-900">Total comanda</p>
                  <p className="font-serif text-4xl text-brand-900 font-black">{cartTotal.toFixed(2)}€</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-brand-400 ml-1">Nom Complet *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="El vostre nom"
                        className="block w-full rounded-2xl border-brand-200 bg-brand-50 shadow-sm focus:border-gold-400 focus:ring-gold-400 sm:text-sm border-2 p-3 transition-all outline-none"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-brand-400 ml-1">Telèfon *</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder="600 00 00 00"
                        className="block w-full rounded-2xl border-brand-200 bg-brand-50 shadow-sm focus:border-gold-400 focus:ring-gold-400 sm:text-sm border-2 p-3 transition-all outline-none"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-brand-400 ml-1">Correu electrònic *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="hola@exemple.cat"
                      className="block w-full rounded-2xl border-brand-200 bg-brand-50 shadow-sm focus:border-gold-400 focus:ring-gold-400 sm:text-sm border-2 p-3 transition-all outline-none"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="comments" className="text-xs font-black uppercase tracking-widest text-brand-400 ml-1">Comentaris i Data *</label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows={3}
                      required
                      className="block w-full rounded-2xl border-brand-200 bg-brand-50 shadow-sm focus:border-gold-400 focus:ring-gold-400 sm:text-sm border-2 p-3 transition-all outline-none"
                      value={formData.comments}
                      onChange={handleInputChange}
                      placeholder="Indiqueu la data d'entrega/recollida i preferències"
                    />
                  </div>

                  <div className="flex items-start gap-3 py-2">
                    <input
                      id="gdpr"
                      name="gdpr"
                      type="checkbox"
                      required
                      className="mt-1 h-5 w-5 rounded-lg border-brand-300 text-brand-900 focus:ring-gold-400 transition-colors cursor-pointer"
                      checked={gdprAccepted}
                      onChange={(e) => setGdprAccepted(e.target.checked)}
                    />
                    <label htmlFor="gdpr" className="text-xs text-brand-500 leading-snug cursor-pointer font-medium">
                      Accepto que les meves dades siguin tractades per gestionar la comanda segons la política de privadesa (GDPR).
                    </label>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 text-red-700 text-xs font-bold rounded-2xl border border-red-100 flex items-center gap-2">
                      <X size={14} className="flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex justify-center items-center px-8 py-5 rounded-full shadow-2xl text-sm font-black uppercase tracking-[0.2em] text-white bg-brand-900 hover:bg-gold-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="animate-spin mr-3" size={20} />
                        Enviant comanda...
                      </>
                    ) : (
                      'Enviar comanda'
                    )}
                  </button>
                  <p className="text-[10px] text-center text-brand-400 uppercase tracking-widest font-bold">
                    El pagament es realitzarà posteriorment via transferència o bizum.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
