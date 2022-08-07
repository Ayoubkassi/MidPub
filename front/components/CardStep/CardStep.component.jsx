import { Cards , Card } from './CardStep.styles';

const data = [
  {
    "id" : "1",
    "title" : "Create an account and register your company"
  },
  {
    "id" : "2",
    "title" : "Book a service that match your goal and budget"
  },
  {
    "id" : "3",
    "title" : "Make payment via card or bank transfer"
  },
  {
    "id" : "4",
    "title" : "Submit materials and schedule ads"
  },
  {
    "id" : "5",
    "title" : "Generate report for analysis"
  }
]


const CardStep = () => {
  return(
    <Cards>
      { data.map((item) => (
        <Card>
          <h3>{item.id}</h3>
          <p style={{"font-size": "14px"}}>{item.title}</p>
        </Card>
      )) }
    </Cards>
  );
}

export default CardStep;
