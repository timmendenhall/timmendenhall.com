import React from 'react';

import './ATI.css';
import dashboardImage from './ati_dashboard.png';
import hepImage from './ati_hep.png';
import progressImage from './ati_progress.png';
import { Carousel } from '../../../components/Carousel';

export const ATI = () => {
  return (
    <section className="page__container">
      <h1>ATI Physical Therapy</h1>
      <Carousel>
        <div className="work__carousel-image">
          <img src={dashboardImage} />
        </div>
        <div className="work__carousel-image">
          <img src={hepImage} />
        </div>
        <div className="work__carousel-image">
          <img src={progressImage} />
        </div>
      </Carousel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec odio
        auctor turpis feugiat pellentesque. Phasellus ornare urna dolor, id
        euismod tortor posuere ut. Donec a orci ut massa suscipit ultrices at
        nec augue. Integer posuere dui vel ex molestie porta. Mauris sed dapibus
        mi, nec vestibulum risus. Praesent quis sollicitudin magna. Praesent in
        lectus dapibus, scelerisque ipsum a, pulvinar nisi. Cras vitae nunc sed
        ex consectetur convallis. Duis tempus, nulla eget bibendum sodales, odio
        mauris tempus ligula, ut varius felis mi nec urna.
      </p>
      <p>
        Integer vel aliquam mauris, in tincidunt turpis. Ut tempus quam mauris,
        at malesuada tellus iaculis eget. Vestibulum in pellentesque lorem.
        Etiam velit felis, laoreet vitae eleifend id, bibendum ac libero. Nam
        aliquet odio mi. Aenean in convallis est, vitae egestas dui. Integer
        nisi orci, viverra at scelerisque vel, egestas cursus leo. Phasellus et
        diam lacus. Vestibulum molestie sed elit eget tincidunt. Aenean
        hendrerit libero pulvinar enim rutrum, sed malesuada odio fringilla.
        Nulla facilisi. Phasellus in convallis lectus. Donec et augue ut dui
        auctor bibendum in quis dui. Sed at imperdiet eros, at laoreet metus.
        Praesent laoreet bibendum mauris vitae commodo.
      </p>
    </section>
  );
};
