import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      aspect: "Tài sản cốt lõi",
      traditional: "Tư liệu sản xuất hữu hình (máy móc, nguyên vật liệu)",
      digital: "Công nghệ thông tin, Big Data, AI, IoT - các yếu tố vô hình"
    },
    {
      aspect: "Mục tiêu chính",
      traditional: "Giá trị thặng dư siêu ngạch qua giảm chi phí sản xuất cá biệt",
      digital: "Ứng dụng khoa học-công nghệ cao, phát triển mô hình kinh doanh mới"
    },
    {
      aspect: "Phương tiện cạnh tranh",
      traditional: "Cải tiến kỹ thuật, hợp lý hóa sản xuất, tăng năng suất",
      digital: "Lợi thế mạng lưới (Network effects), dữ liệu, thuật toán AI"
    },
    {
      aspect: "Tốc độ & phạm vi",
      traditional: "Tương đối chậm, phạm vi địa phương hoặc quốc gia",
      digital: "Tốc độ cao, toàn cầu hóa tức thời qua công nghệ số"
    },
    {
      aspect: "Xu hướng độc quyền",
      traditional: "Tích tụ và tập trung tư bản theo thời gian dài",
      digital: "Nhanh chóng hình thành độc quyền nền tảng (Platform monopoly)"
    },
    {
      aspect: "Đối tượng cạnh tranh",
      traditional: "Giá trị hàng hóa, chi phí sản xuất",
      digital: "Dữ liệu người dùng, trải nghiệm khách hàng, hệ sinh thái"
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              So sánh cạnh tranh truyền thống và kinh tế số
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Phân tích sự chuyển biến từ cạnh tranh công nghiệp truyền thống 
              sang cạnh tranh trong thời đại CMCN 4.0
            </p>
          </div>

          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <Card 
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">
                    {item.aspect}
                  </h3>
                  <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        Cạnh tranh truyền thống
                      </p>
                      <p className="text-sm leading-relaxed">
                        {item.traditional}
                      </p>
                    </div>
                    
                    <ArrowRight className="hidden md:block h-5 w-5 text-accent flex-shrink-0" />
                    
                    <div className="space-y-2 md:text-right">
                      <p className="text-sm font-medium text-accent">
                        Cạnh tranh kinh tế số
                      </p>
                      <p className="text-sm leading-relaxed">
                        {item.digital}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
