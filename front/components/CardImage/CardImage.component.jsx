import { Cards , Card , Arrow} from './CardImage.styles';

const data = [
  {
    "title" : "Display Ads",
    "image" : ""
  },
  {
    "title" : "Social Media",
    "image" : ""
  },
  {
    "title" : "Advertorial",
    "image" : ""
  }
]

const CardImage = () => {
  return(
    <Cards>
      { data.map((item) => (
        <Card>{item.title} <Arrow>&rarr;</Arrow></Card>
      )) }
    </Cards>
  );
}

export default CardImage;
