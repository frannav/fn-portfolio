import ProjectCard from '../ProjectCard';
import { CardsContent } from './styles';

export default function ListOfProjectsCards() {
    return (
        <CardsContent>
            <h1>I´m ListOfProjectsCards </h1>
            <ProjectCard title='Test props title!' photo='animoji2.png' />
            {
                [1,2,3,4].map((item) => {
                    return <ProjectCard title={item.title} photo={item.photo}/>
                })
            }
        </CardsContent>
    )
}