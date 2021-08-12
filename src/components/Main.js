import { Switch, Route } from 'react-router-dom'
import Home from './Home.js'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'


const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/projects' component={Projects}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/resume' component={Resume}></Route>
        </Switch>
    )
}

export default Main