import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import { Navbar, NavItem, Nav as ReactNav } from 'react-bootstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav as ReactNav, NavItem, NavLink } from 'reactstrap';

import './nav.scss';

const logo = require('../../../public/images/logo.png');

const NavBarLinkItem = (props) => {
    return (
        <NavItem className={`page-scroll hover ${props.className}`}>
            <NavLink href={props.href}>
                {props.text}
                { props.showLine && <span className="line css3Animate"></span> }
            </NavLink>
        </NavItem>
    );
}
export default class Nav extends React.Component<any, any> {

    public anchors = [ "#home", "#about", "#media", "#events", "#join" ];

    constructor(props: any) {
        super(props);
        this.state = {
            isHomePage: this.props.isHomePage,
            isOpen: false
        };

        if (this.props.isHomePage == false) {
            this.anchors = this.anchors.map((a) => {
                return "/" + a;
            });
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="white" light expand="md" fixed="top">
                <div className="container">
                    <NavbarBrand href="/">
                        <img src={logo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}>
                        <i className="fa fa-bars"></i>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <ReactNav className="ml-auto" navbar>
                            <NavBarLinkItem text="Home" href={this.anchors[0]} showLine isHomePage={this.state.isHomePage} />
                            <NavBarLinkItem text="About" href={this.anchors[1]} showLine isHomePage={this.state.isHomePage} />
                            <NavBarLinkItem text="Media" href={this.anchors[2]} showLine isHomePage={this.state.isHomePage} />
                            <NavBarLinkItem text="Events &amp; News" href={this.anchors[3]} showLine isHomePage={this.state.isHomePage} />
                            <NavBarLinkItem text="Join" href={this.anchors[4]} showLine isHomePage={this.state.isHomePage} />
                            <NavBarLinkItem className="nav-donate-item" text="Donate" href="/donate" isHomePage={this.state.isHomePage} />
                        </ReactNav>
                    </Collapse>
                </div>
            </Navbar>
            // <Navbar collapseOnSelect className={"navbar-fixed-top" + (this.state.isHomePage ? '' : ' affix')}>
            //     <Navbar.Header>
            //         <Navbar.Brand>
                        // { this.state.isHomePage ?
                        //     <a className="navbar-brand page-scroll" href={this.anchors[0]}>
                        //         <img src={logo} />
                        //     </a>
                        // :
                        //     <Link className="navbar-brand page-scroll" to={this.anchors[0]}>
                        //         <img src={logo} />
                        //     </Link>
                        // }
            //         </Navbar.Brand>
            //         <Navbar.Toggle />
            //     </Navbar.Header>
            //     <Navbar.Collapse>
            //         <ReactNav pullRight>

            //             { this.state.isHomePage ?
            //                 <NavItem className="page-scroll hover" href={this.anchors[0]}>
            //                     Home <span className="line css3Animate"></span></NavItem>
            //             :
            //                 <li className="page-scroll hover"><Link to={this.anchors[0]}>
            //                     Home <span className="line css3Animate"></span></Link></li>
            //             }

            //             { this.state.isHomePage ?
            //                 <NavItem className="page-scroll hover" href={this.anchors[1]}>
            //                     About <span className="line css3Animate"></span></NavItem>
            //             :
            //                 <li className="page-scroll hover"><Link to={this.anchors[1]}>
            //                     About <span className="line css3Animate"></span></Link></li>
            //             }

            //             { this.state.isHomePage ?
            //                 <NavItem className="page-scroll hover" href={this.anchors[2]}>
            //                     Media <span className="line css3Animate"></span></NavItem>
            //             :
            //                 <li className="page-scroll hover"><Link to={this.anchors[2]}>
            //                     Media <span className="line css3Animate"></span></Link></li>
            //             }

            //             { this.state.isHomePage ?
            //                 <NavItem className="page-scroll hover" href={this.anchors[3]}>
            //                     Events &amp; News <span className="line css3Animate"></span></NavItem>
            //             :
            //                 <li className="page-scroll hover"><Link to={this.anchors[3]}>
            //                     Events &amp; News <span className="line css3Animate"></span></Link></li>
            //             }

            //             { this.state.isHomePage ?
            //                 <NavItem className="page-scroll hover" href={this.anchors[4]}>
            //                     Join <span className="line css3Animate"></span></NavItem>
            //             :
            //                 <li className="page-scroll hover"><Link to={this.anchors[4]}>
            //                     Join <span className="line css3Animate"></span></Link></li>
            //             }

            //             <li className="nav-donate-btn-item">
            //                 <Link className="btn" to='/donate'>Donate</Link>
            //             </li>
            //         </ReactNav>
            //     </Navbar.Collapse>
            // </Navbar>
        );
    }
}
