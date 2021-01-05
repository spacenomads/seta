const ua = navigator.userAgent.toLowerCase();
const isAndroid = ua.indexOf("android") > -1;

console.log({isAndroid});

export {isAndroid};
