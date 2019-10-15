/// <reference types="react" />
declare type Props = {
    value: number;
    visible: Boolean;
    fullScreen: Boolean;
    duration: number;
    playVideo: () => void;
    pauseVideo: () => void;
    seekTo: (t: number) => void;
};
declare const _default: ({ value, visible, seekTo, duration, pauseVideo, playVideo, fullScreen }: Props) => JSX.Element;
export default _default;
