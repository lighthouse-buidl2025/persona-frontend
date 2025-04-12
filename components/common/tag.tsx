export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
      {children}
    </div>
  );
}
