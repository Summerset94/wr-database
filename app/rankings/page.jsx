import winRateData from '../data/winRateData';
import champions from '../data/Champions';
import Leaderboards from '../../ui/Leaderboards';


const Page = async() => {

  return(
    <div>
      <Leaderboards
      champions={champions}
      winRateData={winRateData}
      />
    </div>
  )
}

export default Page