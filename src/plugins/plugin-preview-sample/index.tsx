import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import { Button } from '@alifd/next';
import { saveSchema } from '../../services/api';
import { getId } from 'src/utils';

// 保存功能示例
const PreviewSamplePlugin = (ctx: ILowCodePluginContext) => {
  return {
    async init() {
      const { skeleton } = ctx;
      const id = getId()
      const doPreview = () => {
        saveSchema(id);
        setTimeout(() => {
          window.open(`./preview.html?${id}`);
        }, 500);
      };
      skeleton.add({
        name: 'preview',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button type="primary" onClick={() => doPreview()}>
            预览
          </Button>
        ),
      });
    },
  };
};
PreviewSamplePlugin.pluginName = 'PreviewSamplePlugin';
PreviewSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default PreviewSamplePlugin;


