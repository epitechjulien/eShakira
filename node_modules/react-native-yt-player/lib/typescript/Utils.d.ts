import Animated from "react-native-reanimated";
export declare const VideoSize: {
    inline: {
        width: number;
        height: number;
    };
    fullScreen: {
        height: number;
        width: number;
    };
};
export declare const fullScreenInterpolate: (width: Animated.Value<number>, layout: {
    top: number;
    left: number;
}) => {
    top: Animated.Node<number>;
    height: Animated.Node<number>;
    left: Animated.Node<number>;
};
export declare const sec2time: (time: number) => string;
