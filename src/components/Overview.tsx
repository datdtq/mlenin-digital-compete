import { Target, Lightbulb, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const Overview = () => {
  const objectives = [
    {
      icon: Target,
      title: "Mục tiêu nghiên cứu",
      description: "Hiểu rõ lý luận về cạnh tranh và độc quyền theo quan điểm Mác–Lênin trong bối cảnh kinh tế thị trường hiện đại"
    },
    {
      icon: Lightbulb,
      title: "Phân tích so sánh",
      description: "Làm rõ sự khác biệt giữa cạnh tranh truyền thống và cạnh tranh trong nền kinh tế số với các nền tảng như Grab, Shopee, TikTok Shop"
    },
    {
      icon: Globe,
      title: "Ứng dụng thực tiễn",
      description: "Liên hệ thực tiễn Việt Nam và đề xuất các giải pháp chính sách phù hợp với điều kiện phát triển kinh tế số"
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Tổng quan nghiên cứu
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nghiên cứu tập trung vào việc vận dụng các quy luật khách quan của kinh tế chính trị Mác–Lênin 
              để giải thích hiện tượng cạnh tranh trong nền kinh tế số
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {objectives.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 space-y-4 shadow-card hover:shadow-elegant transition-smooth border-border/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
