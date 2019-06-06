import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './css/codecamp.css';


// Component imports
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import AboutSection from "./components/about";
import CourseSections from "./components/activities";
import FormPage from "./components/contact"
import NameForm from './components/contact';




class App extends React.Component {
    render(){
        return(
         <div>
            <Sidebar />
            <Header />
            <AboutSection />
            <CourseSections />
            <NameForm />
         </div>
        )
    }
}





const rootElem = document.getElementById('root')

ReactDOM.render(<App />, rootElem);

