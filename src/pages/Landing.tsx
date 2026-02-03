import logo from "../assets/logo.png"

export default function Landing() {
  return(
    <>
    <div className="landing-con">
      <div className="landing-left">
        
        <div className="left-logo-con">
          <img src={logo} alt="Flowerly Logo" className="left-logo-img" />
          <div className="left-logo-title">FLOWERLY</div>
        </div>
      </div>

      <div className="landing-middle">
        <img src="https://images.pexels.com/photos/18353268/pexels-photo-18353268/free-photo-of-close-up-of-pink-roses.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bg-landing" className="landing-middle-img" />
      </div>

      <div className="landing-right">
      </div>
    </div>

    </>
  );
}