exports.createPages = async ({ actions }) => {
	actions.createPage({
		path: "my-dynamic-page",
		component: require.resolve(`./src/templates/dynamic-page.tsx`),
		context: {
			fname: "Umar",
			lname: "Khalid",
		},
	});
};
