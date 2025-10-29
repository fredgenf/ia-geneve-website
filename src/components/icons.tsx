
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="240"
      height="40"
      {...props}
    >
      <text
        x="0"
        y="35"
        className="fill-primary logo-title"
      >
        IA Solutions PME Genève
      </text>
    </svg>
  );
}
