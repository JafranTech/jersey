import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { NewArrivals } from './components/NewArrivals';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navbar />
      <Hero />
      <Categories />
      <NewArrivals />
      <Footer />
    </div>
  );
}
