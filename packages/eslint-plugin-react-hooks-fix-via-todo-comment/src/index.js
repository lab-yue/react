/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import RulesOfHooks from './RulesOfHooks.js';
import ExhaustiveDeps from './ExhaustiveDeps.js';

export const configs = {
  recommended: {
    plugins: ['react-hooks-fix-via-todo-comment'],
    rules: {
      'react-hooks-fix-via-todo-comment/rules-of-hooks': 'error',
      'react-hooks-fix-via-todo-comment/exhaustive-deps': 'warn',
    },
  },
};

export const rules = {
  'rules-of-hooks': RulesOfHooks,
  'exhaustive-deps': ExhaustiveDeps,
};
