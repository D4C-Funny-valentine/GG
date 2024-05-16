import React from "react";
import { Box, Container, Divider } from "@mui/material";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import "./landing.css"
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import { dev_platform, features, services } from "../../data/_landingData";
import { ClassTemplate, DevPlatFormFeatures } from "../../web/CompanyLandingWebsite/components";
import { aboutUs } from "../../data/common";

const Landing = () => {
  const containerPaddingY = { xs: 12, md: 16 };
  return (
    <Box sx={{height: '100%'}}>
      {/* Hero Section */}
      <Box sx={{height: '100%'}}>
        <HeroSection/>
      </Box>
      <Container maxWidth="lg">
        {/* Service Section */}
        <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', py: containerPaddingY }}>
          <ServiceSection data={services}/>
        </Box>
        {/* Development Platform */}
        <Box sx={{ py: { md: 12, xs : 6 } }}>
            <DevPlatFormFeatures data={dev_platform}/>
        </Box>
        {/* Feature */}
        <Box sx={{ minHeight: '100vh', py: containerPaddingY }}>
          <FeatureSection data={features}/>
        </Box>
      </Container>

      <Divider sx={{width: '100%'}}/>
      <Container maxWidth='lg' sx={{ py: containerPaddingY }}>
          {/* First Class Template */}
          <ClassTemplate logo="amazon" bgUrl="https://assets.maccarianagency.com/backgrounds/img4.jpg"/>
      </Container>
      <Divider sx={{width: '100%'}}/>

      <Container sx={{ py: containerPaddingY }}>
          {/* About Section */}
          <AboutSection data={aboutUs}/>
      </Container>
    </Box>
  );
};

export default Landing;
