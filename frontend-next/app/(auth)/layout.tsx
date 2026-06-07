import { SiteHeader } from "@/components/site-header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen background-grid">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center p-6 glow-mesh">
        <div className="w-full max-w-md animate-float" style={{ animationDuration: '8s' }}>
          <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Background decorative blob */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[80px] -z-10 group-hover:bg-primary/30 transition-colors"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[80px] -z-10 group-hover:bg-purple-500/20 transition-colors"></div>
            
            <div className="relative z-10 transition-all">
              {children}
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground reveal" style={{ animationDelay: '0.4s' }}>
            <p>Protected by industry-standard encryption</p>
          </div>
        </div>
      </div>
    </div>
  );
}

