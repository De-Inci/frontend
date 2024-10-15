'use client'
import React from 'react';
import './Home.css';
import Footer from "@/Components/webpage/FooterComponent"

export default function Home() {
	return (<>
		<div className="container">
			<a id='home'></a> {/*just for navigation*/}
			<header className="hero">
				<h1>Welcome to the Incident Management Portal</h1>
				<p>Streamlining incident resolution with AI-driven solutions.</p>
			</header>
			<section className="features">
				<h2>Our Features</h2>
				<div className="featureList">
					<div className="feature">
						<h3>1. AI Incident Classification & Prioritization</h3>
					</div>
					<div className="feature">
						<h3>2. Incident Routing & Assignment</h3>
					</div>
					<div className="feature">
						<h3>3. Real-Time Incident Response Recommendations</h3>
					</div>
					<div className="feature">
						<h3>4. Automated Incident Playbooks</h3>
					</div>
					<div className="feature">
						<h3>5. Incident Progress Tracking & Timelines</h3>
					</div>
					<div className="feature">
						<h3>6. Incident Severity Forecasting</h3>
					</div>
				</div>
			</section>
			<section className="testimonials">
				<h2>What Our Users Say</h2>
				<div className="testimonial">
					<p>"The incident management portal has transformed how our team operates. The AI capabilities are truly impressive!"</p>
					<span>- Alex Johnson, IT Manager</span>
				</div>
				<div className="testimonial">
					<p>"Thanks to the automated playbooks, we resolve incidents faster than ever!"</p>
					<span>- Sarah Lee, Operations Lead</span>
				</div>
			</section>
		</div>
		<Footer/>
	</>
	);
}
