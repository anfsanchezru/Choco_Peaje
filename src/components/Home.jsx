import React from 'react'
import BannerChoco from './BannerChoco'
import BannerChoco2 from './BannerChoco2'
import BannerChoco3 from './BannerChoco3'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';

export default function Home({setLogged}) {
    return (
        <div>
            <BannerChoco />
            <BannerChoco2 />            
            <BannerChoco3 />
            <Footer />
        </div>
    )
}
