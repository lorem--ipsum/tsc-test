import * as React from 'react';

export type ComponentBPosition = 'top' | 'right' | 'bottom' | 'left';

export class ComponentB extends React.Component<React.Props<{}>, {}> {
  doSomething(values: ComponentBPosition) {
    return values;
  }

  render() {
    return <div/>;
  }
}
