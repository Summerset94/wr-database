import Image from 'next/image'

const VisitCard = ({champ}) => {
  return (
    <div className='visitCard'>
      <Image 
      src={champ.icon}
      alt={champ.id}
      height={100}
      width={100}
      />

      <div>
        <h2>{champ.name}</h2>
        <p>{champ.title}</p>
        <h3>Position:</h3>
          <p>
          <Image 
            src={champ.rolePrim}
            alt={champ.id}
            height={30}
            width={30}
          /> 

          {champ.roleSecond != false ? (<Image 
            src={champ.roleSecond}
            alt={champ.id}
            height={30}
            width={30}
          />) : (<></>)}
          </p>


      </div>    
    </div>
  )
}

export default VisitCard