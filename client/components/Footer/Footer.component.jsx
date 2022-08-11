import  { Main , Item , Media , Social , StyledImage , ItemMedia , Copyright , LinkContainer , Links, Mobile , MobileImage } from './Footer.styles';
import Image from 'next/image';

const size = 30;

const Footer = () => {
  return(
    <Main>
      <Media>
        <Social>
            <ItemMedia>
              <StyledImage src="/facebook.png" alt="facebook" width={size} height={size} />
            </ItemMedia>
            <ItemMedia>
              <StyledImage src="/linkedin.png" alt="linkedin" width={size} height={size}/>
            </ItemMedia>
            <ItemMedia>
              <StyledImage src="/twitter.png" alt="twitter" width={size} height={size}/>
            </ItemMedia>
            <ItemMedia>
              <StyledImage src="/instagram.png" alt="insatgram" width={size} height={size}/>
            </ItemMedia>
            <ItemMedia>
              <StyledImage src="/youtube.png" alt="youtube" width={size} height={size}/>
            </ItemMedia>
        </Social>
        <Mobile>
          <MobileImage>
            <Image src="/google-play.svg" alt="play-store" width={160} height={35} />
          </MobileImage>
          <MobileImage>
            <Image src="/appstore.svg" alt="app-store" width={160} height={35} />
          </MobileImage>
        </Mobile>
      </Media>
      <Media>
        <div>
          <Copyright>&copy; 2022 Name. All rights reserved.</Copyright>
        </div>
        <Links>
          <LinkContainer>
            <Item href="/">Privacy Policy</Item>
          </LinkContainer>
          <LinkContainer>
            <Item href="/">Terms & Conditions</Item>
          </LinkContainer>
        </Links>
      </Media>
    </Main>
  );
}

export default Footer;
