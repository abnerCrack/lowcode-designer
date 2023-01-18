import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import { injectAssets } from '@alilc/lowcode-plugin-inject';
import assets from '../../services/assets.json';
import { getProjectSchema } from '../../services/api';
import { getId } from 'src/utils';
const EditorInitPlugin = (ctx: ILowCodePluginContext, options: any) => {
  return {
    async init() {
      const { material, project } = ctx;
      const id = getId()
      // config
      // const scenarioName = options['scenarioName'];
      // const scenarioDisplayName = options['displayName'] || scenarioName;
      // const scenarioInfo = options['info'] || {};
      // // 保存在 config 中用于引擎范围其他插件使用
      // config.set('scenarioName', scenarioName);
      // config.set('scenarioDisplayName', scenarioDisplayName);
      // config.set('scenarioInfo', scenarioInfo);

      // // 设置物料描述

      await material.setAssets(await injectAssets(assets));

      const schema = await getProjectSchema(id);
      // 加载 schema
      project.importSchema(schema as any);
    },
  };
};
EditorInitPlugin.pluginName = 'EditorInitPlugin';
EditorInitPlugin.meta = {
  preferenceDeclaration: {
    title: '保存插件配置',
    properties: [
      {
        key: 'scenarioName',
        type: 'string',
        description: '用于localstorage存储key',
      },
      {
        key: 'displayName',
        type: 'string',
        description: '用于显示的场景名',
      },
      {
        key: 'info',
        type: 'object',
        description: '用于扩展信息',
      },
    ],
  },
};
export default EditorInitPlugin;
