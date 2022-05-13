import React from 'react';


export const App = () => {

  return (
   <>
     <header>
       <h1>
         <strong>Mega</strong> Ogłoszenia
       </h1>
       <button>Dodaj ogłoszenie</button>
       <div className="seatch">
         <input type="text"/> <button>Szukaj</button>
       </div>
     </header>
     <div className='map'>
       ...
     </div>
   </>
  );
}


