import {motion} from 'framer-motion';

export default function Explore(){
    return(
        <>
        <section className='py-20 bg-white'>
                <div className='max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div>
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className='text-[#ff8f00] text-4xl font-bold mb-4'>
                                <span>Explore Best Properties</span><br />
                                With Expert Services
                            </h1>
                            <p className='text-gray-500 font-light'>
                                JW Property siap membantu Anda menemukan rumah impian <br />dengan cara yang mudah, cepat, dan terpercaya. Dari membeli <br />hingga menyewa, kami memberikan layanan terbaik <br />agar pengalaman properti Anda selalu nyaman.
                            </p>
                            <button className='font-bold py-2 px-4 bg-[#ff8f00] text-black mt-4'>Explore</button>
                        </motion.div>
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="card-home.jpg"
                                alt="Property"
                                className="rounded-lg shadow-lg max-w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className='max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>

                    {/* Card 1 */}
                    <motion.div
                        className="relative rounded-lg overflow-hidden shadow-lg group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="card-house.jpg"
                            alt="Card 1"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="rounded-lg overflow-hidden shadow-lg group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src="card-house.jpg"
                            alt="Card 2"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="rounded-lg overflow-hidden shadow-lg group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <img
                            src="card-house.jpg"
                            alt="Card 3"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}