import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DownloadIcon } from "@chakra-ui/icons";

function Navbar() {
	return (
		<Flex
			justifyContent="end"
			w="full"
		>
			<Button
				as={Link}
				target="_blank"
				to="/resume/resume.pdf"
				leftIcon={<DownloadIcon />}
				bg="#00A110"
				borderRadius={0}
				color="white"
				size={{ base: "md", lg: "lg" }}
				fontSize={{ base: "md", lg: "2xl" }}
				fontWeight="semibold"
				_hover={{ bg: "#94DF9B", border: "2px", borderColor: "#00A110", color: "#00A110" }}
				_focus={{ bg: "gray.500", color: "white", border: "none" }}
			>
				Currículo
			</Button>
		</Flex>
	);
}

export default Navbar;
