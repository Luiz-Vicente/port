import { Flex } from "@chakra-ui/react";
import AboutMe from "../page-sections/AboutMe";
import Header from "../page-sections/Header";
import TechCarousels from "../page-sections/TechsCarousel";
import Experiences from "../page-sections/Experiences";
import Tecnologies from "../page-sections/Tecnologies";
import Contact from "../page-sections/Contact";
import FooterSection from "../page-sections/FooterSection";

export function Home() {
	return (
		<Flex
			direction="column"
			maxW="1500px"
			w="98.9vw"
			overflow="hidden"
		>
			<Header />
			<TechCarousels />
			<AboutMe />
			<Experiences />
			<Tecnologies />
			<Contact />
			<FooterSection />
		</Flex>
	);
}
