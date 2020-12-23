

import { createBrowserHistory } from 'history';

const instance = createBrowserHistory();

// import { createHashHistory } from 'history';

// const instance = createHashHistory({
//   basname: '/',
//   hashType: 'slash',
// });

export const navigateTo = path => instance.push(path);

export default instance;