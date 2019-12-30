import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'Html5CanvasWebPartStrings';
import Html5Canvas from './components/Html5Canvas';
import { IHtml5CanvasProps } from './components/IHtml5CanvasProps';

export interface IHtml5CanvasWebPartProps {
  description: string;
}

export default class Html5CanvasWebPart extends BaseClientSideWebPart<IHtml5CanvasWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHtml5CanvasProps > = React.createElement(
      Html5Canvas,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
