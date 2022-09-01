import React from 'react'
import ReactDom from 'react-dom'

import Multi,{BoaNoite} from './componentes/multiplos'

ReactDom.render( <div>
    <Multi.BoaTarde nome= "Edlania" />
    <BoaNoite nome="Bia" />
   </div>
        ,document.getElementById('root'))