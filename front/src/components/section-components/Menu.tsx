import { Flex, List, ListItem, Text } from "@chakra-ui/react";

function Menu() {
	return (
		<List
			color="white"
			spacing={3}
		>
			<ListItem>
				<Flex
					direction="row"
					align="center"
				>
					<Text
						as="a"
						href="#about"
						_hover={{ color: "green.300", cursor: "pointer" }}
						ml="8"
						fontWeight="semibold"
						fontSize="24"
					>
						Sobre
					</Text>
				</Flex>
			</ListItem>
			<ListItem>
				<Flex
					direction="row"
					align="center"
				>
					<Text
						as="a"
						href="#experiences"
						_hover={{ color: "green.300", cursor: "pointer" }}
						ml="8"
						fontWeight="semibold"
						fontSize="24"
					>
						Experiências
					</Text>
				</Flex>
			</ListItem>
			<ListItem>
				<Flex
					direction="row"
					align="center"
				>
					<Text
						as="a"
						href="#tecnologies"
						_hover={{ color: "green.300", cursor: "pointer" }}
						ml="8"
						fontWeight="semibold"
						fontSize="24"
					>
						Tecnologias
					</Text>
				</Flex>
			</ListItem>
			<ListItem>
				<Flex
					direction="row"
					align="center"
				>
					<Text
						as="a"
						href="#contact"
						_hover={{ color: "green.300", cursor: "pointer" }}
						ml="8"
						fontWeight="semibold"
						fontSize="24"
					>
						Contato
					</Text>
				</Flex>
			</ListItem>
		</List>
	);
}

export default Menu;
