import { Stack } from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import AboutExperience from "./AboutExperience";

function Experiences() {
	const companyList = [
		{
			img: "./src/assets/images/toolzz-logo.png",
			name: "Edulabzz",
			role: "Desenvolvedor Full stack Pleno",
			description:
				"Durante minha trajetória na Edulabzz, realizei a maior entrega da empresa para um cliente, um marco destacado pela própria diretoria que fortaleceu significativamente nosso relacionamento com esse cliente estrategicamente importante. Além disso, dediquei parte do meu tempo auxiliando os desenvolvedores Júniors em suas jornadas, orientando-os na configuração de seus ambientes e na resolução de tarefas mais avançadas. Um dos meus feitos notáveis foi reduzir drasticamente o tempo de resposta da fila de webhooks, que antes era de um dia, para menos de 20 minutos. Essa melhoria não apenas economizou recursos, mas também aprimorou consideravelmente a experiência dos usuários com nossos serviços.",
			skills: [
				"React",
				"Typescript",
				"MySQL",
				"Laravel",
				"PHP",
				"Node",
				"Next",
				"N8N",
				"Webhooks",
				"E-mails",
				"Relatórios",
				"PHPunit",
				"Redis",
				"Docker",
				"POO",
				"MVC",
				"i18n",
				"ChakraUI",
				"Bootstrap",
				"jQuery",
				"Vite",
				"Rest API",
				"Webpack",
			],
			isCurrentJob: true,
		},
		{
			img: "./src/assets/images/leads-logo.png",
			name: "Leads2b",
			role: "Desenvolvedor Front end Junior",
			description:
				"Assumi a responsabilidade pelo desenvolvimento do Design System oficial da empresa, uma conquista que não apenas facilitou significativamente o trabalho de desenvolvimento front-end para outros desenvolvedores, mas também acelerou o processo de desenvolvimento, mantendo uma consistência visual em todas as aplicações. Além disso, realizei o refatoramento do front-end das telas mais utilizadas pelos clientes, adaptando-as ao novo padrão visual estabelecido. Introduzi padrões de codificação que resultaram em um impacto altamente positivo para os clientes, tornando as telas mais intuitivas e melhorando a experiência do usuário.",
			skills: [
				"Vue.js",
				"Meteor.js",
				"Javascript",
				"PHP",
				"Nuxt",
				"Docker",
				"POO",
				"MVC",
				"i18n",
				"Bootstrap",
				"Jest",
				"Storybook",
				"Axios",
				"Pinia",
				"Vuex",
				"Rest API",
				"Vite",
				"Webpack",
			],
			isCurrentJob: false,
		},
		{
			img: "./src/assets/images/devicente-logo.png",
			name: "Devicente",
			role: "Desenvolvedor Full stack Junior",
			description:
				"Na Devicente, desempenhei um papel central no desenvolvimento de aplicações completas, desde o planejamento até o deploy. Essa experiência abrangente me proporcionou um vasto conhecimento e expertise em todas as etapas do desenvolvimento. Durante este período, pude aplicar princípios de gestão de projetos, metodologias ágeis, desenvolvimento orientado a testes e a implementação de pipelines CI/CD. Esta abordagem holística permitiu um fluxo de trabalho eficiente e a entrega de produtos de alta qualidade.",
			skills: [
				"Vue.js",
				"React.js",
				"CI/CD",
				"Vercel",
				"Digital Ocean",
				"Javascript",
				"PHP",
				"Nuxt",
				"Docker",
				"POO",
				"MVC",
				"Pinia",
				"Vuex",
				"Next",
				"i18n",
				"Bootstrap",
				"Jest",
				"Storybook",
				"Axios",
				"Vite",
				"Webpack",
			],
			isCurrentJob: false,
		},
	];

	return (
		<Stack
			id="experiences"
			p="10"
			direction="column"
		>
			<SectionTitle text="Experiências" />
			<Stack
				gap="10"
				direction="column"
			>
				{companyList.map((company, index) => (
					<AboutExperience
						key={index}
						img={company.img}
						name={company.name}
						role={company.role}
						description={company.description}
						skills={company.skills}
						isCurrentJob={company.isCurrentJob ?? false}
					/>
				))}
			</Stack>
		</Stack>
	);
}

export default Experiences;
