import styles from '../components/main.module.css'

const Home = () => (
  <div>
    <h1>Nothing to see here, peasant</h1>
    <a href="/about" className={styles.error}>Or is there...</a>
  </div>
);

export default Home;
