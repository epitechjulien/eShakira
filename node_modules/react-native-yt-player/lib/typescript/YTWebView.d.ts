import { Component } from "react";
import { YTWebViewState, YTWebViewProps } from "./types";
export default class YTWebView extends Component<YTWebViewProps> {
    static defaultProps: {
        style: {};
        autoPlay: boolean;
        onReady: () => void;
        onError: () => void;
        onPlay: () => void;
        onPause: () => void;
        onEnd: () => void;
        onPlaying: () => void;
        onDurationReady: () => void;
        onStateChange: () => void;
        onPlaybackRateChange: () => void;
        onPlaybackQualityChange: () => void;
    };
    webview: any;
    invoke: import("react-native-webview-invoke/factory").IMessager;
    _createPlayer: (...args: any[]) => Promise<{}>;
    _playVideo: (...args: any[]) => Promise<{}>;
    _pauseVideo: (...args: any[]) => Promise<{}>;
    _seekTo: (...args: any[]) => Promise<{}>;
    invokeFunctions: () => void;
    componentDidMount: () => Promise<void>;
    initPlayer: () => Promise<void>;
    onStateChange: (state: YTWebViewState) => void;
    render(): JSX.Element;
}
