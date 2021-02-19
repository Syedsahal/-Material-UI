import React from 'react'

import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from '../src/Home/home';
import Murree from '../src/Murree'
import KASHMIR from '../src/Home/Header/kashmir/kashmir'
import Shogran from '../src/Home/Header/Shogran'
import Contact from '../src/Home/Header/Contact/contact'



const App=()=>{

    return(    

      <div>
<BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/Murree" component={Murree}/>
      <Route path="/Kashmir" component={KASHMIR}/>
      <Route path="/Shogran" component={Shogran}/>
      <Route path="/Contact" component={Contact}/>
      
      </BrowserRouter>


      </div>




      
    )
      
  }

export default App