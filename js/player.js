export const initializePlayer = () => {
    if (document.querySelector('video')) {
        const player = new Plyr('video');
    }
};