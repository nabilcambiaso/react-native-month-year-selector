import moment from "moment";
import "moment/min/locales";
import PropTypes from "prop-types";
import React from "react";
import { TextStyle, ViewStyle } from "react-native";
interface MonthSelectorProps {
    selectedDate: moment.Moment;
    currentDate: moment.Moment;
    maxDate: moment.Moment;
    minDate: moment.Moment;
    selectedBackgroundColor: string;
    selectedMonthTextStyle: TextStyle;
    seperatorColor: string;
    seperatorHeight: number;
    nextIcon: JSX.Element;
    prevIcon: JSX.Element;
    nextText: string;
    prevText: string;
    containerStyle: ViewStyle;
    yearTextStyle: TextStyle;
    monthTextStyle: TextStyle;
    currentMonthTextStyle: TextStyle;
    monthFormat: string;
    initialView: moment.Moment;
    onMonthTapped: (month: moment.Moment) => any;
    onYearChanged: (year: moment.Moment) => any;
    monthDisabledStyle: TextStyle;
    localeLanguage: string;
    localeSettings: moment.LocaleSpecification;
    swipable: boolean;
    velocityThreshold: number;
    directionalOffsetThreshold: number;
    gestureIsClickThreshold: number;
}
interface MonthSelectorState {
    initialView: moment.Moment;
}
declare class MonthSelector extends React.Component<MonthSelectorProps, MonthSelectorState> {
    static propTypes: {
        selectedDate: PropTypes.Requireable<any>;
        currentDate: PropTypes.Requireable<any>;
        maxDate: PropTypes.Requireable<any>;
        minDate: PropTypes.Requireable<any>;
        selectedBackgroundColor: PropTypes.Requireable<string>;
        selectedMonthStyle: PropTypes.Requireable<any>;
        seperatorColor: PropTypes.Requireable<string>;
        seperatorHeight: PropTypes.Requireable<number>;
        nextIcon: PropTypes.Requireable<any>;
        prevIcon: PropTypes.Requireable<any>;
        nextText: PropTypes.Requireable<string>;
        prevText: PropTypes.Requireable<string>;
        containerStyle: PropTypes.Requireable<any>;
        yearTextStyle: PropTypes.Requireable<any>;
        monthTextStyle: PropTypes.Requireable<any>;
        currentMonthTextStyle: PropTypes.Requireable<any>;
        monthFormat: PropTypes.Requireable<string>;
        initialView: PropTypes.Requireable<any>;
        onMonthTapped: PropTypes.Requireable<(...args: any[]) => any>;
        onYearChanged: PropTypes.Requireable<(...args: any[]) => any>;
        monthDisabledStyle: PropTypes.Requireable<any>;
        localeLanguage: PropTypes.Requireable<string>;
        localeSettings: PropTypes.Requireable<any>;
        swipable: PropTypes.Requireable<boolean>;
        velocityThreshold: PropTypes.Requireable<number>;
        directionalOffsetThreshold: PropTypes.Requireable<number>;
        gestureIsClickThreshold: PropTypes.Requireable<number>;
    };
    static defaultProps: {
        selectedDate: moment.Moment;
        currentDate: moment.Moment;
        maxDate: moment.Moment;
        minDate: moment.Moment;
        selectedBackgroundColor: string;
        selectedMonthTextStyle: {
            color: string;
        };
        seperatorHeight: number;
        seperatorColor: string;
        nextIcon: any;
        prevIcon: any;
        nextText: string;
        prevText: string;
        containerStyle: any;
        yearTextStyle: any;
        monthFormat: string;
        currentMonthTextStyle: {
            color: string;
        };
        monthTextStyle: {
            color: string;
        };
        initialView: moment.Moment;
        onMonthTapped: (month: any) => void;
        onYearChanged: (year: any) => void;
        monthDisabledStyle: {
            color: string;
        };
        localeLanguage: string;
        localeSettings: {};
        swipable: boolean;
        velocityThreshold: number;
        directionalOffsetThreshold: number;
        gestureIsClickThreshold: number;
    };
    constructor(props: any);
    UNSAFE_componentWillMount(): void;
    getSelectedBackgroundColor(month: moment.Moment): {
        backgroundColor: string;
    } | {
        backgroundColor?: undefined;
    };
    getSelectedForeGround(month: moment.Moment): TextStyle;
    getMonthActualComponent(month: moment.Moment, isDisabled?: boolean): JSX.Element;
    getMonthComponent(month: moment.Moment): JSX.Element;
    isMonthEnabled(month: moment.Moment): boolean;
    isYearEnabled(isNext: boolean): boolean;
    handleMonthTaps: (month: moment.Moment) => void;
    handNextPrevTaps: (isNext: boolean) => void;
    renderQ(months: moment.Moment[], qNo: number): JSX.Element;
    renderHeader(): JSX.Element;
    handleSwipe(gestureName: any): void;
    render(): JSX.Element;
}
export default MonthSelector;
