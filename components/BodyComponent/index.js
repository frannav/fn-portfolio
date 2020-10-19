import { HeroSection } from './styles';

export default function BodyComponent({ children }) {
    return (
        <HeroSection>
            {children}
        </HeroSection>
    )
}