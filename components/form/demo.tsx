import {ORUI} from "../base/index.js";
import {get_control, mock_get_data} from "../utils/index.js";

export function FormDemo() {
    //region 基本使用
    const radio_data = [
        {name: 1, display_name: '男'},
        {name: 0, display_name: '女'}
    ];

    //添加自定义验证
    const validate = async ({item, name, value}) => {
        const msg = await mock_get_data('自定义验证');
        item.message = msg;
    };

    const submit = async (form) => {
        const res = await form.validate();
        console.log(res);
    };

    const submit1 = () => {
        submit(form);
    };

    const remove_validate = () => {
        name.validate = undefined;
        submit1();
    };
    //endregion

    //region 水平布局的form
    const submit2 = () => {
        submit(horizontal_form);
    };
    //endregion

    //region 带info的form
    let infos = [
        {
            name: 'name',
            display_name: '姓名',
            is_readonly: 0,
            is_visible: 1,
            is_nullable: 0,
            editor: 'orui-input',
            format: {
                placeholder: '请输入姓名'
            }
        },
        {
            name: 'age',
            display_name: '年龄',
            is_readonly: 1,
            is_visible: 1,
            is_nullable: 1,
            editor: 'orui-input',
            format: {
                placeholder: '请输入年龄'
            }
        },
        {
            name: 'sex',
            display_name: '性别',
            is_readonly: 0,
            is_visible: 1,
            is_nullable: 0,
            editor: 'orui-radio',
            format: {
                data: [
                    {name: 1, display_name: '男'},
                    {name: 0, display_name: '女'}
                ]
            }
        }
    ];
    infos.forEach(info => {
        info.format = JSON.stringify(info.format) as any;
    });

    const submit3 = () => {
        submit(infos_form);
    };
    //endregion


    const html = (
        <orui-grid>
            {/*基础使用*/}
            <orui-row grow="0">
                <orui-title text="基本用法">
                    <orui-space direction="vertical">
                        <orui-form
                            ui_name="form"
                            data={
                                {
                                    name: '张三',
                                    age: 30,
                                    sex: 0
                                }
                            }
                        >
                            <orui-form-item
                                name="name"
                                display_name="姓名"
                                is_nullable="false"
                                validate={validate}
                                ui_name="name"
                            >
                                <orui-input></orui-input>
                            </orui-form-item>
                            <orui-form-item
                                name="age"
                                display_name="年龄"
                                is_readonly="true"
                            >
                                <orui-input></orui-input>
                            </orui-form-item>
                            <orui-form-item
                                name="sex"
                                display_name="性别"
                            >
                                <orui-radio data={radio_data}></orui-radio>
                            </orui-form-item>
                        </orui-form>
                        <orui-button
                            block="fill"
                            type="fill"
                            size="large"
                            color="primary"
                            text="提交"
                            onClick={submit1}
                        />
                        <orui-button
                            block="fill"
                            type="fill"
                            size="large"
                            text="移除自定义验证"
                            onClick={remove_validate}
                        />
                    </orui-space>
                </orui-title>
            </orui-row>
            {/*水平布局的form*/}
            <orui-row grow="0">
                <orui-title text="水平布局的form">
                    <orui-space direction="vertical">
                        <orui-form
                            ui_name="horizontal_form"
                            layout="horizontal"
                            data={
                                {
                                    name: '李四',
                                    age: 26,
                                    sex: 1
                                }
                            }
                        >
                            <orui-form-item
                                name="name"
                                display_name="姓名"
                                is_nullable="false"
                            >
                                <orui-input></orui-input>
                            </orui-form-item>
                            <orui-form-item
                                name="age"
                                display_name="年龄"
                                is_readonly="true"
                            >
                                <orui-input></orui-input>
                            </orui-form-item>
                            <orui-form-item
                                name="sex"
                                display_name="性别"
                            >
                                <orui-radio data={radio_data}></orui-radio>
                            </orui-form-item>
                        </orui-form>
                        <orui-button
                            block="fill"
                            type="fill"
                            size="large"
                            color="primary"
                            text="提交"
                            onClick={submit2}
                        />
                    </orui-space>
                </orui-title>
            </orui-row>
            {/*带info的form*/}
            <orui-row grow="0">
                <orui-title text="带info的form">
                    <orui-space direction="vertical">
                        <orui-form
                            ui_name="infos_form"
                            infos={infos}
                            data={
                                {
                                    name: '王五',
                                    age: 23,
                                    sex: 0
                                }
                            }
                        />
                        <orui-button
                            block="fill"
                            type="fill"
                            size="large"
                            color="primary"
                            text="提交"
                            onClick={submit3}
                        />
                    </orui-space>
                </orui-title>
            </orui-row>
        </orui-grid>
    );

    const form = get_control('form', html);
    const name = get_control('name', html);

    const horizontal_form = get_control('horizontal_form', html);

    const infos_form = get_control('infos_form', html);


    return html
}