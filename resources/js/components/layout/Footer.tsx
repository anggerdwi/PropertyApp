import {motion} from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function footer(){
    return(
        <>
        <footer className="bg-[#995400] text-gray-300 py-16">
            <motion.div
                        className="relative rounded-lg overflow-hidden group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                    <h1 className="text-3xl font-bold text-[#ff8f00]">JW Property</h1>
                    <p className="mt-4 text-sm leading-relaxed">
                        JW Property hadir untuk membantu Anda menemukan rumah impian dengan cara 
                        yang mudah, cepat, dan terpercaya. Kami memberikan layanan terbaik agar 
                        perjalanan properti Anda selalu nyaman.
                    </p>
                    <div className="flex gap-4 mt-6 text-2xl">
                        <FaInstagram className="hover:text-pink-500 transition" />
                        <FaFacebook className="hover:text-blue-500 transition" />
                        <FaLinkedin className="hover:text-blue-400 transition" />
                        <FaGithub className="hover:text-gray-100 transition" />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-[#ff8f00] mb-4">Menu</h3>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">Home</li>
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">Layanan Kami</li>
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">Properti</li>
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">Tentang Kami</li>
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">Kontak</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-[#ff8f00] mb-4">Resource</h3>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">FAQ</li>
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">Panduan Pembelian</li>
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">Syarat & Ketentuan</li>
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">Kebijakan Privasi</li>
                        <li className="hover:text-[#ff8f00] transition cursor-pointer">Blog Properti</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-[#ff8f00] mb-4">Kontak Kami</h3>

                    <div className="flex items-center gap-3 mb-3">
                        <MdEmail className="text-xl" />
                        <p className="text-sm">jwproperty@gmail.com</p>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                        <MdPhone className="text-xl" />
                        <p className="text-sm">+62 812 3456 7890</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <MdLocationOn className="text-xl" />
                        <p className="text-sm">Jl. Sudirman, Jakarta Selatan</p>
                    </div>
                </div>

            </div>
            <div className="mt-12 text-center text-white text-sm pt-6">
                © 2025 JW Property. All rights reserved.
            </div>
            </motion.div>
        </footer>
        </>
    )
}