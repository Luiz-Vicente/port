import { Grid, Select, Stack } from "@chakra-ui/react";
import SectionTitle from "../section-components/SectionTitle";
import StackItem from "../section-components/StackItem";
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
				img: "./images/bootstrap-logo.webp",
				url: "https://getbootstrap.com/",
			},
			{
				name: "CSS",
				type: ["front"],
				img: "./images/css-logo.webp",
				url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
			},
			{
				name: "Digital Ocean",
				type: ["devops"],
				img: "./images/digitalocean-logo.webp",
				url: "https://www.digitalocean.com/",
			},
			{ name: "Docker", type: ["devops"], img: "./images/docker-logo.webp", url: "https://www.docker.com/" },
			{ name: "Eslint", type: ["tools"], img: "./images/eslint-logo.webp", url: "https://eslint.org/" },
			{
				name: "Firebase",
				type: ["database"],
				img: "./images/firebase-logo.webp",
				url: "https://firebase.google.com/products/realtime-database",
			},
			{
				name: "HTML",
				type: ["front"],
				img: "./images/html-logo.webp",
				url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
			},
			{
				name: "JavaScript",
				type: ["front"],
				img: "./images/javascript-logo.webp",
				url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
			},
			{
				name: "Jest",
				type: ["front", "back"],
				img: "./images/jest-logo.webp",
				url: "https://jestjs.io/pt-BR/",
			},
			{ name: "Laravel", type: ["back"], img: "./images/laravel-logo.webp", url: "https://laravel.com/" },
			{ name: "Meteor", type: ["front"], img: "./images/meteor-logo.webp", url: "https://www.meteor.com/" },
			{ name: "PHP", type: ["back"], img: "./images/php-logo.webp", url: "https://www.php.net/" },
			{
				name: "React",
				type: ["front"],
				img: "./images/react-logo.webp",
				url: "https://pt-br.legacy.reactjs.org/",
			},
			{
				name: "StoryBook",
				type: ["front"],
				img: "./images/storybook-logo.webp",
				url: "https://storybook.js.org/",
			},
			{
				name: "TypeScript",
				type: ["front", "back"],
				img: "./images/typescript-logo.webp",
				url: "https://www.typescriptlang.org/",
			},
			{ name: "Vite", type: ["front", "back"], img: "./images/vite-logo.webp", url: "https://vitejs.dev/" },
			{ name: "Vue.js", type: ["front", "back"], img: "./images/vue-logo.webp", url: "https://vuejs.org/" },
			{
				name: "Vuetiffy",
				type: ["front", "back"],
				img: "./images/vuetiffy-logo.webp",
				url: "https://vuetifyjs.com/en/",
			},
			{
				name: "webpack",
				type: ["front", "back"],
				img: "./images/webpack-logo.webp",
				url: "https://webpack.js.org/",
			},
			{
				name: "Svelte",
				type: ["front"],
				img: "./images/svelte-logo.webp",
				url: "https://svelte.dev/",
			},
			{
				name: "ChakraUI",
				type: ["front"],
				img: "./images/chakraui-logo.webp",
				url: "https://chakra-ui.com/",
			},
			{
				name: "Figma",
				type: ["tools"],
				img: "./images/figma-logo.webp",
				url: "https://www.figma.com/",
			},
			{
				name: "GraphQL",
				type: ["back", "front"],
				img: "./images/graphql-logo.webp",
				url: "https://graphql.org/",
			},
			{
				name: "Insominia",
				type: ["tools"],
				img: "./images/insominia-logo.webp",
				url: "https://insomnia.rest/",
			},
			{
				name: "Mongo DB",
				type: ["database"],
				img: "./images/mongo-logo.webp",
				url: "https://www.mongodb.com/pt-br",
			},
			{
				name: "MySQL",
				type: ["database"],
				img: "./images/mysql-logo.webp",
				url: "https://www.mongodb.com/pt-br",
			},
			{
				name: "Next.js",
				type: ["front"],
				img: "./images/next-logo.webp",
				url: "https://nextjs.org/",
			},
			{
				name: "Node.js",
				type: ["back"],
				img: "./images/node-logo.webp",
				url: "https://nodejs.org/en",
			},
			{
				name: "Nodemon",
				type: ["back"],
				img: "./images/nodemon-logo.webp",
				url: "https://nodemon.io/",
			},
			{
				name: "Nuxt",
				type: ["front"],
				img: "./images/nuxt-logo.webp",
				url: "https://nuxt.com/",
			},
			{
				name: "Pinia",
				type: ["front"],
				img: "./images/pinia-logo.webp",
				url: "https://pinia.vuejs.org/",
			},
			{
				name: "Postman",
				type: ["tools"],
				img: "./images/postman-logo.webp",
				url: "https://pinia.vuejs.org/",
			},
			{
				name: "Sass",
				type: ["front"],
				img: "./images/sass-logo.webp",
				url: "https://sass-lang.com/",
			},
			{
				name: "Sequelize",
				type: ["back"],
				img: "./images/sequelize-logo.webp",
				url: "https://sequelize.org/",
			},
			{
				name: "Tailwind css",
				type: ["front"],
				img: "./images/tailwind-logo.webp",
				url: "https://tailwindcss.com/",
			},
			{
				name: "Tanstask",
				type: ["front"],
				img: "./images/tanstask-logo.webp",
				url: "https://tanstack.com/",
			},
			{
				name: "VS Code",
				type: ["tools"],
				img: "./images/vscode-logo.webp",
				url: "https://code.visualstudio.com/",
			},
			{
				name: "Vuex",
				type: ["front"],
				img: "./images/vuex-logo.webp",
				url: "https://vuex.vuejs.org/",
			},
			{
				name: "Kubernetes",
				type: ["devops"],
				img: "./images/kubernetes-logo.webp",
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
