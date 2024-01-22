import { ReactNode } from "react";
import { Card as BaseCard } from "react-daisyui";

interface Props {
  className?: string;
  children: ReactNode;
}

export function Card({ children, className = "bg-base-100 shadow-md" }: Props) {
  return (
    <BaseCard className={className}>
      <BaseCard.Body>{children}</BaseCard.Body>
    </BaseCard>
  );
}
