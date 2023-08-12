import styles from './TypeList.module.scss';

export default function TypeListList({ types, activeType, setActiveType }) {
  const typeList = types.map(type =>
    <li
      key={type._id}
      className={type === activeType ? styles.active : ''}
      // FYI, the below will also work, but will give a warning
      // className={type === activeType && 'active'}
      onClick={() => setActiveType(type)}
    >
      {type}
    </li>
  );
  return (
    <ul className={styles.CategoryList}>
      {typeList}
    </ul>
  );
}