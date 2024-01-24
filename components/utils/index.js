//深拷贝
export const deep_copy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let copy;
    if (Array.isArray(obj)) {
        copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deep_copy(obj[i]);
        }
    }
    else {
        copy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deep_copy(obj[key]);
            }
        }
    }
    return copy;
};
//生成防抖方法
export const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};
//生成节流方法
export const throttle = (func, delay) => {
    let lastExecTime = 0;
    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastExecTime >= delay) {
            func.apply(this, args);
            lastExecTime = currentTime;
        }
    };
};
//小数相乘精度问题 num1 和 num2为需要相乘的数 total为需要乘的系数
export const multiToFixed = (num1, num2, total = 10) => {
    return (num1 * total) * (num2 * total) / (total * total);
};
//通过ui_name获取组件
export const get_control = (ui_name, dom = document) => {
    const control = dom.querySelector(`[ui_name="${ui_name}"]`);
    return control;
};
//创造 通过ui_name获取组件 的方法 根元素为传入的dom
export const use_get_control = (dom) => {
    return (ui_name) => {
        return get_control(ui_name, dom);
    };
};
export const addDecimalsWithPrecision = (num1, num2, digits) => {
    // 将两个数字字符串补全到相同的长度
    function padNumbers(num1, num2, digits) {
        let [int1, frac1 = ''] = num1.split('.');
        let [int2, frac2 = ''] = num2.split('.');
        // Pad integer part
        while (int1.length < int2.length)
            int1 = '0' + int1;
        while (int2.length < int1.length)
            int2 = '0' + int2;
        // Pad fractional part
        while (frac1.length < frac2.length || frac1.length < digits)
            frac1 += '0';
        while (frac2.length < frac1.length || frac2.length < digits)
            frac2 += '0';
        return [`${int1}.${frac1}`, `${int2}.${frac2}`];
    }
    // 从字符串中删除前导零并当超出精度时截取到相应精度
    function trimLeadingZeros(strNum, digits) {
        let [intPart, fracPart] = strNum.split('.');
        intPart = intPart.replace(/^0+/, '') || '0'; // Ensure we don't remove '0' entirely
        if (fracPart.length > digits && digits > 0) {
            fracPart = fracPart.slice(0, digits);
        }
        return digits == 0 || fracPart.length == 0 ? `${intPart}` : `${intPart}.${fracPart}`;
    }
    // 检查字符串数字是否为负
    function isNegative(strNum) {
        return strNum.startsWith('-');
    }
    // 反转字符串
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    // 减法
    function subtractStrings(num1, num2, digits) {
        // 如果有负号，则移除负号并调用加法
        if (isNegative(num1) || isNegative(num2)) {
            if (isNegative(num1) && isNegative(num2)) {
                return subtractStrings(num2.slice(1), num1.slice(1), digits);
            }
            else if (isNegative(num1)) {
                return '-' + addDecimalsWithPrecision(num1.slice(1), num2, digits);
            }
            else {
                return addDecimalsWithPrecision(num1, num2.slice(1), digits);
            }
        }
        // 确定哪个数字大以避免负结果
        let resultIsNegative = false;
        if (compareAbsolute(num1, num2, digits) < 0) {
            [num1, num2] = [num2, num1];
            resultIsNegative = true;
        }
        // 补全数字字符串
        let [paddedNum1, paddedNum2] = padNumbers(num1, num2, digits);
        let borrow = 0;
        let result = '';
        // 反转字符串以从最低位开始操作
        paddedNum1 = reverseString(paddedNum1);
        paddedNum2 = reverseString(paddedNum2);
        for (let i = 0; i < paddedNum1.length; i++) {
            if (paddedNum1[i] === '.') {
                result += '.';
                continue;
            }
            let diff = parseInt(paddedNum1[i]) - parseInt(paddedNum2[i]) - borrow;
            borrow = diff < 0 ? 1 : 0;
            result += borrow ? (diff + 10) : diff;
        }
        // 反转结果并去除前导零
        result = trimLeadingZeros(reverseString(result), digits);
        return resultIsNegative ? '-' + result : result;
    }
    // 比较两个字符串表示的数字的绝对值大小
    function compareAbsolute(num1, num2, digits) {
        // 补全数字字符串
        let [paddedNum1, paddedNum2] = padNumbers(num1, num2, digits);
        if (paddedNum1 === paddedNum2) {
            return 0;
        }
        return paddedNum1 > paddedNum2 ? 1 : -1;
    }
    // 如果有负号，则移除负号并调用减法
    if (isNegative(num1) || isNegative(num2)) {
        if (isNegative(num1) && isNegative(num2)) {
            return '-' + addDecimalsWithPrecision(num1.slice(1), num2.slice(1), digits);
        }
        else if (isNegative(num1)) {
            return subtractStrings(num2, num1.slice(1), digits);
        }
        else {
            return subtractStrings(num1, num2.slice(1), digits);
        }
    }
    // 补全数字字符串
    let [paddedNum1, paddedNum2] = padNumbers(num1, num2, digits);
    let carry = 0;
    let result = '';
    // 反转字符串以从最低位开始操作
    paddedNum1 = reverseString(paddedNum1);
    paddedNum2 = reverseString(paddedNum2);
    for (let i = 0; i < paddedNum1.length; i++) {
        if (paddedNum1[i] === '.') {
            result += '.';
            continue;
        }
        let digitSum = parseInt(paddedNum1[i]) + parseInt(paddedNum2[i]) + carry;
        carry = digitSum > 9 ? 1 : 0;
        result += digitSum % 10;
    }
    if (carry > 0) {
        result += '1';
    }
    // 反转结果并去除前导零
    result = trimLeadingZeros(reverseString(result), digits);
    return result;
};
export const formatterTime = (date, format) => {
    const pad = (num) => (num < 10 ? '0' + num : num);
    // 定义格式化模式
    const replacements = {
        'YYYY': date.getFullYear(),
        'MM': pad(date.getMonth() + 1),
        'DD': pad(date.getDate()),
        'HH': pad(date.getHours()),
        'mm': pad(date.getMinutes()),
        'ss': pad(date.getSeconds()),
    };
    // 替换格式化字符串中的占位符
    let formattedDate = format;
    for (const [key, value] of Object.entries(replacements)) {
        formattedDate = formattedDate.replace(key, value);
    }
    return formattedDate;
};
/**
 * 根据第y年第w周获取起始日期
 * @param w 标识第几周
 * @param y 标识哪一年
 */
export const getDateOfISOWeek = (w, y) => {
    const simple = new Date(y, 0, 1 + (w - 1) * 7);
    const dow = simple.getDay();
    const ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
};
/**
 * 根据第y年第w周获取格式化后的起始日期
 * @param w 标识第几周
 * @param y 标识哪一年
 */
export const getSpecificDateFromWeek = (year, weekNumber, dayOfWeek = "1") => {
    //获取每周的开始日期
    const week_start = getDateOfISOWeek(weekNumber, year);
    //计算偏移量
    const specificDate = new Date(week_start.setDate(week_start.getDate() + parseInt(dayOfWeek) - 1));
    // 返回格式化后的日期
    return specificDate;
};
/**
 * 寻找最近的元素
 * @param element 元素
 * @param selector 选择器
 */
export const find_closest = (element, selector) => {
    if (element.closest) {
        return element.closest(selector);
    }
    while (element && !element.matches(selector)) {
        element = element.parentElement;
    }
    return element;
};
/**
 * 模拟get_data
 * @param mock_data any
 * @param time 单位ms
 */
export const mock_get_data = (mock_data, time = 3000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mock_data);
        }, time);
    });
};
