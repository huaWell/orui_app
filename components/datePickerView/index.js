var _a;
import { PickerView } from "../pickerView/index.js";
import { formatterTime, getDateOfISOWeek, getSpecificDateFromWeek } from "../utils/index.js";
export class DatePickerView extends PickerView {
    init() {
        super.init();
    }
    get_range_data(min, max, type, unix, format = false) {
        const data = [];
        for (let i = min; i <= max; i++) {
            let _display_name = i;
            if (format && i < 10) {
                _display_name = "0" + _display_name;
            }
            let flag = true;
            if (this.filter) {
                flag = this.filter(type, _display_name);
            }
            if (unix) {
                _display_name += unix;
            }
            if (this.renderLabel) {
                _display_name = this.renderLabel(type, _display_name);
            }
            let value = { name: i, display_name: _display_name };
            flag && data.push(value);
        }
        return data;
    }
    render() {
        if (this.custom_style) {
            this.set_custom_style(this.custom_style);
        }
        this.style.setProperty('--item-height', (this.item_height / 16) + 'rem');
        if (Object.keys(this.data).length == 0) {
            this.scrollBars = [];
            this.container.innerHTML = "";
            this.create_mask();
            const types = DatePickerView.PRECISION_COLUMN_NUMBER[this.precision];
            this.map_scrollBars = {};
            for (let i = 0; i < types.length; i++) {
                let data = this.get_range_data_type(types[i]);
                const { scrollBar } = this.create_column({ data: data });
                scrollBar['type'] = types[i];
                this.map_scrollBars[types[i]] = scrollBar;
            }
        }
        else {
            for (const [type, data] of Object.entries(this.data)) {
                const scrollBar = this.scrollBars.find((scrollBar) => {
                    return scrollBar['type'] == type;
                });
                scrollBar.set_ui({ data: data });
            }
        }
    }
    get_range_data_type(type) {
        let data = [];
        if (DatePickerView.PRECISION_FIXED_MAX_NUMBER[type]) {
            const range = DatePickerView.PRECISION_FIXED_MAX_NUMBER[type];
            let max = this.get_max_by_type(range.max, type);
            data = this.get_range_data(range.min, max, type, null, range.format);
        }
        else if (type) {
            data = this[`get_range_${type}`]();
        }
        return data;
    }
    get_max_by_type(max, type) {
        if (this.till_now && type == 'month' && (this.scrollBars[0]['value'] || this.value)) {
            const value = new Date(this.value);
            if (value.getFullYear() == new Date().getFullYear()) {
                max = new Date().getMonth() + 1;
            }
        }
        return max;
    }
    get_range_year() {
        let max_year = new Date(this.max).getFullYear();
        if (this.till_now && max_year > new Date().getFullYear()) {
            max_year = new Date().getFullYear();
        }
        const _data = this.get_range_data(new Date(this.min).getFullYear(), max_year, 'year', null);
        if (this.till_now) {
            _data.push({ name: 'till_now', display_name: '至今' });
        }
        return _data;
    }
    init_event(scrollBar) {
        const _this = this;
        scrollBar.addEventListener('change', () => {
            const type = scrollBar['type'];
            if (this.till_now && this.update_arr.length == 0) {
                scrollBar['last_value'] = scrollBar['value'];
                _this.update_other_scrollBars();
            }
            if (type == 'month' && this.scrollBars.length > 2) {
                _this.update_day_number();
            }
            if (type == 'week' && this.scrollBars.length > 2) {
                _this.update_week_day_number(scrollBar);
            }
            const event = new CustomEvent('change', {
                detail: {
                    target: scrollBar,
                    type: type,
                    data: scrollBar.data,
                    value: _this.value
                }
            });
            this.dispatchEvent(event);
        });
    }
    update_other_scrollBars() {
        this.scrollBars.forEach((scrollBar, index) => {
            if (index > 0 && this.scrollBars[0]['value'] == 'till_now') {
                scrollBar.set_ui({ data: [] });
            }
            else if (index > 0) {
                let data = this.get_range_data_type(scrollBar['type']);
                JSON.stringify(data) != JSON.stringify(scrollBar['data']) && scrollBar.set_ui({ data: data, value: -1 });
            }
        });
    }
    get_range_week() {
        const date = new Date(this.scrollBars[0]['value'], 11, 28);
        let target = new Date(date.valueOf());
        let dayNr = (date.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        let firstThursday = target.valueOf();
        target.setMonth(0, 1);
        if (target.getDay() !== 4) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
        }
        //@ts-ignore
        const week = 1 + Math.ceil((firstThursday - target) / (7 * 24 * 3600 * 1000));
        const _data = this.get_range_data(1, week, 'week', '周');
        return _data;
    }
    get_range_week_day() {
        const weekStart = getDateOfISOWeek(parseInt(this.scrollBars[1]['value']), this.scrollBars[0]['value']);
        let dates = [];
        for (let i = 1; i <= 7; i++) {
            let date = new Date(weekStart);
            date.setDate(date.getDate() + i - 1);
            if (date.getFullYear() == this.scrollBars[0]['value']) {
                dates.push({ name: i, display_name: DatePickerView.WEEK_NUMBER[i] });
            }
        }
        return dates;
    }
    update_week_day_number(scrollBar) {
        const _data = this.get_range_week_day();
        JSON.stringify(_data) != JSON.stringify(this.map_scrollBars['week_day']) && this.map_scrollBars['week_day'].set_ui({
            data: _data
        });
    }
    get_range_day() {
        const year = this.map_scrollBars['year'].value;
        if (year == 'till_now') {
            return [];
        }
        const month = this.map_scrollBars['month'].value;
        let max_days = new Date(year, month, 0).getDate();
        if (this.till_now && month - 1 == new Date().getMonth() && year == new Date().getFullYear()) {
            max_days = new Date().getDate();
        }
        return this.get_range_data(1, max_days, 'day', null);
    }
    update_day_number() {
        const _data = this.get_range_day();
        if (JSON.stringify(this.map_scrollBars['day'].data) != JSON.stringify(_data)) {
            this.map_scrollBars['day'].set_ui({
                data: _data
            });
        }
    }
}
_a = DatePickerView;
DatePickerView.currentDate = new Date();
DatePickerView.properties = {
    ...PickerView.properties,
    precision: {
        type: ['year', 'month', 'day', 'hour', 'minute', 'second', 'week', 'week-day'],
        default: 'day'
    },
    till_now: {
        type: Boolean,
        default: false
    },
    min: {
        type: String,
        default: (() => {
            const tenYearsAgo = new Date(_a.currentDate);
            tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);
            return formatterTime(tenYearsAgo, 'YYYY-MM-DD HH:mm:ss');
        })(),
    },
    max: {
        type: String,
        default: (() => {
            const tenYearsAfter = new Date(_a.currentDate);
            tenYearsAfter.setFullYear(tenYearsAfter.getFullYear() + 10);
            return formatterTime(tenYearsAfter, 'YYYY-MM-DD HH:mm:ss');
        })(),
    },
    custom: {
        type: Boolean,
        default: false
    },
    data: {
        type: Object,
        default: {},
        get: function () {
            const _res = {};
            this.scrollBars.forEach((scrollbar) => {
                _res[scrollbar['type']] = scrollbar.data;
            });
            return _res;
        }
    },
    value: {
        type: String,
        default: "",
        get: function () {
            const _this = this;
            if (this.precision != 'week' && this.precision != 'week-day') {
                const _res = this.scrollBars.map((scrollbar, index) => {
                    return index < 2 ? scrollbar['value'] + '-' : index > 2 && index < _this.scrollBars.length ? scrollbar['value'] + ':' : scrollbar['value'] + ' ';
                }).join('');
                return new Date(_res);
            }
            else {
                const year = this.scrollBars.find((item) => item['type'] == 'year')?.value;
                const week = this.scrollBars.find((item) => item['type'] == 'week')?.value;
                const weekDay = this.scrollBars.find((item) => item['type'] == 'week_day')?.value;
                if (year && week) {
                    return new Date(getSpecificDateFromWeek(year, week, weekDay));
                }
            }
        }
    },
    contains_previous_days: {
        type: Boolean,
        default: true
    }
};
// contains_previous_days:boolean;
DatePickerView.PRECISION_COLUMN_NUMBER = {
    "year": ['year'],
    "month": ['year', 'month'],
    "day": ['year', 'month', 'day'],
    "hour": ['year', 'month', 'day', 'hour'],
    "minute": ['year', 'month', 'day', 'hour', 'minute'],
    "second": ['year', 'month', 'day', 'hour', 'minute', 'second'],
    "week": ['year', 'week'],
    "week-day": ['year', 'week', 'week_day']
};
DatePickerView.PRECISION_FIXED_MAX_NUMBER = {
    'month': { min: 1, max: 12 },
    'hour': { min: 0, max: 24, format: true },
    'minute': { min: 0, max: 60, format: true },
    'second': { min: 0, max: 60, format: true },
};
DatePickerView.WEEK_NUMBER = {
    '1': '周一',
    '2': '周二',
    '3': '周三',
    '4': '周四',
    '5': '周五',
    '6': '周六',
    '7': '周日',
};
customElements.define('orui-date-picker-view', DatePickerView);
