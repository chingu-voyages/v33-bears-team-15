import Layout from "../components/layout";
import styles from "../components/home.module.css";

export default function Home() {
  return (
    <Layout>
      <h2 className="pl-12 pt-12 uppercase text-6xl w-80 text-white">
        Welcome to the Setism Book Club
      </h2>
      <h3 className="pl-12 text-xl w-80 py-10 text-white">
        The no.1 stop for geeks and nerds
      </h3>
      <button className={styles.btnRead}>Read Now</button>
    </Layout>
  );
}
