
import UserList from './component/user/UserList'
import UserCreate from './component/user/UserCreate'
import UserDetail from './component/user/UserDetail'
import NotFound from './component/notfound/NotFound'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    // users
    // users/create
    //  users/{id}
    <>
        <Routes>

              <Route path="/users">
                  <Route index element={<UserList />} />
                  <Route path="create" element={<UserCreate />} />
                  <Route path=":userId" element={<UserDetail />} />
              </Route>
              <Route path="*" element={<NotFound />} />



        </Routes>
    </>
  )
}

export default App
