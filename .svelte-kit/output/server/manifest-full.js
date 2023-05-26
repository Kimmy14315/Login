export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Untitled.xcf","base_carrot.png","base_cheesecake.png","base_chocolate.png","base_funfetti.png","base_icecream.png","base_red_velvet.png","base_red_velvet_2.png","base_ube.png","base_vanilla.png","cake.jpg","cake_base_frame.png","cake_base_frame.xcf","favicon.ico","favicon.png","global.css","global.scss","icing_almond.png","icing_buttercream.png","icing_chocolate.png","icing_ganache.png","mail.svg","phone.svg","shield.svg","user.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".css":"text/css",".scss":"text/x-scss",".svg":"image/svg+xml"},
	_: {
		client: null,
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/design",
				pattern: /^\/design\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
