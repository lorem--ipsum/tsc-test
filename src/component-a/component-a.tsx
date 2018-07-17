import * as React from 'react';

export type ComponentAPosition = 'top' | 'bottom' | 'left' | 'right';

export interface ComponentAProps extends React.Props<any> {
  position?: ComponentAPosition;
}

export class ComponentA extends React.Component<ComponentAProps, {}> {
  render() {
    return <div/>;
  }
}
