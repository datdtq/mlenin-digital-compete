import { GraduationCap, Calendar, Book } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30 py-12">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  ML
                </div>
                <span className="font-semibold">Triết học Mác–Lênin</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nghiên cứu cạnh tranh và độc quyền trong nền kinh tế thị trường 
                theo quan điểm duy vật biện chứng và duy vật lịch sử.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Book className="h-4 w-4 text-primary" />
                Nội dung chính
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lý luận cạnh tranh và độc quyền</li>
                <li>• Cạnh tranh truyền thống vs Kinh tế số</li>
                <li>• Case studies: Grab, Shopee, TikTok</li>
                <li>• Ứng dụng triết học Mác–Lênin</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                Thông tin môn học
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="font-medium">Mã môn:</span> MLN122
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Chương:</span> Chương 4
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" />
                  <span>Năm 2025</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Triết học Mác–Lênin MLN122. Website học thuật phục vụ nghiên cứu.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="/chu_de.pdf" download className="hover:text-primary transition-smooth">
                Tải chủ đề
              </a>
              <span>•</span>
              <a href="/noi_dung_chuong.pdf" download className="hover:text-primary transition-smooth">
                Tài liệu chương
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
