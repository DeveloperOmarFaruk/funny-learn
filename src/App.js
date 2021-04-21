import { BrowserRouter as Router } from 'react-router-dom'
import Course from './Components/CourseData/Course'
import Navbar from './Components/Navbar/Navbar'

import { GlobalStyle } from './GlobalStyle'

function App() {
    return ( 
        <Router>
        <GlobalStyle />
        <Navbar/>
        <Course/>
        </Router>
    );
}
export default App;

