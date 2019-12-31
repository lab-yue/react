/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import {createContext} from 'react';

import {
  CanViewElementSource,
  ViewElementSource,
} from 'react-devtools-shared/src/devtools/views/DevTools';

export type Context = {|
  canViewElementSourceFunction: CanViewElementSource | null,
  viewElementSourceFunction: ViewElementSource | null,
|};

const ViewElementSourceContext = createContext<Context>(((null as any): Context));
ViewElementSourceContext.displayName = 'ViewElementSourceContext';

export default ViewElementSourceContext;
