export function getPage(siteKey, url)
{
    const widgetsWithIds = document.querySelectorAll('.rocket-widget[data-rocket-widget]');
    const widgetIds = [];

    if (widgetsWithIds.length) {
        widgetsWithIds.forEach((widget) => {
            widgetIds.push(widget.dataset.rocketWidget);
        });
    }

    console.log('Rocket Widgets To The Rescue', widgetIds);

    const params = new URLSearchParams({
        pathname: window.location.pathname,
        siteKey,
        widgetIds,
    });

    fetch(`${url}/widgets?${params}`)
        .then(response => response.json())
        .then(data => {
            data.map((widget) => {
                const publicId = widget.public_id;
                widget.reactions.map(reaction => {
                    const elements = document.querySelectorAll(`.response-rocket-button[data-widget-id="${publicId}"][data-reaction="${reaction.reaction}"]`);
                    for (let i = 0; i < elements.length; i++) {
                        if (reaction.clicks) {
                            elements[i].querySelector('span.response-rocket-count').innerHTML = reaction.clicks;
                        }
                    }
                });
            });
        })
        .catch(err => console.error(err));

    fetch(`${url}/page?${params}`)
        .then(response => response.json())
        .then(data => {
            if (data.reactions) {
                data.reactions.map((reaction) => {
                    let elements = document.querySelectorAll(`.response-rocket-button:not([data-widget-id])[data-reaction="${reaction.reaction}"]`);

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
