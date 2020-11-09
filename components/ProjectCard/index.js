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

export default function ProjectCard({ title, photo, tags }) {
    return (
        <>
            <Article>
                <ImgWrapper>
                    <Img src={`./`+`${photo}`} alt=''/>
                </ImgWrapper>
                <InfoCard>
                    <div>
                        <div>
                            <Link href=''>
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