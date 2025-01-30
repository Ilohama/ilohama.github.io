import { ReactNode } from "react";
import styles from "./PageContent.module.scss";

export default function PageContent({ children }: { children: ReactNode }) {
  return <main className={styles.page_content_container}>{children}</main>;
}
