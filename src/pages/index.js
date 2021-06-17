import React from "react";

import Layout from "@common/Layout";
import Navbar from "@common/Navbar";

import Header from "@sections/Header";
import Servicii from "@sections/Servicii";
import Portofoliu from "@sections/Portofoliu";
import Despre from "@sections/Despre";
import Contact from "@sections/Contact";
import Footer from "@sections/Footer";

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Servicii />
    <Despre />
    <Portofoliu />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
