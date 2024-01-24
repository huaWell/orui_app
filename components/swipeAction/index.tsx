import {ORUIElement, ORUI} from "../base/index.js";
export interface IACTION {
    color: 'light' | 'weak' | 'primary' | 'success' | 'warning' | 'danger';
    text: string;
    key: string;
    is_auto_close?: Boolean;
}

export class SwipeAction extends ORUIElement {

    startX: number = 0;
    startY: number = 0;
    isDragging: boolean = false;
    right_width: number = 0;
    unit_width: number = 80;
    content: HTMLElement;
    right: HTMLElement;

    is_auto_close: boolean;
    right_actions: IACTION[];

    static properties = {
        right_actions: {
            type: Array,
            default: []
        },
        is_auto_close: {
            type: Boolean,
            default: true
        }
    };

    init() {
        const html = (
            <div class="content">
                <div class="left"/>
                <div class="main">
                    <slot/>
                </div>
                <div class="right" style="display: none"/>
            </div>
        );
        this.import_css('/components/swipeAction/index.css');
        this.shadowRoot.append(html);
        this.content = this.shadowRoot.querySelector('.content');
        this.right = this.shadowRoot.querySelector('.right');
        this.init_events();
    }

    init_events() {
        this.addEventListener('touchstart', (event) => {
            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;
            this.isDragging = true;
        });

        this.addEventListener('touchend', (event) => {
            this.isDragging = false;
        });

        this.addEventListener('touchmove', (event) => {
            const currentX = event.touches[0].clientX;
            const currentY = event.touches[0].clientY;

            if (Math.abs(currentX - this.startX) > Math.abs(currentY - this.startY)) {

                event.cancelable && event.preventDefault(); // 阻止默认事件
                event.cancelable && event.stopPropagation();

                if(Math.abs(currentX - this.startX) < 50) return; //左右滑动过小

                if (currentX - this.startX > 0) {
                    this.close();
                }else {
                    this.show();
                }
            }
        });
    }

    render() {
        this.right.innerHTML = '';
        this.right_width = 0;
        this.right_actions.forEach(item => {
            const {color, text} = item;
            const button = document.createElement('div');
            button.className = 'button';
            button.style.background = `var(--orui-color-${color})`;
            button.innerHTML = text || '';
            button.addEventListener('click', () => {
                this.onAction(item);
            });
            const _width = this.unit_width;
            button.style.width = `${_width}px`;
            this.right_width += _width;
            this.right.appendChild(button);
        });
    }

    onAction(item: IACTION) {
        let {color, key, text, is_auto_close} = item;
        is_auto_close = is_auto_close == undefined ? true : !!is_auto_close;
        const event = new CustomEvent('action',{
            detail: {
                key
            }
        });
        this.dispatchEvent(event);
        if(!this.is_auto_close || !is_auto_close) return;
        this.close()
    }

    show() {
        this.right.style.display = '';
        this.content.style.transform = `translateX(${-this.right_width}px)`;
    }

    close() {
        this.content.style.transform = `translateX(0)`;
    }
}

customElements.define("orui-swipe-action", SwipeAction);