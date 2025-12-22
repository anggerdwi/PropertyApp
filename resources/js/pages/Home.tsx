// import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from '@/components/home/Services';
import Explore from '@/components/home/Explore';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';


export default function Home() {
    return (
        <>
        <Navbar />
        <Hero />
        <Services />
        <Explore />
        <Contact />
        <Footer />
        </>

    );
}

