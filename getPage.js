export function getPage(siteKey)
{
    const params = new URLSearchParams({
        pathname: window.location.pathname,
        siteKey,
    });

    let url = 'https://responserocket.test/api/page';
    if (process.env.NODE_ENV === 'production') {
        url = 'https://responserocket.app/api/page';
    }

    fetch(`${url}?${params}`)
        .then(response => response.json())
        .then(data => {
            const countElement = document.getElementsByClassName('response-rocket-count');
            for (let i = 0; i < countElement.length; i++) {
                countElement[i].innerHTML = data.reactions;
            }
        })
        .catch(err => console.error(err));
}
