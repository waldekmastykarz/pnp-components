import { Component, Prop, State } from '@stencil/core';
import { SPHttpClient } from '../../model';

@Component({
  tag: 'pnp-spfx-httptest',
  styleUrl: 'pnp-spfx-httptest.scss',
  shadow: true
})
export class PnpSpfxHttptest {
  @Prop() httpClient: SPHttpClient;
  @Prop() httpClientConfiguration: any;
  @Prop() siteUrl: string;
  @State() siteTitle: string = 'Loading...';

  componentDidLoad() {
    if (!this.httpClient || !this.httpClientConfiguration || !this.siteUrl) {
      this.siteTitle = '';
      console.error('Please configure httpClient, httpClientConfiguration and siteUrl');
      return;
    }

    this.httpClient
      .get(`${this.siteUrl}/_api/web?$select=Title`, this.httpClientConfiguration, {
        headers: {
          accept: 'application/json;odata.metadata=none'
        }
      })
      .then(res => res.json())
      .then((data: { Title: string; }): void => {
        this.siteTitle = data.Title;
      });
  }

  render() {
    return (
      <div>
        Site title: {this.siteTitle}
      </div>
    );
  }
}
