import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function QuestionHeading({
  children,
  className = "text-xl mt-7 mb-3",
  headingLevel = 2,
}: Props) {
  const Heading = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return <Heading className={className}>{children}</Heading>;
}
