/**
 * 工具集
 **
 */
import React, {createElement} from 'react';
import dynamic from 'dva/dynamic';


export const modelNotExisted = (app, model) =>
  // eslint-disable-next-line
  !app._models.some(({namespace}) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  });

let routerDataCache;

// wrapper of dynamic
export const dynamicWrapper = (app, models, component) => {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach(model => {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require(`../models/${model}`).default);
      }
    });
    return props => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return createElement(component().default, {
        ...props,
        routerData: routerDataCache,
      });
    };
  }
  // () => import('module')
  return dynamic({
    app,
    models: () =>
      models.filter(model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)),
    // add routerData prop
    component: () => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return component().then(raw => {
        const Component = raw.default || raw;
        return props =>
          createElement(Component, {
            ...props,
            routerData: routerDataCache,
          });
      });
    },
  });
};

export const getShortdate = (date) => {
  if(!date){
    return '';
  }
  return date.split(' ')[0];
}

export const spaceStatusEnmu={
  'free':'free',
  'rented':'rented',
  'disable':'disable',
  'decorate':'decorate',
  'sold':'sold'
};

export const billStatusEnmu={
  'unPayed':'00A',
  'payed':'00C',
  'cancel':'00X'
};

export const billPayStatusEnmu={
  'unPayed':'P0X',
  'payed':'P00'
};
