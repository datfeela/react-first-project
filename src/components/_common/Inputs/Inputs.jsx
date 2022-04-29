import WarningWithPopup from "../WarningWithPopup/WarningWithPopup";
import styles from "./Inputs.module.scss";
import React, { useEffect } from "react";
import { SvgSelector } from "../SvgSelector/SvgSelector";

// export const renderInputFormik = ({ form, field, ...props }) => {
//         const InputClassSwitch = (inputType) => {
//             switch (inputType) {
//                 // case "loginInput":
//                 //     return styles.input + " " + styles.input_login;
//                 default:
//                     return styles.input;
//             }
//         };

//         const inputClassName = InputClassSwitch(props.inputType);

//         return (
//             <input
//                 type={props.type}
//                 name={field.name}
//                 onChange={form.handleChange}
//                 value={field.value}
//                 className={inputClassName}
//                 placeholder={props.placeholder}
//             />
//         );
// };

export const RenderInputFormik = ({ form, field, options, ...props }) => {
    // const inputClassSwitch = (inputType) => {
    //     switch (inputType) {
    //         // case "loginInput":
    //         //     return styles.input + " " + styles.input_login;
    //         default:
    //             return styles.input;
    //     }
    // };

    useEffect(() => {
        props.onValueChange && props.onValueChange(field.value);
    }, [field.value]);

    let wrapClassName, inputClassName;

    switch (props.type) {
        case "text":
            wrapClassName = options && options.icon ? styles.inputWrap + " " + styles.inputWrap_withIcon : styles.inputWrap;
            inputClassName = options && options.showErrors && form.errors[field.name] ? styles.input + " " + styles.input_error : styles.input;
            break
        case "checkbox":
            wrapClassName = styles.checkboxWrap;
            inputClassName = styles.checkbox;
            break
    }
     
    // const inputClassName = inputClassSwitch(props.inputType);

    return (
        <div className={wrapClassName}>
            <input
                style={{
                    border: options && options.border,
                    padding: options && options.padding,
                }}
                type={props.type}
                name={field.name}
                value={field.value}
                onChange={form.handleChange}
                className={inputClassName}
                placeholder={props.placeholder}
                checked={field.checked}
            />
            {options && options.icon && <SvgSelector className={styles.icon} id={options.icon} />}
            {props.label && <span className={styles.checkbox__label}>{props.label}</span>}
        </div>
    );
};

export const renderInput = ({ input, type, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    const hasWarning = meta.touched && meta.warning;

    //max length check
    props.inputMaxLength && input.value.length > props.inputMaxLength && (input.value = input.value.substr(0, props.inputMaxLength));

    const InputClassSwitch = (inputType) => {
        switch (inputType) {
            case "loginInput":
                return styles.input + " " + styles.input_login;
            default:
                return styles.input;
        }
    };

    const inputClassName = InputClassSwitch(props.inputType);

    return (
        <div className={styles.inputWrap}>
            <input
                {...input}
                className={hasError || hasWarning ? inputClassName + " " + styles.input_error : inputClassName}
                placeholder={props.placeholder}
                type={type}
            />
            {hasError && (
                <div className={styles.warningWrap}>
                    <WarningWithPopup error={meta.error} />
                </div>
            )}
            {hasWarning && (
                <div className={styles.warningWrap}>
                    <WarningWithPopup error={meta.warning} />
                </div>
            )}
        </div>
    );
};

export const RenderTextareaFormik = ({ form, field, ...props }) => {
    const InputClassSwitch = (inputType) => {
        switch (inputType) {
            // case "loginInput":
            //     return styles.input + " " + styles.input_login;
            default:
                return styles.textarea;
        }
    };

    const textareaRef = React.createRef();

    const changeHeight = (e) => {
        textareaRef.current.style.height = `${props.defaultHeight + 2}px`;
        let contentHeight = `${e.target.scrollHeight}px`;
        textareaRef.current.style.height = contentHeight;
        props.onHeightChange && props.onHeightChange();
    };

    //проверяю значение на пустое для ресета высоты при сабмите
    useEffect(() => {
        if (!form.values[field.name]) resetHeight();
    }, [form.values]);

    const resetHeight = () => {
        textareaRef.current.style.height = `${props.defaultHeight + 2}px`;
    };

    const inputClassName = InputClassSwitch(props.inputType);

    return (
        <textarea
            ref={textareaRef}
            style={{ height: `${props.defaultHeight}px`, maxHeight: props.maxHeight }}
            type={props.type}
            name={field.name}
            onChange={(e) => {
                form.handleChange(e);
                changeHeight(e);
            }}
            onFocus={() => {
                props.onFocus && props.onFocus()
            }}
            onBlur={() => {
                props.onBlur && props.onBlur();
            }}
            value={field.value}
            className={inputClassName}
            placeholder={props.placeholder}
        />
    );
};

export const renderTextarea = ({ input, type, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    const hasWarning = meta.touched && meta.warning;

    //max length check
    props.inputMaxLength && input.value.length > props.inputMaxLength && (input.value = input.value.substr(0, props.inputMaxLength));

    const InputClassSwitch = (inputType) => {
        switch (inputType) {
            // case "loginInput":
            //     return styles.input + " " + styles.input_login;
            default:
                return styles.textarea;
        }
    };

    const inputClassName = InputClassSwitch(props.inputType);

    return (
        <div className={styles.inputWrap}>
            <textarea
                {...input}
                className={hasError || hasWarning ? inputClassName + " " + styles.textarea_error : inputClassName}
                placeholder={props.placeholder}
                type={type}
            />
            {!props.withoutWarning && hasError && <span className={styles.textareaError}>{meta.error}</span>}
            {!props.withoutWarning && hasWarning && <span className={styles.textareaWarning}>{meta.warning}</span>}
        </div>
    );
};

export const renderCheckbox = ({ input, type, meta, ...props }) => {
    return (
        <div className={styles.checkboxWrap}>
            <input {...input} name="rememberMe" className={styles.checkbox} type={"checkbox"} />
            <span className={styles.checkbox__text}>{props.text}</span>
        </div>
    );
};
