import styles from './home.module.css'
import { animalArray } from '../../data/animals';

import { useState } from 'react';
import AnimalDescription from '../../components/AnimalDescription';
import AnimalDetailPopup from '../AnimalDetailPopup';

const Home = () => {

  const [displayContent, setDisplayContent] = useState(null);
  const [isexpanded, setIsExpanded] = useState(false);
  const [animalPopup,setAnimalPopup] = useState(false);

  const handleClick = (animal) => {
    if(displayContent === animal){
      setDisplayContent(null)
    }else{
    setDisplayContent(animal);
    setIsExpanded(false);}
    
  }

  const popupDisplay = () => {
      setAnimalPopup(true);
  }

  
  const hidePopup = () => {
    setAnimalPopup(false);
  }


  // useEffect (() => {
  //    setIsExpanded(false)
  // },[])

  return (
    <div className={styles.home_wrapper_div}>
      {!animalPopup && 
      <><div className={styles.sidebar}>{animalArray.map((animal,index) => <div className={`${styles.animal_names} ${  ( displayContent && displayContent.name === animal.name) ? styles.active : styles.inactive}`} key={index} onClick={ () =>handleClick(animal)}>{animal.name.replace(" ", "-")}</div>)}</div>
      <div className={styles.main_content}>
        {!displayContent && 
        <div> <h4>🐾 Welcome to Wild Wonders Zoo! 🐾</h4>
          <div>Welcome to Wild Wonders Zoo, a celebration of Australia's extraordinary wildlife! Nestled in the heart of nature, our zoo invites you on an unforgettable journey through lush rainforests, vibrant wetlands, and sun-drenched deserts — the true landscapes of Australia.At Wild Wonders, you’ll meet some of Australia’s most iconic animals: the mighty kangaroo, the curious echidna, the powerful cassowary, and the mischievous quokka. Our exhibits are designed to mirror natural habitats, giving you an up-close look at how these incredible creatures live, eat, and interact with the world around them.
            Our mission is simple — to inspire love, respect, and conservation for Australian wildlife. Every visit supports breeding programs, conservation research, and rehabilitation efforts that protect endangered species for future generations. Together, we can ensure that the songs of the kookaburra and the splash of the platypus will echo for years to come.Enjoy interactive feeding sessions, educational talks with our expert zookeepers, and exciting wildlife encounters that are perfect for the whole family. Whether you're marvelling at the reptiles of the outback, soaring with tropical birds, or learning the secrets of Australia’s rarest mammals, there’s something here to delight every adventurer.So grab your hat and camera, and get ready to discover the wild heart of Australia — right here at Wild Wonders Zoo. We can’t wait to share the magic of nature with you!
          </div>
        </div>}
        {displayContent && !animalPopup && <AnimalDescription displayContent={displayContent} expanded={isexpanded} popup={popupDisplay}/>}
      </div> </>}
      {animalPopup && <AnimalDetailPopup displayContent={displayContent} closePopup={hidePopup}/>}
    </div>
  );
};

export default Home;
