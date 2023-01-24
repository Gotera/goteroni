import menu from '../../data/menu.json';
import styles from './Start.module.scss';

export default function Start() {
  let recomendedDishes = [...menu];
  recomendedDishes = recomendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h3 className={styles.title}>
        Recomendações da Cozinha
      </h3>
      <div className={styles.recomendeds}>
        {recomendedDishes.map(item => (
          <div key={item.id} className={styles.recomended}>
            <div className={styles.recomended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomended__button}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );

}
