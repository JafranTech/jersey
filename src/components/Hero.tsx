import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev: number) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleExplore = () => {
    // Navigate to shop page (placeholder functionality)
    console.log('Navigate to shop page');
  };

  return (
    <div
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      {/* Background Image Carousel */}
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {[
          '/images/hero1.png',
          '/images/hero2.png',
          '/images/hero3.png'
        ].map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Hero Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
        {/* Overlay - Darker for Hero 1 (Text Overlay), Lighter for Hero 2 & 3 (Poster Art) */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ${currentImage === 0 ? 'bg-black/50' : 'bg-black/20'
            }`}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${isVisible && currentImage === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight not-italic no-underline drop-shadow-lg">
          Wear Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
            Passion
          </span>
        </h1>

        <button
          onClick={handleExplore}
          className="group bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 shadow-xl hover:shadow-white/20 hover:scale-[1.02]"
        >
          Explore Collection
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
}
