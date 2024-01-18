
export default function ChatManager({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="  size-full border flex flex-row">
    {children}
  </div>;
}
