export function getPage(siteKey, url)
{
    const params = new URLSearchParams({
        pathname: window.location.pathname,
        siteKey,
    });

    fetch(`${url}?${params}`)
        .then(response => response.json())
        .then(data => {
            const countElement = document.getElementsByClassName('response-rocket-count');
            for (let i = 0; i < countElement.length; i++) {
                if (data.reactions > 0) {
                    countElement[i].innerHTML = data.reactions;
                }
            }
        })
        .catch(err => console.error(err));
}
