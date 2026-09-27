/* =====================================================
   HYDERABAD UNSEEN
   Main JavaScript
===================================================== */


/* =====================================================
   BLOG DATA
===================================================== */

const posts = [

    {
        id: 1,

        title: "When Golconda Turns Gold",

        category: "Heritage",

        location: "Golconda Fort",

        date: "September 18, 2026",

        readTime: "8 min read",

        image:
            "https://www.hoteldekho.com/storage/img/tourattraction/1651214859golconda-fort-hyderabad.jpg",

        excerpt:
            "A quiet evening exploring the ancient walls, dramatic skies and golden light of Golconda.",

        bestTime:
            "4:30 PM – Sunset",

        bestFor:
            "Architecture & Sunset Photography",

        body: `
            <p>
                There is a moment in the evening when the stone walls
                of Golconda begin to catch the last light of the day.
                The fort seems to change colour as the sun moves lower
                across the Deccan sky.
            </p>

            <p>
                Walk slowly through the old pathways and look beyond
                the obvious viewpoints. Arches, broken walls, shadows
                and distant city views create countless photographic
                opportunities.
            </p>

            <p>
                For photographers, late afternoon is especially
                interesting because the hard sunlight gradually becomes
                softer and warmer.
            </p>
        `
    },


    {
        id: 2,

        title: "Charminar After the Crowds",

        category: "Heritage",

        location: "Old City",

        date: "September 14, 2026",

        readTime: "6 min read",

        image:
            "https://thumbs.dreamstime.com/b/scenic-shot-charminar-background-huge-crowd-hyderabad-269130964.jpg",

        excerpt:
            "The Old City becomes a different world when the busy afternoon slowly turns into evening.",

        bestTime:
            "5:00 PM – 8:00 PM",

        bestFor:
            "Street Photography",

        body: `
            <p>
                Around Charminar, every street seems to have its own
                rhythm. Shopkeepers prepare for the evening, lights
                begin to appear and the movement of people becomes part
                of the architecture.
            </p>

            <p>
                Instead of photographing only the monument, look around
                it. Doorways, shop signs, bicycles, shadows and small
                conversations can become the real story.
            </p>

            <p>
                The Old City rewards patience. Sometimes the strongest
                photograph is the one that appears when you stop looking
                for it.
            </p>
        `
    },


    {
        id: 3,

        title: "A Quiet Evening by Hussain Sagar",

        category: "Nature",

        location: "Hussain Sagar",

        date: "September 10, 2026",

        readTime: "5 min read",

        image:
            "https://www.siasat.com/wp-content/uploads/2025/08/Siasat-21-780x470.jpg",

        excerpt:
            "A slower side of Hyderabad found beside the water as the sun disappears behind the city.",

        bestTime:
            "5:00 PM – Sunset",

        bestFor:
            "Landscape Photography",

        body: `
            <p>
                Hussain Sagar is one of those places where Hyderabad
                briefly slows down. The water catches the changing
                colours of the sky while the city continues moving
                around it.
            </p>

            <p>
                Sunset is the obvious attraction, but the moments just
                before and after sunset can be even more interesting.
                Reflections become softer and city lights begin to
                appear.
            </p>
        `
    },


    {
        id: 4,

        title: "The Streets of Laad Bazaar",

        category: "Street Life",

        location: "Laad Bazaar",

        date: "September 6, 2026",

        readTime: "7 min read",

        image:
            "https://cdn.thevoiceoffashion.com/articleheaderimage/5bc5ab532e915.jpg",

        excerpt:
            "Colourful shops, narrow lanes and the everyday energy of one of Hyderabad's famous markets.",

        bestTime:
            "Late Afternoon",

        bestFor:
            "Street & People Photography",

        body: `
            <p>
                Laad Bazaar is full of colour. Glass bangles, old
                storefronts, busy lanes and passing faces create an
                environment where almost every few steps can become
                another photograph.
            </p>

            <p>
                A small camera and a patient approach work better than
                constantly searching for dramatic compositions.
            </p>
        `
    },


    {
        id: 5,

        title: "Hyderabad's Irani Chai Culture",

        category: "Food",

        location: "Old Hyderabad",

        date: "August 29, 2026",

        readTime: "5 min read",

        image:
            "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/04/18152621/nimra1-2.jpg?fm=webp&w=750&h=500&dpr=2",

        excerpt:
            "A visual journey through tea rooms, old cafés and the familiar rhythm of Irani chai.",

        bestTime:
            "Morning & Evening",

        bestFor:
            "Food Photography",

        body: `
            <p>
                Irani chai is more than a drink in Hyderabad. It is
                part of the city's café culture and a reason to pause
                during a busy day.
            </p>

            <p>
                Photographing food is often about atmosphere. Steam,
                old tables, glass cups, warm lighting and people talking
                can tell a stronger story than a perfectly arranged
                plate.
            </p>
        `
    },
    {
        id: 6,

        title: "Hyderabadi Kacche-Gosht ki Biryani",

        category: "Food",

        location: "Old Hyderabad",

        date: "August 29, 2026",

        readTime: "5 min read",

        image:
            "https://www.yummyfoodrecipes.com/resources/picture/org/Traditional-Kachche-Gosht-K.jpg",

        excerpt:
            "",

        bestTime:
            "Lunch & Late Night",

        bestFor:
            "Food Photography",

        body: `
            <p>
                When the dough seal of the heavy copper degh (pot) 
                is broken, a cloud of aromatic steam fills the room. 
                It carries the rich scent of pure ghee, saffron, 
                fried onions (biryanis), and a complex blend of warm spices.
            </p>

            <p>
                Much like Irani Chai, eating Hyderabadi Biryani is an experience 
                tied to its surroundings. Whether it is served on a large communal 
                platter (thaal) at a bustling Old Hyderabad wedding or inside a 
                noisy, brightly lit restaurant under the hum of ceiling fans, 
                it is a dish that demands your full attention. It is traditionally
                 paired with Mirchi ka Salan (a spicy, tangy green chili and peanut curry) 
                 and Dahi ki Chutney (a cooling yogurt raita) to balance the heat..
            </p>
        `
    },



    {
        id: 7,

        title: "Hyderabad After Dark",

        category: "Photography",

        location: "Central Hyderabad",

        date: "August 22, 2026",

        readTime: "6 min read",

        image:
            "https://live.staticflickr.com/4317/35628982700_3911159300_b.jpg",

        excerpt:
            "When the sun goes down, the city's architecture and streets begin to tell a different story.",

        bestTime:
            "7:00 PM – 10:00 PM",

        bestFor:
            "Night Photography",

        body: `
            <p>
                Hyderabad at night is a combination of artificial
                light, moving traffic and historic architecture.
                Familiar places can suddenly feel completely different.
            </p>

            <p>
                Look for reflections, headlights, silhouettes and
                contrasting colours. Night photography rewards
                experimentation.
            </p>
        `
    },


    {
        id: 8,

        title: "The Silence of Qutb Shahi Tombs",

        category: "Hidden Gems",

        location: "Qutb Shahi Tombs",

        date: "August 17, 2026",

        readTime: "7 min read",

        image:
            "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Qutb_Shahi_Tomb_5.jpg/960px-Qutb_Shahi_Tomb_5.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",

        excerpt:
            "A peaceful architectural landscape hidden among trees and centuries of history.",

        bestTime:
            "Early Morning",

        bestFor:
            "Architecture & Minimal Photography",

        body: `
            <p>
                Away from the traffic and noise of central Hyderabad,
                the Qutb Shahi Tombs offer a very different atmosphere.
            </p>

            <p>
                Symmetry, domes, pathways and surrounding greenery make
                the area particularly interesting for photographers who
                enjoy architectural compositions.
            </p>
        `
    },


    {
        id: 9,

        title: "The City from Durgam Cheruvu",

        category: "Nature",

        location: "Durgam Cheruvu",

        date: "August 12, 2026",

        readTime: "5 min read",

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSCGtPuZFxFalX4AFZ1F7fFxSwul3kHHquwTV7yEbduwpSqmVpjkT9-eR&s=10",

        excerpt:
            "Water, bridges and the modern Hyderabad skyline come together around Durgam Cheruvu.",

        bestTime:
            "Sunset",

        bestFor:
            "Landscape Photography",

        body: `
            <p>
                Durgam Cheruvu offers a glimpse of another Hyderabad —
                one defined by modern buildings, bridges and expanding
                urban spaces.
            </p>

            <p>
                At sunset, the contrast between the water and skyline
                creates an interesting visual connection between the
                city's natural and modern sides.
            </p>
        `
    },


    {
        id: 10,

        title: "Chowmahalla's Quiet Courtyards",

        category: "Heritage",

        location: "Chowmahalla Palace",

        date: "August 4, 2026",

        readTime: "6 min read",

        image:
            "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2016/02/Hyderabad-heritage-walks.jpg",

        excerpt:
            "Elegant courtyards, historic architecture and details that reward a slower eye.",

        bestTime:
            "Morning",

        bestFor:
            "Architecture Photography",

        body: `
            <p>
                Historic architecture is often about details rather than
                scale. Courtyards, columns, decorative elements and
                repeating patterns can reveal a different character of
                Hyderabad's heritage.
            </p>
        `
    },


    {
        id: 11,

        title: "Sunday Morning in the Old City",

        category: "Street Life",

        location: "Old City",

        date: "July 29, 2026",

        readTime: "5 min read",

        image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f7/A_typical_charminar_evening.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",

        excerpt:
            "A slower morning walk through Hyderabad's historic neighbourhoods.",

        bestTime:
            "Early Morning",

        bestFor:
            "Street Photography",

        body: `
            <p>
                Early mornings offer a completely different perspective
                on the Old City. The streets are quieter and the light
                is softer.
            </p>
        `
    }
];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const postsGrid =
    document.getElementById("postsGrid");

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const categoryCards =
    document.querySelectorAll(".category-card");

