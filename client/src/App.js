import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import Route from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
      <Route path="/" component={MovieList} />
      <Route path="/movies/:movieID" component={Movie}/>
      </div>
    </div>
  );
};

export default App;
