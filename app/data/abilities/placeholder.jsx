import React from 'react';

const Placeholder = () => {
  const abilities = [
    {
      description: (
        <div className="abilityDescription">
          <h4>
            <span className="marker--ability">x</span> SELECT A CHAMPION
          </h4>

          <p>Nobody's here...</p>
        </div>
      ),
    },
  ];

  return (
    <div>
      {abilities.map((ability, index) => (
        <div className="abilitiesTile" key={index}>
          {ability.description}
        </div>
      ))}
    </div>
  );
};

export default Placeholder;
