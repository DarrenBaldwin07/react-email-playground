import { Body } from '@react-email/components';
import { Container } from '@react-email/components';
import { Head } from '@react-email/components';
import { Heading } from '@react-email/components';
import { Hr } from '@react-email/components';
import { Html } from '@react-email/components';
import { Img } from '@react-email/components';
import { Link } from '@react-email/components';
import { Button } from '@react-email/components';
import { Preview } from '@react-email/components';
import { Section } from '@react-email/components';
import { Text } from '@react-email/components';
import * as React from 'react';


export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>View your referral update!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src='https://storage.googleapis.com/job-jar-bucket/jobjar-logo.png'
            width={125}
            alt="JobJar logo"
          />
          <Heading style={heading}></Heading>
          <Section style={body}>
            <Img
              src='--imgSrc--'
              width={125}
              alt="Confirmation"
              style={accepted}
            />
            <Text style={{fontWeight: 'bold', color: 'black'}}>--prompt--</Text>
            <Button style={button} href="https://job-jar.cincinnati.ventures/dashboard">View in the app</Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />- Cincinnati Ventures team
          </Text>
          <Hr style={hr} />
          <Img
            src='https://storage.googleapis.com/job-jar-bucket/jobjar-logo.png'
            width={80}
            style={{
              WebkitFilter: 'grayscale(100%)',
              filter: 'grayscale(100%)',
              margin: '20px 0',
            }}
          />
          <Text style={footer}>Cincinnati Ventures Inc.</Text>
          <Text style={footer}>
            2900 Reading road, Cincinnati, OH, 45206
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 25px 48px',
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
};

const body = {
  margin: '24px 0',
  textAlign: 'center' as const,
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const accepted = {
  margin: '0 auto',
}


const hr = {
  borderColor: '#dddddd',
  marginTop: '48px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginLeft: '4px',
};

const button = {
  backgroundColor: 'black',
  borderRadius: '12px',
  fontWeight: '600',
  color: '#fff',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: 12
};
