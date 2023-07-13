import WhatsApp from "../../public/assets/WhatsApp.png"
import Image from "next/image";

function Main() {
    return (<>
      <div className="flex">
        <div className="main-hero">
          <div>
            <span className="build">Build,</span>
            <span className="test">test,</span>
            <span className="and"> and</span>
          </div>
          <div>
            <span className="execute">execute</span>
            <span className="your"> your</span>
          </div>
          <div>
            <span className="ideas"> ideas</span>
            <span className="with"> with</span>
            <span className="our"> our</span>
          </div>
          <div>
            <span className="innovative">innovative</span>
          </div>
          <div>
            <span className="solutions">Solutions</span>
            <span className="end">.</span>
          </div>
        </div>
  
        <div className="container">
          <div className="box">
            <div className="card" id="front"></div>
            <div className="card" id="back"></div>
            <div className="card" id="left"></div>
            <div className="card" id="right"></div>
            <div className="card" id="top"></div>
            <div className="card" id="bottom"></div>
          </div>
        </div>
      </div>
      <div className="Last">
      <a href="https://your-whatsapp-link" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <Image src={WhatsApp} alt="WhatsApp Logo" className="whatsapp-logo" />
        <span>Chat On WhatsApp</span>
      </a>
      

      <a href="https://explore-services" target="_blank" rel="noopener noreferrer" className="Services-button">
        
        <span>Explore Our Services</span>
      </a>
    </div>
        </>
    );
  }
  
  export default Main;
  