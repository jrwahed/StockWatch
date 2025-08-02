import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div 
      className="bg-[var(--dark-blue)] rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
      onClick={() => onClick(service)}
    >
      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <i className={`${service.icon} text-white text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">{service.problem}</p>
      <div className="flex items-center text-blue-400 font-semibold">
        <span>اكتشف الحل</span>
        <i className="fas fa-arrow-left ml-2"></i>
      </div>
    </div>
  );
}
