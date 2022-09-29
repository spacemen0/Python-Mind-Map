import { PropType, InjectionKey } from "vue-demi";
import { Ref as Ref$0 } from "vue-demi";
import { init, SetOptionOpts } from "echarts/core";
import { Ref } from "vue";
type InitType = typeof init;
type InitParameters = Parameters<InitType>;
type Theme = NonNullable<InitParameters[1]>;
type ThemeInjection = Theme | null | Ref<Theme | null>;
type InitOptions = NonNullable<InitParameters[2]>;
type InitOptionsInjection = InitOptions | null | Ref<InitOptions | null>;
type EChartsType = ReturnType<InitType>;
type SetOptionType = EChartsType["setOption"];
type Option = Parameters<SetOptionType>[0];
type UpdateOptions = SetOptionOpts;
type UpdateOptionsInjection = UpdateOptions | null | Ref<UpdateOptions | null>;
declare const THEME_KEY: InjectionKey<ThemeInjection>;
declare const INIT_OPTIONS_KEY: InjectionKey<InitOptionsInjection>;
declare const UPDATE_OPTIONS_KEY: InjectionKey<UpdateOptionsInjection>;
declare const LOADING_OPTIONS_KEY: InjectionKey<UnknownRecord | Ref$0<UnknownRecord>>;
type UnknownRecord = Record<string, unknown>;
declare const _default: import("vue-demi").DefineComponent<{
    loading: BooleanConstructor;
    loadingOptions: ObjectConstructor;
    autoresize: BooleanConstructor;
    option: PropType<import("echarts/types/dist/shared").ECBasicOption>;
    theme: {
        type: PropType<Theme>;
    };
    initOptions: PropType<{
        locale?: string | {
            time: {
                month: string[];
                monthAbbr: string[];
                dayOfWeek: string[];
                dayOfWeekAbbr: string[];
            };
            legend: {
                selector: {
                    all: string;
                    inverse: string;
                };
            };
            toolbox: {
                brush: {
                    title: {
                        rect: string;
                        polygon: string;
                        lineX: string;
                        lineY: string;
                        keep: string;
                        clear: string;
                    };
                };
                dataView: {
                    title: string;
                    lang: string[];
                };
                dataZoom: {
                    title: {
                        zoom: string;
                        back: string;
                    };
                };
                magicType: {
                    title: {
                        line: string;
                        bar: string;
                        stack: string;
                        tiled: string;
                    };
                };
                restore: {
                    title: string;
                };
                saveAsImage: {
                    title: string;
                    lang: string[];
                };
            };
            series: {
                typeNames: {
                    pie: string;
                    bar: string;
                    line: string;
                    scatter: string;
                    effectScatter: string;
                    radar: string;
                    tree: string;
                    treemap: string;
                    boxplot: string;
                    candlestick: string;
                    k: string;
                    heatmap: string;
                    map: string;
                    parallel: string;
                    lines: string;
                    graph: string;
                    sankey: string;
                    funnel: string;
                    gauge: string;
                    pictorialBar: string;
                    themeRiver: string;
                    sunburst: string;
                };
            };
            aria: {
                general: {
                    withTitle: string;
                    withoutTitle: string;
                };
                series: {
                    single: {
                        prefix: string;
                        withName: string;
                        withoutName: string;
                    };
                    multiple: {
                        prefix: string;
                        withName: string;
                        withoutName: string;
                        separator: {
                            middle: string;
                            end: string;
                        };
                    };
                };
                data: {
                    allData: string;
                    partialData: string;
                    withName: string;
                    withoutName: string;
                    separator: {
                        middle: string;
                        end: string;
                    };
                };
            };
        } | undefined;
        renderer?: ("canvas" | "svg") | undefined;
        devicePixelRatio?: number | undefined;
        useDirtyRect?: boolean | undefined;
        ssr?: boolean | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }>;
    updateOptions: PropType<import("echarts/types/dist/shared").SetOptionOpts>;
    group: StringConstructor;
    manualUpdate: BooleanConstructor;
}, {
    getWidth: () => number;
    getHeight: () => number;
    getDom: () => HTMLElement;
    getOption: () => import("echarts/types/dist/shared").ECBasicOption;
    resize: (opts?: import("echarts/types/dist/shared").ResizeOpts | undefined) => void;
    dispatchAction: (payload: import("echarts/types/dist/shared").Payload, opt?: boolean | {
        silent?: boolean | undefined;
        flush?: boolean | undefined;
    } | undefined) => void;
    convertToPixel: {
        (finder: string | {
            seriesIndex?: (number | false | number[] | "all" | "none") | undefined;
            seriesId?: ((string | number) | (string | number)[]) | undefined;
            seriesName?: ((string | number) | (string | number)[]) | undefined;
            geoIndex?: (number | false | number[] | "all" | "none") | undefined;
            geoId?: ((string | number) | (string | number)[]) | undefined;
            geoName?: ((string | number) | (string | number)[]) | undefined;
            bmapIndex?: (number | false | number[] | "all" | "none") | undefined;
            bmapId?: ((string | number) | (string | number)[]) | undefined;
            bmapName?: ((string | number) | (string | number)[]) | undefined;
            xAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
            xAxisId?: ((string | number) | (string | number)[]) | undefined;
            xAxisName?: ((string | number) | (string | number)[]) | undefined;
            yAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
            yAxisId?: ((string | number) | (string | number)[]) | undefined;
            yAxisName?: ((string | number) | (string | number)[]) | undefined;
            gridIndex?: (number | false | number[] | "all" | "none") | undefined;
            gridId?: ((string | number) | (string | number)[]) | undefined;
            gridName?: ((string | number) | (string | number)[]) | undefined;
            dataIndex?: number | undefined;
            dataIndexInside?: number | undefined;
        }, value: (string | number) | Date): number;
        (finder: string | {
            seriesIndex?: (number | false | number[] | "all" | "none") | undefined;
            seriesId?: ((string | number) | (string | number)[]) | undefined;
            seriesName?: ((string | number) | (string | number)[]) | undefined;
            geoIndex?: (number | false | number[] | "all" | "none") | undefined;
            geoId?: ((string | number) | (string | number)[]) | undefined;
            geoName?: ((string | number) | (string | number)[]) | undefined;
            bmapIndex?: (number | false | number[] | "all" | "none") | undefined;
            bmapId?: ((string | number) | (string | number)[]) | undefined;
            bmapName?: ((string | number) | (string | number)[]) | undefined;
            xAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
            xAxisId?: ((string | number) | (string | number)[]) | undefined;
            xAxisName?: ((string | number) | (string | number)[]) | undefined;
            yAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
            yAxisId?: ((string | number) | (string | number)[]) | undefined;
            yAxisName?: ((string | number) | (string | number)[]) | undefined;
            gridIndex?: (number | false | number[] | "all" | "none") | undefined;
            gridId?: ((string | number) | (string | number)[]) | undefined;
            gridName?: ((string | number) | (string | number)[]) | undefined;
            dataIndex?: number | undefined;
            dataIndexInside?: number | undefined;
        }, value: ((string | number) | Date)[]): number[];
    };
    convertFromPixel: {
        (finder: string | {
            seriesIndex?: (number | false | number[] | "all" | "none") | undefined;
            seriesId?: ((string | number) | (string | number)[]) | undefined;
            seriesName?: ((string | number) | (string | number)[]) | undefined;
            geoIndex?: (number | false | number[] | "all" | "none") | undefined;
            geoId?: ((string | number) | (string | number)[]) | undefined;
            geoName?: ((string | number) | (string | number)[]) | undefined;
            bmapIndex?: (number | false | number[] | "all" | "none") | undefined;
            bmapId?: ((string | number) | (string | number)[]) | undefined;
            bmapName?: ((string | number) | (string | number)[]) | undefined;
            xAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
            xAxisId?: ((string | number) | (string | number)[]) | undefined;
            xAxisName?: ((string | number) | (string | number)[]) | undefined;
            yAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
            yAxisId?: ((string | number) | (string | number)[]) | undefined;
            yAxisName?: ((string | number) | (string | number)[]) | undefined;
            gridIndex?: (number | false | number[] | "all" | "none") | undefined;
            gridId?: ((string | number) | (string | number)[]) | undefined;
            gridName?: ((string | number) | (string | number)[]) | undefined;
            dataIndex?: number | undefined;
            dataIndexInside?: number | undefined;
        }, value: number): number;
        (finder: string | {
            seriesIndex?: (number | false | number[] | "all" | "none") | undefined;
            seriesId?: ((string | number) | (string | number)[]) | undefined;
            seriesName?: ((string | number) | (string | number)[]) | undefined;
            geoIndex?: (number | false | number[] | "all" | "none") | undefined;
            geoId?: ((string | number) | (string | number)[]) | undefined;
            geoName?: ((string | number) | (string | number)[]) | undefined;
            bmapIndex?: (number | false | number[] | "all" | "none") | undefined;
            bmapId?: ((string | number) | (string | number)[]) | undefined;
            bmapName?: ((string | number) | (string | number)[]) | undefined;
            xAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
            xAxisId?: ((string | number) | (string | number)[]) | undefined;
            xAxisName?: ((string | number) | (string | number)[]) | undefined;
            yAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
            yAxisId?: ((string | number) | (string | number)[]) | undefined;
            yAxisName?: ((string | number) | (string | number)[]) | undefined;
            gridIndex?: (number | false | number[] | "all" | "none") | undefined;
            gridId?: ((string | number) | (string | number)[]) | undefined;
            gridName?: ((string | number) | (string | number)[]) | undefined;
            dataIndex?: number | undefined;
            dataIndexInside?: number | undefined;
        }, value: number[]): number[];
    };
    containPixel: (finder: string | {
        seriesIndex?: (number | false | number[] | "all" | "none") | undefined;
        seriesId?: ((string | number) | (string | number)[]) | undefined;
        seriesName?: ((string | number) | (string | number)[]) | undefined;
        geoIndex?: (number | false | number[] | "all" | "none") | undefined;
        geoId?: ((string | number) | (string | number)[]) | undefined;
        geoName?: ((string | number) | (string | number)[]) | undefined;
        bmapIndex?: (number | false | number[] | "all" | "none") | undefined;
        bmapId?: ((string | number) | (string | number)[]) | undefined;
        bmapName?: ((string | number) | (string | number)[]) | undefined;
        xAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
        xAxisId?: ((string | number) | (string | number)[]) | undefined;
        xAxisName?: ((string | number) | (string | number)[]) | undefined;
        yAxisIndex?: (number | false | number[] | "all" | "none") | undefined;
        yAxisId?: ((string | number) | (string | number)[]) | undefined;
        yAxisName?: ((string | number) | (string | number)[]) | undefined;
        gridIndex?: (number | false | number[] | "all" | "none") | undefined;
        gridId?: ((string | number) | (string | number)[]) | undefined;
        gridName?: ((string | number) | (string | number)[]) | undefined;
        dataIndex?: number | undefined;
        dataIndexInside?: number | undefined;
    }, value: number[]) => boolean;
    getDataURL: (opts?: {
        type?: "svg" | "png" | "jpeg" | undefined;
        pixelRatio?: number | undefined;
        backgroundColor?: import("echarts/types/dist/shared").ZRColor | undefined;
        excludeComponents?: string[] | undefined;
    } | undefined) => string;
    getConnectedDataURL: (opts?: {
        type?: "svg" | "png" | "jpeg" | undefined;
        pixelRatio?: number | undefined;
        backgroundColor?: import("echarts/types/dist/shared").ZRColor | undefined;
        connectedBackgroundColor?: import("echarts/types/dist/shared").ZRColor | undefined;
        excludeComponents?: string[] | undefined;
    } | undefined) => string;
    appendData: (params: {
        seriesIndex: number;
        data: any;
    }) => void;
    clear: () => void;
    isDisposed: () => boolean;
    dispose: () => void;
    chart: import("vue-demi").ShallowRef<import("echarts/types/dist/shared").EChartsType | undefined>;
    root: import("vue-demi").ShallowRef<HTMLElement | undefined>;
    setOption: (option: Option, updateOptions?: import("echarts/types/dist/shared").SetOptionOpts | undefined) => void;
    nonEventAttrs: import("vue-demi").ComputedRef<{
        [key: string]: any;
    }>;
}, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, Record<string, any>, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    loading: BooleanConstructor;
    loadingOptions: ObjectConstructor;
    autoresize: BooleanConstructor;
    option: PropType<import("echarts/types/dist/shared").ECBasicOption>;
    theme: {
        type: PropType<Theme>;
    };
    initOptions: PropType<{
        locale?: string | {
            time: {
                month: string[];
                monthAbbr: string[];
                dayOfWeek: string[];
                dayOfWeekAbbr: string[];
            };
            legend: {
                selector: {
                    all: string;
                    inverse: string;
                };
            };
            toolbox: {
                brush: {
                    title: {
                        rect: string;
                        polygon: string;
                        lineX: string;
                        lineY: string;
                        keep: string;
                        clear: string;
                    };
                };
                dataView: {
                    title: string;
                    lang: string[];
                };
                dataZoom: {
                    title: {
                        zoom: string;
                        back: string;
                    };
                };
                magicType: {
                    title: {
                        line: string;
                        bar: string;
                        stack: string;
                        tiled: string;
                    };
                };
                restore: {
                    title: string;
                };
                saveAsImage: {
                    title: string;
                    lang: string[];
                };
            };
            series: {
                typeNames: {
                    pie: string;
                    bar: string;
                    line: string;
                    scatter: string;
                    effectScatter: string;
                    radar: string;
                    tree: string;
                    treemap: string;
                    boxplot: string;
                    candlestick: string;
                    k: string;
                    heatmap: string;
                    map: string;
                    parallel: string;
                    lines: string;
                    graph: string;
                    sankey: string;
                    funnel: string;
                    gauge: string;
                    pictorialBar: string;
                    themeRiver: string;
                    sunburst: string;
                };
            };
            aria: {
                general: {
                    withTitle: string;
                    withoutTitle: string;
                };
                series: {
                    single: {
                        prefix: string;
                        withName: string;
                        withoutName: string;
                    };
                    multiple: {
                        prefix: string;
                        withName: string;
                        withoutName: string;
                        separator: {
                            middle: string;
                            end: string;
                        };
                    };
                };
                data: {
                    allData: string;
                    partialData: string;
                    withName: string;
                    withoutName: string;
                    separator: {
                        middle: string;
                        end: string;
                    };
                };
            };
        } | undefined;
        renderer?: ("canvas" | "svg") | undefined;
        devicePixelRatio?: number | undefined;
        useDirtyRect?: boolean | undefined;
        ssr?: boolean | undefined;
        width?: number | undefined;
        height?: number | undefined;
    }>;
    updateOptions: PropType<import("echarts/types/dist/shared").SetOptionOpts>;
    group: StringConstructor;
    manualUpdate: BooleanConstructor;
}>>, {
    autoresize: boolean;
    manualUpdate: boolean;
    loading: boolean;
}>;
declare const ECharts: typeof _default;
export { ECharts as default, THEME_KEY, INIT_OPTIONS_KEY, UPDATE_OPTIONS_KEY, LOADING_OPTIONS_KEY, _default };
