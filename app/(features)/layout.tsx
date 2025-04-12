import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <div className="flex w-[1200px] mx-auto py-8">
        <div className="w-full h-full font-[family-name:var(--font-noto-sans)]">
          {children}
        </div>
      </div>
    </div>
  );
}
