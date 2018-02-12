class StoryArchive {
    constructor() {
        this.stories = [{
            "title": "Hell Eyes",
            "fandom": [
                "Harry Potter",
            ],
            "author": "Jezaray",
            "url": "https://fanfiction.net/s/2686394/1/",
            "summary": "Harry was born cursed, but didn't know util he fell through a portal to another world. There people have wings and hate him for his curse, but it gives him power: power to change this new world as well as his own.",
            "tags": [
                "AU: Another Realm",
                "AU: Creature Features",
                "HP-AU: 5th Year",
            ],
            "meta": {
                "rating": "m",
                "genres": [
                    "Adventure",
                    "Suspense",
                ],
                "chapters": "53",
                "words": "210k+",
                "updated": "Aug 4, 2009",
                "published": "Dec 3, 2005",
            }
        }, {
            "title": "A Long Journey Home",
            "fandom": [
                "Harry Potter",
            ],
            "author": "Rakeesh",
            "url": "https://fanfiction.net/s/9860311/1/",
            "summary": "In one world, it was Harry Potter who defeated Voldemort. In another, it was Jasmine Potter instead. But her victory wasn't the end - her struggles continued long afterward. And began long, long before.",
            "tags": [
                "AU: Genderswap",
                "GS: Harry Potter",
            ],
            "meta": {
                "rating": "t",
                "genres": [
                    "Adventure",
                    "Drama",
                ],
                "chapters": "14",
                "words": "203k+",
                "updated": "Mar 6, 2017",
                "published": "Nov 19, 2013",
            }
        }, {
            "title": "The Forgotten Potter",
            "fandom": [
                "Avengers",
                "Harry Potter",
            ],
            "author": "njeha",
            "url": "https://fanfiction.net/s/11761202/1/",
            "summary": "James and Lily Potter has given birth to twins. On that Halloween night, they mistake the real prophecy child, leading to years of abandonment; which ends up being the biggest mistake the light side have ever made.",
            "tags": [
                "AU: Abuse",
                "AU: Genderswap",
                "HP-AU: Wrong Boy-Who-Lived",
                "HP-AU: Dark Harry Potter",
                "HP-AU: Genius Harry Potter",
                "HP-AU: Powerful Harry Potter",
                "HP-AU: Master of Death",
                "HP-GS: Harry Potter",
                "HP-MOD: Harry Potter",
            ],
            "meta": {
                "rating": "m",
                "genres": [
                    "Angst",
                    "Supernatural",
                ],
                "chapters": "27",
                "words": "143k+",
                "updated": "Feb 7, 2017",
                "published": "Jan 30, 2016",
            }
        }];

        this.stories = this.sortByKey(this.stories, 'title');

        this.idResults = document.getElementById('js__results');

        this.stories.forEach((story) => {
            this.idResults.appendChild(this.drawStory(story));
        });
    }

    search(tags) {
        let searched = [];

        let searchedStories = false;

        tags.forEach((tag) => {
            if (searched.length > 0) {
                searched.forEach((story) => {
                    if (this.allValuesOf(story).includes(tags[i])) {
                        searched.push(story);
                    } else {
                        searched = searched.filter((e) => {
                            return e !== story;
                        })
                    }
                });
            } else if (!searchedStories) {
                this.stories.forEach((story) => {
                    if (this.allValuesOf(story).includes(tag)) {
                        searched.push(story);
                    }
                });
                searchedStories = true;
            } else {

            }
        });

        this.idResults.innerHTML = '';

        searched.forEach((story) => {
            this.idResults.appendChild(this.drawStory(story));
        });
    }

    // noinspection JSMethodCanBeStatic
    allValuesOf(object) {
        let allValues = [];

        let valuesOfObject = Object.keys(object).map((i) => object[i]);

        for (let i = 0; i < valuesOfObject.length; i++) {
            if (valuesOfObject[i] instanceof Array) {
                allValues = allValues.concat(valuesOfObject[i]);
            } else if (valuesOfObject[i] instanceof Object) {
                allValues = allValues.concat(this.allValuesOf(valuesOfObject[i]));
            } else {
                allValues.push(valuesOfObject[i]);
            }
        }

        return allValues;
    }

    // noinspection JSMethodCanBeStatic
    db(tag, attributes, children) {
        let element = document.createElement(tag);

        if (attributes instanceof Array) {
            attributes.forEach((attribute) => {
                element.setAttribute(attribute[0], attribute[1]);
            });
        } else if (attributes instanceof Object) {
            for (let key of Object.keys(attributes)) {
                element.setAttribute(key, attributes[key]);
            }
        }

        if (children instanceof Array) {
            children.forEach((child) => {
                if (child instanceof Node) {
                    element.appendChild(child);
                } else if (child instanceof Array) {
                    child.forEach((grandchild) => {
                        if (grandchild instanceof Node) {
                            element.appendChild(grandchild);
                        } else {
                            element.appendChild(document.createTextNode(grandchild));
                        }
                    });
                } else {
                    element.appendChild(document.createTextNode(child));
                }
            });
        }

        return element;
    }

    drawStory(story) {
        const header = this.db('div', {'class': 'panel-header'}, [
            this.db('h3', null, [
                this.db('a', {'href': story['url']}, [
                    story['title']
                ]),
                ' By ',
                story['author'],
                this.db('br', null, null),
                story['fandom'].join(', ')
            ])
        ]);

        const body = this.db('div', {'class': 'panel-body'}, [
            this.db('p', null, [
                story['summary']
            ])
        ]);

        const footer = this.db('div', {'class': 'panel-footer'}, [
            this.db('p', null, [
                story['tags'].join(', '),
                this.db('br', null, null),
                this.db('br', null, null),
                this.capitalize(story['meta']['rating']), ', ',
                story['meta']['genres'].join(', '), ', ',
                story['meta']['chapters'], ', ',
                story['meta']['words'], ', ',
                story['meta']['updated'], ', ',
                story['meta']['published']
            ])
        ]);

        return this.db('div', [['class', 'panel']], [
            header,
            body,
            footer
        ]);
    }

    // https://stackoverflow.com/questions/8175093/simple-function-to-sort-an-array-of-objects/8175221#8175221
    sortByKey(array, key) {
        return array.sort((a, b) => {
            let x = a[key];
            let y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    // noinspection JSMethodCanBeStatic
    capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}

let storyarchive = new StoryArchive();

document.getElementById('js__input--search').addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
        storyarchive.search(
            document.getElementById("js__input--search").value.split(/[,][\s]?/)
        );
    }
});
