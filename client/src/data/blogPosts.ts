export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  icon: string;
  color: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "كيف تغير الذكاء الاصطناعي قواعد المنافسة في السوق",
    excerpt: "تحليل عميق لتأثير الذكاء الاصطناعي على استراتيجيات النمو والكفاءة التشغيلية",
    date: "15 مارس 2024",
    readTime: "5 دقائق",
    icon: "fas fa-chart-line",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "دليل عملي: أتمتة 80% من مهام فريق التسويق",
    excerpt: "خطوات عملية لتطبيق الأتمتة الذكية في التسويق وتحقيق نتائج فورية",
    date: "8 مارس 2024",
    readTime: "7 دقائق",
    icon: "fas fa-cogs",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "قصة نجاح: تحول شركة من خسائر إلى أرباح في 90 يومًا",
    excerpt: "دراسة حالة حقيقية لشركة استخدمت حلول IISAL AI لتحقيق تحول جذري",
    date: "1 مارس 2024",
    readTime: "6 دقائق",
    icon: "fas fa-trophy",
    color: "from-green-500 to-teal-500"
  }
];
