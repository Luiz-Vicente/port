import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TechCarousels = () => {
	const images = [
		"./images/bootstrap-logo.png",
		"./images/css-logo.png",
		"./images/digitalocean-logo.png",
		"./images/docker-logo.png",
		"./images/eslint-logo.png",
		"./images/firebase-logo.png",
		"./images/html-logo.png",
		"./images/javascript-logo.png",
		"./images/jest-logo.png",
		"./images/laravel-logo.png",
		"./images/meteor-logo.png",
		"./images/php-logo.png",
		"./images/react-logo.png",
		"./images/storybook-logo.png",
		"./images/typescript-logo.png",
		"./images/vite-logo.png",
		"./images/vue-logo.png",
		"./images/vuetiffy-logo.png",
		"./images/webpack-logo.png",
		"./images/svelte-logo.png",
		"./images/chakraui-logo.png",
		"./images/figma-logo.png",
		"./images/graphql-logo.png",
		"./images/insominia-logo.png",
		"./images/mongo-logo.png",
		"./images/mysql-logo.png",
		"./images/next-logo.png",
		"./images/node-logo.png",
		"./images/nodemon-logo.png",
		"./images/nuxt-logo.png",
		"./images/pinia-logo.png",
		"./images/postman-logo.png",
		"./images/sass-logo.png",
		"./images/sequelize-logo.png",
		"./images/tailwind-logo.png",
		"./images/tanstask-logo.png",
		"./images/vscode-logo.png",
		"./images/vuex-logo.png",
		"./images/kubernetes-logo.png",
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
