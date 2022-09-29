export function getPage(siteKey)
{
    const params = new URLSearchParams({
        pathname: window.location.pathname,
        siteKey,
    });

    fetch(`${import.meta.env.VITE_PAGE_URL}?${params}`)
        .then(response => response.json())
        .then(data => {
            const countElement = document.getElementsByClassName('response-rocket-count');
            for (let i = 0; i < countElement.length; i++) {
                countElement[i].innerHTML = data.reactions;
            }
        })
        .catch(err => console.error(err));
}
