import { Service } from "@/data/services";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[var(--dark-blue)] rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
        {/* Modal Header */}
        <div className={`bg-gradient-to-r ${service.color} p-8 rounded-t-2xl text-white`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
              <p className="text-white/90">الحل الذكي لتحدياتك</p>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        
        {/* Modal Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Problem Section */}
            <div className="bg-red-50/5 border border-red-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <i className="fas fa-exclamation-triangle mr-3"></i>
                التحدي
              </h3>
              <p className="text-gray-300 leading-relaxed">{service.problem}</p>
            </div>
            
            {/* Solution Section */}
            <div className="bg-blue-50/5 border border-blue-500/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
                <i className="fas fa-lightbulb mr-3"></i>
                الحل الذكي
              </h3>
              <p className="text-gray-300 leading-relaxed">{service.solution}</p>
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-green-50/5 border border-green-500/20 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
              <i className="fas fa-chart-line mr-3"></i>
              النتائج المحققة
            </h3>
            <p className="text-gray-300 leading-relaxed">{service.result}</p>
          </div>
          
          {/* How it works */}
          <div className="bg-gray-50/5 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold text-gray-300 mb-4">كيف يعمل النظام؟</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">1</div>
                <span className="text-gray-300">جمع البيانات من مصادر متعددة</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">2</div>
                <span className="text-gray-300">تحليل البيانات باستخدام نماذج ذكية</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">3</div>
                <span className="text-gray-300">توليد توصيات استراتيجية دقيقة</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">4</div>
                <span className="text-gray-300">تنفيذ التوصيات وقياس النتائج</span>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all">
              احجز استشارة مجانية الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
