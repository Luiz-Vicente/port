import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TechCarousels = () => {
	const images = [
		{ name: "bootstrap", url: "./images/bootstrap-logo.webp" },
		{ name: "css", url: "./images/css-logo.webp" },
		{ name: "digital ocean", url: "./images/digitalocean-logo.webp" },
		{ name: "docker", url: "./images/docker-logo.webp" },
		{ name: "eslint", url: "./images/eslint-logo.webp" },
		{ name: "firebase", url: "./images/firebase-logo.webp" },
		{ name: "html", url: "./images/html-logo.webp" },
		{ name: "javascript", url: "./images/javascript-logo.webp" },
		{ name: "jest", url: "./images/jest-logo.webp" },
		{ name: "laravel", url: "./images/laravel-logo.webp" },
		{ name: "meteor", url: "./images/meteor-logo.webp" },
		{ name: "php", url: "./images/php-logo.webp" },
		{ name: "react", url: "./images/react-logo.webp" },
		{ name: "storybook", url: "./images/storybook-logo.webp" },
		{ name: "typescript", url: "./images/typescript-logo.webp" },
		{ name: "vite", url: "./images/vite-logo.webp" },
		{ name: "vue", url: "./images/vue-logo.webp" },
		{ name: "vuetiffy", url: "./images/vuetiffy-logo.webp" },
		{ name: "webpack", url: "./images/webpack-logo.webp" },
		{ name: "svelte", url: "./images/svelte-logo.webp" },
		{ name: "chakraui", url: "./images/chakraui-logo.webp" },
		{ name: "figma", url: "./images/figma-logo.webp" },
		{ name: "graphql", url: "./images/graphql-logo.webp" },
		{ name: "insominia", url: "./images/insominia-logo.webp" },
		{ name: "mongo", url: "./images/mongo-logo.webp" },
		{ name: "mysql", url: "./images/mysql-logo.webp" },
		{ name: "next", url: "./images/next-logo.webp" },
		{ name: "node", url: "./images/node-logo.webp" },
		{ name: "nodemon", url: "./images/nodemon-logo.webp" },
		{ name: "nuxt", url: "./images/nuxt-logo.webp" },
		{ name: "pinia", url: "./images/pinia-logo.webp" },
		{ name: "postman", url: "./images/postman-logo.webp" },
		{ name: "sass", url: "./images/sass-logo.webp" },
		{ name: "sequelize", url: "./images/sequelize-logo.webp" },
		{ name: "tailwind", url: "./images/tailwind-logo.webp" },
		{ name: "tanstask", url: "./images/tanstask-logo.webp" },
		{ name: "vscode", url: "./images/vscode-logo.webp" },
		{ name: "vuex", url: "./images/vuex-logo.webp" },
		{ name: "kubernetes", url: "./images/kubernetes-logo.webp" },
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
						alt={`Logo da tecnologia ${img.name}`}
						key={idx}
						src={img.url}
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
