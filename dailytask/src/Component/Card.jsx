import React from "react" 
import CompUnd  from './CompUnd.jsx' // Componenet under componenet
function Card(){                     // Functional componenet-1
    
    return (
    <>                               // Fragement use except div jisse extra node nahi bnega
         <h1>First component</h1>
         <CompUnd />
    </>
  
    
    );
}

export default Card; // ye line likhne se aap jha chahe vha use kr kr skte he es functional com ponenet
