import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-scroll bg-cover bg-[linear-gradient(293.57deg,#e0f2fe_3.7%,#dbeafe_31.51%,#ede9fe_50%,#dbeafe_68.52%,#e0f2fe_96.3%)] flex flex-col items-center justify-center">
      <Header />
      <div className="flex mx-auto">
        <div className="rounded-lg w-full h-full">{children}</div>
      </div>
    </div>
  );
}
