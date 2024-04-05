import style from '../app/styles/header.module.css';

export default function Header() {
  return(
    <header className={style.header}>
      <h1 className={style.sitename}>Wild Rift: Quick Maths</h1>
      <p className={style.p}>Game version v5.0c (Kindred hotfix)</p>
    </header>
  )
}