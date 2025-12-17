export default function Hero(){
    return(
        <>
        <div className="h-screen relative">
                <img
                    src="card-home.jpg"
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/90"></div>
                <div className="relative max-w-4xl mx-auto px-8 text-center py-48">
                    <h1 className="text-white font-bold text-6xl mt-14">JW Property</h1>
                    <p className="text-white font-light text-sm mt-4 max-w-4xl">
                        JW Property hadir untuk mempermudah Anda menemukan rumah impian baik untuk jual, beli, maupun sewa. Dengan setiap properti yang terletak di lokasi strategis, kami menjamin pengalaman yang nyaman, aman, dan terpercaya. Mulai perjalanan Anda menuju rumah idaman bersama JW Property sekarang!
                    </p>
                    <button className="text-white bg-[#ff8f00] py-4 px-6 mt-4 font-semibold rounded">
                        Temukan Properti
                    </button>
                </div>
            </div>
            </>
    )
}