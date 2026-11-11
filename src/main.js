import { router } from "./router.js";
import { setupLinkInterceptor } from "./navigation.js"; 

setupLinkInterceptor();

window.addEventListener("popstate", router);

router();

const state = {
     status: "idle",
     data: null,
     error: null,   
}