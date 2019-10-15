declare const styles: {
    inline: {
        position: "absolute";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        zIndex: number;
        elevation: number;
        backgroundColor: string;
    };
    fullScreen: {
        marginTop: number;
        flex: number;
        zIndex: number;
        elevation: number;
        alignContent: "center";
        justifyContent: "center";
        backgroundColor: string;
        position: "absolute";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    };
    button: {
        borderColor: string;
        borderWidth: number;
        margin: number;
        justifyContent: "center";
        alignItems: "center";
        height: number;
        borderRadius: number;
    };
    wrapper: {
        height: number;
        width: number;
        zIndex: number;
        backgroundColor: string;
        overflow: "visible";
    };
};
export default styles;
