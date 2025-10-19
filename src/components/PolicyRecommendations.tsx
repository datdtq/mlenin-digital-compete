import { Card } from "@/components/ui/card";
import { Shield, Zap, Users, TrendingUp, BookOpen, Scale } from "lucide-react";

const PolicyRecommendations = () => {
  const recommendations = [
    {
      icon: Zap,
      title: "Nâng cấp hạ tầng số",
      description: "Đầu tư mạnh vào hạ tầng 5G, trung tâm dữ liệu, mạng Internet tốc độ cao để tạo nền tảng cạnh tranh bình đẳng cho các doanh nghiệp"
    },
    {
      icon: Scale,
      title: "Thể chế quản lý nền tảng",
      description: "Xây dựng khung pháp lý rõ ràng về quản lý nền tảng số, chống độc quyền có hại, đảm bảo cạnh tranh công bằng và bảo vệ dữ liệu cá nhân"
    },
    {
      icon: Users,
      title: "Bảo vệ người lao động gig",
      description: "Quy định rõ quyền lợi của người lao động nền tảng (tài xế, shipper): bảo hiểm xã hội, y tế, điều kiện làm việc an toàn"
    },
    {
      icon: Shield,
      title: "An ninh dữ liệu quốc gia",
      description: "Bảo vệ dữ liệu công dân, yêu cầu các nền tảng lưu trữ dữ liệu trong nước, minh bạch thuật toán, chống lạm dụng dữ liệu"
    },
    {
      icon: BookOpen,
      title: "Đào tạo nhân lực số",
      description: "Nâng cao năng lực số cho người lao động, doanh nghiệp vừa và nhỏ để tham gia cạnh tranh hiệu quả trong nền kinh tế số"
    },
    {
      icon: TrendingUp,
      title: "Thúc đẩy đổi mới sáng tạo",
      description: "Hỗ trợ startup công nghệ Việt Nam, khuyến khích nghiên cứu AI, Big Data để tạo nền tảng số nội địa cạnh tranh với nước ngoài"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-medium">
              Giải pháp
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Khuyến nghị chính sách cho Việt Nam
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Các giải pháp cụ thể để phát triển nền kinh tế số bền vững, 
              đảm bảo cạnh tranh lành mạnh và bảo vệ quyền lợi người dân
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 space-y-4 bg-background shadow-card hover:shadow-elegant transition-smooth group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                Định hướng phát triển
              </h3>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                Việt Nam cần xây dựng nền kinh tế số với sự cân bằng giữa phát triển thị trường 
                và can thiệp nhà nước, đảm bảo vừa thu hút đầu tư nước ngoài vừa bảo vệ chủ quyền 
                số, phát triển công nghệ nội địa, và đặc biệt là bảo vệ quyền lợi người lao động 
                trong bối cảnh chuyển đổi số mạnh mẽ.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PolicyRecommendations;
