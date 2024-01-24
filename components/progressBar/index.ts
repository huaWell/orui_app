import {ORUIElement} from "../base/index.js";

export class ProgressBar extends ORUIElement{
    static properties = {
        value: {
            type: Number,
            default: 0
        },
        rounded: {
            type: Boolean,
            default: true
        },
        show_text: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ""
        },
        custom_style: {
            type: String,
            default: ""
        }
    }
    value: number;
    rounded: boolean;
    show_text: boolean;
    text: string;
    progressBar: HTMLElement;
    progressBarFill: HTMLElement;
    text_ctr: HTMLElement;
    custom_style: string;

    init(){
        this.import_css('/components/progressBar/index.css')
        const progressBar = document.createElement('div')
        progressBar.className = 'orui-progress-bar'
        this.progressBar = progressBar

        const progressBarTrail = document.createElement('div')
        progressBarTrail.className = 'orui-progress-bar-trail'

        const progressBarFill = document.createElement('div')
        progressBarFill.className = 'orui-progress-bar-fill'
        progressBarTrail.appendChild(progressBarFill)
        progressBar.appendChild(progressBarTrail)
        this.progressBarFill = progressBarFill
        this.shadowRoot.appendChild(progressBar)
    }

    render(){
        if(this.rounded && !this.progressBar.classList.contains('orui-progress-bar-rounded')){
            this.progressBar.classList.add('orui-progress-bar-rounded')
        }else if(!this.rounded && this.progressBar.classList.contains('orui-progress-bar-rounded')){
            this.progressBar.classList.remove('orui-progress-bar-rounded')
        }
        if(this.show_text){
            if(!this.text_ctr){
                const text = document.createElement('span')
                text.className = 'orui-progress-bar-text'
                this.text_ctr = text
                this.progressBar.appendChild(text)
            }
            this.text_ctr.innerHTML = this.text != ""? this.text : this.value + '%'
        }else if(this.text_ctr){
            this.progressBar.removeChild(this.text_ctr)
            this.text_ctr = null
        }
        this.progressBarFill.style.width = this.value + '%'
        if(this.custom_style){
            this.style.cssText = this.custom_style
        }
    }
}

customElements.define('orui-progress-bar',ProgressBar)