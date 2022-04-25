export const infiniteScrollObserver = ({ root, rootMargin = '0px', threshold = 0.1 }, callbackFunc) => {
    let options = {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold,
    };

    // функция обратного вызова
    let callback = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callbackFunc()
                observer.unobserve(entry.target)
            }
        });
    };

    // наблюдатель
    let observer = new IntersectionObserver(callback, options);
    return observer;
}