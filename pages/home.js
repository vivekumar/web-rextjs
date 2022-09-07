import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import { useEffect } from 'react'
//import it from '../styles/it-source.css'
//import styles from '../styles/Home.module.css'
import { TabHead, TabContainer, TabBody, Tab } from "../globals"

import PHead from './partial/PHead'
import Header from './partial/Header'
import Footer from './partial/Footer'
import Tabs from './component/Tabs'
export default function Home() {
	 useEffect(() =>
    {        
        //document.body.classList.add("s-it");
        document.body.className = 's-it';
		import("bootstrap/dist/js/bootstrap");
    });

  return (
 <>
      <PHead/>

{/*<body className="s-it">
	<div id="preloader"></div>*/}
	<div className="up">
		<a href="#" className="scrollup text-center"><i className="fas fa-chevron-up"></i></a>
	</div>
	
	<Header/>

	<section id="it-up-banner" className="it-up-banner-section position-relative">
		<span className="it-up-banner-deco1 position-absolute"> <Image src="/assets/img/its/b-vector1.png" width={310} height={440} alt=""/></span>
		<span className="it-up-banner-deco2 position-absolute"> <Image src="/assets/img/its/b-shape1.png" width={29} height={38} alt=""/></span>
		<span className="it-up-banner-deco3 position-absolute"> <Image src="/assets/img/its/b-shape2.png" width={12} height={72} alt=""/></span>
		<span className="it-up-banner-deco4 position-absolute"> <Image src="/assets/img/its/b-shape3.png" width={94} height={55} alt=""/></span>
		<div className="container">
			<div className="it-up-banner-content position-relative">
				<div className="it-up-banner-text headline-1 pera-content">
					<span>Focus On Business</span>
					<h1>Our target is to
					reach the goal</h1>
					<p>Our vertical solutions expertise allows your business to
					streamline workflow.</p>
					<div className="it-up-banner-btn d-flex">
						<div className="it-up-banner-play-btn text-center">
							<a className="video_box" href="#"><i className="fas fa-play"></i></a>
						</div>
						<div className="it-up-banner-cta-btn text-center">
							<a href="#">Get in Touch <i className="fas fa-arrow-right"></i></a>
						</div>
					</div>
				</div>
				<div className="it-up-banner-img">
					<Image src="/assets/img/its/b-m.png" width={499} height={666} alt=""/>
					<span className="it-up-img-deco1 position-absolute" data-parallax='{"x" : -70}'> <Image src="/assets/img/its/slack.png" width={75} height={77} alt=""/></span>
					<span className="it-up-img-deco2 position-absolute" data-parallax='{"y" : -70}'> <Image src="/assets/img/its/dimond.png" width={75} height={75} alt=""/></span>
					<span className="it-up-img-deco3 position-absolute" data-parallax='{"y" : 70}'> <Image src="/assets/img/its/en.png" width={75} height={73} alt=""/></span>
				</div>
			</div>
		</div>
	</section>

	<div className="it-up-sponsor" className="it-up-sponsor-section">
		<div className="container">
			<div id="it-up-sponsor-slide" className="it-up-sponsor-slider owl-carousel">
				<div className="it-up-sponsor-img">
					<Image src="/assets/img/its/sp1.png" width={142} height={59} alt=""/>
				</div>
				<div className="it-up-sponsor-img">
					<Image src="/assets/img/its/sp2.png" width={157} height={80} alt=""/>
				</div>
				<div className="it-up-sponsor-img">
					<Image src="/assets/img/its/sp3.png" width={185} height={55} alt=""/>
				</div>
				<div className="it-up-sponsor-img">
					<Image src="/assets/img/its/sp4.png" width={100} height={100} alt=""/>
				</div>
				<div className="it-up-sponsor-img">
					<Image src="/assets/img/its/sp1.png" width={100} height={100} alt=""/>
				</div>
				<div className="it-up-sponsor-img">
					<Image src="/assets/img/its/sp2.png" width={100} height={100} alt=""/>
				</div>
				<div className="it-up-sponsor-img">
					<Image src="/assets/img/its/sp3.png" width={100} height={100} alt=""/>
				</div>
				<div className="it-up-sponsor-img">
					<Image src="/assets/img/its/sp4.png" width={100} height={100} alt=""/>
				</div>
			</div>
		</div>
	</div>

	<section id="it-up-about" className="it-up-about-section">
		<div className="container">
			<div className="it-up-about-content">
				<div className="row">
					<div className="col-lg-5">
						<div className="it-up-about-img position-relative">
							<span></span>
							<div className="it-up-about-circle-progress position-absolute text-center pera-content">
								<span className="circle-progress-icon"><Image src="/assets/img/its/cp-icon.png" width={29} height={19} alt=""/></span>
								<div className="first progress_area position-relative"><strong><span>%</span></strong></div>
								<p>Overall Experiences</p>
							</div>
							<div className="it-up-about-img-wrap text-right">
								<Image src="/assets/img/its/abt1.jpg" width={379} height={421} alt=""/>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="it-up-about-text">
							<div className="it-up-section-title headline-1">
								<span>_About our Company_</span>
								<h2>Stay Up Stay Running
								Stay Protected</h2>
								<p>Our vertical solutions expertise allows your business to streamline
									workflow, and increase productivity. No matter the business, pure as
								has you covered with industry compliant solutions.</p>
							</div>
							<div className="it-up-about-feature clearfix">
								<div className="it-up-about-ft-item">
									<div className="it-up-about-ft-icon text-center float-left">
										<Image src="/assets/img/its/icon/ab-ft1.png" width={41} height={44} alt=""/>
									</div>
									<div className="it-up-about-ft-text headline-1 pera-content">
										<h3><a href="#">Tracking System</a></h3>
										<p>Vertical solutions expertise
										allows your business.</p>
									</div>
								</div>
								<div className="it-up-about-ft-item">
									<div className="it-up-about-ft-icon text-center float-left">
										<Image src="/assets/img/its/icon/ab-ft2.png" width={35} height={45} alt=""/>
									</div>
									<div className="it-up-about-ft-text headline-1 pera-content">
										<h3><a href="#">Great Idea</a></h3>
										<p>IT solutions expertise
										allows your business.</p>
									</div>
								</div>
							</div>
							<div className="it-up-about-btn">
								<span>Want to work with us?</span>
								<a href="#">Get started <i className="fas fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
		
	<section id="it-up-featured" className="it-up-featured-section position-relative">
		<span className="it-up-ft-bg position-absolute"><Image src="/assets/img/its/ft-bg.png" width={687} height={319} alt=""/></span>
		<span className="it-up-ft-shape position-absolute"><Image src="/assets/img/its/ft-shape1.png" width={100} height={19} alt=""/></span>
		<span className="it-up-ft-shape2 position-absolute"><Image src="/assets/img/its/b-shape3.png" width={95} height={55} alt=""/></span>
		<div className="container">
			<div className="it-up-section-title-2 headline-1 text-center">
				<span>_Our Featured Services_</span>
				<h2>Managed IT Services
				For Your Industry.</h2>
			</div>
			<div className="it-up-featured-content">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="it-up-featured-innerbox text-center">
							<div className="it-up-featured-icon">
								<Image src="/assets/img/its/icon/ft-icon1.png" width={44} height={50} alt=""/>
							</div>
							<div className="it-up-featured-text headline-1 pera-content">
								<h3><a href="#">Connect to Identity Systems</a></h3>
								<p>Our vertical solutions expertise allows your business to streamline.</p>
								<a className="it-up-ft-more" href="#">Read more <i className="fas fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="it-up-featured-innerbox text-center">
							<div className="it-up-featured-icon">
								<Image src="/assets/img/its/icon/ft-icon2.png" width={48} height={56} alt=""/>
							</div>
							<div className="it-up-featured-text headline-1 pera-content">
								<h3><a href="#">Software Development</a></h3>
								<p>Our vertical solutions expertise allows your business to streamline.</p>
								<a className="it-up-ft-more" href="#">Read more <i className="fas fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="it-up-featured-innerbox text-center">
							<div className="it-up-featured-icon">
								<Image src="/assets/img/its/icon/ft-icon3.png" width={46} height={64} alt=""/>
							</div>
							<div className="it-up-featured-text headline-1 pera-content">
								<h3><a href="#">Analytic Solutions</a></h3>
								<p>Our vertical solutions expertise allows your business to streamline.</p>
								<a className="it-up-ft-more" href="#">Read more <i className="fas fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="it-up-featured-innerbox text-center">
							<div className="it-up-featured-icon">
								<Image src="/assets/img/its/icon/ft-icon4.png" width={40} height={56} alt=""/>
							</div>
							<div className="it-up-featured-text headline-1 pera-content">
								<h3><a href="#">Software Development</a></h3>
								<p>Our vertical solutions expertise allows your business to streamline.</p>
								<a className="it-up-ft-more" href="#">Read more <i className="fas fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="it-up-featured-innerbox text-center">
							<div className="it-up-featured-icon">
								<Image src="/assets/img/its/icon/ft-icon5.png" width={49} height={51} alt=""/>
							</div>
							<div className="it-up-featured-text headline-1 pera-content">
								<h3><a href="#">Artificial Intelligence</a></h3>
								<p>Our vertical solutions expertise allows your business to streamline.</p>
								<a className="it-up-ft-more" href="#">Read more <i className="fas fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="it-up-featured-innerbox text-center">
							<div className="it-up-featured-icon">
								<Image src="/assets/img/its/icon/ft-icon6.png" width={36} height={57} alt=""/>
							</div>
							<div className="it-up-featured-text headline-1 pera-content">
								<h3><a href="#">Cyber Security</a></h3>
								<p>Our vertical solutions expertise allows your business to streamline.</p>
								<a className="it-up-ft-more" href="#">Read more <i className="fas fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="it-up-ft-btn text-center">
					<a href="#">View More</a>
				</div>
			</div>
		</div>
	</section>

	<section id="it-up-service" className="it-up-service-section position-relative">
		<span className="it-up-service-shape position-absolute deco1"><Image src="/assets/img/its/s-shape1.png" width={104} height={324} alt=""/></span>
		<span className="it-up-service-shape position-absolute deco2"><Image src="/assets/img/its/s-shape2.png" width={17} height={29} alt=""/></span>
		<span className="it-up-service-shape position-absolute deco3"><Image src="/assets/img/its/s-shape3.png" width={23} height={31} alt=""/></span>
		<span className="it-up-service-shape position-absolute deco4"><Image src="/assets/img/its/s-shape4.png" width={14} height={26} alt=""/></span>
		<span className="it-up-service-shape position-absolute deco5"><Image src="/assets/img/its/s-shape5.png" width={9} height={9} alt=""/></span>
		<div className="container">
			<div className="it-up-section-title headline-1 text-center">
				<span>_What are we doing?_</span>
				<h2>We are happy to share
				our client’s review.</h2>
			</div>
			<div className="it-up-service-content">

			<Tabs />
				

				
			</div>
		</div>
	</section>
			
	<section id="it-up-achivement" className="it-up-achivement-section position-relative">
		<span className="it-up-achive-shape1 position-absolute"><Image src="/assets/img/its/achive-bg.png" width={671} height={343} alt=""/></span>
		<span className="it-up-achive-shape2 position-absolute"><Image src="/assets/img/its/achive-bg2.png" width={434} height={343} alt=""/></span>
		<div className="container">
			<div className="it-up-section-title headline-1 text-center">
				<span>_Our awesome funfact_</span>
				<h2>Our Achievement!</h2>
			</div>
			<div className="it-up-achivement-content">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="it-up-achivement-innerbox position-relative text-center">
							<span className="inner-border"></span>
							<div className="it-up-achivement-icon">
								<Image src="/assets/img/its/icon/ach-icon1.png" width={58} height={76} alt=""/>
							</div>
							<div className="it-up-achivement-text pera-content headline-1">
								<h3 className="counter">1200</h3><strong>+</strong>
								<p>Satisfied Clients</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="it-up-achivement-innerbox position-relative text-center">
							<span className="inner-border"></span>
							<div className="it-up-achivement-icon">
								<Image src="/assets/img/its/icon/ach-icon2.png" width={65} height={65} alt=""/>
							</div>
							<div className="it-up-achivement-text pera-content headline-1">
								<h3 className="counter">55</h3><strong>+</strong>
								<p>Team Member</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="it-up-achivement-innerbox position-relative text-center">
							<span className="inner-border"></span>
							<div className="it-up-achivement-icon">
								<Image src="/assets/img/its/icon/ach-icon3.png" width={47} height={73} alt=""/>
							</div>
							<div className="it-up-achivement-text pera-content headline-1">
								<h3 className="counter">15</h3><strong>+</strong>
								<p>Award Winner</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="it-up-achivement-innerbox position-relative text-center">
							<span className="inner-border"></span>
							<div className="it-up-achivement-icon">
								<Image src="/assets/img/its/icon/ach-icon4.png" width={42} height={70} alt=""/>
							</div>
							<div className="it-up-achivement-text pera-content headline-1">
								<h3 className="counter">155</h3><strong>+</strong>
								<p>Works Done</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="it-up-testimonial" className="it-up-testimonial-section">
		<div className="container">
			<div className="it-up-section-title-2 headline-1 text-center">
				<span>_Our Client’s Feedback_</span>
				<h2>We are happy to share
				our client’s review.</h2>
			</div>
			<div className="it-up-testimonial-content position-relative">
				<span className="it-up-testi-shape1 position-absolute"><Image src="/assets/img/its/b-shape3.png" width={95} height={55} alt=""/></span>
				<span className="it-up-testi-shape2 position-absolute" data-parallax='{"y" : 70}'><Image src="/assets/img/its/tst-sh1.png" width={272} height={284} alt=""/></span>
				<span className="it-up-testi-shape3 position-absolute" data-parallax='{"x" : -70}'><Image src="/assets/img/its/tst-sh2.png" width={245} height={259} alt=""/></span>
				<span className="it-up-testi-shape4 position-absolute"><Image src="/assets/img/its/tst-sh3.png" width={29} height={103} alt=""/></span>
				<div className="it-up-testimonial-slider-wrap owl-carousel">
					<div className="it-up-testimonial-innerbox it-up-testimonial-pink text-center">
						<div className="it-up-testimonial-img-wrap position-relative">
							<div className="it-up-testimonial-img">
								<Image src="/assets/img/its/tst1.jpg" width={82} height={82} alt=""/>
							</div>
							<span className="quote-sign">“</span>
						</div>
						<div className="it-up-testimonial-text pera-content headline-1">
							<p>Our vertical solutions expertise allows your business to streamline workflow, and increase. Our vertical solutions expertise allows your business.</p>
							<div className="it-up-testi-author position-relative">
								<h4><a href="#">Natalia Fredy</a></h4>
								<span>Founder & CEO</span>
							</div>
						</div>
					</div>
					<div className="it-up-testimonial-innerbox it-up-testimonial-green text-center">
						<div className="it-up-testimonial-img-wrap position-relative">
							<div className="it-up-testimonial-img">
								<Image src="/assets/img/its/tst2.jpg" width={82} height={82} alt=""/>
							</div>
							<span className="quote-sign">“</span>
						</div>
						<div className="it-up-testimonial-text pera-content headline-1">
							<p>Our vertical solutions expertise allows your business to streamline workflow, and increase. Our vertical solutions expertise allows your business.</p>
							<div className="it-up-testi-author position-relative">
								<h4><a href="#">Rayhana Collin</a></h4>
								<span>Lead Developer</span>
							</div>
						</div>
					</div>
					<div className="it-up-testimonial-innerbox it-up-testimonial-blue text-center">
						<div className="it-up-testimonial-img-wrap position-relative">
							<div className="it-up-testimonial-img">
								<Image src="/assets/img/its/tst3.jpg" width={82} height={82} alt=""/>
							</div>
							<span className="quote-sign">“</span>
						</div>
						<div className="it-up-testimonial-text pera-content headline-1">
							<p>Our vertical solutions expertise allows your business to streamline workflow, and increase. Our vertical solutions expertise allows your business.</p>
							<div className="it-up-testi-author position-relative">
								<h4><a href="#">Willium Freddy</a></h4>
								<span>Web Designer</span>
							</div>
						</div>
					</div>
					<div className="it-up-testimonial-innerbox it-up-testimonial-pink text-center">
						<div className="it-up-testimonial-img-wrap position-relative">
							<div className="it-up-testimonial-img">
								<Image src="/assets/img/its/tst1.jpg" width={82} height={82} alt=""/>
							</div>
							<span className="quote-sign">“</span>
						</div>
						<div className="it-up-testimonial-text pera-content headline-1">
							<p>Our vertical solutions expertise allows your business to streamline workflow, and increase. Our vertical solutions expertise allows your business.</p>
							<div className="it-up-testi-author position-relative">
								<h4><a href="#">Natalia Fredy</a></h4>
								<span>Founder & CEO</span>
							</div>
						</div>
					</div>
					<div className="it-up-testimonial-innerbox it-up-testimonial-green text-center">
						<div className="it-up-testimonial-img-wrap position-relative">
							<div className="it-up-testimonial-img">
								<Image src="/assets/img/its/tst2.jpg" width={82} height={82} alt=""/>
							</div>
							<span className="quote-sign">“</span>
						</div>
						<div className="it-up-testimonial-text pera-content headline-1">
							<p>Our vertical solutions expertise allows your business to streamline workflow, and increase. Our vertical solutions expertise allows your business.</p>
							<div className="it-up-testi-author position-relative">
								<h4><a href="#">Rayhana Collin</a></h4>
								<span>Lead Developer</span>
							</div>
						</div>
					</div>
					<div className="it-up-testimonial-innerbox it-up-testimonial-blue text-center">
						<div className="it-up-testimonial-img-wrap position-relative">
							<div className="it-up-testimonial-img">
								<Image src="/assets/img/its/tst3.jpg" width={82} height={82} alt=""/>
							</div>
							<span className="quote-sign">“</span>
						</div>
						<div className="it-up-testimonial-text pera-content headline-1">
							<p>Our vertical solutions expertise allows your business to streamline workflow, and increase. Our vertical solutions expertise allows your business.</p>
							<div className="it-up-testi-author position-relative">
								<h4><a href="#">Willium Freddy</a></h4>
								<span>Web Designer</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>		

	<section id="it-up-contact" className="it-up-contact-section position-relative">
		<span className="it-up-service-shape position-absolute deco1"><Image src="/assets/img/its/s-shape1.png" width={104} height={324} alt=""/></span>
		<span className="it-up-service-shape position-absolute deco2"><Image src="/assets/img/its/s-shape2.png" width={17} height={29} alt=""/></span>
		<span className="it-up-service-shape position-absolute deco3"><Image src="/assets/img/its/s-shape3.png" width={23} height={31} alt=""/></span>
		<span className="it-up-service-shape position-absolute deco4"><Image src="/assets/img/its/s-shape4.png" width={14} height={26} alt=""/></span>
		<span className="it-up-service-shape position-absolute deco5"><Image src="/assets/img/its/s-shape5.png" width={9} height={9} alt=""/></span>
		<div className="container">
			<div className="it-up-section-title-2 headline-1 text-center">
				<span>_Let’s Work with us_</span>
				<h2>If you want to work please
				contact with us! </h2>
			</div>
			<div className="it-up-contact-content">
				<div className="row">
					<div className="col-lg-5">
						<div className="it-up-contact-img position-relative">
							<Image src="/assets/img/its/cn-bg.jpg" width={469} height={504} alt=""/>
							<span className="contact-shape position-absolute" data-parallax='{"y" : -50}'><Image src="/assets/img/its/cn-sh1.png" width={128} height={141} alt=""/></span>
							<div className="it-up-contact-text text-center headline-1">
								<Image src="/assets/img/its/marker.png" width={43} height={53} alt=""/>
								<h4>14/A, Brown City, Keder Road,
								Australia.</h4>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="it-up-form-wrap">
							<form action="#">
								<div className="it-up-form-input">
									<div className="row">
										<div className="col-md-6">
											<label>Full name*</label>
											<input type="text" placeholder="Jhon Doe" />
										</div>
										<div className="col-md-6">
											<label>Mail address*</label>
											<input type="text" placeholder="email@example.com" />
										</div>
									</div>
								</div>
								<div className="it-up-form-select position-relative">
									<label>Select Services*</label>
									<select name="#" id="#">
										<option value="#">Service type </option>
										<option value="#">Service type </option>
										<option value="#">Service type </option>
										<option value="#">Service type </option>
									</select>
								</div>
								<div className="it-up-form-input">
									<label>Type your message*</label>
									<textarea placeholder="Message..."></textarea>
								</div>
								<button type="submit">Send your message <i className="fas fa-arrow-right"></i></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>		

	<section id="it-up-blog" className="it-up-blog-section position-relative">
		<span className="it-up-blog-shape-bg1 position-absolute"><Image src="/assets/img/its/blg-shape1.png" width={671} height={343} alt=""/></span>
		<span className="it-up-blog-shape-bg2 position-absolute"><Image src="/assets/img/its/blg-shape2.png" width={434} height={343} alt=""/></span>
		<div className="container">
			<div className="it-up-section-title headline-1 text-center">
				<span>_Let’s Work with us_</span>
				<h2>If you want to work please
				contact with us! </h2>
			</div>
			<div className="it-up-blog-content">
				<div className="it-up-blog-slide  owl-carousel">
					<div className="it-up-blog-innerbox it-up-blog-orange">
						<div className="it-up-blog-img">
							<Image src="/assets/img/its/blg1.jpg" width={370} height={255} alt=""/>
						</div>
						<div className="it-up-blog-text position-relative headline-1 pera-content">
							<div className="it-up-blog-meta text-center">
								08
								<span>Nov/21</span>
							</div>
							<h3><a href="#">In this context, our main
							approach was to build.</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiu.</p>
							<div className="it-up-blog-bottom clearfix">
								<div className="it-up-blog-author float-left">
									<div className="it-up-blog-ath-img float-left">
										<Image src="/assets/img/its/ba1.jpg" width={35} height={35} alt=""/>
									</div>
									<div className="it-up-blog-ath-text text-uppercase">
										<a href="#">By Admin</a>
										<a href="#">0 Comments</a>
									</div>
								</div>
								<div className="it-up-blog-share ul-li-block position-relative float-right">
									<span><i className="fas fa-share-alt"></i></span>
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
					<div className="it-up-blog-innerbox it-up-blog-blue">
						<div className="it-up-blog-img">
							<Image src="/assets/img/its/blg2.jpg" width={370} height={255} alt=""/>
						</div>
						<div className="it-up-blog-text position-relative headline-1 pera-content">
							<div className="it-up-blog-meta text-center">
								08
								<span>Nov/21</span>
							</div>
							<h3><a href="#">In this context, our main
							approach was to build.</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiu.</p>
							<div className="it-up-blog-bottom clearfix">
								<div className="it-up-blog-author float-left">
									<div className="it-up-blog-ath-img float-left">
										<Image src="/assets/img/its/ba1.jpg" width={35} height={35} alt=""/>
									</div>
									<div className="it-up-blog-ath-text text-uppercase">
										<a href="#">By Admin</a>
										<a href="#">0 Comments</a>
									</div>
								</div>
								<div className="it-up-blog-share ul-li-block position-relative float-right">
									<span><i className="fas fa-share-alt"></i></span>
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
					<div className="it-up-blog-innerbox it-up-blog-grean">
						<div className="it-up-blog-img">
							<Image src="/assets/img/its/blg3.jpg" width={370} height={255} alt=""/>
						</div>
						<div className="it-up-blog-text position-relative headline-1 pera-content">
							<div className="it-up-blog-meta text-center">
								08
								<span>Nov/21</span>
							</div>
							<h3><a href="#">In this context, our main
							approach was to build.</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiu.</p>
							<div className="it-up-blog-bottom clearfix">
								<div className="it-up-blog-author float-left">
									<div className="it-up-blog-ath-img float-left">
										<Image src="/assets/img/its/ba1.jpg" width={35} height={35} alt=""/>
									</div>
									<div className="it-up-blog-ath-text text-uppercase">
										<a href="#">By Admin</a>
										<a href="#">0 Comments</a>
									</div>
								</div>
								<div className="it-up-blog-share ul-li-block position-relative float-right">
									<span><i className="fas fa-share-alt"></i></span>
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
					<div className="it-up-blog-innerbox it-up-blog-orange">
						<div className="it-up-blog-img">
							<Image src="/assets/img/its/blg2.jpg" width={370} height={255} alt=""/>
						</div>
						<div className="it-up-blog-text position-relative headline-1 pera-content">
							<div className="it-up-blog-meta text-center">
								08
								<span>Nov/21</span>
							</div>
							<h3><a href="#">In this context, our main
							approach was to build.</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiu.</p>
							<div className="it-up-blog-bottom clearfix">
								<div className="it-up-blog-author float-left">
									<div className="it-up-blog-ath-img float-left">
										<Image src="/assets/img/its/ba1.jpg" width={35} height={35} alt=""/>
									</div>
									<div className="it-up-blog-ath-text text-uppercase">
										<a href="#">By Admin</a>
										<a href="#">0 Comments</a>
									</div>
								</div>
								<div className="it-up-blog-share ul-li-block position-relative float-right">
									<span><i className="fas fa-share-alt"></i></span>
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
					<div className="it-up-blog-innerbox it-up-blog-blue">
						<div className="it-up-blog-img">
							<Image src="/assets/img/its/blg3.jpg" width={370} height={255} alt=""/>
						</div>
						<div className="it-up-blog-text position-relative headline-1 pera-content">
							<div className="it-up-blog-meta text-center">
								08
								<span>Nov/21</span>
							</div>
							<h3><a href="#">In this context, our main
							approach was to build.</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiu.</p>
							<div className="it-up-blog-bottom clearfix">
								<div className="it-up-blog-author float-left">
									<div className="it-up-blog-ath-img float-left">
										<Image src="/assets/img/its/ba1.jpg" width={35} height={35} alt=""/>
									</div>
									<div className="it-up-blog-ath-text text-uppercase">
										<a href="#">By Admin</a>
										<a href="#">0 Comments</a>
									</div>
								</div>
								<div className="it-up-blog-share ul-li-block position-relative float-right">
									<span><i className="fas fa-share-alt"></i></span>
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
					<div className="it-up-blog-innerbox it-up-blog-grean">
						<div className="it-up-blog-img">
							<Image src="/assets/img/its/blg2.jpg" width={370} height={255} alt=""/>
						</div>
						<div className="it-up-blog-text position-relative headline-1 pera-content">
							<div className="it-up-blog-meta text-center">
								08
								<span>Nov/21</span>
							</div>
							<h3><a href="#">In this context, our main
							approach was to build.</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiu.</p>
							<div className="it-up-blog-bottom clearfix">
								<div className="it-up-blog-author float-left">
									<div className="it-up-blog-ath-img float-left">
										<Image src="/assets/img/its/ba1.jpg" width={35} height={35} alt=""/>
									</div>
									<div className="it-up-blog-ath-text text-uppercase">
										<a href="#">By Admin</a>
										<a href="#">0 Comments</a>
									</div>
								</div>
								<div className="it-up-blog-share ul-li-block position-relative float-right">
									<span><i className="fas fa-share-alt"></i></span>
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
				</div>
			</div>
		</div>
	</section>		

	<Footer/>

{/*</body>*/}
</>

)
}
