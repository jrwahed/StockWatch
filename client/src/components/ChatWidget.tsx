import { useState } from "react";

interface ChatMessage {
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "مرحبًا! أنا أسماء، مساعدك الذكي في IISAL AI. كيف يمكنني مساعدتك اليوم؟", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, sender: 'user' }]);
      
      // Simulate AI response
      setTimeout(() => {
        const responses = [
          "شكرًا لسؤالك! حلول IISAL AI مصممة لتقديم نتائج فورية. هل ترغب في معرفة المزيد عن خدمة معينة؟",
          "أفهم اهتمامك! نقدم استشارة مجانية لتقييم احتياجات شركتك بالضبط. هل ترغب في حجز موعد؟",
          "سؤال ممتاز! نعمل مع شركات من مختلف الأحجام والقطاعات. يمكنني تزويدك بدراسة حالة مشابهة لنشاطك إذا رغبت.",
          "نستخدم تقنيات ذكاء اصطناعي متقدمة لضمان أمان بياناتك التام. كل المعلومات مشفرة ومحفوظة بأعلى معايير الأمان."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, { text: randomResponse, sender: 'ai' }]);
      }, 1000);
      
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Chat Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        <i className="fas fa-comments text-white text-xl"></i>
      </button>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 h-96 bg-[var(--dark-blue)] rounded-2xl shadow-2xl border border-gray-700 chat-container">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-robot text-white text-sm"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">أسماء - المساعد الذكي</h3>
                  <p className="text-white/80 text-xs">متاحة الآن</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 space-y-3 h-64 overflow-y-auto chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start space-x-2 space-x-reverse ${message.sender === 'user' ? 'justify-end' : ''}`}>
                {message.sender === 'ai' && (
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-robot text-white text-xs"></i>
                  </div>
                )}
                <div className={`rounded-lg p-3 max-w-xs ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                    : 'bg-gray-700 text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Chat Input */}
          <div className="p-4 border-t border-gray-700">
            <form onSubmit={handleSubmit} className="flex space-x-2 space-x-reverse">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب رسالتك هنا..." 
                className="flex-1 bg-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg px-4 py-2 hover:shadow-lg transition-all">
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
