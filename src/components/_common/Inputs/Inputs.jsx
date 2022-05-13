import WarningWithPopup from "../WarningWithPopup/WarningWithPopup";
import styles from "./Inputs.module.scss";
import React, { useContext, useEffect } from "react";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { AppContext } from "../../../App";

export const RenderInputFormik = ({ form, field, options, onValueChange, children, ...props }) => {
    const appContext = useContext(AppContext);

    useEffect(() => {
        onValueChange && onValueChange(field.value);
    }, [field.value]);

    let wrapClassName = appContext.currentTheme === "dark" ? styles.inputWrap + " " + styles.inputWrap_dark : styles.inputWrap;
    let inputClassName;
    switch (props.type) {
        case "text":
            wrapClassName = options && options.icon ? wrapClassName + " " + styles.inputWrap_withIcon : wrapClassName;
            inputClassName = options && options.showErrors && form.errors[field.name] ? styles.input + " " + styles.input_error : styles.input;
            break;
        case "checkbox":
            wrapClassName = styles.checkboxWrap;
            inputClassName = styles.checkbox;
            break;
        default:
            inputClassName = options && options.showErrors && form.errors[field.name] ? styles.input + " " + styles.input_error : styles.input;
            break;
    }

    // const inputClassName = inputClassSwitch(props.inputType);

    return (
        <div className={wrapClassName}>
            <input
                style={{
                    border: options && options.border,
                    padding: options && options.padding,
                }}
                name={field.name}
                value={field.value}
                onChange={form.handleChange}
                className={inputClassName}
                checked={field.checked}
                {...props}
            />
            {options && options.icon && <SvgSelector className={styles.icon} id={options.icon} />}
            {props.label && <span className={styles.checkbox__label}>{props.label}</span>}
        </div>
    );
};

export const RenderInput = ({ input, type, meta, ...props }) => {
    const appContext = useContext(AppContext);
    const hasError = meta.touched && meta.error;
    const hasWarning = meta.touched && meta.warning;

    //max length check
    props.inputMaxLength && input.value.length > props.inputMaxLength && (input.value = input.value.substr(0, props.inputMaxLength));

    return (
        <div className={appContext.currentTheme === "dark" ? styles.inputWrap + " " + styles.inputWrap_dark : styles.inputWrap}>
            <input
                {...input}
                className={hasError || hasWarning ? styles.input + " " + styles.input_error : styles.input}
                placeholder={props.placeholder}
                type={type}
                autoComplete={props.autoComplete && props.autoComplete}
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
    const appContext = useContext(AppContext);

    const InputClassSwitch = (inputType) => {
        switch (inputType) {
            default:
                return appContext.currentTheme === "dark" ? styles.textarea + " " + styles.textarea_dark : styles.textarea;
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
                props.onFocus && props.onFocus();
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