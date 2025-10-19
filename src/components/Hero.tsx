import { BookOpen, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-subtle py-20 md:py-28">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">MLN122 - Chương 4</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Cạnh tranh và Độc quyền trong{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nền kinh tế thị trường
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            So sánh cạnh tranh truyền thống và cạnh tranh trong nền kinh tế số 
            qua lăng kính triết học Mác–Lênin
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span>Grab • Shopee • TikTok Shop</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
