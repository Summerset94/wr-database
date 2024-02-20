import {useState, useEffect} from 'react';
import '../app/styles/abilities.css';

export default function Abilities({champ, currentLevel, bonus, mod, atk, def, updateAbilitiesBonus}) {

  const [importedComponent, setImportedComponent] = useState(null);
  
  // dinamically get champion abilities based on selected champion
  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`../app/data/abilities/${champ.id}.jsx`);

      `./abilities/${champ.id}.jsx`
      const AnotherComponent = module.default;
      setImportedComponent(<AnotherComponent 
        currentLevel={currentLevel}
        mod={mod}
        bonus={bonus}
        atk={atk}
        def={def}
        champ={champ}
        updateAbilitiesBonus={updateAbilitiesBonus} />);
    };
  
    importComponent();
  }, [champ.id, atk, def, currentLevel, bonus]);

  return (  
      <div className="abilitiesGrid">
        {importedComponent && importedComponent}
      </div>  

    )
}