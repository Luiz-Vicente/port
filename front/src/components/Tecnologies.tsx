import { Grid, Select, Stack } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import StackItem from "./StackItem";
import { useEffect, useMemo, useState } from "react";

interface stackOptionsInterface {
	name: string;
	type: string[];
	img: string;
	url: string;
}

function Tecnologies() {
	const [stackSelected, setSelectedStack] = useState("all");

	const stacks = useMemo(
		() => [
			{
				name: "Bootstrap",
				type: ["front"],
				img: "./src/assets/images/bootstrap-logo.png",
				url: "https://getbootstrap.com/",
			},
			{
				name: "CSS",
				type: ["front"],
				img: "./src/assets/images/css-logo.png",
				url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
			},
			{
				name: "Digital Ocean",
				type: ["devops"],
				img: "./src/assets/images/digitalocean-logo.png",
				url: "https://www.digitalocean.com/",
			},
			{ name: "Docker", type: ["devops"], img: "./src/assets/images/docker-logo.png", url: "https://www.docker.com/" },
			{ name: "Eslint", type: ["tools"], img: "./src/assets/images/eslint-logo.png", url: "https://eslint.org/" },
			{
				name: "Firebase",
				type: ["database"],
				img: "./src/assets/images/firebase-logo.png",
				url: "https://firebase.google.com/products/realtime-database",
			},
			{
				name: "HTML",
				type: ["front"],
				img: "./src/assets/images/html-logo.png",
				url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
			},
			{
				name: "JavaScript",
				type: ["front"],
				img: "./src/assets/images/javascript-logo.png",
				url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
			},
			{
				name: "Jest",
				type: ["front", "back"],
				img: "./src/assets/images/jest-logo.png",
				url: "https://jestjs.io/pt-BR/",
			},
			{ name: "Laravel", type: ["back"], img: "./src/assets/images/laravel-logo.png", url: "https://laravel.com/" },
			{ name: "Meteor", type: ["front"], img: "./src/assets/images/meteor-logo.png", url: "https://www.meteor.com/" },
			{ name: "PHP", type: ["back"], img: "./src/assets/images/php-logo.png", url: "https://www.php.net/" },
			{
				name: "React",
				type: ["front"],
				img: "./src/assets/images/react-logo.png",
				url: "https://pt-br.legacy.reactjs.org/",
			},
			{
				name: "StoryBook",
				type: ["front"],
				img: "./src/assets/images/storybook-logo.png",
				url: "https://storybook.js.org/",
			},
			{
				name: "TypeScript",
				type: ["front", "back"],
				img: "./src/assets/images/typescript-logo.png",
				url: "https://www.typescriptlang.org/",
			},
			{ name: "Vite", type: ["front", "back"], img: "./src/assets/images/vite-logo.png", url: "https://vitejs.dev/" },
			{ name: "Vue.js", type: ["front", "back"], img: "./src/assets/images/vue-logo.png", url: "https://vuejs.org/" },
			{
				name: "Vuetiffy",
				type: ["front", "back"],
				img: "./src/assets/images/vuetiffy-logo.png",
				url: "https://vuetifyjs.com/en/",
			},
			{
				name: "webpack",
				type: ["front", "back"],
				img: "./src/assets/images/webpack-logo.png",
				url: "https://webpack.js.org/",
			},
			{
				name: "Svelte",
				type: ["front"],
				img: "./src/assets/images/svelte-logo.png",
				url: "https://svelte.dev/",
			},
			{
				name: "ChakraUI",
				type: ["front"],
				img: "./src/assets/images/chakraui-logo.png",
				url: "https://chakra-ui.com/",
			},
			{
				name: "Figma",
				type: ["tools"],
				img: "./src/assets/images/figma-logo.png",
				url: "https://www.figma.com/",
			},
			{
				name: "GraphQL",
				type: ["back", "front"],
				img: "./src/assets/images/graphql-logo.png",
				url: "https://graphql.org/",
			},
			{
				name: "Insominia",
				type: ["tools"],
				img: "./src/assets/images/insominia-logo.png",
				url: "https://insomnia.rest/",
			},
			{
				name: "Mongo DB",
				type: ["database"],
				img: "./src/assets/images/mongo-logo.png",
				url: "https://www.mongodb.com/pt-br",
			},
			{
				name: "MySQL",
				type: ["database"],
				img: "./src/assets/images/mysql-logo.png",
				url: "https://www.mongodb.com/pt-br",
			},
			{
				name: "Next.js",
				type: ["front"],
				img: "./src/assets/images/next-logo.png",
				url: "https://nextjs.org/",
			},
			{
				name: "Node.js",
				type: ["back"],
				img: "./src/assets/images/node-logo.png",
				url: "https://nodejs.org/en",
			},
			{
				name: "Nodemon",
				type: ["back"],
				img: "./src/assets/images/nodemon-logo.png",
				url: "https://nodemon.io/",
			},
			{
				name: "Nuxt",
				type: ["front"],
				img: "./src/assets/images/nuxt-logo.png",
				url: "https://nuxt.com/",
			},
			{
				name: "Pinia",
				type: ["front"],
				img: "./src/assets/images/pinia-logo.png",
				url: "https://pinia.vuejs.org/",
			},
			{
				name: "Postman",
				type: ["tools"],
				img: "./src/assets/images/postman-logo.png",
				url: "https://pinia.vuejs.org/",
			},
			{
				name: "Sass",
				type: ["front"],
				img: "./src/assets/images/sass-logo.png",
				url: "https://sass-lang.com/",
			},
			{
				name: "Sequelize",
				type: ["back"],
				img: "./src/assets/images/sequelize-logo.png",
				url: "https://sequelize.org/",
			},
			{
				name: "Tailwind css",
				type: ["front"],
				img: "./src/assets/images/tailwind-logo.png",
				url: "https://tailwindcss.com/",
			},
			{
				name: "Tanstask",
				type: ["front"],
				img: "./src/assets/images/tanstask-logo.png",
				url: "https://tanstack.com/",
			},
			{
				name: "VS Code",
				type: ["tools"],
				img: "./src/assets/images/vscode-logo.png",
				url: "https://code.visualstudio.com/",
			},
			{
				name: "Vuex",
				type: ["front"],
				img: "./src/assets/images/vuex-logo.png",
				url: "https://vuex.vuejs.org/",
			},
			{
				name: "Kubernetes",
				type: ["devops"],
				img: "./src/assets/images/kubernetes-logo.png",
				url: "https://kubernetes.io/pt-br/",
			},
		],
		[]
	);

	const stackOptions = useMemo(
		() => [
			{ name: "Todos", value: "all" },
			{ name: "Front end", value: "front" },
			{ name: "Back end", value: "back" },
			{ name: "DevOps", value: "devops" },
			{ name: "Banco de dados", value: "database" },
			{ name: "Ferramentas", value: "tools" },
		],
		[]
	);

	const [filteredList, setFilteredList] = useState<stackOptionsInterface[]>(stacks);

	useEffect(() => {
		if (stackSelected) {
			if (stackSelected === "all") {
				setFilteredList(stacks);
			} else {
				const newList = stacks.filter(stack => {
					return stack.type.includes(stackSelected);
				});
				setFilteredList(newList);
			}
		}
	}, [stackSelected, stacks]);

	return (
		<Stack
			id="tecnologies"
			direction="column"
			p="10"
		>
			<SectionTitle text="Techs&Tools">
				<Select
					color="white"
					borderRadius="0"
					ml="auto"
					w={{ base: "full", lg: "30%" }}
					onChange={e => setSelectedStack(e.target.value)}
				>
					{stackOptions.map((stack, index) => (
						<option
							style={{ color: "black" }}
							value={stack.value}
							key={index}
						>
							{stack.name}
						</option>
					))}
				</Select>
			</SectionTitle>
			<Stack
				direction="row"
				wrap="wrap"
				gap="4"
			>
				<Grid
					w="full"
					templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
					gap={4}
				>
					{filteredList.map((stack, index) => (
						<StackItem
							key={index}
							stack={stack}
							index={index}
						/>
					))}
				</Grid>
			</Stack>
		</Stack>
	);
}

export default Tecnologies;
