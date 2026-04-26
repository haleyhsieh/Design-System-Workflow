import { ReactNode } from 'react';

export type ButtonSeverity = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';
export type ButtonVariant = 'filled' | 'outlined';
export type ButtonRounded = 'default' | 'pill' | 'square';

interface ButtonProps {
  children?: ReactNode;
  severity?: ButtonSeverity;
  variant?: ButtonVariant;
  rounded?: ButtonRounded;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const severityStyles = {
  filled: {
    primary: 'bg-[#10b981] text-white border-[#10b981] hover:bg-[#059669] active:bg-[#047857]',
    secondary: 'bg-[#94a3b8] text-white border-[#94a3b8] hover:bg-[#64748b] active:bg-[#475569]',
    success: 'bg-[#22c55e] text-white border-[#22c55e] hover:bg-[#16a34a] active:bg-[#15803d]',
    info: 'bg-[#3b82f6] text-white border-[#3b82f6] hover:bg-[#2563eb] active:bg-[#1d4ed8]',
    warning: 'bg-[#f97316] text-white border-[#fb923c] hover:bg-[#ea580c] active:bg-[#c2410c]',
    danger: 'bg-[#ef4444] text-white border-[#ef4444] hover:bg-[#dc2626] active:bg-[#b91c1c]',
  },
  outlined: {
    primary: 'bg-transparent text-[#10b981] border-[#10b981] hover:bg-[#10b981]/10 focus:bg-transparent active:bg-[#10b981]/20',
    secondary: 'bg-transparent text-[#94a3b8] border-[#94a3b8] hover:bg-[#94a3b8]/10 focus:bg-transparent active:bg-[#94a3b8]/20',
    success: 'bg-transparent text-[#22c55e] border-[#22c55e] hover:bg-[#22c55e]/10 focus:bg-transparent active:bg-[#22c55e]/20',
    info: 'bg-transparent text-[#3b82f6] border-[#3b82f6] hover:bg-[#3b82f6]/10 focus:bg-transparent active:bg-[#3b82f6]/20',
    warning: 'bg-transparent text-[#f97316] border-[#f97316] hover:bg-[#f97316]/10 focus:bg-transparent active:bg-[#f97316]/20',
    danger: 'bg-transparent text-[#ef4444] border-[#ef4444] hover:bg-[#ef4444]/10 focus:bg-transparent active:bg-[#ef4444]/20',
  },
};

const roundedStyles = {
  default: 'rounded-[6px]',
  pill: 'rounded-[9999px]',
  square: 'rounded-none',
};

export function Button({
  children,
  severity = 'primary',
  variant = 'filled',
  rounded = 'default',
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-[10px] px-[13px] py-[9px] border border-solid font-medium text-[14px] leading-normal transition-all duration-150 cursor-pointer';
  const disabledStyles = disabled ? 'opacity-30 cursor-not-allowed' : '';
  const variantStyles = severityStyles[variant][severity];
  const roundedStyle = roundedStyles[rounded];

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${roundedStyle} ${disabledStyles} ${className}`}
    >
      {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
      {children && <span className="whitespace-nowrap">{children}</span>}
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </button>
  );
}
