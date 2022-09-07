import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from 'next/image'
 
function Tab1() {
 return (
   <div className="row1">
					
     <Tabs className="row" selectedTabClassName="active">
        <div className="col-lg-3">
					<div className="it-up-service-tab-btn">
            <TabList className="nav text-capitalize nav-tabs">
              <Tab className="nav-item"><a className='nav-link '>Web Designing</a></Tab>
              <Tab className="nav-item"><a className='nav-link'>Web Designing </a></Tab>
              <Tab className="nav-item"><a className='nav-link'>Web Development</a></Tab>
            </TabList>
          </div>
       </div>
       <div className="col-lg-9">
						<div className="it-up-service-tab-content">
							<div id="tabsContent" className="tab-content">
                <TabPanel>
                  <div className="it-up-service-tab-wrap clearfix">
										<div className="it-up-service-tab-text position-relative float-left ul-li-block headline-1">
											<h3>Explore our range of bespoke software for the marketing.</h3>
											<ul>
												<li>Facebook Marketing </li>
												<li>Search Engine Optimization</li>
												<li>E-mail Marketing Service</li>
												<li>Bulk Sms Service world wide</li>
											</ul>
											<a className="it-up-ser-btn" href="#">Check Details <i className="fas fa-arrow-right"></i></a>
											<span className="it-up-tab-icon position-absolute"><Image src="/assets/img/its/icon/tab-icon1.png" width={111} height={111} alt=""/></span>
										</div>
										<div className="it-up-service-img float-right">
											<Image src="/assets/img/its/ser-tab1.jpg" width={265} height={357} alt=""/>
										</div>
									</div>
                </TabPanel>
                <TabPanel>
                  <div className="it-up-service-tab-wrap clearfix">
										<div className="it-up-service-tab-text position-relative float-left ul-li-block headline-1">
											<h3>Explore our range of bespoke software for the marketing.</h3>
											<ul>
												<li>Facebook Marketing designing</li>
												<li>Search Engine Optimization</li>
												<li>E-mail Marketing Service</li>
												<li>Bulk Sms Service world wide</li>
											</ul>
											<a className="it-up-ser-btn" href="#">Check Details <i className="fas fa-arrow-right"></i></a>
											<span className="it-up-tab-icon position-absolute"><Image src="/assets/img/its/icon/tab-icon1.png" width={111} height={111} alt=""/></span>
										</div>
										<div className="it-up-service-img float-right">
											<Image src="/assets/img/its/ser-tab1.jpg" width={265} height={357} alt=""/>
										</div>
									</div>
                </TabPanel>
                <TabPanel>
                  <div className="it-up-service-tab-wrap clearfix">
										<div className="it-up-service-tab-text position-relative float-left ul-li-block headline-1">
											<h3>Explore our range of bespoke software for the marketing.</h3>
											<ul>
												<li>Facebook Marketing development</li>
												<li>Search Engine Optimization</li>
												<li>E-mail Marketing Service</li>
												<li>Bulk Sms Service world wide</li>
											</ul>
											<a className="it-up-ser-btn" href="#">Check Details <i className="fas fa-arrow-right"></i></a>
											<span className="it-up-tab-icon position-absolute"><Image src="/assets/img/its/icon/tab-icon1.png" width={111} height={11} alt=""/></span>
										</div>
										<div className="it-up-service-img float-right">
											<Image src="/assets/img/its/ser-tab1.jpg" width={265} height={357} alt=""/>
										</div>
									</div>
                </TabPanel>
							</div>
						</div>
					</div>
      
     </Tabs>
   </div>
 );
}
 
export default Tab1;


