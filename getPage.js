export function getPage(siteKey, url)
{
    const params = new URLSearchParams({
        pathname: window.location.pathname,
        siteKey,
    });

    fetch(`${url}?${params}`)
        .then(response => response.json())
        .then(data => {
            if (data.reactions) {
                data.reactions.map((reaction) => {
                    console.log(reaction);
                  const elements = document.querySelectorAll(`.response-rocket-button[data-reaction="${reaction.reaction}"]`);
                  for (let i = 0; i < elements.length; i++) {
                    if (reaction.clicks) {
                      elements[i].querySelector('span.response-rocket-count').innerHTML = reaction.clicks;
                    }
                  }
                });
            }
        })
        .catch(err => console.error(err));
}
