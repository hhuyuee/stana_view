import Vue from 'vue';
import { SvgIcon } from '@jd/jdc-vue-toolkit';

Vue.component(SvgIcon.name, SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
