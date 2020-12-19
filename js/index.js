import React from 'react';
import ReactDom from 'react-dom';


import Image from './image';
import About from './about';

function App(){
    return(
    <section>
        <h1>Ada Lovelace</h1>
        
            <Image/>
            <About/>
        
    </section>
    )   
}



ReactDom.render(<App/>, document.getElementById('root'));