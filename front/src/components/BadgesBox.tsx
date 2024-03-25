import React from "react";
import { Stack, Badge, StackProps } from "@chakra-ui/react";

interface BadgesBoxProps extends StackProps {
	badges: string[];
}

const BadgesBox: React.FC<BadgesBoxProps> = ({ badges, ...rest }) => {
	return (
		<Stack
			wrap="wrap"
			direction="row"
			flexWrap="wrap"
			{...rest}
		>
			{badges.map((skill, index) => (
				<Badge
					key={index}
					bg="#94DF9B"
					border="1px"
					borderColor="#00A110"
					color="#00A110"
				>
					{skill}
				</Badge>
			))}
		</Stack>
	);
};

export default BadgesBox;
