
import UserList from './assets/user/UserList'
import UserCreate from './assets/user/UserCreate'
import UserDetail from './assets/user/UserDetail'
import { Route, Routes } from 'react-router-dom'
import NotFound from './assets/notfound/NotFound'

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
