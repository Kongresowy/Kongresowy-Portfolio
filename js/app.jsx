import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class SideBar extends React.Component {

  createAside = () => {
    let asideElements = [];
    for (let i = 0; i < 5; i++) {
      asideElements.push(<div key={i}><Link to="/projects">LEARN MORE .</Link></div>);
    }
    return asideElements;
  }

  render() {
    return (
      <aside>
        {this.createAside()}
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
    return (
      <section className={this.props.classname}>
        <a href={this.props.url} target="_blank"></a>
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
    return (
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
        <SideBar></SideBar>
        <Footer></Footer>
        
      </div>
    );
  }
}

class SecondPage extends React.Component {
  render() {
    const link1 = "https://kongresowy.github.io/meteor-explorer/";
    const link2 = "https://kongresowy.github.io/Mars-Miracle-Gallery/";
    const link3 = "https://kongresowy.github.io/Another-Weather-App/";
    const link4 = "https://kongresowy.github.io/Board-Game/";
    const link5 = "https://kongresowy.github.io/Kongresowy-Visit-Card/";
    return (
      <div>
        <Header activeP={"x"}></Header>
        <div className="project-section-title">
          <h2>Projects .</h2>
          <p>Please have a look at my work and feel free to give me your feedback. All projects are public, so for specific details and code review check my GitHub account .</p>
        </div>
        <EmptyBox></EmptyBox>
        <WorkContent classname={"bcg1"} url={link1} projecttitle={"Meteor Explorer ."} workcontent={"Application made by Create-React-App with usage of NodeJS server deployed on Heroku. It's complex table with sortable columns and other functions. Application uses MongoDB Atlas database about meteorites and their features. Feel free to play with app - you can add new meteorites and also delete chosen ones ."}></WorkContent>
        <EmptyBox></EmptyBox>
        <WorkContent classname={"bcg2"} url={link2} projecttitle={"Mars Miracle Gallery ."} workcontent={"Application made by Create-React-App. It use NASA Mars Rover Photo Api maintained by Chris Cerami (https://github.com/chrisccerami/mars-photo-api). By filling a date and camera type inputs, you'll get a raw footage from Mars taken by Curiosity rover. Click also on images for higher resolution photos and info icon for more details ."}></WorkContent>
        <EmptyBox></EmptyBox>
        <WorkContent classname={"bcg3"} url={link3} projecttitle={"Another Weather App ."} workcontent={"Fully responsive, simple web application for searching and checking weather conditions over the world. Input proper city and country and \"Get Weather\". Appliciation uses https://openweathermap.org/ API and render data conditionally ."}></WorkContent>
        <EmptyBox></EmptyBox>
        <WorkContent classname={"bcg4"} url={link4} projecttitle={"Board Game Application ."} workcontent={"Board game application to help navigate the book of scripts. Made in React.js (React Router), styled by SCSS and boundled by WebPack. It uses also internal data base of scripts and render them conditionally ."}></WorkContent>
        <EmptyBox></EmptyBox>
        <WorkContent classname={"bcg5"} url={link5} projecttitle={"Visit Card ."} workcontent={"Responsive web design page representing my visit card. Styled by SCSS with motion functions written in JavaScript (ES6) ."}></WorkContent>
        <EmptyBox></EmptyBox>
        <Footer></Footer>
      </div>
    );
  }
}

class ThirdPage extends React.Component {
  render() {
    const contactContent = (
      <div>
        <h3>If you like my work or you need my services, please contact me .</h3>
        <p>Paweł Sworobowicz .</p>
        <p><a href="mailto:sworobowicz.pawel@gmail.com">sworobowicz.pawel@gmail.com .</a></p>
        <p>+48 733 270 219 .</p>
      </div>
    );
    return (
      <div>
        <Header activeC={"x"}></Header>
        <MainSection bcgClass="main-contentC" title={"Contact ."} contactcontent={contactContent}></MainSection>
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
      <Route render={({ location }) => (
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

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>
    , document.getElementById("root"));
});