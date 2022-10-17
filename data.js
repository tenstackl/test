var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Unknown Admin",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Unknown Admin",
                date: Date.now(),
                content: "Zapraszam na forum Unknown"
            },
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Unknown Admin",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Unknown Admin",
                date: Date.now(),
                content: "Zapraszam na forum Unkown"
            },
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
