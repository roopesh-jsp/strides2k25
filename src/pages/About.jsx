import React from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import AboutCard from "../components/AboutCard";
import AboutHeadCard from "../components/AboutHeadCard";
import roopesh from "../assets/roopesh.jpg";
import hod from "../assets/hod.jpg";
import jana from "../assets/jana.jpg";
import sathvika from "../assets/sathivika.jpg";
import towsiq from "../assets/towsiq.jpg";
import srujuna from "../assets/srujana.png";
import sridevi from "../assets/Sridevi.png";
import rajeswari from "../assets/Rajeswari.png";
export default function About() {
  return (
    <div id="about">
      <h1 className="about_heading">About us</h1>
      <div className="about_1">
        <AboutHeadCard
          name={"Dr. A. RADHA KRISHNA"}
          title="HEAD OF THE DEPARTMENT"
          role="PROFESSOR"
          img={hod}
          className={"hod"}
        />
        <AboutHeadCard
          name={"A . JANARDHANA RAO"}
          title="FACULTY COORDINATOR"
          role="ASST PROFESSOR"
          img={jana}
          className="jana"
        />
      </div>
      <div className="about_2">
        <h2>head coordinators</h2>
        <div className="about_2_1">
          <div className="about_head_card_image sm">
            <img src={towsiq} alt="" />
          </div>
          <h3>Shaik Towsiq</h3>
          <div className="horizantalLine"></div>
          <div className="about_head_card_image sm">
            <img src={sathvika} alt="" />
          </div>
          <h3>N . Sathvika</h3>
        </div>
      </div>
      <div className="about_2">
        <h2>web developer</h2>
        <div className="about_2_1 roopesh">
          <div className="about_head_card_image sm">
            <img src={roopesh} alt="" />
          </div>
          <h3>roopesh j</h3>
        </div>
      </div>
      <div className="about_3">
        <h2>event coordinators</h2>
        <AboutCard
          title="Predictiv Modeling Context"
          faculty="Mrs. A .Srujana Jyothi"
          stu_1="KARRI SAI MANIKANTA REDDY"
          stu_2="PALACHARLA LALITHA SAHITYA"
          img={srujuna}
        />
        <AboutCard
          title="Logic Unlock"
          faculty="Mrs. G. Tejasri Devi"
          stu_1="ANUSURI KISHORE"
          stu_2="YETURI ANUSHA"
          img={sridevi}
        />
        <AboutCard
          title="Coding Battle"
          faculty="Mrs. G. V .Rajeswari"
          stu_1="BANDARU B S VEERA SAI GANESH "
          stu_2="LOKA SRI NITHYA"
          img={rajeswari}
        />
        <AboutCard
          title="Startup Pitch"
          faculty="Mrs. V.Anantha Lakshmi"
          stu_1="SHAIK MOHAMMED IMRAN"
          stu_2="GADUPUDI MOKSHAGNA"
          img=""
        />
      </div>
      <h1 className="contact_us">contact us.</h1>
      <div className="about_contact">
        <div className="about_contact_1">
          <div className="about_contact_2">
            <FaPhoneAlt />
            <h3>Shaik Towsiq</h3>
          </div>
          <p>
            <a href="tel:7993500991">7993500991</a>
          </p>
        </div>
        <div className="about_contact_1">
          <div className="about_contact_2">
            <FaPhoneAlt />
            <h3>N . Sathvika</h3>
          </div>

          <p>
            <a href="tel:8639683986">8639683986</a>
          </p>
        </div>
      </div>
      <span className="copyright">
        &#169; 2024 Strides | e-Articraft. All rights reserved. Website designed
        by{" "}
        <div className="highlight">
          <a href="https://www.linkedin.com/in/rupesh13/" target="_blank">
            Roopesh Kumar
          </a>
        </div>
        .
      </span>
    </div>
  );
}
