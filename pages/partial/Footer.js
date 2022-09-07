import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { useEffect } from 'react'




export default function Footer() {
	 useEffect(() =>
    {        
        //document.body.classList.add("s-it");
        document.body.className = 's-it';
    });

  return (
 <>
     	
	<section id="it-up-footer" className="it-up-footer-section position-relative">
		<div className="container">
			<div className="it-up-footer-content-wrap">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="it-up-footer-widget headline-1 pera-content">
							<div className="it-up-footer-logo-widget it-up-headline pera-content">
								<div className="it-up-footer-logo">
									<a href="#"><Image src="/assets/img/its/logo/logo2.png" width={217} height={56} alt=""/></a>
								</div>
								<p>The ‘Lighthouse Projects’ are in the
									disciplines of the chronic disease
									Haemophilia and Bipolar Disorder.
								Lighthouse project.</p>
								<a className="footer-logo-btn text-center text-capitalize" href="#">Get In Touch <i className="fas fa-arrow-right"></i> </a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="it-up-footer-widget headline-1 pera-content">
							<div className="it-up-footer-newslatter-widget pera-content">
								<h3 className="widget-title">Newsletter</h3>
								<p>Subscribe our newsletter to get our
									latest update &amp; news
								</p>
								<form action="#">
									<input type="email" placeholder="Your mail address" />
									<button type="submit"><i className="far fa-paper-plane"></i></button>
								</form>
								<div className="it-up-footer-social ul-li">
									<ul>
										<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
										<li><a href="#"><i className="fab fa-twitter"></i></a></li>
										<li><a href="#"><i className="fab fa-behance"></i></a></li>
										<li><a href="#"><i className="fab fa-youtube"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="it-up-footer-widget headline-1 pera-content">
							<div className="it-up-footer-info-widget ul-li">
								<h3 className="widget-title">Official info:</h3>
								<ul>
									<li>
										<i className="fas fa-map-marker-alt"></i> 
										<a href="#">30 Commercial Road
										Fratton, Australia</a>
									</li>
									<li>
										<i className="fas fa-phone"></i><a href="#">1-888-452-1505</a>
									</li>
								</ul>
								<div className="office-open-hour">
									<span>Open Hours: </span>
									<p>Mon - Sat: 8 am - 5 pm,
										Sunday: CLOSED
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="it-up-footer-widget headline-1 pera-content">
							<div className="it-up-footer-instagram-widget">
								<h3 className="widget-title">Instagram</h3>
								<div className="insta-feed ul-li clearfix">
									<ul>
										<li><a href="#"><Image src="/assets/img/its/instagram/ins1.jpg" width={100} height={100} alt=""/><i className="fab fa-instagram"></i></a></li>
										<li><a href="#"><Image src="/assets/img/its/instagram/ins2.jpg" width={100} height={100} alt=""/><i className="fab fa-instagram"></i></a></li>
										<li><a href="#"><Image src="/assets/img/its/instagram/ins3.jpg" width={100} height={100} alt=""/><i className="fab fa-instagram"></i></a></li>
										<li><a href="#"><Image src="/assets/img/its/instagram/ins4.jpg" width={100} height={100} alt=""/><i className="fab fa-instagram"></i></a></li>
										<li><a href="#"><Image src="/assets/img/its/instagram/ins5.jpg" width={100} height={100} alt=""/><i className="fab fa-instagram"></i></a></li>
										<li><a href="#"><Image src="/assets/img/its/instagram/ins6.jpg" width={100} height={100} alt=""/><i className="fab fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="it-up-footer-copyright text-center pera-content">
			<div className="container">
				<p>© 2021 SaaSio - IT Solutions. All rights reserved.</p>
			</div>
		</div>
	</section>
	{/*<Script src="/assets/js/bootstrap.min.js"></Script>
	<Script src="/assets/js/popper.min.js"></Script>
	<Script src="/assets/js/owl.js"></Script>
	<Script src="/assets/js/jquery.magnific-popup.min.js"></Script>
	<Script src="/assets/js/appear.js"></Script>
	<Script src="/assets/js/wow.min.js"></Script>
	<Script src="/assets/js/parallax-scroll.js"></Script>
	<Script src="/assets/js/circle-progress.js"></Script>
	<Script src="/assets/js/jquery.counterup.min.js"></Script>
	<Script src="/assets/js/waypoints.min.js"></Script>
	<Script src="/assets/js/typer-new.js"></Script>
	<Script src="/assets/js/it-source.js"></Script>*/}
</>

)
}
