import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser,faHome, faAddressCard , faHeadset  } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faUser,faHome , faAddressCard, faHeadset  )


render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
  ,
  document.getElementById('root')
);


