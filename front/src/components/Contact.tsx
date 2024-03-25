import { MinusIcon } from "@chakra-ui/icons";
import { Button, Link, Stack, Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

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
				as={ReactLink}
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
			<Stack
				mt="4"
				direction="row"
				alignItems="center"
			>
				<Link
					target="_blank"
					href="https://github.com/luiz-vicente"
				>
					Github
				</Link>
				<MinusIcon boxSize="4px" />
				<Link
					target="_blank"
					href="https://www.instagram.com/eu_sou_o_luiz/"
				>
					Instagram
				</Link>
				<MinusIcon boxSize="4px" />
				<Link
					target="_blank"
					href="mailto:dev.vicente.contato@gmail.com"
				>
					E-mail
				</Link>
			</Stack>
		</Stack>
	);
}

export default Contact;
