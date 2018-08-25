import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
import uiFabricCSS from 'spfx-uifabric-themes/index.js';

export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {

    console.log(uiFabricCSS());

    // let themeCache = window["__themeState__"];
    // console.log(themeCache.theme);

    // var keys = Object.keys(themeCache.theme);

    // var allVariables = [];

    // keys.forEach(element => {
    //   allVariables.push("    --" + element + ": " + themeCache.theme[element] + ";");
    // });

    // console.log(allVariables);

    // window["allVariables"] = allVariables;

    // var includeInRoot = `:root{
    //     content: 'hello world';
    //     ${allVariables.sort().join('\r\n')}
    // }`;

    // let styleSheetFragment = document.createElement('style');
    // styleSheetFragment.innerHTML = includeInRoot;
    // document.head.appendChild(styleSheetFragment);



    this.domElement.innerHTML = `
      <div class="${ styles.helloWorld}">
        <div class="${ styles.container}">
          <div class="${ styles.row}">
            <div class="${ styles.column}">
              <span class="${ styles.title}">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle}">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description}">${escape(this.properties.description)}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button}">
                <span class="${ styles.label}">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
