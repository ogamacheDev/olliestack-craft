import '../css/app.scss'

if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    });
}