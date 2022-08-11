import { Double , Main , Wraper , Href , Info , Button , ButContainer } from './SignupForm.styles';
import Input from '../Input/Input.component';

const SignupForm = () => {
  const sizeWidth = 300;
  return(
      <Main>
        <form>
          <Double>
            <Input label="First Name" width={sizeWidth} />
            <Input label="Last Name" width={sizeWidth} />
          </Double>
          <Double>
            <Input label="Email" width={sizeWidth}/>
            <Input label="Password" width={sizeWidth} />
          </Double>
          <Double>
            <Input label="Mobile Number" width={sizeWidth}/>
            <Input label="Invite Code (Optional)" width={sizeWidth} />
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
