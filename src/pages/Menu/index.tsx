import 'normalize.css';
import styles from './Menu.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Ordering from './Ordering';
import Itens from './Itens';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [ordering, setOrdering] = useState('');
  return (
    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__title}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />

      <div className={styles.cardapio__filters} >
        <Filters filter={filter} setFilter={setFilter} />
        <Ordering ordering={ordering} setOrdering={setOrdering} />
      </div>
      <Itens search={search} filter={filter} ordering={ordering} />
    </section>
  );
}