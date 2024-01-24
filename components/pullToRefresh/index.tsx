import {ORUI, ORUIElement} from "../base/index.js";
import {debounce, throttle} from "../utils/index.js";
const PULL_STATE_TYPE = {
    pulling: '',
    releasing: '',
    static: ''
};

export class PullToRefresh extends ORUIElement {
    startY: number = 0;
    currentY: number = 0;
    target_height: number = 100;
    isDragging = false;
    content: HTMLElement;
    state: 'pulling' | 'releasing' | 'static' | 'pushing';

    init() {
        this.import_css('/components/pullToRefresh/index.css');
        const html = (
            <div class="content">
                <img class="show_image"/>
                <div class="show_text"/>
                <slot/>
            </div>
        );

        // const dom = this.string_to_dom(html);
        this.shadowRoot.append(html);
        this.content = this.shadowRoot.querySelector('.content');
        this.init_event();
    }

    init_event() {
        // 添加事件监听器
        this.content.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.content.addEventListener('touchmove', (e) => {
            e.stopPropagation();
            // e.preventDefault();
            this.handleTouchMove(e);
        });

        this.content.addEventListener('touchend', this.handleTouchEnd.bind(this));
        this.content.addEventListener('scroll', () => {
            this.handleScroll();
        })
    }


    handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        this.isDragging = true;
    }

    handleTouchMove = throttle((event) => {
        if (!this.isDragging) return;

        this.currentY = event.touches[0].clientY;

        let position = (this.currentY - this.startY) / 2;

        position = Math.abs(position) > this.target_height ?
            position > 0 ? this.target_height : -this.target_height
            : position;

        if (this.currentY > this.startY && this.content.scrollTop === 0) {

            event.cancelable && event.preventDefault();
            const text = this.shadowRoot.querySelector('.show_text') as HTMLElement;
            text.style.display = 'flex';
            if(position < 60) {
                this.state = 'static';
                text.innerHTML = '下拉即刷新...';
            }else {
                this.state = 'pulling';
                text.innerHTML = '释放后刷新...';
            }
            // 下拉刷新
            this.content.style.transform = `translateY(${position}px)`;
        }
        else if (this.currentY < this.startY && this.isScrolledToBottom()) {

            this.state = 'pulling';

            event.cancelable && event.preventDefault();
            // 上翻加载
            this.content.style.transform = `translateY(${position}px)`;
        }
    }, 100);

    handleTouchEnd() {
        if (!this.isDragging) return;

        const text = this.shadowRoot.querySelector('.show_text') as HTMLElement;
        text.style.display = 'none';

        this.isDragging = false;
        this.content.style.transform = '';

        // 触发刷新事件
        if (this.currentY > this.startY && this.currentY - this.startY > 50 && this.content.scrollTop === 0 && this.state == 'pulling') {
            this.dispatchEvent(new CustomEvent('refresh'));
        } else if (this.currentY < this.startY && this.startY - this.currentY > 50 && this.isScrolledToBottom() && this.state == 'pulling') {
            this.dispatchEvent(new CustomEvent('load'));
        }
        this.state = 'static';
    }

    isScrolledToBottom() {
        const content = this.content;
        return content.scrollHeight - content.scrollTop - content.clientHeight < 100;
    }

    handleScroll = debounce(() => {
        if(this.isScrolledToBottom && this.state == 'static') {
            this.dispatchEvent(new CustomEvent('load'));
        }
    },100);
}

// 注册自定义元素
customElements.define('orui-pull-to-refresh', PullToRefresh);

