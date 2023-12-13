import React from "react";
import vg from "../assets/2.webp";
import {
  FaGoogle,
  FaAmazon,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techshashank</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="imag" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            alias eligendi corporis. Vel provident inventore ad doloribus nihil
            ratione, quo nesciunt. Ducimus consectetur soluta aliquam non id
            repellat illo laudantium! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea nihil impedit molestias quam facilis quidem aut
            dolorem tenetur, distinctio qui debitis temporibus deserunt vero
            voluptates nobis libero iure velit! Fuga.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <FaGoogle />
              <p>google</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <FaAmazon />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <FaYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <FaInstagramSquare />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
