import { Double , Main , Wraper , Wrap , Href , Info , Button , InputBut , Label,  ButContainer } from './SignupForm.styles';
import Input from '../Input/Input.component';

const SignupForm = () => {
  const sizeWidth = 300;
  return(
      <Main>
        <form>
          <Double>
            <Wrap>
              <Label>First Name</Label>
              <InputBut type="text" />
            </Wrap>
            <Wrap>
              <Label>Last Name</Label>
              <InputBut type="text" />
            </Wrap>
          </Double>
          <Double>
          <Wrap>
            <Label>Email</Label>
            <InputBut type="text" />
          </Wrap>
          <Wrap>
            <Label>Password</Label>
            <InputBut type="password" />
          </Wrap>
          </Double>
          <Double>
          <Wrap>
            <Label>Mobile Number</Label>
            <InputBut type="text" />
          </Wrap>
          <Wrap>
            <Label>Invite Code (Optional)</Label>
            <InputBut type="text" />
          </Wrap>
          </Double>
          <Wraper>
            <p>By proceeding, I agree to Name’s <Href>Terms & Conditions</Href> and acknowledge
            that I have read the <Href>Privacy Policy.</Href></p>
            <Info>
              <p>I also agree that Name or its representatives may contact me by email,
              phone, or SMS (including by automated means) at the email address or
              number I provide, including for marketing purposes.</p>
            </Info>
            <ButContainer>
              <Button>Sign up</Button>
            </ButContainer>
          </Wraper>

        </form>
      </Main>
  );
}

export default SignupForm;
