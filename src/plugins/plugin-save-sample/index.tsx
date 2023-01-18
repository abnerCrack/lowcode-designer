import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import { Button } from '@alifd/next';
import { saveSchema, resetSchema } from '../../services/api';
import { getId } from 'src/utils';

// 保存功能示例
const SaveSamplePlugin = (ctx: ILowCodePluginContext) => {
  return {
    async init() {
      const { skeleton, hotkey } = ctx;
      const id = getId();

      skeleton.add({
        name: 'saveSample',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: <Button onClick={() => saveSchema(id)}>保存到本地</Button>,
      });
      skeleton.add({
        name: 'resetSchema',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: <Button onClick={() => resetSchema(id)}>重置页面</Button>,
      });
      hotkey.bind('command+s', (e) => {
        e.preventDefault();
        saveSchema(id);
      });
    },
  };
};
SaveSamplePlugin.pluginName = 'SaveSamplePlugin';
SaveSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default SaveSamplePlugin;
