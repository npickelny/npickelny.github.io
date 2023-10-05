import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Sitio web de Nicolás Pickelny. Ingeniero en Sistemas y Desarrollador Web.">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to this site</Link></h2>
          <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
            or you can <Link to="/contact">contact</Link> for new projects or opportunities.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
