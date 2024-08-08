import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar({ navigation }) {
  return (
    <aside className={`${styles["sidebar"]}`}>
      <ul className={styles["sidebar-list"]}>
        {navigation.map((page) => (
          <li key={page.url} className={styles["sidebar-item"]}>
            <Link to={page.url}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}