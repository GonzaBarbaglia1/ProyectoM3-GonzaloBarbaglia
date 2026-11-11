import {renderHome} from './views/home.js';
import {renderAbout} from './views/about.js';
import {renderNotFound} from './views/notFound.js';
import {renderChat} from './views/chat.js';

const routes = {
    "/": renderHome,
    "/about": renderAbout,
    "/chat": renderChat,
    "/not-found": renderNotFound,
}

export function router() {
    const path = window.location.pathname;
    const render = routes[path] || routes["/not-found"];
    render();
}