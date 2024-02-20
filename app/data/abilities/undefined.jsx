export default function undefined(props) {
  const abilities = [

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">P</span> Nothing to see here
          </h4>
    
          <p>
            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">1</span> Nothing to see here
          </h4>
    
          <h5>
          Cooldown: 
            0
          </h5>
            <h5 className="stat--mana">
          Cost: 
            0
          </h5>
    
          <br />
          <p>
            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">2</span> Nothing to see here
          </h4>
    
          <h5>
          Cooldown: 
            0
          </h5>
            <h5 className="stat--mana">
          Cost: 
            0
          </h5>
    
          <br />
          <p>
            
          </p>
        </div>
    },
    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">3</span> Nothing to see here
          </h4>
    
          <h5>
          Cooldown: 
           0
          </h5>
            <h5 className="stat--mana">
          Cost: 
            0
          </h5>
    
          <br />
          <p>
            
          </p>
        </div>
    },

    {
      description:
        <div className="abilityDescription">
          <h4>
          <span className="marker--ability">ULT</span> SUCH ULT MUCH WOW
          </h4>
    
          <h5>
          Cooldown: 
           0
          </h5>
            <h5 className="stat--mana">
          Cost: 
            0
          </h5>
    
          <br />
          <p>
            
          </p>
        </div>
    }
  ];

  return(
    <>
    {abilities.map((ability, index) => (
      <div className="abilitiesTile">
        <div key={index}>{ability.description}</div>
        </div>
    ))}   
    </>
     
  )
}