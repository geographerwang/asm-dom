import domApi, { nodes } from './domApi';

if (global !== undefined && global.window === undefined) global.window = {};

if (window.asmDomHelpers === undefined) window.asmDomHelpers = {};
window.asmDomHelpers.domApi = domApi;
window.asmDomHelpers.nodes = nodes;
