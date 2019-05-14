import React from 'react'
import Food from './Food'
import Meal from './Meal'
import FoodSearch from './FoodSearch'
import { Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className='App'>
      {/* <Route exact path='/food/:name' component={Food} /> */}
      <Switch>
        <Route
          exact
          path='/food/:name'
          render={routeProps => <Food authenticated={true} {...routeProps} />}
        />
        <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
        <Route exact path='/' render={() => <FoodSearch />} />
        <Route render={() => <h1>ERROR NOT FOUND</h1>} />
      </Switch>
    </div>
  )
}

export default App
