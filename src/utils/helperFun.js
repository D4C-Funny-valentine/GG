const pathnameSplit = (pathname, number = 2) => {
    const splited = pathname.split('/')[number];
    return splited
}

export {
    pathnameSplit
}