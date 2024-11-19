import { ComponentProps } from "react";

type HeadingProps = ComponentProps<"h1">;

export const Heading = ({ ...rest }: HeadingProps) => {
  return <h1 {...rest} />;
};
