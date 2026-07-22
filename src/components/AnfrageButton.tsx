import Link from "next/link";

const BASE_CLASSES =
  "bg-red text-white px-6.5 py-3.5 text-[15px] font-semibold no-underline hover:bg-red-deep transition-colors";

type AnfrageButtonProps =
  | {
    href?: string;
    disabled?: boolean;
    label: string;
  }


export default function AnfrageButton(props: AnfrageButtonProps) {
  if (props && props.href) {
    return (
      <Link href={props.href} className={BASE_CLASSES}>
        {props.label}
      </Link>
    );
  }

  const { label, disabled } = props;

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${BASE_CLASSES} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {label}
    </button>
  );
}
