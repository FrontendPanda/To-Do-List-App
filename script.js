const postNameInput = document.getElementById("post-name-input")
const postTaskInput = document.getElementById("post-task-input")
const submitButton = document.getElementById("submit-button")
const postsDisplayArea = document.getElementById("tasks-display-area")

class Post {
    constructor(title, task) {
        this.title = title
        this.task = task
        this.delete = false
    }
}

submitButton.addEventListener("click", () => {
    if (postNameInput.value !== "" && postTaskInput.value !== "") {
        let post = createPost(postNameInput.value, postTaskInput.value)
        appendPost(post)
        postNameInput.value = ""
        postTaskInput.value = ""
    }
})

const createPost = (title, task) => {
    let newPost = new Post(title, task)
    return newPost
}

const appendPost = (post) => {
    let postChild = document.createElement("div")
    postChild.innerHTML = `<h3>${post.title}</h3>
                        <p>${post.task}</p>
                        <img src="/images/delete.png" alt="" class="delete-button" />`
    postChild.classList.add("tasks-display-child")
    postsDisplayArea.appendChild(postChild)

    let deleteButtons = document.querySelectorAll(".delete-button")
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.parentNode.remove()
        })
    })
}
