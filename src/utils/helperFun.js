const pathnameSplit = (pathname, number = 2) => {
    const splited = pathname.split('/')[number];
    return splited
}
function checkPathname(pathname, array) {
    const baseUrl = array[0];
    return array.some(path => pathname === baseUrl || pathname.startsWith(`${baseUrl}/${path}`));
}

export {
    pathnameSplit,
    checkPathname
}