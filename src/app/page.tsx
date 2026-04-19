"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { MapPin, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Plans",
          id: "pricing",
        },
        {
          name: "Devices",
          id: "product",
        },
        {
          name: "Support",
          id: "contact",
        },
      ]}
      brandName="Boost Mobile"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Elevate Your Mobile World"
      description="Experience lightning-fast connectivity with Boost Mobile's premium network coverage and exclusive device deals."
      buttons={[
        {
          text: "View Plans",
          href: "#pricing",
        },
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/5g-global-network-background-technology-with-futuristic-transparent-smartphone-remixed-media_53876-108513.jpg"
      showDimOverlay={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/5g-global-network-background-technology-with-futuristic-transparent-smartphone-remixed-media_53876-108514.jpg",
          alt: "5G global network background technology",
        },
        {
          src: "http://img.b2bpic.net/free-photo/digital-smartphone-technology-data-transfer-concept_23-2151997034.jpg",
          alt: "Digital smartphone technology concept",
        },
        {
          src: "http://img.b2bpic.net/free-photo/female-s-hand-touching-digital-3d-render-screen-with-5g-sign_181624-31362.jpg",
          alt: "Hand touching digital screen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/5g-network-smart-city-background-technology_53876-108517.jpg",
          alt: "5G network smart city background",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-angle-hands-holding-smartphone_23-2149356850.jpg",
          alt: "Hands holding smartphone",
        },
      ]}
      avatarText="Trusted by millions"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Connectivity Redefined"
      description={[
        "Boost Mobile provides unparalleled access to high-speed networks across the nation.",
        "We focus on transparency, reliability, and putting our customers first in everything we build.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          label: "Reliability",
          title: "5G Performance",
          items: [
            "Low latency",
            "Consistent speeds",
            "Broad coverage",
          ],
        },
        {
          id: "f2",
          label: "Value",
          title: "Flexible Pricing",
          items: [
            "No hidden fees",
            "Transparent plans",
            "Cancel anytime",
          ],
        },
        {
          id: "f3",
          label: "Security",
          title: "Ironclad Privacy",
          items: [
            "Secure data encryption",
            "Privacy focused",
            "Account protection",
          ],
        },
      ]}
      title="Why Choose Boost"
      description="Our network is engineered for speed, stability, and total freedom."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "TechCorp",
          name: "Apex Pro 15",
          price: "$999",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-photo/mockup-mobile-phone-screen_53876-63379.jpg",
        },
        {
          id: "p2",
          brand: "Innovate",
          name: "Swift Z",
          price: "$799",
          rating: 4,
          reviewCount: "890",
          imageSrc: "http://img.b2bpic.net/free-photo/desk-lamp-with-minimalist-monochrome-background_23-2150763362.jpg",
        },
        {
          id: "p3",
          brand: "Quantum",
          name: "Ultra 5",
          price: "$699",
          rating: 5,
          reviewCount: "540",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-clicking-photo-coffee-from-mobile-phone_1170-746.jpg",
        },
        {
          id: "p4",
          brand: "Nexus",
          name: "Prime Fold",
          price: "$1299",
          rating: 5,
          reviewCount: "320",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-smartphone-side-view_9975-135705.jpg",
        },
        {
          id: "p5",
          brand: "Vertex",
          name: "Edge Mini",
          price: "$499",
          rating: 4,
          reviewCount: "410",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-working-as-interior-designer_23-2150346488.jpg",
        },
        {
          id: "p6",
          brand: "Spark",
          name: "Lumina",
          price: "$399",
          rating: 4,
          reviewCount: "220",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-walking-with-coffee-cup_23-2149429390.jpg",
        },
      ]}
      title="Latest Devices"
      description="Upgrade to the latest smartphones and experience the power of the Boost network."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "pl1",
          title: "Essential",
          price: "$25",
          period: "/mo",
          features: [
            "Unlimited Talk/Text",
            "5GB Data",
            "Nationwide Coverage",
          ],
          button: {
            text: "Choose",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/sleek-black-smartphone-reflective-surface_9975-134352.jpg",
          imageAlt: "Sleek Black Smartphone on a Reflective Surface",
        },
        {
          id: "pl2",
          title: "Pro Unlimited",
          price: "$45",
          period: "/mo",
          features: [
            "Unlimited Everything",
            "High-speed 5G",
            "Mobile Hotspot",
          ],
          button: {
            text: "Choose",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/5g-global-network-background-technology-with-futuristic-transparent-smartphone-remixed-media_53876-108513.jpg",
          imageAlt: "Sleek Black Smartphone on a Reflective Surface",
        },
        {
          id: "pl3",
          title: "Premium Global",
          price: "$65",
          period: "/mo",
          features: [
            "Global Roaming",
            "Free Streaming",
            "Priority Data",
          ],
          button: {
            text: "Choose",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/mockup-mobile-phone-screen_53876-63379.jpg",
          imageAlt: "Sleek Black Smartphone on a Reflective Surface",
        },
      ]}
      title="Simple Plans"
      description="Choose a plan that fits your lifestyle perfectly."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "10M+",
          title: "Happy Users",
          description: "People connected globally",
          icon: Users,
        },
        {
          id: "m2",
          value: "99.9%",
          title: "Uptime",
          description: "Reliability guarantee",
          icon: Zap,
        },
        {
          id: "m3",
          value: "500+",
          title: "Local Stores",
          description: "Ready to serve",
          icon: MapPin,
        },
      ]}
      title="By The Numbers"
      description="We are proud of our milestones and service levels."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Excellent Service",
          quote: "Boost has completely changed how I stay connected with my team on the go.",
          name: "Sarah Miller",
          role: "Entrepreneur",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-businesswoman-wearing-eyeglasses_1262-4761.jpg",
        },
        {
          id: "t2",
          title: "Great Network",
          quote: "I get speeds here that I couldn't find anywhere else. Absolutely amazing.",
          name: "James Bond",
          role: "Media Pro",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-cheerful-student-guy-standing-pale-outdoor-wall_74855-4289.jpg",
        },
        {
          id: "t3",
          title: "Fast Setup",
          quote: "The entire process was smooth. I switched in minutes and kept my number.",
          name: "Emily Chen",
          role: "Tech Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-woman-professional-attire_23-2152009547.jpg",
        },
        {
          id: "t4",
          title: "Top Value",
          quote: "Best pricing I've seen in the market for unlimited data plans.",
          name: "David Wang",
          role: "Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/male-graphic-designer-using-digital-tablet_1170-779.jpg",
        },
        {
          id: "t5",
          title: "Always On",
          quote: "Whether I'm in the city or rural areas, the signal is rock solid.",
          name: "Lisa Ray",
          role: "Architect",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-transgender-wearing-shells-necklace_23-2149105401.jpg",
        },
      ]}
      title="Customer Stories"
      description="See why millions trust Boost Mobile for their communication needs."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "canvas-reveal",
      }}
      text="Need help or want to talk to a representative? We are here 24/7."
      buttons={[
        {
          text: "Contact Support",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Coverage Map",
              href: "#",
            },
            {
              label: "Help Center",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Boost Mobile"
      bottomRightText="Privacy Policy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
