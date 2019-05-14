import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FoodSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { query: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(evt) {
    this.setState({ query: evt.target.value })
  }

  handleClick() {
    console.log('SAVED YOUR FOOD TO DB!')
    this.props.history.push(`/food/${this.state.query}`)
  }

  render() {
    return (
      <div>
        <h1>Search For A Food!</h1>
        <input
          type='text'
          placeholder='Searh for a food'
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Link to={`/food/${this.state.query}`}>Go!</Link>
        <button onClick={this.handleClick}>Save New Food!</button>
      </div>
    )
  }
}

export default FoodSearch
