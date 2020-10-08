import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import CiaoestrelaLogo from 'assets/ciaoestrela.png';
import RudderLogo from 'assets/rudder-logo.png';
import Banner from 'components/Banner';
import Category from 'components/Category';
import CategoryTitle from 'components/CategoryTitle';
import Header from 'components/Header';
import Image from 'components/Image';
import Links from 'components/Links';
import NewLink from 'components/NewLink';
import Paragraph from 'components/Paragraph';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const App: FunctionComponent = () => (
  <Wrapper>
    <Header>Taylor Laekeman</Header>
    <main>
      <Category>
        <Section>
          <Banner>Hi, I&apos;m Taylor</Banner>
        </Section>
      </Category>
      <Category>
        <CategoryTitle>Experience</CategoryTitle>
        <Section type="experience">
          <SectionTitle area="title">Canvass Analytics</SectionTitle>
          <Paragraph area="role">
            Full Stack Software Engineer, August 2018&ndash;Present
          </Paragraph>
          <Paragraph area="description">
            At Canvass Analytics, we build tools that allow industrial engineers
            to train machine learning models on their process data and deploy
            them for real-time predictions. As a Fullstack Software Engineer at
            Canvass, I work to identify problems, design solutions, and
            implement functionality across the stack. Most of my work focuses on
            our front-end React app, our Kafka-based ingestion pipeline, and our
            Kubeflow-orchestrated training pipeline.
          </Paragraph>
          <Image
            alt="The Canvass Analytics logo.  A geometric, purple 'C' in a light-blue circle on a white background."
            area="image"
            src="https://static.wixstatic.com/media/0a64fb_d389afd95f6544978bb2fd978f614ac4~mv2.png/v1/fill/w_519,h_519,al_c,lg_1,q_85/0a64fb_d389afd95f6544978bb2fd978f614ac4~mv2.webp"
          />
          <Links area="links">
            <NewLink to="https://www.canvass.io">
              read more about Canvass
            </NewLink>
          </Links>
        </Section>
        <Section type="experience" isFlipped>
          <SectionTitle area="title">Fourwalls Digital</SectionTitle>
          <Paragraph area="role">
            Software Development Coop, September 2017&ndash;December 2017
          </Paragraph>
          <Paragraph area="description">
            Fourwalls Digital is a tool built for real estate agents and
            brokerages in Toronto. During my coop with Fourwalls, I participated
            in the design and implementation of an extension that allows
            administrators to manage the user accounts of real estate agents,
            and the privileges that they have within the Fourwalls Digital
            platform. I also extended the functionality and capabilities of the
            platform to allow users to host exclusive real estate listings, and
            extend existing listings with additional information, photographs,
            and videos.
          </Paragraph>
          <Links area="links">
            <NewLink to="https://fourwallsdigital.com/">
              read more about Fourwalls
            </NewLink>
          </Links>
        </Section>
        <Section type="experience">
          <SectionTitle area="title">AbacusNext</SectionTitle>
          <Paragraph area="role">
            Software Development Coop, September 2016&ndash;December 2016
          </Paragraph>
          <Paragraph area="description">
            AbacusNext offers a range of digital tools for lawyers and law
            firms. At AbacusNext, I designed and implemented an intermediate API
            that standardizes the interface to their various API servers for
            their mobile application, allowing them to avoid the expensive
            redesigns that would have been needed to synchronize them. I also
            designed and implemented a replacement for AbacusNext&apos;s
            imperfect and outdated server monitor
          </Paragraph>
          <Links area="links">
            <NewLink to="https://www.abacusnext.com/">
              read more about AbacusNext
            </NewLink>
          </Links>
        </Section>
        <Section type="experience" isFlipped>
          <SectionTitle area="title">Encircle</SectionTitle>
          <Paragraph area="role">
            Software Development Coop, January 2016&ndash;April 2016
          </Paragraph>
          <Paragraph area="description">
            Encircle is building a platform for stakeholders at every step of
            the insurance process. While at Encircle, I contributed to the
            development of the Android and web applications. I redesigned the
            platform’s header and main navigation system and implemented the
            design after it was approved.
          </Paragraph>
          <Links area="links">
            <NewLink to="https://www.getencircle.com/">
              read more about Encircle
            </NewLink>
          </Links>
        </Section>
        <Section type="experience">
          <SectionTitle area="title">MetricWire</SectionTitle>
          <Paragraph area="role">
            Software Development Coop, May 2015&ndash;August 2015
          </Paragraph>
          <Paragraph area="description">
            MetricWire is a survey-delivery tool for mobile phones. At
            MetricWire I worked on the company&apos;s Android application. I
            designed and implemented survey functionality that allows the
            application to track the user&apos;s GPS location throughout the
            day, summarize their movements in an easy-to-understand format, and
            present the summary to the user for clarification and submission. I
            coordinated visual design with the iOS development team in order to
            eliminate discrepancies across the platform, any of which could
            introduce platform bias into survey results.
          </Paragraph>
          <Links area="links">
            <NewLink to="https://metricwire.com/">
              read more about MetricWire
            </NewLink>
          </Links>
        </Section>
        <Section type="experience" isFlipped>
          <SectionTitle area="title">CBTS Canada Inc</SectionTitle>
          <Paragraph area="role">
            Software Development Coop, September 2014&ndash;December 2014
          </Paragraph>
          <Paragraph area="description">
            CBTS Canada was an experimental project setup to investigate
            automated workstation management to supplement the IT organization
            at CBTS. Taking a leadership role on a team of coop students, I
            designed the specifications for the modules that manage desired
            applications, reviewed completed modules to ensure correct
            functionality and adherence to coding style guidelines, and
            organized modules into larger catalogues to represent the complete
            target configuration of a specific workstation, or class of
            workstations.
          </Paragraph>
          <Links area="links">
            <NewLink to="https://www.cbts.com/">read more about CBTS</NewLink>
          </Links>
        </Section>
        <Section type="experience">
          <SectionTitle area="title">Cyclica</SectionTitle>
          <Paragraph area="role">
            Software Development Coop, January 2014&ndash;April 2014
          </Paragraph>
          <Paragraph area="description">
            Cyclica offers an drug-discovery platform for pharmaceutical
            researchers. At Cyclica, I implemented a program that converts
            pharmaceuticals into a graph representation, and compares their
            geometries to the known geometries of proteins in the human body in
            order to identify potential side-effects.
          </Paragraph>
          <Links area="links">
            <NewLink to="https://www.cyclicarx.com/">
              read more about Cyclica
            </NewLink>
          </Links>
        </Section>
        <Section type="experience" isFlipped>
          <SectionTitle area="title">
            Agriculture and Agri-Food Canada
          </SectionTitle>
          <Paragraph area="role">
            Software Development Coop, January 2013&ndash;April 2013
          </Paragraph>
          <Paragraph area="description">
            At Agriculture and Agri-Food Canada, I created a web portal for the
            Canadian government&apos;s newly digitized biological information
            archive.
          </Paragraph>
          <Links area="links">
            <NewLink to="https://www.agr.gc.ca/eng/agriculture-and-agri-food-canada">
              read more about AAFC
            </NewLink>
          </Links>
        </Section>
      </Category>
      <Category>
        <CategoryTitle>Projects</CategoryTitle>
        <Section type="project">
          <SectionTitle area="title">Ciao, Estrela Co.</SectionTitle>
          <Paragraph area="description">
            Rudder is a simple and opinionated task management tool designed
            according to the principles that underpin agile software
            development.
          </Paragraph>
          <Links area="links">
            <NewLink to="https://cioaestrela.co">ciaoestrela.co</NewLink>
            <NewLink to="https://github.com/tjlaekem?tab=repositories&q=ciaoestrela&type=&language=">
              view the code
            </NewLink>
          </Links>
          <Image
            alt="The Rudder logo. A dark-blue, capital R on a light-blue background."
            area="image"
            src={CiaoestrelaLogo}
          />
        </Section>
        <Section type="project" isFlipped>
          <SectionTitle area="title">Rudder</SectionTitle>
          <Paragraph area="description">
            Rudder is a simple and opinionated task management tool designed
            according to the principles that underpin agile software
            development.
          </Paragraph>
          <Links area="links">
            <NewLink to="https://rudder.to">rudder.to</NewLink>
            <NewLink to="https://github.com/tjlaekem?tab=repositories&q=rudder&type=&language=">
              view the code
            </NewLink>
          </Links>
          <Image
            alt="The Rudder logo. A dark-blue, capital R on a light-blue background."
            area="image"
            src={RudderLogo}
          />
        </Section>
      </Category>
      <Category>
        <CategoryTitle>Education</CategoryTitle>
        <Section type="education">
          <SectionTitle area="title">University of Waterloo</SectionTitle>
          <Paragraph area="degree">
            Bachelor of Applied Science in Honours Computer Engineering,
            Co-operative Program
          </Paragraph>
          <Paragraph area="dates">Graduated June 2018</Paragraph>
          <Paragraph area="description">
            I learned a lot during my time at the University of Waterloo. As a
            student in the computer engineering program, I learned about the
            hardware and software of modern computers.
          </Paragraph>
        </Section>
      </Category>
    </main>
  </Wrapper>
);

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default App;
