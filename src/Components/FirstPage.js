import React from 'react'
import logo from "./FPImages/logo.png"
import './CSS/FirstPage.css'
import { Link, NavLink } from 'react-router-dom'
import { BsDatabase } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { BsChatText } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import ReactPlayer from 'react-player'
import { CiPlay1 } from "react-icons/ci";
import laravel from './FPImages/laravel.png'
import jquery from './FPImages/jquery.webp'
import buyjs from './FPImages/bootstrap4.png'
import vi from './FPImages/vuejs.png'
import spring from './FPImages/quasar-framework.png'
import react from './FPImages/React.png'
import node from './FPImages/nodeexpress.png'
import flask from './FPImages/pythonflask.png'
import net from './FPImages/aspcorelogo.png'
import script from './FPImages/TypeScript.png'
import img1 from './FPImages/img1.png'
import studio from './FPImages/studio.jpg'
import mysql from './FPImages/mysql.jpg'
import sql from './FPImages/sql.jpg'
import oracle from './FPImages/oracle.png'
import post from './FPImages/postgres.jpg'
import lite from './FPImages/sqlite.jpg'
import verify from './FPImages/verify.png'
import star from './FPImages/star.png'
import exp from './FPImages/exp.png'
import line from './FPImages/HR line.jpg'
import img3 from './FPImages/img3.webp'
import img5 from "./FPImages/img5.png"
import imgs from './FPImages/img5.png'
import img2 from './FPImages/img2.png'
import img6 from './FPImages/img6.png'
import img7 from './FPImages/img11.png'
import mike from './FPImages/mike.png'
import cap from './FPImages/svg.jpg'
import sw from './FPImages/sd.png'
import get from './FPImages/get.png'

import img8 from './FPImages/img8.png'
import img9 from './FPImages/img9.png'
import img4 from './FPImages/img4.webp'
import img10 from './FPImages/img10.png'
import dt from './FPImages/dt-img.png'
import dataimg from './FPImages/data-img.png'
import note from './FPImages/note.png'
import noteimg from './FPImages/note-img.png'
import comp from './FPImages/comp.png'
import compimg from './FPImages/comp-img.png'
import desk from './FPImages/desk.png'
import appimg from './FPImages/appimg.png'

import Button from 'react-bootstrap/Button';

