import { Card } from "@/components/ui/card";
import { Factory, TrendingUp, Users, Building2 } from "lucide-react";

const TheorySection = () => {
  const concepts = [
    {
      icon: Factory,
      title: "Cạnh tranh truyền thống",
      points: [
        "Ganh đua gay gắt giữa các chủ thể kinh doanh",
        "Mục tiêu: Tìm kiếm giá trị thặng dư (lợi nhuận)",
        "Phương tiện: Cải tiến kỹ thuật, tăng năng suất lao động",
        "Phạm vi: Cạnh tranh nội bộ ngành và liên ngành"
      ]
    },
    {
      icon: TrendingUp,
      title: "Tích tụ và tập trung tư bản",
      points: [
        "Cạnh tranh dẫn đến tích tụ tư bản",
        "Tập trung sản xuất vào các doanh nghiệp lớn",
        "Hình thành độc quyền là kết quả tất yếu",
        "Từ cạnh tranh tự do đến độc quyền"
      ]
    },
    {
      icon: Building2,
      title: "Độc quyền",
      points: [
        "Liên minh giữa các doanh nghiệp lớn",
        "Nắm giữ sản xuất và tiêu thụ hàng hóa",
        "Định giá độc quyền, thu lợi nhuận cao",
        "Độc quyền không loại bỏ cạnh tranh"
      ]
    },
    {
      icon: Users,
      title: "Cạnh tranh trong độc quyền",
      points: [
        "Cạnh tranh giữa các tổ chức độc quyền",
        "Cạnh tranh giữa độc quyền và phi độc quyền",
        "Cạnh tranh nội bộ tổ chức độc quyền",
        "Cạnh tranh gay gắt và khốc liệt hơn"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Chương 4
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Cơ sở lý luận Mác–Lênin
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Các khái niệm cơ bản về cạnh tranh và độc quyền trong kinh tế thị trường 
              theo quan điểm duy vật lịch sử
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {concepts.map((concept, index) => {
              const Icon = concept.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 space-y-4 bg-background shadow-card hover:shadow-elegant transition-smooth"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{concept.title}</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {concept.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheorySection;
