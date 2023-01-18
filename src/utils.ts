export const getId = function () {
  const { gConfig = {} } = window as any;

  if (location.search) {
    return new URLSearchParams(location.search).get('id') || 'default';
  }
  if (gConfig && gConfig.id) {
    return gConfig.id;
  }
  return 'default';
};
