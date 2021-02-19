import React, { useState } from 'react'

const Functioncomponent=()=>{

    const [state, setState]=useState({})

    const updateState=(e)=>{
        state[e.target.id]=e.target.value
        setState({...state})
    }
    const getdata=()=>{
        console.log(state)
    }

    
    
    return(<div>
        
     {/* my name <input onChange={updateState} id="uname"/>
      father NAME  <input onChange={updateState} id="fname"/>
      Mother Name  <input onChange={updateState} id="mname"/>
        <button type="submit" onClick={getdata}>getdata</button>*/}
       

       <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" onChange={updateState} id="uname" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" onChange={updateState} id="fname" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group mb-3">
  <span class="input-group-text" onChange={updateState} id="mname" id="basic-addon3">https://example.com/users/</span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>

<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" onClick={getdata} type="button">submit</button>
  </div>
        


    </div>)
}
export default Functioncomponent