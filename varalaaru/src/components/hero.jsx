import wojak from "../assets/wojak.jpg";
import {motion} from "framer-motion";
const container=(delay)=>({
  hidden:{x:100,opacity:0},
  visible:{x:0,opacity:1,
  transition:{duration:0.5,delay:delay}}
})
const Hero = () => {
    return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-36 ml-20">
          <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                  <motion.h1  variants = {container(0)} initial="hidden" animate="visible" className="pb-16 text-xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Akhil George</motion.h1>
                  <motion.span variants = {container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text text-4xl tracking-light text-transparent">Web and App developer</motion.span>
                  <motion.p variants = {container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-lighter "> Aspiring Web and App Developer with a keen eye for design and a strong foundation in 
                  programming languages and frameworks. Passionate about learning new technologies,collaborating with diverse teams, and driving innovation in development projects. Proven track
                  record of success in competitive hackathons and internships.</motion.p>
              </div>
            </div>
             <div className="w-full lg:w-1/2 lg:p-8">
             <div className="flex justify-center">
                <motion.img 
                initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 1, delay: 1.2}} className=" h-80 w-80 rounded-2xl mt-4" src={wojak} alt="agil"/>
             </div>

             </div>
          </div>
      </div>
    );
  }
  export default Hero;
  