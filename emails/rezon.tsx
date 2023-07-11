import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';

  interface RezonEmailProps {
    signUpLink?: string;
  }

  export const RezonEmail = ({
    signUpLink = 'https://rezon.ai/sign-up',
  }: RezonEmailProps) => (
    <Html>
      <Head />
      <Preview>Log in with this invite link!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`/static/rezonLogoWithText.png`}
            width={100}
            alt="Raycast"
          />
          <Heading style={heading}>Welcome to Rezon</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href={signUpLink}>
                 Click here to sign in!
              </Link>
            </Text>
            <Text style={paragraph}>
              If you didn't request this, please ignore this email.
            </Text>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />- Rezon Team
          </Text>
          <Hr style={hr} />
          <Img
            src={`/static/rezonGraphicLogo.png`}
            width={32}
            height={32}
            style={{
              WebkitFilter: 'grayscale(100%)',
              filter: 'grayscale(100%)',
              margin: '20px 0',
            }}
          />
          <Text style={footer}>Rezon Software Inc.</Text>
          <Text style={footer}>
            2900 Reading Rd Cincinnati, OH 45206
          </Text>
        </Container>
      </Body>
    </Html>
  );

  export default RezonEmail;

  const main = {
    backgroundColor: '#000000',
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
    color: 'white'
  };

  const body = {
    margin: '24px 0',
    color: 'white'
  };

  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };

  const link = {
    color: '#6925C0',
  };

  const hr = {
    borderColor: '#535258',
    marginTop: '48px',
  };

  const footer = {
    color: 'white',
    fontSize: '12px',
    marginLeft: '4px',
  };
