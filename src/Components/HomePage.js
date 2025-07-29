import React from 'react'
import TravelNavbar from './TravelNavbar'
import HeroSection from './HeroSection'
import FeaturesSection from './FeatureSection'
import Footer from './Footer'

export default function HomePage() {
    return (
        <div>
            <TravelNavbar />
            <HeroSection />
            <FeaturesSection />
            <Footer />
        </div>
    )
}
