import {
  Body,
  Button,
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
} from "@react-email/components";
import * as React from "react";

interface RezonEmailProps {
  signUpLink?: string;
  docsLink?: string;
  discordLink?: string;
  twitterLink?: string;
}

export const RezonEmail = ({
  signUpLink = "https://app.rezon.ai",
  docsLink = "https://docs.rezon.ai",
  discordLink = "https://discord.com/invite/hM353pzH",
  twitterLink = "https://twitter.com/rezon_ai",
}: RezonEmailProps) => (
  <Html>
    <Head />
    <Preview>Exciting news from Rezon! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <div style={header}>
          <Img
            src="https://storage.googleapis.com/rezon/images/rezonLogoWithText.png"
            width={100}
            alt="Rezon"
          />
          <div style={headerIcons}>
            <Link href={docsLink}>
              <Img
                src="https://storage.googleapis.com/rezon/images/docs-logo-pro.png"
                height={20}
                alt="Documentation"
              />
            </Link>
            <Link href={twitterLink}>
              <Img
                src="https://storage.googleapis.com/rezon/images/twitter-logo.png"
                height={20}
                alt="Twitter"
              />
            </Link>
            <Link href={discordLink}>
              <Img
                src="https://storage.googleapis.com/rezon/images/discord-logo.png"
                height={20}
                alt="Rezon"
              />
            </Link>
          </div>
        </div>
        <Heading style={heading}>Welcome to the Rezon Beta</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            We're thrilled to announce that the Rezon beta is now ready for
            testing and as an early adopter, we're offering free hosting and
            explanations! 🦾
          </Text>
          <Text style={paragraph}>
            Join us in our{" "}
            <Link href={discordLink} style={link}>
              Discord
            </Link>{" "}
            for support and discussions. We want your feedback to help shape
            Rezon into the best it can be.
          </Text>
          <Text style={paragraph}>
            Feel free to reach out with any thoughts or questions - we're eager
            to hear from you!
          </Text>
          <Section style={buttonContainer}>
            <Button href={signUpLink} style={button}>
              Sign Up
            </Button>
          </Section>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />- The Rezon Team
        </Text>
        <Hr style={hr} />
        <Img
          src="https://storage.googleapis.com/rezon/images/rezonGraphicLogo.png"
          width={32}
          height={32}
          style={{
            WebkitFilter: "grayscale(100%)",
            filter: "grayscale(100%)",
            margin: "20px 0",
          }}
        />
        <Text style={footer}>Rezon Software Inc.</Text>
        <Text style={footer}>Made with ❤️ in Cincinnati, OH</Text>
      </Container>
    </Body>
  </Html>
);

export default RezonEmail;

const main = {
  backgroundColor: "#000000",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  // alignItems: "center",
};

const headerIcons = {
  display: "flex",
  gap: "16px",
  // marginRight: "16px",
  // float: "right",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
  color: "white",
  // textAlign: "center",
};

const body = {
  margin: "24px 0",
  color: "white",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "white",
};

const button = {
  backgroundColor: "#6925C0",
  color: "white",
  borderRadius: "8px",
  paddingTop: "12px",
  paddingBottom: "12px",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginTop: "16px",
};

const link = {
  color: "#6925C0",
};

const buttonContainer = {
  textAlign: "center",
};

const hr = {
  borderColor: "#535258",
  marginTop: "48px",
};

const footer = {
  color: "white",
  fontSize: "12px",
  marginLeft: "4px",
};