const FirstPage = () => {
    function FaQs() {
        var faq = document.getElementsByClassName("faq-page");
        var i;

        for (i = 0; i < faq.length; i++) {
            faq[i].addEventListener("click", function () {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");

                /* Toggle between hiding and showing the active panel */
                var body = this.nextElementSibling;
                if (body.style.display === "block") {
                    body.style.display = "none";
                } else {
                    body.style.display = "block";
                }
            });
        }
    }

    return (
        <>
            <div className='backImg'>
                <header>
                    <div className='container'>
                        <div className='logo-img'>
                            <img src={logo} alt='logo' id='logo' />
                        </div>
                        <div className='Navlist'>

                            <NavLink exact to="/" className="navItem" activeClassName="activeItem">HOME</NavLink>
                            <NavLink to="/products" className="navItem" activeClassName="activeItem">PRODUCTS</NavLink>
                            <NavLink to="/features" className="navItem" activeClassName="activeItem">FEATURES</NavLink>
                        </div>
                    </div>
                </header>

                <div className='Heading'>
                    <h1>Rapid Application Development Environment,<br></br>
                        Generating Complete Applications Faster</h1>

                    <span style={{ textAlign: 'center', padding: '1rem 0rem' }}>RadSystems provides countless design options and components<br></br>
                        for generating modern applications and API. with <b style={{ color: '#FFC107' }}>Little or No Coding.</b></span>


                    {/* <ReactPlayer url='https://youtu.be/ceHZUfiDOFU?si=bDPTfS04xD3ot5Om'/> */}

                    <button id='introvideo' ><CiPlay1 className='iv-icon' />&nbsp;Intro Video</button>
                </div>
            </div>
            <div className='container2'>

                <img src={img1} alt='image' id='first' />

                <b className='dev' style={{ color: 'rgb(83, 9, 114)', fontSize: '1.7rem' }}>+15,000 <span style={{ color: 'gray', fontSize: '1.3rem', fontWeight: 100 }}>Developers worldwide.</span></b>


                <div className='rad-studio'>
                    <div className='studio-img'>
                        <img src={studio} id='studio' />
                    </div>
                    <div className='rad-discript'>
                        <h1>What is RadSystems?</h1>
                        <p className='disc'><b className='system'>RadSystems Studio </b>is a robust Low-code software that facilitates a rapid<br></br> application development process by reducing redundant coding time. Through<br></br> its complex engine algorithm, it is possible for an application to be generated<br></br> in several programming languages from a single code base.</p>

                        <p className='disc'><b className='system'>RadSystems </b>allows you to generate applications through,&nbsp;<b className='system'>PHP Laravel, Python Flask, Node Express.js, ASP.NET Core </b>frameworks for the Backend, and employs<b className='system'>Bootstrap, jQuery, Vue.js, Quasar, PrimeVue, React</b>, and <b className='system'>Flutter</b>frameworks for the Frontend.</p>

                        <p className='disc'>You can publish your application to<b className='system'>Classic Application, Single Page Application, Progressive Web Application</b>, and<b className='system'>Mobile Application</b>with<br></br> single click.</p>


                        <Button className='f-btn' variant="primary">View full feature</Button>

                    </div>
                </div>

                <div className='why-rad'>
                    <div className='rad-discript'>
                        <h1>Why RadSystems?</h1>
                        <p className=' disc'><b className='crud-bold'>RadSystems</b> can be used to create<b className='crud-bold'>CRUD (Create, Read, Update and Delete)<br></br></b>applications.<b className='crud-rad'>RadSystems studio </b>allows users to add custom code to manage<br></br> business rules and validation.</p>
                        <p className='disc'><b className='crud-bold'>RadSystems </b>lets you create forms, queries in PHP, ranging from simple forms<br></br> to forms having high level of complex elements to manipulate data from<br></br> databases <b className='crud-bold'>(MySQL, PostgreSQL, SQLite, MS SQLServer).</b></p>
                        <Button className='f-btn' variant="primary">View full feature</Button>

                    </div>
                    
                        <img src={img2} alt='image2' id='second' />
                    
                </div>


                <div className='objective'>
                    <h5>Radsystems helps you achieve business targets and personal objectives</h5>
                    <span className='devlop'>Develop Business Solutions <b style={{ color: 'gray' }}>Faster!</b></span>
                </div>

                <div className='target'>
                    <div className='trg-img'>
                        <img src={img3} alt='image3' id='third' />

                    </div>
                    <div className='solution'>
                        <div className='convert'>
                            <BsDatabase className="data" />
                            <span>Convert your <b>Data</b> and <b> Business <br></br>Models </b> into <b> Applications </b></span>

                        </div>
                        <div className='convert'>
                            <FaMapLocationDot className="data" />
                            <span>Convert your <b>Data</b> and <b> Business <br></br>Models </b> into <b> Applications </b></span>

                        </div>
                        <div className='convert'>
                            <GoPeople className="data" />
                            <span>Convert your <b>Data</b> and <b> Business <br></br>Models </b> into <b> Applications </b></span>

                        </div>
                    </div>
                    <div className='trg-img'>
                        <img src={img4} alt='image4' id='third' />
                    </div>
                </div>


            </div>

            <div className='container3'>
                <h2>Our Products</h2>
                <span>Build Apps in Programming Languages and Frameworks you Love</span>
                <div className='seven-boxes'>
                    <div className='php-box'>
                        <img src={img5} id='image5' />
                        <span>PhpRad Classic</span>
                        <p>Generate classic web applications using<br></br> Laravel, Jquery & Bootstrap-5</p>
                        {/* <div className='btns'>
                            <Button className='down-btn' variant="primary">Download</Button>
                            <Button className='buy-btn' variant="primary">Buy Now</Button>
                        </div> */}

                    </div>
                    <div className='php-box'>
                        <img src={imgs} id='image5' />
                        <span>PhpRad Vue</span>
                        <p>Generate SPA, PWA, Mobile Apps, Desktop Apps<br></br> with Laravel, ReactJs, VueJs & Quasar<br></br> Framework</p>
                        {/* <div className='btns'>
                            <Button className='down-btn' variant="primary">Download</Button>
                            <Button className='buy-btn' variant="primary">Buy Now</Button>
                        </div> */}

                    </div>
                    <div className='php-box'>
                        <img src={img6} id='image5' />
                        <span>AspRad</span>
                        <p>Generate SPA, PWA, Mobile Apps, Desktop Apps<br></br> with ASP.net Core, ReactJs, VueJs & Quasar<br></br> Framework</p>
                        {/* <div className='btns'>
                            <Button className='down-btn' variant="primary">Download</Button>
                            <Button className='buy-btn' variant="primary">Buy Now</Button>
                        </div> */}

                    </div>
                </div>
                <div className='seven-boxes'>
                    <div className='php-box'>
                        <img src={img7} id='image5' />
                        <span>PyRad</span>
                        <p>Generate SPA, PWA, Mobile Apps, Desktop Apps<br></br> with Python Flask, ReactJs, VueJs & Quasar<br></br> Framework</p>
                        {/* <div className='btns'>
                            <Button className='down-btn' variant="primary">Download</Button>
                            <Button className='buy-btn' variant="primary">Buy Now</Button>
                        </div> */}

                    </div>
                    <div className='php-box'>
                        <img src={img8} id='image5' />
                        <span>NodeRad</span>
                        <p>Generate SPA, PWA, Mobile Apps, Desktop Apps<br></br> with ASP.net Core, ReactJs, VueJs & Quasar<br></br> Framework</p>
                        {/* <div className='btns'>
                            <Button className='down-btn' variant="primary">Download</Button>
                            <Button className='buy-btn' variant="primary">Buy Now</Button>
                        </div> */}

                    </div>
                    <div className='php-box'>
                        <img src={img9} id='image5' />
                        <span>TypeScript</span>
                        <p>Generate SPA, PWA, Mobile Apps, Desktop Apps<br></br> with TypeScript Express, ReactJs, VueJs & Quasar<br></br> Framework</p>
                        {/* <div className='btns'>
                            <Button className='down-btn' variant="primary">Download</Button>
                            <Button className='buy-btn' variant="primary">Buy Now</Button>
                        </div> */}
                    </div>
                </div>

                <div className='seven-boxes'>
                    <div className='php-box1'>
                        <img src={img10} id='image5' />
                        <span>FlutterRad</span>
                        <p>Coming Soon...</p>
                        {/* <div className='btns'>
                            <Button className='down-btn' variant="primary">Download</Button>
                            <Button className='buy-btn' variant="primary">Buy Now</Button>
                        </div> */}

                    </div>

                </div>

            </div>

            <div className='container4'>
                <h1>How does it work?</h1>

                <span>With few clicks, you get your robust application running</span>

                <div className='work-boxes'>
                    <div className='work-box1'>

                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button class="navss active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                    <img src={dt} id='dt-img' />
                                    <h1>Connect to database of<br></br> your choice</h1>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="navs" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    <img src={note} id='dt-img' />
                                    <h1>Configure pages properties</h1>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="navs" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-comp" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    <img src={comp} id='dt-img' />
                                    <h1>Add components to pages</h1>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="navs" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-app" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    <img src={desk} id='dt-img' />
                                    <h1>Publish your<br></br> application</h1>
                                </button>
                            </li>

                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <h1>Connect to a database</h1>
                                <span>Create new project and connect to any of the database</span>
                                <img src={dataimg} id='data-img' />
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <h1>Configure pages properties and modules</h1>
                                <span>Configure modules and plugins that your applications needs</span>
                                <div className='plug'>
                                    <div className='plugs'>
                                        <div className='plugins'>
                                            <span>Application Menu</span>
                                        </div>
                                        <div className='plugins'>
                                            <span>Role Base Access Control</span>
                                        </div>
                                        <div className='plugins'>
                                            <span>User Account Management</span>
                                        </div>
                                        <div className='plugins'>
                                            <span>Authentication</span>
                                        </div>
                                        <div className='plugins'>
                                            <span>Record Mananagement</span>
                                        </div>
                                    </div>
                                    <div className='plugs'>

                                        <div className='plugins'>
                                            <span>Master Detail Relation</span>
                                        </div>
                                        <div className='plugins'>
                                            <span>Audit Trail Log</span>
                                        </div>
                                        <div className='plugins'>
                                            <span>Page Event Actions</span>
                                        </div>
                                        <div className='plugins'>
                                            <span>Form Validations</span>
                                        </div>
                                        <div className='plugins'>
                                            <span>e.t.c ...</span>
                                        </div>
                                    </div>
                                </div>
                                <img src={noteimg} id='note-img' />
                            </div>
                            <div className="tab-pane fade" id="pills-comp" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <h1>Add components to pages</h1>
                                <span>Drag 'n' Drop additional components to the pages.</span>
                                <div className='plugs'>
                                    <div className='plugins'>
                                        <span>Record Count</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>Chart Components</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>Page Filter Components</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>Sub-Page Component</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>Tab Page Component</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>Modal Page Component</span>
                                    </div>
                                </div>
                                <div className='plugs'>

                                    <div className='plugins'>
                                        <span>Form Wizard</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>Dynamic Menu</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>NavMenu</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>and many more...</span>
                                    </div>

                                </div>
                                <img src={compimg} id='comp-img' />

                            </div>
                            <div className="tab-pane fade" id="pills-app" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <h1>Preview and publish your application</h1>
                                <span>You can publish to any of the platforms</span>
                                <div className='plugs'>
                                    <div className='plugins'>
                                        <span>Web</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>P.W.A</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>Desktop</span>
                                    </div>
                                    <div className='plugins'>
                                        <span>Mobile</span>
                                    </div>
                                </div>

                                <img src={appimg} id='comp-img' />

                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className='container5'>
                <div className='f-box'>
                    <span>MAIN FEATURES</span>
                </div>
                <b>Robust Modules and Advance Web Components</b>
                <div className='ff-box'>
                    <div className='feature-boxes'>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Intuitive Design</h1>
                                <p>RadSystems is the easiest low<br></br> code platform on the planet.<br></br> Anyone with an idea can build apps</p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Platforms</h1>
                                <p>Publish your apps in different<br></br> platforms<b>(Web, PWA, Mobile,<br></br> Desktop)</b>from a single code base</p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Different Frameworks</h1>
                                <p>Publish your application in the<br></br> language and framework of your<br></br> choice (PHP Laravel, ASP.Net Core,<br></br> Node ExpressJs, Python Flask, Still<br></br> counting...)</p>
                            </div>
                        </div>
                    </div>


                    <div className='feature-boxes'>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Page Filters</h1>
                                <p>Add filter components to your pages<br></br> to page filter records</p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='ff-info'>
                                <h1>Responsive Apps</h1>
                                <p>Retina display and highly<br></br> mobile responsive apps</p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='ff-info'>
                                <h1>Generate Api</h1>
                                <p>Generate REST Api and<br></br> Documentations with click of a button</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ff-box'>

                    <div className='feature-boxes'>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Well Documented Code</h1>
                                <p>Uses industrial standards in code<br></br> documentations and comments</p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Security</h1>
                                <p>Security issues have been<br></br> taken care of:<b>(SQL Injection, CSRF, XSS, ...)</b> </p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Query Builder</h1>
                                <p>Easily generate complex sql query<br></br> with an advance query designer</p>
                            </div>
                        </div>
                    </div>



                    <div className='feature-boxes flex-box'>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Reporting</h1>
                                <p>Integrate Reports into your<br></br> application and generate reports <br></br>in different format (Excel, PDF, CSV, Print)</p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>CRUD Operation</h1>
                                <p>Perform basic CRUD<br></br> Operations on database records</p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Code Editing</h1>
                                <p>Edit page and components <br></br>manually if you wish to do so</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ff-box2'>

                    <div className='feature-boxes'>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Localization</h1>
                                <p>Build apps with multi-<br></br>support</p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Different Layouts</h1>
                                <p>Provide different layout for your apps</p>
                            </div>
                        </div>
                        <div className='ft-box'>
                            <div className='ic-img'>
                                <TbBulb className='bulb bl' />

                            </div>
                            <div className='f-info'>
                                <h1>Themes</h1>
                                <p>Give your apps different look and<br></br> feel with theme builder</p>
                            </div>
                        </div>

                    </div>
                    <button type="button" class="f-btn btn-warning f-bt">Browse All Features</button>
                </div>
            </div>
            <div className='container6'>
                <b>Technologies Used By RadSystems</b>
                <span>RadSystems uses the most robust and popular technologies in the industry</span>
                <div className='flex'>
                    <div className='tech-boxes'>
                        <b>Supported Databases
                        </b>
                        <img src={line} id='line' />
                        <div className='tech-logo'>

                            <img src={mysql} id='tech' />
                            <img src={post} id='tech' />
                        </div>
                        <div className='tech-logo'>
                            <img src={sql} id='tech' />
                            <img src={lite} id='tech' />
                        </div>
                        <div className='tech-logo'>
                            <img src={oracle} id='tech' />

                        </div>
                    </div>
                    <div className='tech-boxes'>
                        <b>Backend Frameworks
                        </b>
                        <img src={line} id='line' />
                        <div className='tech-logo'>

                            <img src={laravel} id='tech' />
                            <img src={node} id='tech' />
                        </div>
                        <div className='tech-logo'>
                            <img src={flask} id='tech' />
                            <img src={net} id='tech' />
                        </div>
                        <div className='tech-logo'>
                            <img src={script} id='tech' />

                        </div>
                    </div>
                    <div className='tech-boxes'>
                        <b>Frontend Frameworks
                        </b>
                        <img src={line} id='line' />
                        <div className='tech-logo'>

                            <img src={jquery} id='tech' />
                            <img src={buyjs} id='tech' />
                        </div>
                        <div className='tech-logo'>
                            <img src={vi} id='tech' />
                            <img src={spring} id='tech' />
                        </div>
                        <div className='tech-logo'>
                            <img src={react} id='tech' />

                        </div>
                    </div>
                </div>
                <div className='prj'>
                    <h1>Get Your Project Ready in Less Than <b>48 hrs.</b>Starting <br></br>@<b>USD 75</b>per application page</h1>
                </div>
                <button type="button" class="f-btn btn-warning bn-btn">Book Now</button>
            </div>
            <div className='container7'>
                <b style={{ color: 'blue' }}>Frequently <b>Asked Questions</b></b>
                <p>Find frequently asked questions and answer. If you can't find your question, click on the <span style={{ fontWeight: 'bolder' }}>Find More </span>link below or send us a<br></br> message.</p>
                <img src={line} id='line' />



                <span className='wp'> <BsChatText /> Can't find your answers? <Link to='/' id='fm'> Find More</Link></span>

                <div className='sw-img'>
                    <img src={cap} id='sw' />
                    <img src={sw} id='sw' />
                    <img src={get} id='app' />
                </div>
                <h1 className='ad'>Awards & <span className='qul'> Quality Certificates</span></h1>

                <div className='awd-img'>
                    <img src={verify} id='awd' />
                    <img src={star} id='awd' />
                    <img src={exp} id='awd' />
                </div>
            </div>
            <div className='container8'>
                <div className='community'>
                    <div className='mike'>
                        <img src={mike} id='mike' />
                    </div>
                    <div className='join-cm'>
                        <h1>Join Our Community</h1>
                        <div className='join'>
                            <button type="button" class="j-btn btn-warning">Create and track issues</button>
                            <button type="button" class="j-btn btn-warning">Ask questions</button>

                        </div>
                        <div className='join'>
                            <button type="button" class="j-btn btn-warning">Make suggestion</button>
                            <button type="button" class="j-btn btn-warning">Report a bug</button>

                        </div>
                    </div>
                </div>
                <div className='news'>
                    <h1>News Letter and Updates</h1>
                    <span>Subscribe to our News letter And receive updates and tips concerning the products</span><br></br>

                    <input type='email' placeholder='Enter email address' id='email'></input>
                    <button type='sub' id='scribe'>Subscribe</button>

                </div>
            </div>
            <div className='container9'>
                <div className='menues'>
                    <div className='info'>
                        <b>Info</b>
                        <span>F.A.Qs</span>
                        <span>About Us</span>
                        <span>Community</span>
                    </div>
                    <div className='info'>
                        <b>Legal</b>
                        <span>Licensing</span>
                        <span>Privacy Policy</span>
                        <span>Term & Conditions</span>
                    </div>
                    <div className='resource'>
                        <b>Resources</b>
                        <span>Documentation</span>
                        <span>Video Tutorial</span>

                    </div>
                    <div className='platform'>
                        <b>Social Platforms</b>
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>Instagram</span>
                        <span>Youtube</span>
                    </div>
                </div>

                <span className='reserve'>© 2021-2023 | ®All right Reserved RadSystems</span>

            </div>
        </>
    )
}

export default FirstPage
