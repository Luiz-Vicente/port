import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TechCarousels = () => {
	const images = [
		"./src/assets/images/bootstrap-logo.png",
		"./src/assets/images/css-logo.png",
		"./src/assets/images/digitalocean-logo.png",
		"./src/assets/images/docker-logo.png",
		"./src/assets/images/eslint-logo.png",
		"./src/assets/images/firebase-logo.png",
		"./src/assets/images/html-logo.png",
		"./src/assets/images/javascript-logo.png",
		"./src/assets/images/jest-logo.png",
		"./src/assets/images/laravel-logo.png",
		"./src/assets/images/meteor-logo.png",
		"./src/assets/images/php-logo.png",
		"./src/assets/images/react-logo.png",
		"./src/assets/images/storybook-logo.png",
		"./src/assets/images/typescript-logo.png",
		"./src/assets/images/vite-logo.png",
		"./src/assets/images/vue-logo.png",
		"./src/assets/images/vuetiffy-logo.png",
		"./src/assets/images/webpack-logo.png",
		"./src/assets/images/svelte-logo.png",
		"./src/assets/images/chakraui-logo.png",
		"./src/assets/images/figma-logo.png",
		"./src/assets/images/graphql-logo.png",
		"./src/assets/images/insominia-logo.png",
		"./src/assets/images/mongo-logo.png",
		"./src/assets/images/mysql-logo.png",
		"./src/assets/images/next-logo.png",
		"./src/assets/images/node-logo.png",
		"./src/assets/images/nodemon-logo.png",
		"./src/assets/images/nuxt-logo.png",
		"./src/assets/images/pinia-logo.png",
		"./src/assets/images/postman-logo.png",
		"./src/assets/images/sass-logo.png",
		"./src/assets/images/sequelize-logo.png",
		"./src/assets/images/tailwind-logo.png",
		"./src/assets/images/tanstask-logo.png",
		"./src/assets/images/vscode-logo.png",
		"./src/assets/images/vuex-logo.png",
		"./src/assets/images/kubernetes-logo.png",
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
