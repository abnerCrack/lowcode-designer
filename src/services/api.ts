import { material, project } from '@alilc/lowcode-engine';
import { filterPackages } from '@alilc/lowcode-plugin-inject';
import { Message, Dialog } from '@alifd/next';
import { ProjectSchema, TransformStage } from '@alilc/lowcode-types';
import axios from 'axios';

import DefaultPageSchema from './defaultPageSchema.json';
import DefaultI18nSchema from './defaultI18nSchema.json';

const generateProjectSchema = (pageSchema: any, i18nSchema: any): ProjectSchema => {
  return {
    componentsTree: [pageSchema],
    componentsMap: material.componentsMap as any,
    version: '1.0.0',
    i18n: i18nSchema,
  };
};

export const saveSchema = async (id: string) => {
  await saveToServer(id);
  Message.success('成功保存到本地');
};

export const resetSchema = async (id: string) => {
  try {
    await new Promise<void>((resolve, reject) => {
      Dialog.confirm({
        content: '确定要重置吗？您所有的修改都将消失！',
        onOk: () => {
          resolve();
        },
        onCancel: () => {
          reject();
        },
      });
    });
  } catch (err) {
    return;
  }
  const defaultSchema = generateProjectSchema(DefaultPageSchema, DefaultI18nSchema);

  project.importSchema(defaultSchema as any);
  project.simulatorHost?.rerender();
  await saveToServer(id);

  Message.success('成功重置页面');
};

const getLSName = (ns: string = '__project__') => `${'__default__'}:${ns}`;

export const getProjectSchemaFromServer = async (id: string) => {
  if (!id) {
    console.error('id is required!');
    return;
  }
  try {
    const response = await axios.get(`/api/page/schema/${id}`);
    return response.data;
  } catch (error) {
    console.log('⚠️ getProjectSchemaFromServer:', error);
    return undefined;
  }
};
export const getPackagesFromServer = async (id: string) => {
  if (!id) {
    console.error('id is required!');
    return;
  }
  try {
    const response = await axios.get(`/api/page/packages/${id}`);
    return response.data;
  } catch (error) {
    return '{}';
  }
};

const saveToServer = async (id: string) => {
  if (!id) {
    console.error('id is required!');
    return;
  }
  const packages = await filterPackages(material.getAssets().packages);

  axios
    .put(`/api/page/${id}`, {
      packages: packages,
      schema: project.exportSchema(TransformStage.Save),
    })
    .then(function (response) {
      console.log('✅ 保存成功', response);
      Message.success('✅ 保存成功');
    })
    .catch(function (error) {
      Message.error(error.message);
      console.log(error);
    })
    .finally(async () => {
      // Message.success('✅ 保存成功');
    });
};

export const getProjectSchema = async (id: string): Promise<ProjectSchema> => {
  const pageSchema = await getPageSchema(id);
  return generateProjectSchema(pageSchema, DefaultI18nSchema);
};

export const getPageSchema = async (id: string) => {
  const pageSchema = getProjectSchemaFromServer(id)?.componentsTree?.[0];
  if (pageSchema) {
    return pageSchema;
  }

  return DefaultPageSchema;
};

export const getPreviewLocale = () => {
  const key = getLSName('previewLocale');
  return window.localStorage.getItem(key) || 'zh-CN';
};

export const setPreviewLocale = (locale: string) => {
  const key = getLSName('previewLocale');
  window.localStorage.setItem(key, locale || 'zh-CN');
  window.location.reload();
};
