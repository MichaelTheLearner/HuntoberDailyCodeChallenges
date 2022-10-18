const parseDomainName = (url) => {

    return url.replace('http://', '').replace('https://', '').replace('www','').split('.')[0]
}