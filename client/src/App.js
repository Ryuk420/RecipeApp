import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import RecipeDetails from './components/recipeDetails/RecipeDetails'
import Categories from './components/categories/Categories'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import PostDetails from './pages/PostDetails/PostDetails';
import useStyles from './styles'
import Footer from './components/Footer/Footer';

function App() {

  const  user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container maxWidth="xl" className={ classes.container}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/categories" exact component={Categories} />
          <Route path='/recipe/:id' exact component={RecipeDetails}/>
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
        <Footer/>
      </Container>
      
    </BrowserRouter>
  );
}

export default App;
