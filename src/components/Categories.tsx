import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    id: 1,
    name: 'Club Jerseys',
    image: 'images/FC_Barcelona_(crest).svg.png',
  },
  {
    id: 2,
    name: 'Nation Jerseys',
    image: 'images/afa.png',
  },
  {
    id: 3,
    name: 'Retro Jerseys',
    image: 'images/mut.png',
  },
];

export function Categories() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Find your perfect jersey from our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`flex flex-col items-center transition-all duration-700 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative group cursor-pointer mb-6">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 group-hover:to-black/20 transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-black transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}