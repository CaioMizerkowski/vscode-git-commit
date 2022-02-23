import { isArray } from 'util';
import { workspace } from 'vscode';
import { EXTENSION_NAME } from '../config/const';
import { getVariables } from './settings';

export const migrate = () => {
  // V2 to V2.1
  const oldVariables = getVariables();
  if (
    oldVariables.aliases &&
    !(oldVariables.prefix as string).includes('...')
  ) {
    const newVariables = {
      ...oldVariables,
      prefix: `aliases...${oldVariables.prefix}`,
    };
    workspace
      .getConfiguration(EXTENSION_NAME)
      .update('variables', newVariables, true);
    console.log('MIGRATION TEMPLATE V2 -> V2.1');
  }

  const v2Variables = getVariables();

  // V2.1/2 to V3
  if (v2Variables) {
    const newVariables = Object.keys(v2Variables).map((key) => {
      const oldData = v2Variables[key];
      if (Array.isArray(oldData)) {
        return oldData.map((d) => ({
          label: d.label,
          detail: d.detail,
        }));
      }
    });
    workspace
      .getConfiguration(EXTENSION_NAME)
      .update('variables', newVariables, true);
    console.log('MIGRATION TEMPLATE V2.1/2 -> V3');
  }
};
