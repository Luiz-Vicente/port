import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TechCarousels = () => {
	const images = [
		"./images/bootstrap-logo.webp",
		"./images/css-logo.webp",
		"./images/digitalocean-logo.webp",
		"./images/docker-logo.webp",
		"./images/eslint-logo.webp",
		"./images/firebase-logo.webp",
		"./images/html-logo.webp",
		"./images/javascript-logo.webp",
		"./images/jest-logo.webp",
		"./images/laravel-logo.webp",
		"./images/meteor-logo.webp",
		"./images/php-logo.webp",
		"./images/react-logo.webp",
		"./images/storybook-logo.webp",
		"./images/typescript-logo.webp",
		"./images/vite-logo.webp",
		"./images/vue-logo.webp",
		"./images/vuetiffy-logo.webp",
		"./images/webpack-logo.webp",
		"./images/svelte-logo.webp",
		"./images/chakraui-logo.webp",
		"./images/figma-logo.webp",
		"./images/graphql-logo.webp",
		"./images/insominia-logo.webp",
		"./images/mongo-logo.webp",
		"./images/mysql-logo.webp",
		"./images/next-logo.webp",
		"./images/node-logo.webp",
		"./images/nodemon-logo.webp",
		"./images/nuxt-logo.webp",
		"./images/pinia-logo.webp",
		"./images/postman-logo.webp",
		"./images/sass-logo.webp",
		"./images/sequelize-logo.webp",
		"./images/tailwind-logo.webp",
		"./images/tanstask-logo.webp",
		"./images/vscode-logo.webp",
		"./images/vuex-logo.webp",
		"./images/kubernetes-logo.webp",
	];

	return (
		<Flex
			bg="gray.800"
			py="4"
			overflow="hidden"
			w="100%"
		>
			<motion.div
				animate={{
					translateX: ["0%", "-901.953px"],
				}}
				transition={{
					duration: 40,
					ease: "linear",
					repeat: Infinity,
				}}
				style={{
					display: "flex",
					width: "100%",
				}}
			>
				{images.map((img, idx) => (
					<Image
						key={idx}
						src={img}
						height={{ base: "40px", lg: "70px" }}
						filter="grayscale(100%)"
						mr={{ base: "40px", lg: "70px" }}
						transition="0.5s"
						_hover={{ filter: "grayscale(0%)", opacity: "1" }}
					/>
				))}
			</motion.div>
		</Flex>
	);
};

export default TechCarousels;
