// import { registerHeaderComponent } from './components/header/header.js';
// import { registerProjectRowComponent } from './components/project-row/project-row.js';
// import { registerProjectNavComponent } from './components/project-nav/project-nav.js';
import { registerTextBlockComponent } from './components/text-block/text-block.js';
const app = () => {
    registerTextBlockComponent();
}
document.addEventListener('DOMContentLoaded', app);