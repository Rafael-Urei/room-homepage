export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen bg-black bg-opacity-30 absolute">
      {children}
    </div>
  );
}
