export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Untitled.xcf","base_carrot.png","base_cheesecake.png","base_chocolate.png","base_funfetti.png","base_icecream.png","base_red_velvet.png","base_red_velvet_2.png","base_ube.png","base_vanilla.png","cake.jpg","cake_base_frame.png","cake_base_frame.xcf","favicon.ico","favicon.png","global.css","global.scss","mail.svg","phone.svg","shield.svg","user.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".ico":"image/vnd.microsoft.icon",".css":"text/css",".scss":"text/x-scss",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.454b7436.js","imports":["_app/immutable/entry/start.454b7436.js","_app/immutable/chunks/index.8df4f305.js","_app/immutable/chunks/singletons.3de7cd66.js","_app/immutable/chunks/index.125090ca.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.cb733555.js","imports":["_app/immutable/entry/app.cb733555.js","_app/immutable/chunks/index.8df4f305.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
