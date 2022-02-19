import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "../../../globalStyles";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  EmailLink,
} from "./Footer.elements";

// See above, IA - Key Elements: File Input/Output:
// Importing necessary styles from external files

// Creating the Footer component
function Footer() {
  // Drawing the currentUser information from AuthContext with the useAuth hook
  const { currentUser } = useAuth();

  return (
  <>
    {/* Creating the rest of the component's display using styled components */}
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>Robinson Computer Science Club © 2022</WebsiteRights>
          {currentUser ? 
            <Link to="/profile">
              <Button primary>PROFILE</Button>
            </Link>
            :
            <Link to="/login">
              <Button primary>LOG IN</Button>
            </Link>
          }
          <SocialIcons>
            <SocialIconLink
              href="https://discord.com/invite/bNfwGJQH9e"
              target="_blank"
              aria-label="Discord"
            >
              <FaDiscord />
            </SocialIconLink>
            <SocialIconLink 
                href="https://www.instagram.com/robo_compsci/"
              target="_blank" 
              aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://mobile.twitter.com/ROBO_CS"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink 
              href="https://medium.com/@robocompsci" 
              target="_blank" 
              aria-label="Medium"
              >
            <FaMediumM />
          </SocialIconLink>
          </SocialIcons>
            <EmailLink href="emailto:robocompsci@gmail.com">email us at robocompsci@gmail.com</EmailLink>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  </>
  );
}

export default Footer;
