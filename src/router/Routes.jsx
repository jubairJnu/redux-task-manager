
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Task from '../component/Task'
import Chat from '../component/Chat'
import Setting from '../component/Setting'
import Profile from '../component/Profile'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'task',
        element:<Task></Task>
      },
      {
        path:'chat',
        element:<Chat></Chat>
      },
      {
        path:'setting',
        element:<Setting></Setting>
      },
      {
        path:'profile',
        element:<Profile/>
      }
    ]
  }
]);
export default routes;