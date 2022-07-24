import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import VideoCalling from 'sections/video-calling';
import Pricing from 'sections/pricing';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Faq from 'sections/faq';
import Support from 'sections/support-team';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Newsletter to Socials"
          description="An all-in-one platform for promoting your newsletter and blog on social media! Automate content creation and promotion."
        />
        <Banner />
        <Services />
        <VideoCalling />
        <Pricing />
        {/* <Clients /> TODO: testamonials */}
        <Blog />
        <Faq />
        {/* <Support /> */}
      </Layout>
    </ThemeProvider>
  );
}
