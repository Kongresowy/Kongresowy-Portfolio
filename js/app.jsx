import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Link, NavLink, Switch, Redirect} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class SideBar extends React.Component {
    render() {
        return (
            <aside>
                <div><Link to="/projects">LEARN MORE .</Link></div>
                <div><Link to="/projects">LEARN MORE .</Link></div>
                <div><Link to="/projects">LEARN MORE .</Link></div>
                <div><Link to="/projects">LEARN MORE .</Link></div>
                <div><Link to="/projects">LEARN MORE .</Link></div>
            </aside>
        );
    }
}

class LinkIcons extends React.Component {
    render() {
        const githubLink = "https://github.com/Kongresowy";
        const linkedInLink = "https://www.linkedin.com/in/pawel-sworobowicz/";
        return (
            <div className="foot_left">
                <a href={githubLink} target="_blank"></a>
                <a href={linkedInLink} target="_blank"></a>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <LinkIcons></LinkIcons>
                <div className="foot_right">
                    <p><a href="mailto:sworobowicz.pawel@gmail.com">sworobowicz.pawel@gmail.com .</a></p>
                    <p>&copy; Copyright 2019. All Rights Reserved .</p>
                </div>
            </footer>
        );
    }
}

class EmptyBox extends React.Component {
    render() {
        return (
            <div className="empty-box"></div>
        );
    }
}

class WorkContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section className={this.props.classname}>
                <a href={this.props.url} target="_blank"><div>CHECK IT .</div></a>
                <div className="project-note">
                    <h3>{this.props.projecttitle}</h3>
                    <p>{this.props.workcontent}</p>
                </div>
            </section>
        );
    }
}

class MainSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bcgClass: this.props.bcgClass
        }
    }
    render() {
        return (
            <main>
                <div>
                    <h2>{this.props.title}</h2>
                </div>
                <div className={this.state.bcgClass}>{this.props.contactcontent}
                    <Link to="/projects">{this.props.content}</Link>
                </div>
            </main>
        );
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <li>
                    <NavLink to="/">{this.props.markH} Home .</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">{this.props.markP} Projects .</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">{this.props.markC} Contact .</NavLink>
                </li>
            </nav>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <header>
                <div><h1><Link to="/">Kongresowy&#8194;.</Link></h1></div>
                <NavBar markH={this.props.activeH} markP={this.props.activeP} markC={this.props.activeC}></NavBar>
            </header>
        );
    }
}

class FirstPage extends React.Component {
    render() {
        return (
            <div>
                <Header activeH={"x"}></Header>
                <MainSection bcgClass="main-contentH" title={"Home ."} content={"LEARN MORE ."}></MainSection>
                <Footer></Footer>
                <SideBar></SideBar>
            </div>
        );
    }
}

class SecondPage extends React.Component {
    render() {
        const link1 = "https://kongresowy.github.io/Kongresowy-Visit-Card/";
        const link2 = "https://kongresowy.github.io/-Sit-On-Chair-Webpage";
        const link3 = "https://kongresowy.github.io/Furry-Game-for-CodersLab-2018";
        const link4 = "https://kongresowy.github.io/FLEXBOX-MOBILE-FIRST-PAGE";
        const link5 = "https://kongresowy.github.io/Game-Of-Life-Project";
        const link6 = "https://kongresowy.github.io/Random-Banner---Little-CSS-SCSS-Training";
        const text1 = ""
        return (
            <div>
                <Header activeP={"x"}></Header>
                    <div className="project-section-title">
                        <h2>Projects .</h2>
                        <p>Please have a look at my work and feel free to give me your feedback. For specific details, check my GitHub account .</p>
                    </div>
                    <EmptyBox></EmptyBox>
                    <WorkContent classname={"bcg1"} url={link1} projecttitle={"Visit Card ."} workcontent={"Responsive web design page representing my visit card. Styled by SCSS/CSS with motion functions written in JavaScript (ES6) ."}></WorkContent>
                    <EmptyBox></EmptyBox>
                    <WorkContent classname={"bcg2"} url={link2} projecttitle={"Sit On Chair ."} workcontent={"Simple webpage/template, highly styled by SCSS/CSS. It's made according to the project by PerfectPixel with few working functions for ex. slider (vanilla JavaScript), dropdown in navigation bar, etc ."}></WorkContent>
                    <EmptyBox></EmptyBox>
                    <WorkContent classname={"bcg3"} url={link3} projecttitle={"Super Mario Furry ."} workcontent={"Game written in JavaScript with few CSS animations. Follow a character to collect coins and avoid outer border ."}></WorkContent>
                    <EmptyBox></EmptyBox>
                    <WorkContent classname={"bcg4"} url={link4} projecttitle={"Verti - RWD/Flexbox ."} workcontent={"Simple full responsive webpage/template (RWD) with few functions, like navigation bar turning into \"hamburger\" shape for mobile screen dimensions. It's made in flexbox method and styled by SCSS/CSS ."}></WorkContent>
                    <EmptyBox></EmptyBox>
                    <WorkContent classname={"bcg5"} url={link5} projecttitle={"Game Of Life ."} workcontent={"Game written in JavaScript, based on a well-known example of a cellular automaton invented in 1970 by British mathematician John Conway ."}></WorkContent>
                    <EmptyBox></EmptyBox>
                    <WorkContent classname={"bcg6"} url={link6} projecttitle={"Simple Animated Banner (CSS) ."} workcontent={"A very simple animated banner by CSS ."}></WorkContent>
                    <EmptyBox></EmptyBox>
                <Footer></Footer>
            </div>
        );
    }
}

class ThirdPage extends React.Component {
    render() {
        const contactCont = (
            <div>
                <h3>If you like what I do, please let me know .</h3>
                <p>Paweł Sworobowicz .</p>
                <p><a href="mailto:sworobowicz.pawel@gmail.com">sworobowicz.pawel@gmail.com .</a></p>
                <p>+48 733 270 219 .</p>
            </div>
        );
        return (
            <div>
                <Header activeC={"x"}></Header>
                <MainSection bcgClass="main-contentC" title={"Contact ."} contactcontent={contactCont}></MainSection>
                <Footer></Footer>
            </div>
        );
    }
}

class NotFound extends React.Component {
    render() {
        return (
            <div className="page-not-found">
               <h1>404, Page Not Found .</h1> 
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.pathname.split("/")[1] || "/"} timeout={{ enter: 1000, exit: 50 }} classNames="fade">
                        <Switch location={location}>
                            <Route exact path="/" component={FirstPage} />
                            <Route path="/projects" component={SecondPage} />
                            <Route path="/contact" component={ThirdPage} />
                            <Route component={NotFound} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} /> 
        );
    }
}

document.addEventListener("DOMContentLoaded", function(){
    ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>
    , document.getElementById("root"));
});

// return (
//     <Route render = {({location}) => (
//         <TransitionGroup>
//             <CSSTransition key={location.key} timeout={{ enter: 1000, exit: 50 }} classNames="fade">
//                 <Switch location={location}>
//                     <Route exact path="/" component={FirstPage} />
//                     <Route path="/projects" component={SecondPage} />
//                     <Route path="/contact" component={ThirdPage} />
//                     <Route component={NotFound} />
//                 </Switch>
//             </CSSTransition>
//         </TransitionGroup>
//     )}/> 
// );