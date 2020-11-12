import Link from 'next/link';
import { Article, 
    ImgWrapper,
    Img,
    InfoCard,
    TitleLink,
    TitleCard, 
    TagsCard, 
    TagsText
 } from './styles';

export default function ProjectCard({ id, title, photo, tags, demo }) {
    return (
        <>
            <Article>
                <ImgWrapper>
                    <Img src={`./`+`${photo}`} alt=''/>
                </ImgWrapper>
                <InfoCard>
                    <div>
                        <div>
                            <Link href='/projects/[id]' as={`/projects/${id}`}>
                                <TitleLink>
                                    <TitleCard>{title}</TitleCard>
                                </TitleLink>
                            </Link>
                        </div>
                        <TagsCard>
                            {
                                tags.map((item) => {
                                    return <TagsText key={item}>{item}</TagsText>
                                })
                            }
                        </TagsCard>
                    </div>
                </InfoCard>
            </Article>
        </>
    )
}