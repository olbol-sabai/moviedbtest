import React, { Suspense, useEffect } from 'react';
import { Switch, Redirect, Route, useLocation } from 'react-router-dom';
import LazyLoading from '../../components/UI/LazyLoad/LazyLoading';
import { AnimatePresence } from 'framer-motion';
import HomePage from './../../containers/HomePage/HomePage';
import FilmDetail from './../../containers/FilmDetail/FilmDetail';


const App = () => {


  const AsyncHomePage = React.lazy(() => import('./../HomePage/HomePage'))
  const AsyncFilmDetail = React.lazy(() => import('../FilmDetail/FilmDetail'))

  const location = useLocation()

  return (
    <Suspense fallback={<LazyLoading />}>
      <div style={{ background: '#333', height: '100%', width: '100%' }} >
        <AnimatePresence exitBeforeEnter>
          <Switch key={location.key} location={location}>
            <Route path="/home" component={HomePage} />
            <Route path="/detail/:id?" component={FilmDetail} />
            <Redirect from="/" to="/home?category=popular" />
        </Switch>
        </AnimatePresence>
      </div >
    </Suspense >
  );
}


export default App;
