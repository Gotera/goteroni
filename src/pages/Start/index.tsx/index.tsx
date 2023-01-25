import menu from '../../data/menu.json';
import styles from './Start.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import nossaCasa from 'assets/nossa_casa.png';

export default function Start() {
  let recomendedDishes = [...menu];
  recomendedDishes = recomendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h3 className={stylesTheme.title}>
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
      <h3 className='stylesTheme.title'> Nossa casa </h3>
      <div className={styles.ourHome}>
        <img src={nossaCasa} alt='Casa do Aluroni' />
        <div className={styles.ourHome__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
