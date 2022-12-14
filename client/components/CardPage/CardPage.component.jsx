import { Cards , Card , ImageWrapper } from './CardPage.styles';
import Image from 'next/image';


const data = [
  {
    "icon" : "/about.png",
    "title" : "About us",
    "body" : "Find out who we are, what drives us, and how we’re reimagining the advertising industry."
  },{
    "icon" : "/article.png",
    "title" : "Newsroom",
    "body" : "See announcements about our latest releases, initiatives and partnerships."
  },{
    "icon" : "/user.png",
    "title" : "Careers",
    "body" : "Explore our work environment, talents and vacancies."
  }
]

export const CardPage = () => {
  return(
    <Cards>
    {
      data.map((card) => (
        <Card key={card.title}>
          <ImageWrapper>
            <Image src={card.icon} alt={card.title} width={32} height={32} />
          </ImageWrapper>
          <h3>{card.title}</h3>
          <h6>{card.body}</h6>
        </Card>
      ))
    }
    </Cards>
  );
}

export default CardPage;
