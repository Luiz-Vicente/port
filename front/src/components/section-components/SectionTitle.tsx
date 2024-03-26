import { Stack, Text } from "@chakra-ui/react";

interface SectionTitleProps {
	text: string;
	children?: React.ReactNode;
}

function SectionTitle({ text, children }: SectionTitleProps) {
	return (
		<Stack direction={{ base: "column", lg: "row" }}>
			<Stack
				direction="row"
				fontWeight="bold"
				fontSize={{ base: "4xl", lg: "5xl" }}
				mb="5"
			>
				<Text
					color="gray.500"
					mr="4"
				>
					#
				</Text>
				<Text color="white">{text}</Text>
			</Stack>
			{children}
		</Stack>
	);
}

export default SectionTitle;
