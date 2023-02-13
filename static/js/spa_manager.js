function setParam(k, v) {
	const url = new URL(window.location.href);
	url.searchParams.set(k, v);
	window.history.pushState(null, null, url);
}

function removeParam(k) {
	const url = new URL(window.location.href);
	url.searchParams.delete(k);
	window.history.pushState(null, null, url);
}

const getParams = (url, match) => {
	if (!match.params || !match.params.length) return {};

	const obj = {};
	for (const key of match.params) {
		obj[key] = url.searchParams.get(key);
	}
	return obj;
};

const navigateTo = (page) => {
	// add to search params
	const url = new URL(window.location.href);
	url.searchParams.set("page", page);
	window.history.pushState(null, null, url);

	router(url);
};

const router = async (url) => {
	if (!url) url = new URL(window.location.href); // get page from current url (when site is refreshed or linked to with a page)
	
	const routes = [
		{ path: "home", view: HomeView },
		{ path: "about", view: AboutView },
		{ path: "unit1", params: ["u1part"], view: Unit1 }
		// { path: "projects", params: ["id"], view: ProjectView }
	];

	let match = routes.find((potentialMatch) => potentialMatch.path == url.searchParams.get("page"));
	console.log(match);

	if (!match) {
		match = routes[0]; // default to home page if nothing can be found
	}

	const view = new match.view(getParams(url, match));

	document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", (e) => {
		console.log(e);
		if (e.target.matches("[data-params]")) {
			e.preventDefault();
			JSON.parse(e.target.dataset.params).forEach((p) => {
				setParam(p[0], p[1]);
			})
		}
		
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.dataset.link);
		}
	});

	router();
});
