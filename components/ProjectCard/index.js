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


export default function ProjectCard({ photo }) {
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
                                    <TitleCard>TitleCard</TitleCard>
                                </TitleLink>
                            </Link>
                        </div>
                        <TagsCard>
                            {
                                [1,2,3,4,5,6].map((item) => {
                                    return <TagsText key={item.id}>Python</TagsText>
                                })
                            }
                        </TagsCard>
                    </div>
                </InfoCard>
            </Article>
        </>
    )
}