import React,{Component} from "react"
import "./Search.css"

class Search extends  Component{
    state={
        text:""
    }
    handleChange=e=>{
        this.setState({
            text:e.target.value
        })
        this.props.getQuery(e.target.value)
        console.log(e.target.value)
    }

    handleSubmit=e=>{
        e.preventDefault()

        this.setState({
            text:""
        })
    }

   
        render(){
        const {text}=this.state
        return(
            <div className="search">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" placeholder="Enter the name"
                    autoFocus value={text} onChange={this.handleChange}/>
                </form>

            </div>
        )
    }
}
export default Search