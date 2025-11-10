import { Card } from "@/components/ui/card";
import { Lightbulb, ArrowUpDown, Repeat } from "lucide-react";

const PhilosophyApplication = () => {
  const applications = [
    {
      icon: Lightbulb,
      title: "Mâu thuẫn Lực lượng sản xuất - Quan hệ sản xuất",
      content: [
        {
          subtitle: "Lực lượng sản xuất mới",
          text: "CMCN 4.0 tạo ra lực lượng sản xuất mới: AI, Big Data, IoT, tự động hóa thông minh. Năng suất lao động tăng vọt."
        },
        {
          subtitle: "Quan hệ sản xuất chậm thay đổi",
          text: "Quan hệ sở hữu tư nhân vẫn chiếm ưu thế. Các nền tảng số độc quyền dữ liệu và công nghệ, tạo mâu thuẫn mới."
        },
        {
          subtitle: "Biểu hiện mâu thuẫn",
          text: "Người lao động gig (tài xế Grab, shipper) không có quyền lợi như lao động truyền thống. Nền tảng chiếm đoạt giá trị thặng dư từ lao động số."
        }
      ]
    },
    {
      icon: ArrowUpDown,
      title: "Quy luật chuyển hóa từ Lượng sang Chất",
      content: [
        {
          subtitle: "Tích lũy về lượng",
          text: "Sự phát triển công nghệ số tích lũy dần: Internet → Di động → Cloud → AI → Big Data."
        },
        {
          subtitle: "Bước nhảy chất",
          text: "Khi đạt ngưỡng nhất định, nền kinh tế chuyển từ công nghiệp truyền thống sang kinh tế số. Cách thức cạnh tranh thay đổi căn bản."
        },
        {
          subtitle: "Ứng dụng thực tiễn",
          text: "Việt Nam từ nền kinh tế nông nghiệp → công nghiệp → hiện đang chuyển mạnh sang kinh tế số với tốc độ nhanh."
        }
      ]
    },
    {
      icon: Repeat,
      title: "Cạnh tranh như quy luật khách quan",
      content: [
        {
          subtitle: "Tính khách quan",
          text: "Cạnh tranh là quy luật khách quan không phụ thuộc ý chí con người. Trong kinh tế số, quy luật này vẫn tồn tại nhưng biểu hiện khác."
        },
        {
          subtitle: "Từ cạnh tranh đến độc quyền",
          text: "Cạnh tranh dẫn đến tích tụ tư bản (dữ liệu, công nghệ) → hình thành độc quyền nền tảng nhanh hơn so với công nghiệp truyền thống."
        },
        {
          subtitle: "Vai trò nhà nước",
          text: "Nhà nước cần can thiệp điều tiết để đảm bảo cạnh tranh lành mạnh, chống độc quyền có hại, bảo vệ người lao động và người tiêu dùng."
        }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Ứng dụng kinh tế chính trị Mác–Lênin
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Vận dụng kinh tế chính trị Mác–Lênin
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Giải thích hiện tượng cạnh tranh kinh tế số qua các quy luật khách quan 
              của chủ nghĩa duy vật biện chứng và duy vật lịch sử
            </p>
          </div>

          <div className="space-y-6">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 shadow-card hover:shadow-elegant transition-smooth"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">{app.title}</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {app.content.map((item, i) => (
                        <div key={i} className="space-y-2">
                          <h4 className="font-semibold text-accent">{item.subtitle}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 gradient-primary text-white">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Kết luận </h3>
              <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
                Cạnh tranh trong nền kinh tế số là biểu hiện mới của các quy luật khách quan mà 
                C.Mác và Ph.Ăngghen đã phát hiện ra. Mâu thuẫn giữa lực lượng sản xuất hiện đại 
                (công nghệ số) và quan hệ sản xuất (sở hữu tư nhân độc quyền nền tảng) đang ngày 
                càng gay gắt, đòi hỏi sự can thiệp hợp lý của nhà nước để phát triển bền vững.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyApplication;
