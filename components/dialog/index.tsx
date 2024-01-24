import {ORUI, ORUIElement} from "../base/index.js";
import {Popup} from "../popup/index.js";
export interface IACTION {
    color: 'light' | 'weak' | 'primary' | 'success' | 'warning' | 'danger';
    text: string;
    bold?: boolean;
    on_click?: Function;
    style?: string;
    close_on_action?: Boolean;
}

type ACTION = IACTION | IACTION[];
type ACTIONS = ACTION[];

export class Dialog extends ORUIElement {
    close_on_action: boolean;
    destroy_on_close: boolean;
    visible: boolean;
    actions: ACTIONS;
    footer: HTMLElement;
    popup: Popup;

    static properties = {
        close_on_action: {
            type: Boolean,
            default: true,
            is_update: false
        },
        destroy_on_close: {
            type: Boolean,
            default: false,
            is_update: false
        },
        visible: {
            type: Boolean,
            default: false
        },
        actions: {
            type: Array,
            default: []
        }
    };

    constructor() {
        super();
        this.popup = new Popup();
        this.popup.position = "center";
        this.popup.body_style = 'height: auto;width: 75%;border-radius: var(--orui-radius-m)';
        this.popup.append(this);
        document.body.append(this.popup);
    }

    init() {
        const html = (
            <orui-grid size="small">
                <div class="main">
                    <slot name="header"></slot>
                    <slot name="title"></slot>
                    <slot name="content"></slot>
                </div>
                <orui-grid className="footer" gap="0">
                </orui-grid>
            </orui-grid>
        );
        this.footer = html.querySelector('.footer');
        this.import_css('/components/dialog/index.css');
        this.shadowRoot.append(html);
        this.init_events();
    }

    render() {
        this.render_actions();
        this.render_visible();
    }

    update(key: string) {
        const handler = {
            actions: 'render_action',
            visible: 'render_visible'
        };

        handler[key] && this[handler[key]]();
    }

    init_events() {
        this.popup.addEventListener('close', () => {
            const event = new CustomEvent('close');
            this.dispatchEvent(event);
            if(this.destroy_on_close) {
                this.popup.remove();
            }
        });

        const slots = this.shadowRoot.querySelectorAll('slot');

        slots.forEach(slot => {
            // 监听插槽变化事件
            slot.addEventListener('slotchange', () => {
                if (slot.assignedElements().length > 0) {
                    slot.style.display = 'flex';
                } else {
                    slot.style.display = '';
                }
            });
        });
    }

    render_actions() {
        this.footer.innerHTML = '';

        const create_action = (action: IACTION) => {
            let {color, text, on_click, close_on_action, bold} = action;
            close_on_action = close_on_action == undefined ? true : !!close_on_action;
            close_on_action = this.close_on_action && close_on_action;

            const html = (
                <orui-col className="action">
                    <orui-space justify="center" align="center" style="width: 100%;">
                        <orui-button
                            text={text}
                            type="none"
                            color={color}
                            block="fill"
                            custom_style={bold ? '--font-weight: bold' : ''}
                            onClick={() => {
                                on_click && on_click();
                                if(close_on_action) this.popup.visible = false;
                            }}
                        />
                    </orui-space>
                </orui-col>
            );
            return html
        };

        this.actions.forEach((action: ACTION) => {
            const action_container = (
                <orui-row class='action_container'/>
            );

            if(Array.isArray(action)) {
                action.forEach(item => {
                    const button = create_action(item);
                    action_container.append(button);
                })
            }else {
                const button = create_action(action);
                action_container.append(button);
            }

            this.footer.append(action_container);
        });
    }

    render_visible() {
        if(this.visible) {
            this.popup.visible = true;
        }else {
            this.popup.visible = false;
        }
    }
}

customElements.define("orui-dialog", Dialog);

type DIALOG_TYPE = 'alert' | 'confirm' | 'show';

interface  IDialog_params {
    header?: HTMLElement | string;
    title?: HTMLElement | string;
    content?: HTMLElement | string;
    actions?: ACTIONS;
    close_on_action?: boolean;
    destroy_on_close?: boolean;
}

class Dialog_helper{
    dialog: Dialog;
    type: DIALOG_TYPE  = 'show';
    resolve: Function;

    alert(params: IDialog_params): Promise<Function> {
        return this.show(params, 'alert')
    }

    confirm(params: IDialog_params): Promise<Function> {
        return this.show(params, 'confirm')
    }

    show(params: IDialog_params, type: DIALOG_TYPE = 'show'): Promise<Function> {
        if(this.dialog) {
            this.close();
        }
        const dialog = new Dialog();

        this.dialog = dialog;
        let {actions} = params;

        //处理actions
        actions = actions || [];
        const _actions = this.get_actions(type);
        actions.push(..._actions);
        dialog.set_ui({
            ...params,
            actions,
            destroy_on_close: true,
            visible: true
        });

        const fragment = (<></>);
        const queue = ['header', 'title', 'content'];

        queue.forEach(item => {
            const dom = params[item];
            if(!dom) return;
            const container = (
                <div class={item} slot={item}>
                    {dom}
                </div>
            );
            fragment.append(container);
        });

        this.dialog.append(fragment);

        return new Promise(resolve => {
            this.resolve = resolve;
        })
    }

    get_actions(type: DIALOG_TYPE): ACTIONS {
        const _actions = {
            alert: [
                {
                    color: 'primary',
                    text: '我知道了',
                    on_click: () => {
                        this.resolve(true);
                    }
                }
            ],
            confirm: [
                [
                    {
                        color: 'primary',
                        text: '取消',
                        on_click: () => {
                            this.resolve(false);
                        }
                    },
                    {
                        color: 'primary',
                        text: '确认',
                        bold: true,
                        on_click: () => {
                            this.resolve(true);
                        }
                    }
                ]
            ]
        };

        const actions = _actions[type] || [];
        return actions
    }

    close() {
        this.dialog.visible = false;
    }
}

export const DIALOG = new Dialog_helper();