import * as api from '@lp-labs/number-sign-classifier';
import { classifyNumber } from '@lp-labs/number-sign-classifier';
console.log(classifyNumber(-3));
// @ts-expect-error invalid argument must be rejected by declarations
api.classifyNumber('3');
