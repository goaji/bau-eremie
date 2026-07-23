export default function NavLink({
  href,
  isRed = false,
  children,
}: {
  href: string;
  isRed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={
        isRed
          ? "bg-red text-white px-6 py-3.25 text-base font-semibold hover:bg-red-deep transition-colors"
          : "text-paper-2 hover:text-white text-[16.5px] font-medium"
      }
    >
      {children}
    </a>
  );
}
