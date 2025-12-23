import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { HomePage } from './components/HomePage';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { OrderSuccess } from './components/OrderSuccess';
import { Orders } from './components/Orders';
import { products } from './data/products';
import { Product } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      setSelectedProduct(null);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          {currentPage !== 'login' && currentPage !== 'order-success' && (
            <Header
              onNavigate={handleNavigate}
              currentPage={currentPage}
              onSearch={handleSearch}
            />
          )}

          {currentPage === 'login' && <Login onNavigate={handleNavigate} />}
          
          {currentPage === 'home' && (
            <HomePage
              products={products}
              onProductClick={handleProductClick}
              searchQuery={searchQuery}
            />
          )}

          {currentPage === 'product-detail' && selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onBack={() => handleNavigate('home')}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'cart' && <Cart onNavigate={handleNavigate} />}

          {currentPage === 'checkout' && <Checkout onNavigate={handleNavigate} />}

          {currentPage === 'order-success' && (
            <OrderSuccess onNavigate={handleNavigate} />
          )}

          {currentPage === 'orders' && <Orders onNavigate={handleNavigate} />}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
