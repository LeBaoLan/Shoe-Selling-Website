import { CheckCircle } from 'lucide-react';

interface OrderSuccessProps {
  onNavigate: (page: string) => void;
}

export function OrderSuccess({ onNavigate }: OrderSuccessProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <CheckCircle size={64} className="mx-auto text-green-600 mb-4" />
        <h1 className="text-3xl mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
          You can track your order status in the orders page.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => onNavigate('orders')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View Orders
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
