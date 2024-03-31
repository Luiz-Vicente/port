import { Button, Link, Stack, Text } from "@chakra-ui/react";

interface RedirectProps {
	url: string;
	siteName?: string;
}

export function Redirect({ url, siteName }: RedirectProps) {
	return (
		<Stack
			w="100vw"
			p="10"
			h="100vh"
			direction="column"
			alignItems="center"
			justifyContent="center"
			color="white"
		>
			<Text
				fontWeight="bold"
				fontSize="3xl"
				textAlign="center"
			>
				Olá, clique no botão abaixo para continuar 👋
			</Text>
			<Button
				as={Link}
				target="_blank"
				href={url ?? "/"}
				bg="#00A110"
				borderRadius={0}
				color="white"
				mt="10"
				size={{ base: "md", lg: "lg" }}
				fontSize={{ base: "md", lg: "2xl" }}
				fontWeight="semibold"
				_hover={{ bg: "#94DF9B", border: "2px", borderColor: "#00A110", color: "#00A110" }}
				_focus={{ bg: "gray.500", color: "white", border: "none" }}
			>
				Acessar {siteName ?? ""}
			</Button>
			<Link mt="5" fontSize="sm" href="/">Voltar para a Home</Link>
		</Stack>
	);
}
