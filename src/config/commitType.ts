import { QuickPickItem, QuickPickOptions } from 'vscode';

// @types
export interface CommitType extends QuickPickItem {
  label: string
  key: string | number
  detail: string
};

// Data
export const commitTypes: Array<CommitType> = [
  {
    label: '✨feature',
    detail: 'Select when creating new things',
    key: 'feature'
  },
  {
    label: '🐞fix',
    detail: 'Select when fixing a bug',
    key: 'fix'
  },
  {
    label: '📄docs',
    detail: 'Select when editing documentation',
    key: 'docs'
  },
  {
    label: '🖥️wip',
    detail: 'Select when work is not finished',
    key: 'wip'
  },
  {
    label: '🚅perfs',
    detail: 'Select when working on performances',
    key: 'perfs'
  },
  {
    label: '⏪rollback',
    detail: 'Select when undoing something',
    key: 'rollback'
  },
  {
    label: '🔵other',
    detail: 'Select when fixing a bug',
    key: 'other'
  }
];

// Options
export const CommitTypeOptions: QuickPickOptions = {
  matchOnDescription: true,
  matchOnDetail: true,
  ignoreFocusOut: true,
  placeHolder: 'Now, you\'re able to choose a prefix for your commit 😉'
};
