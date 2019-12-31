/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import {createContext} from 'react';
import Store from '../store';

import {ViewAttributeSource} from 'react-devtools-shared/src/devtools/views/DevTools';
import {FrontendBridge} from 'react-devtools-shared/src/bridge';

export const BridgeContext = createContext<FrontendBridge>(
  ((null as any): FrontendBridge),
);
BridgeContext.displayName = 'BridgeContext';

export const StoreContext = createContext<Store>(((null as any): Store));
StoreContext.displayName = 'StoreContext';

export type ContextMenuContextType = {|
  isEnabledForInspectedElement: boolean,
  viewAttributeSourceFunction?: ?ViewAttributeSource,
|};

export const ContextMenuContext = createContext<ContextMenuContextType>({
  isEnabledForInspectedElement: false,
  viewAttributeSourceFunction: null,
});
ContextMenuContext.displayName = 'ContextMenuContext';
