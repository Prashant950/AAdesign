import { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message, type = 'success', title = '') => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setToasts((prev) => [...prev, { id, message, type, title }]);
      setTimeout(() => removeToast(id), 4500);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="pointer-events-none fixed right-4 top-24 z-[100] flex max-w-sm flex-col gap-3 sm:right-6"
        aria-live="polite"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={`pointer-events-auto flex items-start gap-3 rounded-xl border-2 px-4 py-3.5 shadow-2xl animate-toastIn ${
              t.type === 'error'
                ? 'border-red-400 bg-choco-dark text-white'
                : 'border-gold bg-choco text-white'
            }`}
          >
            {t.type === 'error' ? (
              <AlertCircle className="mt-0.5 shrink-0 text-red-400" size={20} />
            ) : (
              <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={20} />
            )}
            <div className="min-w-0 flex-1">
              {t.title && <p className="font-heading text-sm font-bold text-gold">{t.title}</p>}
              <p className="text-sm leading-snug text-stone-100">{t.message}</p>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="rounded p-0.5 text-stone-400 transition hover:text-gold"
              aria-label="Dismiss notification"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
