/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

import {Fiber} from './ReactFiber';
import {
  ReactFundamentalImpl,
  ReactFundamentalComponentInstance,
} from 'shared/ReactTypes';

export function createFundamentalStateInstance<C, H>(
  currentFiber: Fiber,
  props: object,
  impl: ReactFundamentalImpl<C, H>,
  state: object,
): ReactFundamentalComponentInstance<C, H> {
  return {
    currentFiber,
    impl,
    instance: null,
    prevProps: null,
    props,
    state,
  };
}
