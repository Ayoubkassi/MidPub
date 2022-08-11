import  { Main , Double , Wrap , Label , InputBut , ButContainer , Button} from './Security.styles';
import { useState } from 'react';


const Security = () => {
	const sizeWidth = 300;
	const [email , setEmail] = useState('');
	const [ addEmail , setAddEmail ] = useState('');
	const [currentPassword , setCurrentPassword] = useState('');
	const [ newPassword , setNewPassword] = useState('');
	const [ confirmPassword , setConfirmPassword ] = useState('');

	return (
			<>
				<Main>
					<p><strong>Email Addresses</strong></p>
					<Double>
			            <Wrap>
				          <Label>Email Address</Label>
				          <InputBut width={sizeWidth} type="text" value={email} onChange={(e) => setEmail(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Add Email Address</Label>
				          <InputBut width={sizeWidth} type="text" value={addEmail} onChange={(e) =>  setAddEmail(e.target.value) } />
				        </Wrap>
			        </Double>
			       <p><strong>Change Password</strong></p>

			            <Wrap>
				          <Label>Current Password</Label>
				          <InputBut width={650} type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value) } />
				        </Wrap>
	
			        <Double>
			            <Wrap>
				          <Label>New Password</Label>
				          <InputBut width={sizeWidth} type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>New Password</Label>
				          <InputBut width={sizeWidth} type="text" value={confirmPassword} onChange={(e) =>  setConfirmPassword(e.target.value) } />
				        </Wrap>
			        </Double>
			        <ButContainer>
			          <Button>Save</Button>
			        </ButContainer>
				</Main>
			</>
		);
}

export default Security;