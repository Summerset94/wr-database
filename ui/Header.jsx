import style from '../app/styles/header.module.css';

export default function Header() {
  return(
    <header className={style.header}>
      <h1 className={style.sitename}>Wild Rift: Quick Maths</h1>
      <p className={style.p}>Game version v5.1</p>
      <p className={style.link}><a href="https://github.com/Summerset94/wr-database" target='_blank'>This project's source code</a></p>
    </header>
  )
}