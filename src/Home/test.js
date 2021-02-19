import React from 'react'

const TestForm=()=>{

   const state={
        name:"sahal",
        fname:"Adil",
        uname:"Ali",
        cname:"zeshan",
        selectcity:""
    }

   const updateName=(e)=>{

        this.setState({name:e.target.value})
    }
   const fatherName=(e)=>{
        this.setState({fname:e.target.value})
    }
   const uName=(e)=>{
        this.setState({uname:e.target.value})
    }
   const cName=(e)=>{

        this.setState({cname:e.target.value})
    }
   const getdata=(e)=>{
        e.preventDefault()
        localStorage.getItem({"AllData":JSON.stringify(this.state)})
    }
   const selectcity=(e)=>{

        this.selectcity({selectcity:e.target.value})
    }
    
   
        return(
           <div>
                {this.state.name}
               USERNAME  <input  onChange = {this.updateName}/>
             FATHER NAME  <input onChange = {this.fatherName}/>
             Uname       <input onChange={this.uName}/>
             cousin name <input onChange={this.cName}/>
                {this.state.name}
                {this.state.fname}
                {this.state.uname}
                {this.state.cname}
                <button onClick="getdata">get data</button>
                 
                 <select onChange={this.selectcity}>
                 <option value="selectcity">Select</option>
                 <option value="rwp">rwp</option>
                 <option value="isl">isl</option>
                 </select>
                 

           </div>
        )
    }

export default TestForm