import * as React from 'react';
export declare type ComponentBPosition = 'top' | 'right' | 'bottom' | 'left';
export declare class ComponentB extends React.Component<React.Props<{}>, {}> {
    doSomething(values: ComponentBPosition): import("../component-a/component-a").ComponentAPosition;
    render(): JSX.Element;
}
