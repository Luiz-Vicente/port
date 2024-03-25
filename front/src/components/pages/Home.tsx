import { Flex } from "@chakra-ui/react";
import AboutMe from "../AboutMe";
import Header from "../Header";
import TechCarousels from "../TechsCarousel";
import Experiences from "../Experiences";
import Tecnologies from "../Tecnologies";
import Contact from "../Contact";
import FooterSection from "../FooterSection";

function Home() {
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

export default Home;
