import ProjectCard from '../ProjectCard';
import { CardsContent } from './styles';

export default function ListOfProjectsCards() {
    return (
        <CardsContent>
            <h1>I´m ListOfProjectsCards </h1>
            <ProjectCard photo='animoji2.png' />
        </CardsContent>
    )
}