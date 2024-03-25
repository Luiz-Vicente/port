import { Badge, Box, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import BadgesBox from "./BadgesBox";

interface AboutExperience {
	img: string;
	name: string;
	role: string;
	description: string;
	skills: string[];
	isCurrentJob?: boolean;
}

function AboutExperience({ img, name, role, description, skills, isCurrentJob = false }: AboutExperience) {
	return (
		<Stack
			direction={{ base: "column", lg: "row" }}
			alignItems={{ base: "start", lg: "center" }}
		>
			<Tooltip
				hasArrow
				label={`Empresa ${name}`}
			>
				<Image
					objectFit="cover"
					opacity={{ base: "1", lg: "0.5" }}
					filter={{ base: "none", lg: "grayscale(100%)" }}
					w={{ base: "100px", lg: "200px" }}
					transition="0.5s"
					_hover={{ filter: "grayscale(0%)", opacity: "1" }}
					mr={{ base: "0", lg: "16" }}
					src={img}
					alt={`Logo da empresa ${name}`}
				/>
			</Tooltip>
			<Box
				bg="#112240"
				p="8"
				color="white"
			>
				<Stack
					direction={{ base: "column-reverse", lg: "row" }}
					alignItems={{ base: "start", lg: "center" }}
					justifyContent="space-between"
					wrap="wrap"
				>
					<Text
						fontSize="2xl"
						fontWeight="semibold"
					>
						{name} - {role}
					</Text>
					{isCurrentJob && (
						<Badge
							bg="teal.900"
							color="teal.300"
							border="1px"
							borderColor="teal.300"
						>
							Atualmente trabalhando aqui
						</Badge>
					)}
				</Stack>
				<Text
					mt="5"
					fontWeight="md"
				>
					{description}
				</Text>
				<BadgesBox
					mt="5"
					badges={skills}
				/>
			</Box>
		</Stack>
	);
}

export default AboutExperience;