const loadMoreBtn =
    document.getElementById("loadMoreBtn");

const articleModal =
    document.getElementById("articleModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalLocation =
    document.getElementById("modalLocation");

const modalDate =
    document.getElementById("modalDate");

const modalReadTime =
    document.getElementById("modalReadTime");

const modalBody =
    document.getElementById("modalBody");

const detailLocation =
    document.getElementById("detailLocation");

const detailTime =
    document.getElementById("detailTime");

const detailFor =
    document.getElementById("detailFor");

const relatedGrid =
    document.getElementById("relatedGrid");

const bookmarkBtn =
    document.getElementById("bookmarkBtn");

const shareBtn =
    document.getElementById("shareBtn");

const commentForm =
    document.getElementById("commentForm");

const commentsList =
    document.getElementById("commentsList");

const themeToggle =
    document.getElementById("themeToggle");

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");

const backTop =
    document.getElementById("backTop");

const header =
    document.getElementById("header");

const newsletterForm =
    document.getElementById("newsletterForm");

const toast =
    document.getElementById("toast");


/* =====================================================
   STATE
===================================================== */

let currentFilter = "All";

let searchTerm = "";

let visiblePosts = 6;

let currentPost = null;


/* =====================================================
   GET FILTERED POSTS
===================================================== */

function getFilteredPosts() {

    return posts.filter(post => {

        const matchesCategory =
            currentFilter === "All" ||
            post.category === currentFilter;

        const text =
            `
            ${post.title}
            ${post.category}
            ${post.location}
            ${post.excerpt}
            `.toLowerCase();

        const matchesSearch =
            text.includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });
}


/* =====================================================
   DISPLAY POSTS
===================================================== */

function displayPosts() {

    const filteredPosts =
        getFilteredPosts();

    const postsToShow =
        filteredPosts.slice(0, visiblePosts);

    postsGrid.innerHTML = "";


    if (postsToShow.length === 0) {

        postsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-face-frown"></i>

                <h3>No stories found</h3>

                <p>
                    Try another search or category.
                </p>
            </div>
        `;

        loadMoreBtn.style.display = "none";

        return;
    }


    postsToShow.forEach((post, index) => {

        const card =
            document.createElement("article");

        card.className = "post-card";

        card.style.animationDelay =
            `${index * 0.06}s`;

        const saved =
            isBookmarked(post.id);

        card.innerHTML = `

            <div class="post-image">

                <img
                    src="${post.image}"
                    alt="${post.title}"
                    loading="lazy"
                >

                <span class="post-category">
                    ${post.category}
                </span>

                <button
                    class="bookmark-card"
                    data-bookmark="${post.id}"
                    aria-label="Bookmark story"
                >
                    <i class="${
                        saved
                        ? "fa-solid"
                        : "fa-regular"
                    } fa-bookmark"></i>
                </button>

            </div>


            <h3>
                ${post.title}
            </h3>

            <p class="post-excerpt">
                ${post.excerpt}
            </p>

            <div class="post-meta">

                <span>
                    ${post.location}
                </span>

                <span>
                    ${post.date}
                </span>

            </div>
        `;


        card.addEventListener("click", event => {

            if (
                event.target.closest(
                    "[data-bookmark]"
                )
            ) {
                return;
            }

            openPost(post.id);
        });


        const bookmark =
            card.querySelector(
                "[data-bookmark]"
            );

        bookmark.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleBookmark(post.id);

                displayPosts();
            }
        );


        postsGrid.appendChild(card);

    });


    if (visiblePosts >= filteredPosts.length) {

        loadMoreBtn.style.display = "none";

    } else {

        loadMoreBtn.style.display = "inline-flex";
    }
}


/* =====================================================
   FILTER BUTTONS
===================================================== */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            currentFilter =
                button.dataset.filter;

            visiblePosts = 6;

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            displayPosts();

            document
                .getElementById("stories")
                .scrollIntoView({
                    behavior: "smooth"
                });
        }
    );

});


/* =====================================================
   CATEGORY CARDS
===================================================== */

categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            currentFilter =
                card.dataset.filter;

            visiblePosts = 6;

            filterButtons.forEach(btn => {

                btn.classList.toggle(
                    "active",
                    btn.dataset.filter === currentFilter
                );

            });

            displayPosts();

            document
                .getElementById("stories")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});


/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
    "input",
    event => {

        searchTerm =
            event.target.value.trim();

        visiblePosts = 6;

        displayPosts();

    }
);


/* =====================================================
   LOAD MORE
===================================================== */

loadMoreBtn.addEventListener(
    "click",
    () => {

        visiblePosts += 3;

        displayPosts();

    }
);


/* =====================================================
   OPEN POST
===================================================== */

function openPost(id) {

    const post =
        posts.find(item => item.id === id);

    if (!post) return;

    currentPost = post;


    modalImage.src = post.image;

    modalImage.alt = post.title;

    modalTitle.textContent =
        post.title;

    modalCategory.textContent =
        post.category.toUpperCase();

    modalLocation.innerHTML =
        `<i class="fa-solid fa-location-dot"></i>
         ${post.location}`;

    modalDate.textContent =
        post.date;

    modalReadTime.textContent =
        post.readTime;

    modalBody.innerHTML =
        post.body;

    detailLocation.textContent =
        post.location;

    detailTime.textContent =
        post.bestTime;

    detailFor.textContent =
        post.bestFor;


    updateBookmarkButton();

    displayRelatedPosts(post);


    loadComments(post.id);


    articleModal.classList.add("active");

    articleModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    articleModal.classList.remove(
        "active"
    );

    articleModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}

modalClose.addEventListener(
    "click",
    closeModal
);


document
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closeModal
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            articleModal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* =====================================================
   RELATED POSTS
===================================================== */

function displayRelatedPosts(post) {

    const related =
        posts
            .filter(item =>
                item.id !== post.id &&
                item.category === post.category
            )
            .slice(0, 3);


    relatedGrid.innerHTML = "";


    related.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            "related-card";

        card.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.title}"
            >

            <h4>
                ${item.title}
            </h4>
        `;


        card.addEventListener(
            "click",
            () => openPost(item.id)
        );


        relatedGrid.appendChild(card);

    });

}


