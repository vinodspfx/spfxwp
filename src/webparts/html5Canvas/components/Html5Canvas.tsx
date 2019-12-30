import * as React from 'react';
import styles from './Html5Canvas.module.scss';
import { IHtml5CanvasProps } from './IHtml5CanvasProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Html5Canvas extends React.Component < IHtml5CanvasProps, {} > {
  public render(): React.ReactElement<IHtml5CanvasProps> {
    return(
      <div className = { styles.html5Canvas } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
        <p className={styles.description}>{escape(this.props.description)}</p>
        <a href='https://aka.ms/spfx' className={styles.button}>
          <span className={styles.label}>Learn more</span>
        </a>
      </div>
    </div>
  </div>
      </div >
    );
  }
}
