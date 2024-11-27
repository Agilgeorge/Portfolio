import { CONTACT } from "../prebuilds";
import {motion} from "framer-motion"

const Contact = ( ) => {
    return (
    <div className="border-b ☐ border-neutral-900 pb-20">
    <motion.h1 whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.5 }}
     className="my-10 text-center text-4xl">whatsuup peeps!!</motion.h1>
    <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}}
    className="text-center trackking-tighter">
        
        <a href="#" className="border-b">{CONTACT.email}</a>

    </motion.div>
    </div>
    );
    };
    export default Contact;