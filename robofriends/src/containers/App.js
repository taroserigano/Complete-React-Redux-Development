import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox  from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
constructor(){
    super();
    this.state ={
        robots: [],
        searchfield: ''
    }
}


componentDidMount(){
    //fetch from jsonplaceholder website
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>{this.setState({robots:users})});
}
onSearchChange= (e) => {
    this.setState({searchfield: e.target.value})
}

render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
        return !robots.length ? <h1>Loading</h1> :
    (
      <div className='tc'>
      <h1 className='f2'>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll>
      <CardList robots={filteredRobots}/>
      </Scroll>
     </div>
  );
  } 
}

export default App;
