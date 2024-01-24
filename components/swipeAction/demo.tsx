import {ORUI} from "../base/index.js";
import {get_control} from "../utils/index.js";

export function SwipeActionDemo() {

    let count = 1;

    const add_skill = () => {
        const info = {
            name: `skill${count}`,
            display_name: '技能',
            is_readonly: 0,
            is_visible: 1,
            is_nullable: 0,
            editor: 'orui-input',
            format: JSON.stringify({
                placeholder: `请输入技能名称`
            })
        };

        const form_item = form.create_form_item(info);

        const swipe_action = (
            <orui-swipe-action
                right_actions={
                    [
                        {
                            key: 'delete',
                            text: '删除',
                            color: 'danger',
                            is_auto_close: false
                        }
                    ]
                }
                onAction={
                    (e) => {
                        const {key} = e.detail;
                        const item = e.target;

                        if(key == 'delete') {
                            item.remove();
                        }

                    }
                }
            />
        );
        swipe_action.append(form_item);
        form.append(swipe_action);
        count++;
    };


    const html = (
        <orui-grid>
            {/*基础使用*/}
            <orui-row grow="0">
                <orui-title text="基本使用">
                    <orui-swipe-action
                        right_actions={
                            [
                                {
                                    key: 'delete',
                                    text: '删除',
                                    color: 'danger'
                                }
                            ]
                        }
                    >
                        <orui-input></orui-input>
                    </orui-swipe-action>
                </orui-title>
            </orui-row>

            {/*自定义事件*/}
            <orui-row grow="0">
                <orui-title text="自定义事件">
                    <orui-space direction="vertical">
                        <orui-form
                            ui_name="form"
                            layout="horizontal"
                            data={
                                {
                                    name: '张三',
                                    age: 30,
                                    sex: 1
                                }
                            }
                        >
                            <orui-form-item name="name" display_name="姓名" is_nullable="false">
                                <orui-input/>
                            </orui-form-item>

                            <orui-form-item name="age" display_name="年龄" is_readonly="true">
                                <orui-input/>
                            </orui-form-item>

                            <orui-form-item name="sex" display_name="性别">
                                <orui-radio
                                    data={
                                        [
                                            {name: 1, display_name: '男'},
                                            {name: 0, display_name: '女'}
                                        ]
                                    }
                                />
                            </orui-form-item>
                        </orui-form>
                        <orui-button
                            block="fill"
                            type="fill"
                            size="large"
                            color="primary"
                            text="添加技能"
                            onClick={add_skill}
                        />
                    </orui-space>
                </orui-title>
            </orui-row>
        </orui-grid>
    );

    const form = get_control('form', html);

    return html
}