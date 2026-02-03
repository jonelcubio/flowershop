import {useState, useEffect} from "react";
import logo from "../assets/logo.png"

export default function Landing() {

  const [flowerImage, setFlowerImage] = useState<string>("");

    const flowerList: string[] = [
      "https://images.pexels.com/photos/17114781/pexels-photo-17114781.jpeg",
      "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg",
      "https://images.pexels.com/photos/15099417/pexels-photo-15099417.jpeg",
      "https://images.pexels.com/photos/17511958/pexels-photo-17511958.jpeg",
      "https://images.pexels.com/photos/35327501/pexels-photo-35327501.jpeg"
    ];

    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * flowerList.length);
      const selectedFlower = flowerList[randomIndex];
      setFlowerImage(selectedFlower);
    }, [])


  return(
    <>
    <div className="landing-con">
      <div className="landing-left">

        <div className="left-logo-con">
          <a href="https://github.com/jonelcubio/flowershop/tree/main" target="_blank"><img src={logo} alt="Flowerly Logo" className="left-logo-img" /></a>
          <a href="https://github.com/jonelcubio/flowershop/tree/main" target="_blank"><div className="left-logo-title">FLOWERLY</div></a>
        </div>
      </div>



      <div className="landing-middle">
        <img src={flowerImage} alt="bg-landing" className="landing-middle-img" />
      </div>



      <div className="landing-right">
      </div>
    </div>

    </>
  )
} 
