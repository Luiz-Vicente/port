import { ExternalLinkIcon } from "@chakra-ui/icons";
import { GridItem, Image, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface StackItemProps {
	stack: {
		name: string;
		type: string[];
		img: string;
		url: string;
	};
	index: number | null;
}

function StackItem({ stack, index = null }: StackItemProps) {
	const [isHover, setHover] = useState<number | null>(null);

	return (
		<GridItem
			as={Stack}
			w="full"
			direction="row"
			bg="#112240"
			alignItems="center"
			onMouseEnter={() => setHover(index)}
			onMouseLeave={() => setHover(null)}
		>
			<Stack
				bg="gray.800"
				direction="row"
				w="30%"
				h="100%"
				justifyContent="center"
				alignItems="center"
				p="4"
			>
				<Image
					objectFit="contain"
					transition="0.5s"
					h="50px"
					opacity={isHover === index ? "1" : "0.5"}
					filter={isHover === index ? "grayscale(0%)" : "grayscale(100%)"}
					src={stack.img}
					alt={`Logo ${stack.name}`}
				/>
			</Stack>
			<Stack p="4">
				<Text
					fontSize={{ base: "md", lg: "2xl" }}
					fontWeight="bold"
					color="white"
				>
					{stack.name}
				</Text>
				{stack?.url && (
					<Link
						fontSize="small"
						fontWeight="regular"
						color="white"
						href={stack.url}
					>
						Acesse o site <ExternalLinkIcon />
					</Link>
				)}
			</Stack>
		</GridItem>
	);
}

export default StackItem;
