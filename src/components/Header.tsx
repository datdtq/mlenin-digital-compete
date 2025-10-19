import { GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            ML
          </div>
          <div className="flex flex-col">
            <h1 className="text-base md:text-lg font-semibold leading-tight">
              Triết học Mác–Lênin
            </h1>
            <p className="text-xs text-muted-foreground">
              Cạnh tranh & Độc quyền
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="hidden sm:flex gap-2"
            asChild
          >
            <a href="/chu_de.pdf" download>
              <Download className="h-4 w-4" />
              Chủ đề
            </a>
          </Button>
          <Button 
            size="sm"
            className="gap-2 gradient-primary border-0"
            asChild
          >
            <a href="/noi_dung_chuong.pdf" download>
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Tài liệu</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
