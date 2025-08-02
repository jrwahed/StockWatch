import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[var(--dark-navy)]/90 backdrop-blur-md z-40 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <i className="fas fa-brain text-white text-lg"></i>
            </div>
            <span className="text-2xl font-bold">IISAL AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-blue-400 transition-colors"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-blue-400 transition-colors"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="hover:text-blue-400 transition-colors"
            >
              قصص النجاح
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="hover:text-blue-400 transition-colors"
            >
              المدونة
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="hover:text-blue-400 transition-colors"
            >
              الأسئلة الشائعة
            </button>
          </div>
          
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
            احجز استشارة مجانية
          </Button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-right hover:text-blue-400 transition-colors"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-right hover:text-blue-400 transition-colors"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="block w-full text-right hover:text-blue-400 transition-colors"
            >
              قصص النجاح
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="block w-full text-right hover:text-blue-400 transition-colors"
            >
              المدونة
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-right hover:text-blue-400 transition-colors"
            >
              الأسئلة الشائعة
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
