import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import SectionTitle from "../section-components/SectionTitle";
import BadgesBox from "../section-components/BadgesBox";
import { Link } from "react-router-dom";

function AboutMe() {
	const skills = [
		"Full stack",
		"Especialista em Front-end",
		"3 anos de experiência",
		"focado em usabilidade",
		"experiência com design UI/UX",
		"comunicativo",
		"positivo",
		"persistente",
	];

	return (
		<Stack
			id="about"
			p="10"
			direction="column"
		>
			<SectionTitle text="Sobre mim" />
			<Stack
				direction={{ base: "column", lg: "row" }}
				gap="10%"
			>
				<Flex
					direction="column"
					justifyContent="space-between"
					w={{ base: "100%", lg: "50%" }}
				>
					<Text color="white">
						Com três anos de sólida experiência como desenvolvedor Full stack, tenho especialização e paixão pelo
						Front-end. Durante minha jornada, destaco-me por atuar no desenvolvimento de um Design System completo, com
						ênfase em testes unitários e documentação detalhada para um renomado CRM nacional.
						<br />
						<br />
						Minha habilidade em resolver desafios de desempenho também se destacou em projetos anteriores, onde melhorei
						significativamente a eficiência de filas no Back-end, reduzindo o tempo de resposta do servidor de mais de um dia para menos de 20 minutos.
						<br />
						<br />
						Além disso, tenho um forte compromisso com o compartilhamento de conhecimento. Como parte desse compromisso,
						dedico tempo para orientar e mentorear desenvolvedores juniores, estágiários e colegas de profissão em
						geral. Acredito firmemente na importância da colaboração e crescimento conjunto dentro de equipes de
						desenvolvimento.
						<br />
						<br />
						Atualmente, continuo a aprimorar minhas habilidades em diversas tecnologias de Front-end, capacitando-me a
						trabalhar com uma variedade de frameworks para criar soluções modernas e eficazes.
					</Text>
					<BadgesBox
						mt="10"
						badges={skills}
					/>
				</Flex>
				<Flex
					w={{ base: "100%", lg: "40%" }}
					mt={{ base: "10", lg: "0" }}
				>
					<Box w="full">
						<Image
							alt="Luiz, um homem moreno com bigode olhando para o canto superior esquerdo, sentado em uma mesa de pizzaria"
							objectFit="cover"
							h={{ base: "300px", md: "500px" }}
							w="100%"
							opacity="0.5"
							transition="0.5s"
							filter="grayscale(100%)"
							_hover={{ filter: "grayscale(0%)", opacity: "1" }}
							src="./images/luiz-vicente=).JPG"
						/>
						<Button
							as={Link}
							to="https://wa.me/5541999199420"
							w="full"
							size="lg"
							mt="10"
							bg="#00A110"
							borderRadius="none"
							color="white"
							_hover={{ bg: "#94DF9B", border: "2px", borderColor: "#00A110", color: "#00A110" }}
							_focus={{ bg: "gray.500", color: "white", border: "none" }}
						>
							Vamos conversar
						</Button>
					</Box>
				</Flex>
			</Stack>
		</Stack>
	);
}

export default AboutMe;
