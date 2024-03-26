import { Stack, Text } from "@chakra-ui/react";

function FooterSection() {
	function getCurrentYear() {
		const currentDate = new Date();
		const year = currentDate.getFullYear();
		return year;
	}

	return (
		<Stack p="8">
			<Text
				borderTop="1px"
				borderTopColor="white"
				color="white"
				fontWeight="regular"
				fontSize="md"
				textAlign="center"
				pt="8"
			>
				Desgin e desenvolvimento por Luiz Vicente - {getCurrentYear()}
			</Text>
		</Stack>
	);
}

export default FooterSection;
