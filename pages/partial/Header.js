import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { useEffect } from 'react'


export default function Home() {
	

  return (
 <>
  

{/*<body className="s-it">
	<div id="preloader"></div>*/}
	<div className="up">
		<a href="#" className="scrollup text-center"><i className="fas fa-chevron-up"></i></a>
	</div>
	
	<header id="it-header-up" className="it-header-up-seaction">
		<div className="it-header-up-top clearfix"> 
			<div className="container">
				<div className="it-header-top-cta float-left">
					<a href="#"><i className="fas fa-envelope"></i> info@webmail.com</a>
					<a href="#"><i className="fas fa-phone"></i> +987 876 765 65 5</a>
					<a href="#"><i className="fas fa-map-marker-alt"></i> 14/A, Brown City, NYC</a>
				</div>
				<div className="it-header-top-social float-right">
					<a href="#"><i className="fab fa-facebook-f"></i></a>
					<a href="#"><i className="fab fa-twitter"></i></a>
					<a href="#"><i className="fab fa-behance"></i></a>
					<a href="#"><i className="fab fa-youtube"></i></a>
				</div>
			</div>
		</div>
		<div className="it-up-header-main">
			<div className="container">
				<div className="it-up-brand-logo float-left">
					<a href="#"><Image src="/assets/img/its/logo/logo1.png" alt=""  width={184} height={57}/></a>
				</div>
				<div className="it-up-main-menu-wrap clearfix">
					<nav className="it-up-main-navigation float-left ul-li">
						<ul id="main-nav" className="navbar-nav text-capitalize clearfix">
							<li className="side-demo position-relative"><a href="#!">Demos</a> <span>New</span></li>
							<li><a href="about.html" target="_blank">About</a></li>
							<li><a href="team.html" target="_blank">Team</a></li>
							<li><a href="service.html" target="_blank">Service</a></li>
							<li><a href="contact.html" target="_blank">Contact</a></li>
							<li className="dropdown">
								<a href="#">Blog</a>
								<ul className="dropdown-menu clearfix">
									<li><a target="_blank" href="blog.html">Blog Page</a></li>
									<li><a target="_blank" href="blog-single.html">Blog Details</a></li>
								</ul>
							</li>
						</ul>
					</nav>
					<div className="it-up-header-cta-btn float-right text-center">
						<a href="#">Appointment</a>
					</div>
				</div>
				<div className="mobile_menu relative-position">
					<div className="mobile_menu_button it-up-open_mobile_menu">
						<i className="fas fa-bars"></i>
					</div>
					<div className="it-up-mobile_menu_wrap">
						<div className="mobile_menu_overlay it-up-open_mobile_menu"></div>
						<div className="mobile_menu_content">
							<div className="mobile_menu_close it-up-open_mobile_menu">
								<i className="far fa-times-circle"></i>
							</div>
							<div className="m-brand-logo text-center">
								<Image src="/assets/img/its/logo/logo2.png" width={100} height={100} alt=""/>
							</div>
							<nav className="main-navigation mobile_menu-dropdown  clearfix ul-li">
								<ul id="main-nav" className="navbar-nav text-capitalize clearfix">
									<li ><a href="#">Demos</a></li>
									<li><a href="about.html" target="_blank">About</a></li>
									<li><a href="team.html" target="_blank">Team</a></li>
									<li><a href="service.html" target="_blank">Service</a></li>
									<li><a href="contact.html" target="_blank">Contact</a></li>
									<li className="dropdown">
										<a href="#">Blog</a>
										<ul className="dropdown-menu clearfix">
											<li><a target="_blank" href="blog.html">Blog Page</a></li>
											<li><a target="_blank" href="blog-single.html">Blog Details</a></li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

	
{/*</body>*/}
</>

)
}
