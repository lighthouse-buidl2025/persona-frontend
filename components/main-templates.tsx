import Header from "@/components/header";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex w-[1200px] mx-auto py-8">
        <div className="rounded-lg border border-gray-200 w-full h-full">
          {children}
        </div>
      </div>
    </>
  );
}
