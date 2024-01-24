import {ORUI, ORUIElement} from "../base/index.js";
import { multiToFixed } from '../utils/index.js'

export class Slider extends ORUIElement{
    static properties = {
        value:{
            type:Number,
            default:0
        },
        disabled:{
            type: Boolean,
            default: false
        },
    }
    container:HTMLElement;
    sliderBar:HTMLElement;
    sliderThumb:HTMLElement;
    min: number;
    max: number;
    value: number;
    marks:boolean | string;
    step: number;
    icon:string;
    ticks:boolean | string;
    icon_dragging:boolean = false;
    disabled:boolean;
    color:string;
    ticks_container:HTMLElement;
    private fill_ctr:HTMLElement;
    constructor() {
        super();
    }
    init(){
        this.min = this.min || 0
        this.max = this.max || 100
        this.step = this.step || 1
        this.color = this.color || 'var(--orui-color-primary)'
        this.icon = this.icon || '/components/images/slider.svg'
        this.ticks = typeof this.ticks == 'string' ? eval(this.ticks) : this.ticks
        this.marks = typeof this.marks == 'string' ? eval(this.marks) : this.marks
        this.import_css('/components/slider/index.css')
        this.style.setProperty('--fill-color',this.color)
        this.create()
    }

    create(){
        const container = <div class='slider-container' />
        this.container = container
        this.sliderBar = <div class='slider-bar'/>;
        const fill = <div class='orui-slider-fill'/>
        this.fill_ctr = fill
        this.sliderThumb = <div class='slider-thumb'/>;
        const slider_icon = <orui-icon path={this.icon} color={this.color}/>
        this.sliderThumb['icon'] = slider_icon
        this.sliderThumb.appendChild(slider_icon)
        this.sliderBar.appendChild(fill)

        if(this.ticks){
            const ticks_container = <div class='orui-slider-ticks'/>
            this.ticks_container = ticks_container
            this.ticks_container['ticks'] = []
            this.sliderBar.appendChild(this.ticks_container)
            this.create_ticks()
        }

        this.sliderBar.appendChild(this.sliderThumb)
        this.container.appendChild(this.sliderBar);

        if(this.marks){
            const marks_container = <div class='orui-slider-marks'/>
            this.create_marks(marks_container)
            this.container.appendChild(marks_container)
        }


        this.sliderThumb.tabIndex = 0;
        this.sliderThumb.addEventListener('touchstart', this.startDrag.bind(this));
        this.sliderBar.addEventListener('click', this.click_set_value.bind(this));
        this.sliderThumb.addEventListener('touchmove', this.dragging.bind(this));
        this.sliderThumb.addEventListener('touchend', this.endDrag.bind(this));

        this.shadowRoot.appendChild(this.container)
    }

    updatePosition(){
        const copies = this.get_total_copies()
        const percentage = (((this.value - this.min) * copies) / ((this.max - this.min ) * copies)) * 100;
        this.sliderThumb.style.left = `calc(${percentage}% - 0.6875rem)`;
        this.fill_ctr.style.width = `${percentage}%`
    }
    setValue(newValue: number): void {
        const copies = this.get_total_copies()
        const clampedValue = Math.min(this.max,Math.max(this.min,newValue))
        const value = multiToFixed(Math.round(clampedValue / this.step ),this.step,copies)
        if(this.value != value){
            this.value = value
            this.updatePosition();
            if(this.ticks){
                this.update_ticks()
            }
            const event = new CustomEvent('change',{
                detail:{
                    value:this.value
                }
            })
            this.dispatchEvent(event)
        }
    }

    click_set_value(event){
        if(!this.disabled){
            const rect = this.sliderBar.getBoundingClientRect();
            const left = (event.clientX - rect.left);
            this.setValue(this.pixed_to_value(left));
        }
    }

    private startDrag(event: DragEvent): void {
        event.preventDefault();
        if(!this.disabled){
            this.icon_dragging = true
        }
    }

    private dragging(event): void {
        if(this.icon_dragging){
            const rect = this.sliderBar.getBoundingClientRect();
            const left = (event.touches[0].clientX - rect.left);
            this.setValue(this.pixed_to_value(left));
        }
    }

    private create_ticks(){
        const copies = this.get_total_copies()
        for(let i = 0; i <= copies;i++){
            const span  = <span class='orui-slider-tick'/>
            span.style.left = i / copies * 100 + '%'
            span['value'] = multiToFixed(i,this.step,copies)
            this.ticks_container['ticks'].push(span)
            this.ticks_container.appendChild(span)
        }
        this.update_ticks()
    }

    private create_marks(marks_container:HTMLElement){
        const copies = this.get_total_copies()
        for(let i = 0; i <= copies;i++){
            const span  = <span class='orui-slider-mark'/>
            span.style.left = i / copies * 100 + '%'
            span['value'] = multiToFixed(i,this.step,copies)
            span.innerHTML = `${multiToFixed(i,this.step,copies)}`
            marks_container.appendChild(span)
        }
    }

    pixed_to_value(left: number){
        const value_pixed = this.get_value_pixed()
        return left * value_pixed + this.min
    }

    /**
     * 获取每一份的占宽
     */
    get_value_pixed(){
        const _width = this.sliderBar.clientWidth
        const value_pixed = (this.max - this.min) / _width
        return value_pixed
    }

    get_total_copies(){
       return (this.max - this.min) / this.step
    }


    private endDrag(): void {
        this.icon_dragging = false
        const event = new CustomEvent('touchend',{
            detail:{
                value:this.value
            }
        })
        this.dispatchEvent(event)
    }

    update_ticks(){
        const ticks = this.ticks_container['ticks']
        for(let i = 0; i < ticks.length; i++){
            if(ticks[i]['value'] < this.value){
                ticks[i].classList.add('orui-slider-tick-active')
            }else if(ticks[i].classList.contains('orui-slider-tick-active')) {
                ticks[i].classList.remove('orui-slider-tick-active')
            }
        }
    }

    render(){
        if(this.disabled){
            this.container.classList.add('orui-slider-disabled')
        }
        this.updatePosition();
    }
}

customElements.define('orui-slider',Slider)