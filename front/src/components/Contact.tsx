import { Button, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Contact() {
	return (
		<Stack
			id="contact"
			direction="column"
			alignItems="center"
			justifyContent="center"
			minH="100vh"
			color="white"
			p="10"
		>
			<Text
				fontSize={{ base: "4xl", lg: "5xl" }}
				mb="5"
				fontWeight="bold"
			>
				Fale comigo!
			</Text>
			<Text
				w={{ base: "100%", md: "50vw" }}
				fontSize="1xl"
				fontWeight="regular"
				textAlign="center"
			>
				Se você procura alguém pronto para colocar a mão na massa e fazer a diferença, vamos conversar! Estou pronto
				para encarar novos desafios e agregar valor à sua equipe. Entre em contato e vamos construir algo incrível
				juntos! 💪
			</Text>
			<Button
				as={Link}
				to="https://wa.me/5541999199420"
				w={{ base: "100%", md: "30vw" }}
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
		</Stack>
	);
}

export default Contact;