/* =====================================================
   BOOKMARKS
===================================================== */

function getBookmarks() {

    return JSON.parse(
        localStorage.getItem(
            "hyderabadBookmarks"
        )
    ) || [];

}


function isBookmarked(id) {

    return getBookmarks()
        .includes(id);

}


function toggleBookmark(id) {

    let bookmarks =
        getBookmarks();


    if (bookmarks.includes(id)) {

        bookmarks =
            bookmarks.filter(
                item => item !== id
            );

        showToast(
            "Removed from bookmarks"
        );

    } else {

        bookmarks.push(id);

        showToast(
            "Story saved"
        );

    }


    localStorage.setItem(
        "hyderabadBookmarks",
        JSON.stringify(bookmarks)
    );


    updateBookmarkButton();

}


function updateBookmarkButton() {

    if (!currentPost) return;


    const saved =
        isBookmarked(currentPost.id);


    bookmarkBtn.innerHTML = saved

        ? `
            <i class="fa-solid fa-bookmark"></i>
            <span>Saved</span>
          `

        : `
            <i class="fa-regular fa-bookmark"></i>
            <span>Save</span>
          `;
}


bookmarkBtn.addEventListener(
    "click",
    () => {

        if (!currentPost) return;

        toggleBookmark(
            currentPost.id
        );

    }
);


