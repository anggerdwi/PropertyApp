import {motion} from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function Contact(){
    return(
        <>
        <section className='w-full bg-gray-100 py-20'>
                <div className='bg-gray-100 grid grid-cols-1 sm:grid-cols-2 py-20 max-w-7xl mx-auto px-8'>
                <motion.div
                        className="relative rounded-lg overflow-hidden group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                <img src="card-home.jpg" alt="" className='rounded-full' />
                </motion.div>
                <div className='py-6 px-10'>
                    <motion.div
                        className="relative rounded-lg overflow-hidden group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className='text-black font-bold'>Contact <br /><span className='font-bold text-5xl text-[#ff8f00]'>JW Property ?</span></h2>
                        <p className='text-sm text-gray-500 py-2'>Anda bisa menemukan JWProperty dimana saja.</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-[#ff8f00]'>
                            <h1 className='text-4xl font-extrabold py-14'>600++ <br /><span className='font-extralight text-sm text-gray-500'>Properti terjual</span></h1>
                            <h1 className='text-4xl font-extrabold py-14'>80++ <br /><span className='font-extralight text-sm text-gray-500'>Membership</span></h1>
                            <h1 className='text-4xl font-extrabold py-14'>12++ <br /><span className='font-extralight text-sm text-gray-500'>Years Experience</span></h1>
                        </div>
                        <div className="flex gap-4 text-2xl text-black">
                            <MdEmail />
                            <MdPhone className='hover:text-green-500 transition-colors duration-300' />
                            <MdLocationOn className='hover:text-green-500 transition-colors duration-300' />
                            <FaInstagram className='hover:text-pink-500 transition-colors duration-300' />
                            <FaFacebook className='hover:text-indigo-500 transition-colors duration-300' />
                            <FaLinkedin className='hover:text-indigo-500 transition-colors duration-300' />
                            <FaGithub />
                        </div>
                    </motion.div>
                </div>
            </div>
            </section>
        </>
    )
}