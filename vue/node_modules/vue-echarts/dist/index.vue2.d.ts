import { DefineComponent, Ref } from 'vue-demi';
import { init, SetOptionOpts } from 'echarts/core';

type InitType = typeof init;
type InitParameters = Parameters<InitType>;
type InitOptions = NonNullable<InitParameters[2]>;

type EChartsType = ReturnType<InitType>;
type SetOptionType = EChartsType["setOption"];
type Option = Parameters<SetOptionType>[0];

type UpdateOptions = SetOptionOpts;

/* eslint-disable @typescript-eslint/ban-types */


declare const LOADING_OPTIONS_KEY = "ecLoadingOptions";
declare const THEME_KEY = "ecTheme";
declare const INIT_OPTIONS_KEY = "ecInitOptions";
declare const UPDATE_OPTIONS_KEY = "ecUpdateOptions";

declare type ChartProps = {
  loading?: boolean;
  loadingOptions?: Record<string, unknown>;
  autoresize?: boolean;
  option?: Option;
  theme?: string | Record<string, unknown>;
  initOptions?: InitOptions;
  updateOptions?: UpdateOptions;
  group?: string;
  manualUpdate?: boolean;
};

type MethodNames =
  | "getWidth"
  | "getHeight"
  | "getDom"
  | "getOption"
  | "resize"
  | "dispatchAction"
  | "convertToPixel"
  | "convertFromPixel"
  | "containPixel"
  | "getDataURL"
  | "getConnectedDataURL"
  | "appendData"
  | "clear"
  | "isDisposed"
  | "dispose"
  | "setOption";

declare type ChartMethods = Pick<EChartsType, MethodNames>;

declare const Chart: DefineComponent<
  ChartProps,
  {
    root: Ref<HTMLElement | undefined>;
    chart: Ref<EChartsType | undefined>;
  },
  {},
  {},
  ChartMethods
>;

export { INIT_OPTIONS_KEY, LOADING_OPTIONS_KEY, THEME_KEY, UPDATE_OPTIONS_KEY, Chart as default };
