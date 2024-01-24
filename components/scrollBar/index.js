import { ORUI, ORUIElement } from "../base/index.js";
import { throttle } from "../utils/index.js";
export class ScrollBar extends ORUIElement {
    constructor() {
        super(...arguments);
        this.moveY = 0;
        this.rafId = null;
        this.minTranslateY = 0;
        this.maxTranslateY = 0;
        this.velocity = 0;
        this.lastY = 0;
        this.lastTime = 0;
        this.selectedIndex = -1;
        this.handleTouchMove = throttle((event) => {
            event.cancelable && event.preventDefault();
            if (!this.isMoving)
                return;
            const touchY = event.touches[0].clientY;
            const currentY = touchY - this.startY + this.moveY;
            this.translateY = currentY;
            if (touchY > this.startY && this.translateY >= this.maxTranslateY) {
                const pull_distance = Math.abs(this.startY - touchY) > this.itemHeight ? this.itemHeight : this.startY - touchY;
                this.list_container.style.transform = `translateY(${pull_distance}px)`;
                return;
            }
            if (touchY < this.startY && this.translateY <= this.minTranslateY && parseFloat(this.list_container.style.transform.split(('('))[1]) <= this.minTranslateY) {
                const _distance = Math.abs(this.startY - touchY) > this.itemHeight ? -this.itemHeight : this.startY - touchY;
                this.list_container.style.transform = `translateY(${_distance + this.minTranslateY}px)`;
                return;
            }
            const now = event.timeStamp;
            const deltaY = touchY - this.lastY;
            const deltaTime = now - this.lastTime;
            if (deltaTime > 0) {
                this.velocity = (deltaY / deltaTime) * (1000 / 60); // 像素/帧 加速度计算
                this.lastY = touchY;
                this.lastTime = now;
            }
            this.rafId = requestAnimationFrame(this.inertiaScroll.bind(this));
        }, 10);
    }
    init() {
    }
    render() {
        this.data = this.data || [];
        this.list_items = this.list_items || [];
        this.shadowRoot.innerHTML = "";
        this.translateY = 0;
        this.itemHeight = this.itemHeight || 34;
        this.style.setProperty('--item-height', this.itemHeight / 16 + 'rem');
        this.import_css('/components/scrollBar/index.css');
        this.create();
        this.attachEvents();
    }
    create() {
        const container = ORUI.createElement("div", { class: 'orui-picker-container' });
        this.container = container;
        this.create_item();
        this.snapToItem(this.value);
        this.updatePosition();
        this.container.style.overflow = this.visible ? 'visible' : 'hidden';
        this.shadowRoot.appendChild(container);
    }
    update(name, oldValue, newValue) {
        if (name == 'visible' && this.container) {
            this.container.style.overflow = newValue ? 'visible' : 'hidden';
        }
        else if (name == 'value') {
            this.snapToItem(newValue);
            this.updatePosition();
        }
        else {
            super.update(name, oldValue, newValue);
        }
    }
    create_item() {
        this.list_items = [];
        const list_container = ORUI.createElement("div", { class: 'orui-picker-list' });
        this.data.forEach((item, index) => {
            const list_item = ORUI.createElement("div", { class: 'orui-picker-item' });
            list_item['name'] = item[this.value_filed];
            const item_label = ORUI.createElement("div", { class: 'orui-picker-item-label' });
            item_label.innerHTML = item[this.label_filed];
            list_item.appendChild(item_label);
            list_item['index'] = index;
            this.list_items.push(list_item);
            list_container.appendChild(list_item);
        });
        this.list_container = list_container;
        this.updatePosition();
        this.container.appendChild(list_container);
    }
    attachEvents() {
        this.list_container.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        this.list_container.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        this.list_container.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: false });
    }
    handleTouchStart(event) {
        this.lastY = this.startY;
        this.lastTime = event.timeStamp;
        this.velocity = 0;
        this.moveY = this.translateY;
        this.isMoving = true;
        this.startY = event.touches[0].clientY;
    }
    handleTouchEnd(event) {
        event.cancelable && event.preventDefault();
        this.isMoving = false;
        this.rafId = requestAnimationFrame(this.inertiaScroll.bind(this));
        this.updatePosition();
        this.snapToItem();
    }
    checkBoundary() {
        this.minTranslateY = -((this.data.length - 1) * this.itemHeight);
        this.maxTranslateY = 0;
        if (this.translateY > this.maxTranslateY) {
            this.translateY = this.maxTranslateY;
            this.velocity = 0;
        }
        else if (this.translateY < this.minTranslateY) {
            this.translateY = this.minTranslateY;
            this.velocity = 0;
        }
    }
    inertiaScroll() {
        const deltaY = this.velocity;
        this.velocity *= 0.95;
        this.translateY += deltaY;
        this.checkBoundary();
        this.translateY = Math.round(this.translateY / this.itemHeight) * this.itemHeight;
        this.list_container.style.transform = `translateY(${this.translateY}px)`;
        // 如果速度足够小，停止动画
        if (Math.abs(this.velocity) > 0.01) {
            this.rafId = requestAnimationFrame(this.inertiaScroll.bind(this));
        }
        else {
            cancelAnimationFrame(this.rafId);
        }
    }
    updatePosition() {
        this.list_container.style.transition = 'transform .1s';
        this.checkBoundary();
        this.translateY = Math.round(this.translateY / this.itemHeight) * this.itemHeight;
        if (this.translateY != this.moveY) {
            this.list_container.style.transform = `translateY(${this.translateY}px)`;
        }
        if (this.translateY) {
            this.inertiaScroll();
        }
    }
    snapToItem(value) {
        const item = value ? this.list_items.find((item) => item['name'] == value) : null;
        const index = item ? item['index'] : Math.round(-this.translateY / this.itemHeight);
        if (index > 0 && this.translateY == 0) {
            this.translateY = -(index * this.itemHeight);
        }
        this.selectItem(index);
    }
    selectItem(index) {
        if (index < 0 || index >= this.data.length) {
            return;
        }
        const lastIndex = this.selectedIndex;
        this.selectedIndex = isNaN(index) ? this.selectedIndex : index;
        this.value = this.list_items[this.selectedIndex]['name'];
        if (this.selectedIndex != lastIndex && this.event_trigger) {
            const event = new CustomEvent('change', {
                detail: {
                    index: this.selectedIndex,
                    value: this.value,
                    data: this.data
                }
            });
            this.dispatchEvent(event);
        }
    }
}
ScrollBar.properties = {
    value_filed: {
        type: String,
        default: 'name',
        is_update: false
    },
    label_filed: {
        type: String,
        default: 'display_name',
        is_update: false
    },
    value: {
        type: String,
        default: "",
        is_update: true
    },
    visible: {
        type: Boolean,
        default: false
    },
    event_trigger: {
        type: Boolean,
        default: true
    }
};
customElements.define('orui-scroll-bar', ScrollBar);
