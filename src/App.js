import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"
import Header from "./components/UI/Header"
import CharacterList from "./components/UI/CharacterList"
import Search from './components/UI/Search';

class App extends React.Component {
  state={
    items:[],
    isLoading:true,
    query:""
  }

  handleQuery=(info)=>{
    this.setState({
      query:info
    })

  }
  componentDidMount(){
    const fetch = async ()=>{
      const result=await axios.get(`https://www.breakingbadapi.com/api/characters/`)
     
      this.setState({
        items:result.data,
        isLoading:false
      })
    }
   fetch()
  }
 

 
  render(){
    const {isLoading,items,query}=this.state
  return (
    <div className="container">
      <Header/>
      <Search getQuery={this.handleQuery}/>
      <CharacterList isLoading={isLoading} items={items} query={query} />
        </div>
  );
}
}

export default App;
