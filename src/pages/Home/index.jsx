import styles from './home.module.css'
import { animalArray } from '../../data/animals';

import { useState } from 'react';
import AnimalDescription from '../../components/AnimalDescription';

const Home = () => {

  const [displayContent, setDisplayContent] = useState(null);
  const [isexpanded, setIsExpanded] = useState(false);

  const handleClick = (animal) => {
    setDisplayContent(animal);
    setIsExpanded(false);
  }

  return (
    <div className={styles.home_wrapper_div}>
      <div className={styles.sidebar}>{animalArray.map(animal => <div className={styles.animal_names} onClick={ () =>handleClick(animal)}>{animal.name.toUpperCase().replace(" ", "-")}</div>)}</div>
      <div className={styles.main_content}>
        {!displayContent && <div> <h4>This is Home Page</h4>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab amet blanditiis repellendus voluptates nulla dolorem nesciunt fuga iusto dignissimos necessitatibus veniam dolor consequuntur, ut laborum? Molestiae ab nulla magnam ipsam obcaecati delectus ad voluptate beatae mollitia aliquid fuga cupiditate recusandae, deleniti eligendi iste, necessitatibus unde quibusdam tempore. Ad, deleniti dolore.</div></div>}
        {displayContent && <AnimalDescription displayContent={displayContent} expanded={isexpanded}/>}
      </div>
    </div>
  );
};

export default Home;
