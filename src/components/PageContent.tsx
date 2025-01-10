import { ReactNode } from "react";

export default function PageContent({ children }: { children: ReactNode }) {
  return <main className="page_content_container">{children}</main>;
}
