import{RiReactjsLine} from "react-icons/ri"
import{SiMongodb} from "react-icons/si"
import{FaNodeJs} from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"; 
import { SiFlutter } from "react-icons/si";    
import { SiFigma } from "react-icons/si"; 
const Technologies = () => {
    return (
    <div className="border-b borde-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">
Tech Stack
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-blue-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl text-white-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlutter className="text-7xl text-blue-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFigma className="text-7xl text-#F24E1E-400"/>
            </div>

        </div>
    </div>
    )
    }
    export default Technologies