import React from 'react'
import demo from './demo.jpg';

const Demo = () => {
    return (
        <div>
            <h1 className="mt-5">Hello EveryOne....This is for testing only</h1>

            <div className="container">
             <div className="row">
               <div className="col-6">
                     <img className="img-fluid" src={demo} alt="" height="auto"/>
                  </div>
                  
                  <div className="col-6 mt-5">
                      <p>
                         "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.."
                      </p>

                  </div>
                 
                 </div>    
            
            </div>
        </div>
    )
}

export default Demo;
