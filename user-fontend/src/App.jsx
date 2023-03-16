import { Route, Routes } from 'react-router-dom'
import CourseList from './component/course/CourseList'
import CousreOnlab from './component/course/CousreOnlab'
import CousreOnline from './component/course/CousreOnline'
import Detail from './component/course/Detail'
import NotFound from './component/notFound/NotFound'

function App() {
  

  return (
    <>
    <Routes>
          <Route path="/khoa-hoc">
              <Route index element={<CourseList />} />
              <Route path="phong-lab" element={<CousreOnlab />} />
              <Route path="truc-tuyen" element={<CousreOnline />} />
              <Route path=":courseId" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
    </Routes>
</>
  )
}

export default App
