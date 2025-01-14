import { DocumentRegistry } from '@jupyterlab/docregistry';
import { NotebookPanel, INotebookModel } from '@jupyterlab/notebook';

import { NotebookPresenter } from './presenter';

export class NotebookDeckExtension
  implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel>
{
  private _presenter: NotebookPresenter;

  constructor(options: DeckExtension.IOptions) {
    this._presenter = options.presenter;
  }

  createNew(
    panel: NotebookPanel,
    context: DocumentRegistry.IContext<INotebookModel>,
  ): void {
    this._presenter.preparePanel(panel);
  }
}

export namespace DeckExtension {
  export interface IOptions {
    presenter: NotebookPresenter;
  }
}
