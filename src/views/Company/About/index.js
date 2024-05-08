import React from "react";
import { Box, Container, Divider } from "@mui/material";
import HeroSection from "./HeroSection";
import "./about.css"
import GroupPhotoSection from "./GroupPhotoSection";
import CreativeSolutions from "./CreativeSolutions";
import LogoContainer from "./LogoContainer";
import AboutUsSection from "./AboutUsSection";
import ContactUsSection from "./ContactUsSection";
import { aboutUs, brandLogo, countupRates, groupImages } from "../../../data/common";
import { NumberCountUpLayout } from "../../../components";

const About = () => {
  const py = { xs: 12, md: 16 };
  return (
    <Box sx={{height: '100%'}}>
      <Container maxWidth={"lg"}>
        {/* Hero Section */}
        <Box sx={{py}}>
          <HeroSection/>
        </Box>

        {/* Group Photo Section */}
        <Box sx={{py}}>
          <GroupPhotoSection data={groupImages}/>
        </Box>

        {/* Number Count Up */}
        <Box sx={{ pt: { xs: 6 , md: 8 } , pb: { xs: 12, md: 16 }}}>
          <Container maxWidth="md">
              <NumberCountUpLayout data={countupRates}/>
          </Container>
        </Box>

        {/* Divider */}
        <ContainerDivider/>

        {/* Creative Solutions Section */}
        <Box sx={{py}}>
          <CreativeSolutions/>
        </Box>
        {/* Brand Logo Container */}
        <Box sx={{py: {xs : 6, md : 8}}}>
          <Container maxWidth="md">
            <LogoContainer data={brandLogo}/>
          </Container>
        </Box>

        <ContainerDivider/>

        {/* About Section */}
        <Box sx={{py}}>
          <AboutUsSection data={aboutUs}/>
        </Box>
      </Container>
      
      {/* Contact Section */}
      <Box sx={{py}}>
        <ContactUsSection/>
      </Box>
    </Box>
  );
};

const ContainerDivider = () => {
  return (
    <Box sx={{ py: { xs: 12, md: 16 } }}>
          <Container maxWidth="md">
            <Divider/>
          </Container>
    </Box>
  )
}

export default About;
