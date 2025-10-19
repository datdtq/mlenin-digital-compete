import { Card } from "@/components/ui/card";
import { Car, ShoppingBag, Video, Database, Users, Zap } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      name: "Grab",
      icon: Car,
      color: "bg-green-500",
      description: "Nền tảng đa dịch vụ (siêu ứng dụng)",
      competition: [
        "Cạnh tranh dựa trên dữ liệu hành vi người dùng và tài xế",
        "Thuật toán định giá động (dynamic pricing) theo thời gian thực",
        "Hiệu ứng mạng lưới: Càng nhiều tài xế → thu hút khách → thu hút tài xế",
        "Mở rộng hệ sinh thái: giao đồ ăn, thanh toán, tài chính"
      ]
    },
    {
      name: "Shopee",
      icon: ShoppingBag,
      color: "bg-orange-500",
      description: "Thương mại điện tử C2C, B2C",
      competition: [
        "Cạnh tranh bằng trợ giá, khuyến mãi (miễn phí vận chuyển, xu Shopee)",
        "Dữ liệu mua sắm để cá nhân hóa trải nghiệm và gợi ý sản phẩm",
        "Game hóa (gamification): livestream, mini-game thu hút người dùng",
        "Xây dựng hệ sinh thái logistics và thanh toán riêng (ShopeePay)"
      ]
    },
    {
      name: "TikTok Shop",
      icon: Video,
      color: "bg-black",
      description: "Social commerce - Mạng xã hội + Thương mại",
      competition: [
        "Cạnh tranh bằng nội dung (content): video ngắn, livestream bán hàng",
        "Thuật toán AI phân phối nội dung cực kỳ tinh vi và gây nghiện",
        "Kết hợp giải trí và mua sắm: người dùng xem giải trí → mua hàng ngay",
        "Tạo xu hướng (trend) nhanh chóng, lan tỏa mạnh mẽ toàn cầu"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-medium">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Cạnh tranh trong nền kinh tế số Việt Nam
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Phân tích cụ thể cách thức cạnh tranh của các nền tảng số hàng đầu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseStudy, index) => {
              const Icon = caseStudy.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 space-y-4 bg-background shadow-card hover:shadow-elegant transition-smooth group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${caseStudy.color} text-white group-hover:scale-110 transition-smooth`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{caseStudy.name}</h3>
                      <p className="text-sm text-muted-foreground">{caseStudy.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-sm">
                    {caseStudy.competition.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Database className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">Dữ liệu là tài sản</h4>
                <p className="text-sm text-muted-foreground">Big Data thay thế máy móc truyền thống</p>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">Hiệu ứng mạng lưới</h4>
                <p className="text-sm text-muted-foreground">Càng nhiều người dùng, giá trị càng tăng</p>
              </div>
              <div className="space-y-2">
                <Zap className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">Tốc độ & Quy mô</h4>
                <p className="text-sm text-muted-foreground">Mở rộng nhanh chóng toàn cầu</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
