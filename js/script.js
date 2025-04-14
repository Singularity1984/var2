function showMore(button, id) {
    var content = document.getElementById(id);
    
    if (content.classList.contains("hideBlog")) {
        content.classList.remove('hideBlog');
        content.classList.add('showBlog');
        button.innerText = "Скрыть";
    } else {
        content.classList.remove('showBlog');
        content.classList.add('hideBlog');
        button.innerText = "Читать далее";
    }
}