/* =====================================================
   SHARE
===================================================== */

shareBtn.addEventListener(
    "click",
    async () => {

        if (!currentPost) return;


        const shareData = {

            title:
                currentPost.title,

            text:
                currentPost.excerpt,

            url:
                window.location.href

        };


        try {

            if (
                navigator.share
            ) {

                await navigator.share(
                    shareData
                );

            } else {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                showToast(
                    "Story link copied"
                );

            }

        } catch (error) {

            console.log(
                "Share cancelled"
            );

        }

    }
);


/* =====================================================
   COMMENTS
===================================================== */

function getComments(postId) {

    const allComments =
        JSON.parse(
            localStorage.getItem(
                "hyderabadComments"
            )
        ) || {};

    return allComments[postId] || [];

}


function saveComments(
    postId,
    comments
) {

    const allComments =
        JSON.parse(
            localStorage.getItem(
                "hyderabadComments"
            )
        ) || {};


    allComments[postId] =
        comments;


    localStorage.setItem(
        "hyderabadComments",
        JSON.stringify(
            allComments
        )
    );

}


function loadComments(postId) {

    const comments =
        getComments(postId);


    commentsList.innerHTML = "";


    if (!comments.length) {

        commentsList.innerHTML = `
            <p class="post-excerpt">
                Be the first to leave a comment.
            </p>
        `;

        return;
    }


    comments.forEach(comment => {

        const item =
            document.createElement("div");

        item.className =
            "comment";

        item.innerHTML = `

            <strong>
                ${escapeHTML(
                    comment.name
                )}
            </strong>

            <p>
                ${escapeHTML(
                    comment.text
                )}
            </p>

        `;

        commentsList.appendChild(item);

    });

}


commentForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (!currentPost) return;


        const name =
            document
                .getElementById(
                    "commentName"
                )
                .value
                .trim();


        const text =
            document
                .getElementById(
                    "commentText"
                )
                .value
                .trim();


        if (!name || !text) {
            return;
        }


        const comments =
            getComments(
                currentPost.id
            );


        comments.push({
            name,
            text
        });


        saveComments(
            currentPost.id,
            comments
        );


        commentForm.reset();

        loadComments(
            currentPost.id
        );

        showToast(
            "Comment posted"
        );

    }
);


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   THEME
===================================================== */

function setTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add(
            "dark"
        );

        themeToggle.innerHTML =
            `<i class="fa-solid fa-sun"></i>`;

    } else {

        document.body.classList.remove(
            "dark"
        );

        themeToggle.innerHTML =
            `<i class="fa-solid fa-moon"></i>`;
    }


    localStorage.setItem(
        "hyderabadTheme",
        theme
    );

}


const savedTheme =
    localStorage.getItem(
        "hyderabadTheme"
    ) || "light";


setTheme(savedTheme);


themeToggle.addEventListener(
    "click",
    () => {

        const isDark =
            document.body.classList.contains(
                "dark"
            );

        setTheme(
            isDark
                ? "light"
                : "dark"
        );

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

menuBtn.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "active"
        );


        const icon =
            menuBtn.querySelector("i");


        if (
            nav.classList.contains("active")
        ) {

            icon.className =
                "fa-solid fa-xmark";

        } else {

            icon.className =
                "fa-solid fa-bars";
        }

    }
);


document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "active"
                );

                menuBtn
                    .querySelector("i")
                    .className =
                    "fa-solid fa-bars";

            }
        );

    });


/* =====================================================
   HEADER SCROLL
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 70) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }


        if (window.scrollY > 600) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   BACK TO TOP
===================================================== */

backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   NEWSLETTER
===================================================== */

newsletterForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            document
                .getElementById(
                    "emailInput"
                )
                .value
                .trim();


        if (!email) return;


        showToast(
            "You're subscribed to the journal."
        );


        newsletterForm.reset();

    }
);


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =====================================================
   INITIALIZE
===================================================== */

displayPosts();


