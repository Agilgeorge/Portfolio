import wojakwork from "../assets/wojakwork.jpg";
import {motion} from "framer-motion";

const About = () => {
    return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1}}
      className="my-20 text-center text-4xl"> About <span className="text-neutral-600">Me</span></motion.h1>
        <div className="flex flex-wrap">
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 0.5 }}
             className="w-full lg:w-1/2 lg:p-8">
            <div className=" flex items-center justify-center">
                <img  className="rounded-2xl" src={wojakwork}/>
            </div>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6">
              

I am a passionate <span className="text-blue-500">Web and App developer</span>  skilled in creating responsive and user-friendly applications using cutting-edge technologies like <span className="text-blue-500">React</span> ,<span className="text-blue-500">Node.js</span> , and <span className="text-blue-500">Flutter</span>. I specialize in crafting clean, maintainable code and designing engaging user experiences.  
also learnt Backend, using tools like  <span className="text-blue-500">MongoDB</span> for robust data management and <span className="text-blue-500">Figma</span> for crafting intuitive, high-fidelity designs, to deliver innovative and impactful solutions.



                </p>
            </div>
            </motion.div>
        </div>
    </div>
    )
    }
    export default About