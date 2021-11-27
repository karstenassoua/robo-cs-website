import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../../globalStyles";
import {
  FaDiscord,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaGithub,
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

function Footer() {
  const { currentUser, logout } = useAuth();
  const history = useHistory()

  async function handleLogout() {
    try {
      await logout()
      history.push("/login")
      toast.success("Logged out.")
    } catch {
      toast.error("Failed to log out :(")
    }
  }

  return (
  <>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>Robinson Computer Science Club © 2020</WebsiteRights>
          {currentUser ? 
            <Link onClick={handleLogout}>
              <Button primary>LOG OUT</Button>
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
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={"/"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="https://mobile.twitter.com/ROBO_CS"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Github">
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
          <EmailLink href="emailto:robocs@gmail.com">email us at robocs@gmail.com</EmailLink>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  </>
  );
}

export default Footer;
