const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="${new URL('text-block.css', import.meta.url)}">
<div class = "text-block">
  
    <div class = "row">
        <div class = "col">
            <h3 id = "title">Project Name</h3>
            <h3 id = "year">Project Year</h3>
        </div>        
        <div class = "col">
            <p class = "body-1" id ="body">Lorem ipsum dolor sit amet consectetur. Commodo tortor sit ipsum in tristique cras. Massa phasellus felis vestibulum ultricies metus neque enim euismod eget. In est nibh turpis et turpis enim at vestibulum elementum. Vel at nisl in diam amet tincidunt bibendum egestas tellus.</p>
        </div>            
    </div>
    <div class = "row">
        <div class = "col">
            <a id = "link"></a>
            <p class = " body-2" id = "project type">Personal</p>
        </div>
        <div class = "col">
            <p class = "body-2" id = "tags">Branding, Web design, Interaction Design</p>
        </div>
    </div>
</div>
`;

class TextBlockComponent extends HTMLElement {
    constructor() {
        super();
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.append(template.content.cloneNode(true));
        }
        this.update();        
        htmx.process(template)
    }

    update() {
        this.shadowRoot.getElementById('title').textContent = this.getAttribute('title');
        this.shadowRoot.getElementById('year').textContent = this.getAttribute('year');
        this.shadowRoot.getElementById('body').textContent = this.getAttribute('body');
        this.shadowRoot.getElementById('project-type').textContent = this.getAttribute('type');
        this.shadowRoot.getElementById('tags').textContent = this.getAttribute('tags');
        this.shadowRoot.querySelector('a').textContent = this.getAttribute('link');
        this.shadowRoot.querySelector('a').href = this.getAttribute('href');
      
    }
    static get observedAttributes(){
        return ['title','year','tags','type','body','link','href'];
        
    }
    attributeChangedCallback() {
        this.update();
    }
}

export const registerTextBlockComponent = () => customElements.define('x-text-block', TextBlockComponent);

