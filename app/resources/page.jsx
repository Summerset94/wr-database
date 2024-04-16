import Link from 'next/link';

const Page = () => {

  return (
    <div>
      <h1>Links to sources and useful information about game</h1>

      <ul>
        <li>
          <a href="/api/champions" target='_blank'>Champions base and scaling stats in JSON format</a>
        </li>

        <li>
          <a href="https://game.gtimg.cn/images/lgamem/act/lrlib/js/heroList/hero_list.js" target='_blank'>Hero list JSON from China server</a>
        </li>

        <li>
          <a href="https://mlol.qt.qq.com/go/lgame_battle_info/hero_rank_list_v2" target='_blank'>Tencent China server Character winrates</a>
        </li>

        <li>
          <a href="https://github.com/Summerset94/wr-database" target='_blank'>This project's source code</a>
        </li>
      </ul>

      



    </div>
  )
}

export default Page