import { Search, ShoppingCart, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { OAuthModal } from './OAuthModal';

export function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const cartItems = JSON.parse(savedCart);
        if (Array.isArray(cartItems)) {
          setCartCount(cartItems.length);
        }
      }
    } catch (error) {
      console.error('Error reading cart from localStorage:', error);
    }
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="images/mj logo-Photoroom.png"
                alt="MJ Jersey"
                className="h-12 w-auto object-contain hover:scale-110 transition-transform cursor-pointer"
              />
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-6 py-2.5 w-96 hover:bg-gray-150 transition-colors">
              <Search className="w-4 h-4 text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Search jerseys..."
                className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500"
              />
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <button className="relative hover:scale-110 transition-transform">
                <ShoppingCart className="w-6 h-6 text-gray-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsAuthOpen(true)}
                className="hover:scale-110 transition-transform"
              >
                <User className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isAuthOpen && (
        <OAuthModal
          onClose={() => setIsAuthOpen(false)}
        />
      )}
    </>
  );
}
