/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

/* eslint-disable */

declare var __PROFILE__: boolean;
declare var __UMD__: boolean;
declare var __EXPERIMENTAL__: boolean;

declare var __REACT_DEVTOOLS_GLOBAL_HOOK__: any; /*?{
  inject: ?((stuff: Object) => void)
};*/

declare var trustedTypes: {|
  isHTML: (value as any) => boolean,
  isScript: (value as any) => boolean,
  isScriptURL: (value as any) => boolean,
  // TrustedURLs are deprecated and will be removed soon: https://github.com/WICG/trusted-types/pull/204
  isURL?: (value as any) => boolean,
|};

// ReactFeatureFlags www fork
declare module 'ReactFeatureFlags' {
  declare module.exports: any;
}

// ReactFiberErrorDialog www fork
declare module 'ReactFiberErrorDialog' {
  declare module.exports: {
    showErrorDialog: (error: unknown) => boolean,
  };
}

// EventListener www fork
declare module 'EventListener' {
  declare module.exports: {
    listen: (
      target: Element,
      type: string,
      callback: Function,
      priority?: number,
      options?: {passive: boolean},
    ) => mixed,
    capture: (target: Element, type: string, callback: Function) => mixed,
    captureWithPassiveFlag: (
      target: Element,
      type: string,
      callback: Function,
      passive: boolean,
    ) => mixed,
  };
}
