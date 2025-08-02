export interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  icon: string;
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    client: "شركة تقنية ناشئة",
    challenge: "معدل احتفاظ بالعملاء منخفض (35%) ونمو بطيء",
    solution: "تطبيق منظومة المحتوى الذكي + CRM ذكي",
    results: ["زيادة معدل الاحتفاظ إلى 68%", "نمو شهري 55%", "تقليل تكلفة التسويق 40%"],
    quote: "تحولنا من شركة ناشئة عادية إلى لاعب رئيسي في السوق خلال 6 أشهر فقط",
    icon: "fas fa-rocket",
    color: "from-blue-500 to-cyan-500"
  },
  {
    client: "سلسلة متاجر تجزئة",
    challenge: "تباين أداء الفروع وصعوبة اتخاذ قرارات موحدة",
    solution: "لوحات تحكم تنبؤية + أتمتة سير العمل",
    results: ["تحسن كفاءة العمليات 35%", "زيادة المبيعات 28%", "توفير 200 ساعة إدارة شهريًا"],
    quote: "الذكاء الاصطناعي من IISAL AI غير طريقة إدارتنا بالكامل",
    icon: "fas fa-store",
    color: "from-purple-500 to-pink-500"
  },
  {
    client: "بنك رقمي",
    challenge: "زيادة المنافسة وصعوبة التميز في تجربة العملاء",
    solution: "نظام التحسين المستمر + حملات إعلانية ذكية",
    results: ["زيادة رضا العملاء 42%", "نمو العملاء الجدد 70%", "تحسين عائد الإعلانات 3x"],
    quote: "أصبحنا نتفوق على منافسينا في تجربة العملاء بفضل الحلول الذكية",
    icon: "fas fa-university",
    color: "from-green-500 to-teal-500"
  }
];