/* =====================================================
   ACTIVE NAV ON SCROLL
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        document
            .querySelectorAll(".nav-link")
            .forEach(link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute("href") ===
                    `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

    }
);

/* =====================================================
   HYDERABAD AI ASSISTANT
===================================================== */

const aiAssistantBtn =
    document.getElementById("aiAssistantBtn");

const aiChat =
    document.getElementById("aiChat");

const aiClose =
    document.getElementById("aiClose");

const aiForm =
    document.getElementById("aiForm");

const aiInput =
    document.getElementById("aiInput");

const aiMessages =
    document.getElementById("aiMessages");

const aiSuggestions =
    document.querySelectorAll(
        ".ai-suggestions button"
    );


/* OPEN AI */

aiAssistantBtn.addEventListener(
    "click",
    () => {

        aiChat.classList.toggle("active");

        if (
            aiChat.classList.contains("active")
        ) {
            setTimeout(() => {
                aiInput.focus();
            }, 300);
        }

    }
);


/* CLOSE AI */

aiClose.addEventListener(
    "click",
    () => {

        aiChat.classList.remove(
            "active"
        );

    }
);


/* =====================================================
   ADD USER MESSAGE
===================================================== */

function addUserMessage(message) {

    const element =
        document.createElement("div");

    element.className =
        "ai-message user-message";

    element.innerHTML = `
        <div class="user-bubble">
            ${escapeHTML(message)}
        </div>
    `;

    aiMessages.appendChild(element);

    scrollAIToBottom();
}


/* =====================================================
   ADD AI MESSAGE
===================================================== */

function addAIMessage(message) {

    const element =
        document.createElement("div");

    element.className =
        "ai-message";

    element.innerHTML = `
        <div class="ai-message-avatar">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
        </div>

        <div class="ai-bubble">
            ${message}
        </div>
    `;

    aiMessages.appendChild(element);

    scrollAIToBottom();
}


/* =====================================================
   TYPING INDICATOR
===================================================== */

function showAITyping() {

    const element =
        document.createElement("div");

    element.className =
        "ai-message";

    element.id =
        "aiTyping";

    element.innerHTML = `
        <div class="ai-message-avatar">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
        </div>

        <div class="ai-bubble">

            <div class="ai-typing">

                <span></span>
                <span></span>
                <span></span>

            </div>

        </div>
    `;

    aiMessages.appendChild(element);

    scrollAIToBottom();
}


function removeAITyping() {

    const typing =
        document.getElementById(
            "aiTyping"
        );

    if (typing) {
        typing.remove();
    }

}


/* =====================================================
   SCROLL CHAT
===================================================== */

function scrollAIToBottom() {

    aiMessages.scrollTop =
        aiMessages.scrollHeight;

}


/* =====================================================
   LOCAL HYDERABAD KNOWLEDGE
===================================================== */

