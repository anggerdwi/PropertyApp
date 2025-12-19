import { motion } from 'framer-motion';

export default function Services(){
    return(
        <>
        <section className="py-20 pt-20 bg-white">
                <div className='max-w-7xl mx-auto px-4'>
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className='font-bold text-[#ff8f00]  text-3xl text-center'>Services</h1>
                        <p className='text-gray-500 items-center text-center'>Kami menyediakan layanan terbaik</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center'>
                            <div className="p-10 border border-gray-300 group rounded-sm shadow-lg hover:shadow-xl hover:bg-[#ff8f00] transition duration-500 text- mt-10">
                                <div className="text-indigo-600 text-5xl mb-4">📦</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white duration-500">Buy</h3>
                                <p className="text-gray-600 group-hover:text-white duration-500">Membantu Anda menjual properti dengan cepat dan mudah.</p>
                            </div>
                            <div className="p-10 border border-gray-300 group rounded-sm shadow-lg hover:shadow-xl hover:bg-[#ff8f00] transition duration-500 text- mt-10">
                                <div className="text-indigo-600 text-5xl mb-4">📦</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white duration-500">Sell</h3>
                                <p className="text-gray-600 group-hover:text-white duration-500">Membantu Anda menjual properti dengan cepat dan mudah.</p>
                            </div>
                            <div className="p-10 border border-gray-300 group rounded-sm shadow-lg hover:shadow-xl hover:bg-[#ff8f00] transition duration-500 text- mt-10">
                                <div className="text-indigo-600 text-5xl mb-4">📦</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-white duration-500">Rent</h3>
                                <p className="text-gray-600 group-hover:text-white duration-500">Membantu Anda menjual properti dengan cepat dan mudah.</p>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}