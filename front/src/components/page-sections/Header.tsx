import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Menu from "../section-components/Menu";

function Header() {
	return (
		<Flex
			direction="column"
			p="10"
			minH="100vh"
			bg="#0A192F"
			maxW="1500px"
		>
			<Navbar />
			<Flex
				borderBottom="1px"
				borderColor="white"
				align="center"
				h="75vh"
			>
				<Box w={{ base: "100%", lg: "60%" }}>
					<Text
						color="green.400"
						fontSize="2xl"
						fontWeight="bold"
					>
						Eu sou o
					</Text>
					<Text
						lineHeight="1"
						fontSize={{ base: "4xl", lg: "7xl" }}
						m="0"
						color="white"
						fontWeight="extrabold"
					>
						Luiz Vicente,
					</Text>
					<Text
						fontSize={{ base: "4xl", lg: "7xl" }}
						color="white"
						fontWeight="extrabold"
						opacity="50%"
					>
						um dev Full stack
					</Text>
					<Text
						color="white"
						fontSize={{ base: "md", lg: "xl" }}
						opacity="50%"
						fontWeight="regular"
					>
						especializado em Front-end e focado em criar projetos que transformem processos e encantem usuários.
					</Text>
				</Box>
				<Flex
					display={{ base: "none", lg: "flex" }}
					direction="column"
					w="40%"
					align="end"
					pe="8"
				>
					<Menu />
				</Flex>
			</Flex>
		</Flex>
	);
}

export default Header;
