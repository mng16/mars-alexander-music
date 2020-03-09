import React from 'react';
import { Route } from 'react-router-dom';
import Gigs from '../Gigs';
import News from '../News';
import Gallery from '../Gallery';
import Music from '../Music';
import Videos from '../Videos';

const Routes = () => (
  <>
    <Route path="/news" component={News} />
    <Route path="/gigs" component={Gigs} />
    <Route path="/music" component={Music} />
    <Route path="/videos" component={Videos} />
    <Route path="/gallery" component={Gallery} />
  </>
);

export default Routes;
