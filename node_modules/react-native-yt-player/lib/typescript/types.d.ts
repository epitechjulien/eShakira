/// <reference types="react" />
export declare enum YTWebViewState {
    UNSTARTED = -1,
    ENDED = 0,
    PLAYING = 1,
    PAUSED = 2,
    BUFFERING = 3,
    CUED = 5
}
export interface YTWebViewProps {
    videoId: string;
    autoPlay?: Boolean;
    style?: {};
    onReady?: () => void;
    onError?: () => void;
    onPlay?: () => void;
    onPlaying?: (s: number) => void;
    onPause?: () => void;
    onEnd?: () => void;
    onDurationReady?: (s: number) => void;
    onStateChange?: (s: YTWebViewState) => void;
    onPlaybackRateChange?: () => void;
    onPlaybackQualityChange?: () => void;
}
export interface PlayerState {
    ready: Boolean;
    layoutReady: Boolean;
    fullScreen: Boolean;
    play: Boolean;
    duration: number;
    currentTime: number;
    layout: {
        top: number;
        left: number;
    };
}
export declare const YTWebViewDefaultProps: {
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
export interface PlayerProps extends YTWebViewProps {
    loop: Boolean;
    topBar?: ({ play, fullScreen }: {
        play?: Boolean;
        fullScreen?: Boolean;
    }) => React.ReactNode;
    showFullScreenButton?: Boolean;
    onFullScreen?: (fullscreen: Boolean) => void;
    onStart?: () => void;
}
export declare const PlayerDefaultProps: {
    onFullScreen: () => void;
    loop: boolean;
    showFullScreenButton: boolean;
    onStart: () => void;
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
