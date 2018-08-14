import { Component, Prop } from '@stencil/core';

@Component({
  tag: '{{kebabCase name}}',
  styleUrl: '{{kebabCase name}}.scss',
  shadow: true
})
export class {{pascalCase name}} {

  render() {
    return (
      <div>

      </div>
    );
  }
}
