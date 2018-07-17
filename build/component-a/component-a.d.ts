import * as React from 'react';
export declare type ComponentAPosition = 'top' | 'bottom' | 'left' | 'right';
export interface ComponentAProps extends React.Props<any> {
    position?: ComponentAPosition;
}
export declare class ComponentA extends React.Component<ComponentAProps, {}> {
    render(): JSX.Element;
}
