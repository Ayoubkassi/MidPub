import  { Main , Double , Wrap , Label , InputBut , ButContainer , Button} from './Monetary.styles';
import { useState } from 'react';


const Monetary = () => {

	const [service1 , setService1]= useState('');
	const [service2 , setService2]= useState('');
	const [service3 , setService3]= useState('');
	const [commission1 , setCommission1 ] = useState('');
	const [commission2 , setCommission2 ] = useState('');
	const [commission3 , setCommission3 ] = useState('');
	return(
			<>
				<Main>
					<Double>
			            <Wrap>
				          <Label>Service 1</Label>
				          <InputBut type="text" value={service1} onChange={(e) => setService1(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Commission</Label>
				          <InputBut type="text" value={commission1} onChange={(e) =>  setCommission1(e.target.value) } />
				        </Wrap>
			        </Double>
			        <Double>
			            <Wrap>
				          <Label>Service 2</Label>
				          <InputBut type="text" value={service2} onChange={(e) => setService2(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Commission</Label>
				          <InputBut type="text" value={commission2} onChange={(e) =>  setCommission2(e.target.value) } />
				        </Wrap>
			        </Double>
			        <Double>
			            <Wrap>
				          <Label>Service 3</Label>
				          <InputBut type="text" value={service3} onChange={(e) => setService3(e.target.value) } />
				        </Wrap>
				        <Wrap>
				          <Label>Commission</Label>
				          <InputBut type="text" value={commission3} onChange={(e) =>  setCommission3(e.target.value) } />
				        </Wrap>
			        </Double>
			        <ButContainer>
			          <Button>Save</Button>
			        </ButContainer>
				</Main>
			</>
		);
}

export default Monetary;