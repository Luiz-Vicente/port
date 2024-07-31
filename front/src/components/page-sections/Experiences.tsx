import { Stack } from "@chakra-ui/react";
import SectionTitle from "../section-components/SectionTitle";
import AboutExperience from "../section-components/AboutExperience";

function Experiences() {
	const companyList = [
		{
			img: "./images/soluevo-logo.webp",
			name: "Soluevo",
			site: "https://soluevo.com.br/",
			role: "Desenvolvedor Front-end",
			description:
				"Durante minha jornada na Soluevo, tive a oportunidade de atuar na empresa Cogna, especificamente no projeto Voomp Creators. Nesse projeto, fui responsável por diversas demandas no Front-end, o que incluiu a refatoração de telas antigas, o desenvolvimento completo de um novo sistema de gamificação e a criação de arquiteturas voltadas ao Front-end. Esse período foi extremamente enriquecedor, permitindo-me aplicar e expandir meus conhecimentos em desenvolvimento web, além de contribuir significativamente para a evolução do projeto e da experiência dos usuários.",
			skills: [
				"Vue.js",
				"Vuex",
				"Nuxt",
				"Apollo",
				"GraphQL",
				"Javascript",
				"Docker",
				"i18n",
				"TailwindCSS",
				"Bootstrap",
				"Vite",
				"Rest API",
				"Webpack",
			],
			isCurrentJob: true,
		},
		{
			img: "./images/toolzz-logo.webp",
			name: "Edulabzz",
			site: "https://www.toolzz.com.br/",
			role: "Desenvolvedor Full stack",
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
			isCurrentJob: false,
		},
		{
			img: "./images/leads-logo.webp",
			name: "Leads2b",
			site: "https://leads.com.br/",
			role: "Desenvolvedor Front-end",
			description:
				"Assumi a responsabilidade pelo desenvolvimento do Design System oficial da empresa, uma conquista que não apenas facilitou significativamente o trabalho de desenvolvimento Front-end para outros desenvolvedores, mas também acelerou o processo de desenvolvimento, mantendo uma consistência visual em todas as aplicações. Além disso, realizei o refatoramento do Front-end das telas mais utilizadas pelos clientes, adaptando-as ao novo padrão visual estabelecido. Introduzi padrões de codificação que resultaram em um impacto altamente positivo para os clientes, tornando as telas mais intuitivas e melhorando a experiência do usuário.",
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
			img: "./images/devicente-logo.webp",
			name: "Devicente",
			site: null,
			role: "Desenvolvedor Full stack",
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
						site={company.site}
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
