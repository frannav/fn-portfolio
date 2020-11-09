import ProjectCard from '../ProjectCard';
import { CardsContent } from './styles';

// let myArray = [
//     {
//       id: 'ssg-ssr',
//       title: 'When to Use Static Generation v.s. Server-side Rendering',
//       photo: 'animoji2.png',
//       tags: ['Python', 'Javassssscript', 'Mongodb'],
//       date: '2020-01-02'
//     },
//     {
//       id: 'pre-rendering',
//       title: 'Two Forms of Pre-rendering',
//       photo: 'animoji2.png',
//       tags: ['Python', 'Javascript', 'Mongodb'],
//       date: '2020-01-01'
//     }
//   ]

export default function ListOfProjectsCards(props) {
    return (
        <CardsContent>
            <h1>ListOfProjectsCards </h1>
            {
                Object.values(props).map((item) => {
                    return <ProjectCard key={item.id} title={item.title} photo={item.photo} tags={item.tags} />
                })
            }
        </CardsContent>
        
    )
}