function getLocalAIResponse(question) {

    const q =
        question.toLowerCase();


    /* CHARMINAR */

    if (
        q.includes("charminar")
    ) {

        return `
            <strong>📍 Charminar</strong>

            <br><br>

            For photography, try the Old City
            during the late afternoon and early
            evening.

            <br><br>

            Look beyond the monument itself:
            capture the surrounding streets,
            markets, people, lights and architecture.

            <br><br>

            <strong>Photography idea:</strong>
            Try a low-angle architectural shot
            followed by a street-life frame.
        `;
    }


    /* GOLCONDA */

    if (
        q.includes("golconda") ||
        q.includes("golcond")
    ) {

        return `
            <strong>🏛️ Golconda Fort</strong>

            <br><br>

            Late afternoon is a beautiful time
            to photograph the fort because the
            changing sunlight creates strong
            shadows across the stone architecture.

            <br><br>

            Try photographing arches, walls,
            stairways and wide city views.

            <br><br>

            <strong>Tip:</strong>
            Give yourself enough time to explore
            instead of arriving only for sunset.
        `;
    }


    /* HUSSAIN SAGAR */

    if (
        q.includes("hussain") ||
        q.includes("lake")
    ) {

        return `
            <strong>🌅 Hussain Sagar</strong>

            <br><br>

            Hussain Sagar is particularly useful
            for sunset and cityscape photography.

            <br><br>

            Try reflections, silhouettes and
            wide compositions that include the
            skyline.

            <br><br>

            <strong>Best idea:</strong>
            Arrive before sunset so you can
            photograph both daylight and blue-hour
            conditions.
        `;
    }


    /* FOOD */

    if (
        q.includes("food") ||
        q.includes("biryani") ||
        q.includes("chai")
    ) {

        return `
            <strong>🍛 Hyderabad Food Photography</strong>

            <br><br>

            For a food-focused photo story,
            explore the Old City and traditional
            café culture.

            <br><br>

            Instead of photographing only the
            food, capture the entire atmosphere:
            tables, tea glasses, preparation,
            signs and people.

            <br><br>

            <strong>Story idea:</strong>
            "A morning through Hyderabad's
            Irani chai culture."
        `;
    }


    /* SUNSET */

    if (
        q.includes("sunset") ||
        q.includes("sun set")
    ) {

        return `
            <strong>🌅 Hyderabad Sunset Route</strong>

            <br><br>

            A photography-focused evening could
            include:

            <br><br>

            1. Hussain Sagar

            <br>

            2. Durgam Cheruvu

            <br>

            3. Golconda area

            <br><br>

            Arrive early at each location so you
            can explore compositions before the
            light changes.
        `;
    }


    /* PHOTOGRAPHY */

    if (
        q.includes("photograph") ||
        q.includes("photo") ||
        q.includes("camera")
    ) {

        return `
            <strong>📷 Hyderabad Photography</strong>

            <br><br>

            You can build different photo stories
            around:

            <br><br>

            🏛️ Heritage — Golconda, Charminar,
            Qutb Shahi architecture

            <br><br>

            🌆 City — Old City streets and markets

            <br><br>

            🌅 Landscapes — lakes and sunset views

            <br><br>

            🍛 Food — biryani and Irani chai culture

            <br><br>

            🌙 Night — illuminated architecture
            and city streets
        `;
    }


    /* HERITAGE */

    if (
        q.includes("heritage") ||
        q.includes("history") ||
        q.includes("historic")
    ) {

        return `
            <strong>🏛️ Hyderabad Heritage</strong>

            <br><br>

            For a heritage-focused photography
            journey, explore:

            <br><br>

            • Charminar

            <br>

            • Golconda Fort

            <br>

            • Qutb Shahi Tombs

            <br>

            • Chowmahalla Palace

            <br><br>

            Try creating a photo series rather
            than photographing each place as an
            isolated landmark.
        `;
    }


    /* HIDDEN GEMS */

    if (
        q.includes("hidden") ||
        q.includes("secret") ||
        q.includes("quiet")
    ) {

        return `
            <strong>✨ Hidden Hyderabad</strong>

            <br><br>

            If you want a quieter photography
            experience, look for historic
            courtyards, lesser-known architectural
            details, old neighbourhoods and
            peaceful lake views.

            <br><br>

            The best hidden-gem stories often
            come from exploring slowly rather
            than following a fixed checklist.
        `;
    }


    /* HELLO */

    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("hey") ||
        q.includes("namaste")
    ) {

        return `
            Namaste! 👋

            <br><br>

            I'm your <strong>Hyderabad AI</strong>
            photography guide.

            <br><br>

            Try asking:

            <br><br>

            • Best photography places?

            <br>

            • Charminar photography tips?

            <br>

            • Tell me about Golconda

            <br>

            • Suggest a sunset route
        `;
    }


    /* DEFAULT */

    return `
        I can help you explore
        <strong>Hyderabad</strong> through
        photography.

        <br><br>

        Try asking me about:

        <br><br>

        📷 Photography locations

        <br>

        🏛️ Heritage places

        <br>

        🌅 Sunset photography

        <br>

        🍛 Food stories

        <br>

        🌆 Old City

        <br>

        ✨ Hidden places
    `;
}


/* =====================================================
   AI FORM
===================================================== */

aiForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const question =
            aiInput.value.trim();


        if (!question) return;


        addUserMessage(
            question
        );


        aiInput.value = "";


        showAITyping();


        setTimeout(
            () => {

                removeAITyping();


                const response =
                    getLocalAIResponse(
                        question
                    );


                addAIMessage(
                    response
                );

            },
            700
        );

    }
);


/* =====================================================
   QUICK QUESTIONS
===================================================== */

aiSuggestions.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const question =
                    button.dataset.question;


                aiInput.value =
                    question;


                aiForm.dispatchEvent(
                    new Event("submit")
                );

            }
        );

    }
);