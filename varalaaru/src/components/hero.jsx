import wojak from "../assets/wojak.jpg";
import {motion} from "framer-motion";
const Hero = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-36">
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                  <motion.h1 animate={{ x: 100 }} className="pb-16 text-xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Akhil George</h1>
                  <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-light text-transparent">Web and App developer</span>
                  <p className="my-2 max-w-xl py-6 font-light tracking-lighter"> Aspiring Web and App Developer with a keen eye for design and a strong foundation in multiple
                  programming languages and frameworks. Passionate about learning new technologies,collaborating with diverse teams, and driving innovation in development projects. Proven track
                  record of success in competitive hackathons and internships.</p>
              </div>
            </div>
             <div className="w-full lg:w-1/2 lg:p-8">
             <div className="flex justify-center">
                <img  className=" h-80 w-80 rounded-2xl mt-4" src={wojak} alt="agil"/>
             </div>

             </div>
          </div>
      </div>
    );
  }
  export default Hero;
  