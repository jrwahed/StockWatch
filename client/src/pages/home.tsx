import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import ServiceModal from "@/components/ServiceModal";
import ChatWidget from "@/components/ChatWidget";
import { services, Service } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blogPosts";
import { faqs } from "@/data/faqs";

export default function Home() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.service-card, .case-study-card, .blog-card, .faq-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[var(--dark-navy)] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                نحول <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">بياناتك</span>
                <br />إلى نمو استثنائي
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                حلول ذكاء اصطناعي مخصصة تضاعف نمو شركتك وتحسن كفاءتها التشغيلية بنسبة تصل إلى 60%
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
                ابدأ رحلتك الذكية الآن
              </button>
              <button className="border border-gray-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all">
                شاهد العرض التوضيحي
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">200+</div>
                <div className="text-gray-400">شركة نجحت</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">60%</div>
                <div className="text-gray-400">متوسط النمو</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-gray-400">دعم مستمر</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-gray-400">دولة عربية</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating AI Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-[var(--dark-navy)] to-[var(--dark-blue)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا الذكية</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              مجموعة شاملة من الحلول المدعومة بالذكاء الاصطناعي لتحويل أعمالك ومضاعفة نموها
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map(service => (
              <div key={service.id} className="service-card opacity-0">
                <ServiceCard service={service} onClick={setActiveService} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-[var(--dark-navy)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">قصص نجاح حقيقية</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              شركات حققت نتائج استثنائية باستخدام حلولنا الذكية
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-card opacity-0 bg-[var(--dark-blue)] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mb-4`}>
                    <i className={`${study.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.client}</h3>
                  <p className="text-gray-400 mb-4">{study.challenge}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-green-400">
                      <i className="fas fa-check text-sm mr-2"></i>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
                
                <blockquote className="text-gray-300 italic border-r-4 border-blue-500 pr-4">
                  "{study.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-b from-[var(--dark-blue)] to-[var(--dark-navy)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">أحدث المقالات</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              رؤى وتحليلات عميقة حول الذكاء الاصطناعي ونمو الأعمال
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-card opacity-0 bg-[var(--dark-blue)] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className={`h-48 bg-gradient-to-r ${post.color} flex items-center justify-center`}>
                  <i className={`${post.icon} text-white text-4xl`}></i>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <i className="fas fa-clock mr-1"></i>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[var(--dark-navy)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">الأسئلة الشائعة</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              إجابات واضحة على أكثر الأسئلة شيوعًا حول خدماتنا
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item opacity-0 bg-[var(--dark-blue)] rounded-xl overflow-hidden">
                <button 
                  className="w-full text-right p-6 flex justify-between items-center hover:bg-gray-800 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}></i>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--dark-blue)] py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-brain text-white"></i>
                </div>
                <span className="text-2xl font-bold">IISAL AI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                نحول بياناتك إلى نمو استثنائي باستخدام أحدث تقنيات الذكاء الاصطناعي
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">أبحاث السوق التنبؤية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">هندسة استراتيجية النمو</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الحملات الإعلانية الذكية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">منظومة المحتوى الذكي</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">الشركة</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">فريق العمل</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الوظائف</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <i className="fab fa-linkedin text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <i className="fab fa-github text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IISAL AI. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
