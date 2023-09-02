import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './router/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='lg:container mx-auto ' >
  <Provider  store={store} >
    <RouterProvider router={routes} />
    </Provider>
  </div>
    
  </React.StrictMode>,
)
