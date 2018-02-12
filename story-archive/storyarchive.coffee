---
---

stories = [{% for story in site.data.storyarchive %}
    {
        "title": "{{ story.title }}"
        "fandom": [{% for fandom in story.fandoms %}
            "{{ fandom }}"{% endfor %}
        ],
        "author": "{{ story.author }}"
        "url": "{{ story.url}}"
        "summary": "{{ story.summary }}"
        "tags": [{% for tag in story.tags %}
            "{{ tag }}"{% endfor %}
        ],
        "meta": {
            "rating": "{{ story.meta.rating }}"
            "genres": [{% for genre in story.meta.genres %}
                "{{ genre }}"{% endfor %}
            ],
            "chapters": "{{ story.meta.chapters }}"
            "words": "{{ story.meta.words }}"
            "updated": "{{ story.meta.updated }}"
            "published": "{{ story.meta.published }}"
        }
    }
    {% unless forloop.last %}, {% endunless %}{% endfor %}
]

# https://stackoverflow.com/questions/8175093/simple-function-to-sort-an-array-of-objects/8175221#8175221
sortByKey = (array, key) ->
    array.sort (a, b) ->
        x = a[key]
        y = b[key]
        if x < y then -1 else if x > y then 1 else 0

stories = sortByKey(stories, 'title')

capitalize = (string) ->
    string.charAt(0).toUpperCase() + string.slice(1)

db = (tag, attribute, child) ->
    element = document.createElement(tag)

    if attribute instanceof Array
        for i in [0...attribute.length]
            element.setAttribute attribute[i][0], attribute[i][1]

    if child instanceof Array
        for j in [0...child.length]
            if child[j] instanceof Node
                element.appendChild child[j]
            else
                if child[j] instanceof Array
                    for k in [0...child[j].length]
                        console.log k
                        element.appendChild document.createTextNode(child[j][k])
                        if k != child[j].length
                            element.appendChild document.createTextNode(', ')
                else
                    element.appendChild document.createTextNode(child[j])
    element

drawStory = (story) ->
    return db('div', [['class', 'panel']], [
        db('div', [['class', 'panel-header']], [
            db('h3', null, [
                db('a', [['href', stories[story]['url']]], [
                    stories[story]['title']
                ]),
                ' By ',
                stories[story]['author'],
                db('br', null, null),
                storyFandoms
            ])
        ]),
        db('div', [['class', 'panel-body']], [
            db('p', null, [
                stories[story]['summary']
            ])
        ]),
        db('div', [['class', 'panel-footer']], [
            db('p', null, [
                storyTags,
                db('br', null, null),
                capitalize(stories[story]['meta']['rating']), ', ',
                storyGenres,
                stories[story]['meta']['chapters'], ', ',
                stories[story]['meta']['words'], ', ',
                stories[story]['meta']['updated'], ', ',
                stories[story]['meta']['published']
            ])
        ])
    ])

idResults = document.getElementById('js__results')

inputSearch = document.getElementById('js__input--search')

inputSearch.addEventListener 'keyup', (event) ->
    event.preventDefault()
    if event.keyCode == 13
        search = inputSearch.value.split(/[,][\s]?/)
        
        
    return

for story in [0...stories.length]
    storyFandoms = []
    for fandom in [0...stories[story]['fandom'].length]
        storyFandoms.push(stories[story]['fandom'][fandom])

    storyTags = []
    for tag in [0...stories[story]['tags'].length]
        storyTags.push(stories[story]['tags'][tag])

    storyGenres = []
    for genre in [0...stories[story]['meta']['genres'].length]
        storyGenres.push(stories[story]['meta']['genres'][genre])

    idResults.appendChild(
        db(
            'div',
            [['class', 'panel']],
            [
                db(
                    'div',
                    [['class', 'panel-header']],
                    [
                        db(
                            'h3',
                            null,
                            [
                                db(
                                    'a',
                                    [['href', stories[story]['url']]],
                                    [
                                        stories[story]['title']
                                    ]
                                ),
                                ' By ',
                                stories[story]['author'],
                                db('br', null, null),
                                storyFandoms
                            ]
                        )
                    ]
                ),
                db(
                    'div',
                    [['class', 'panel-body']],
                    [
                        db(
                            'p',
                            null,
                            [
                                stories[story]['summary']
                            ]
                        )
                    ]
                ),
                db(
                    'div',
                    [['class', 'panel-footer']],
                    [
                        db(
                            'p',
                            null,
                            [
                                storyTags,
                                db('br', null, null),
                                capitalize(stories[story]['meta']['rating']), ', ',
                                storyGenres, ', '
                                stories[story]['meta']['chapters'], ', ',
                                stories[story]['meta']['words'], ', ',
                                stories[story]['meta']['updated'], ', ',
                                stories[story]['meta']['published']
                            ]
                        )
                    ]
                )
            ]
        )
    )