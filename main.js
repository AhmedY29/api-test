let username = document.getElementById("username");
let postContent = document.getElementById("post-content");
let postImg = document.getElementById("post-image");
let errorMsg = document.getElementById("errorMsg");
let submitBtn = document.getElementById("submit-btn");

let posts = document.getElementById("posts");

fetch("https://6821ad3d259dad2655b02055.mockapi.io/posts/posts")
  .then((response) => response.json())
  .then((data) =>
    data.foreach((post) => {
      let postItem = document.createElement("div");
      postItem.classList.add("post-item");

      let postAuthor = document.createElement("div");
      postAuthor.classList.add("post-author");

      let postAuthorName = document.createElement("h4");
      postAuthorName.classList.add("post-name-author");
      postAuthorName.innerText = post.username;
      let postAuthorAvatar = document.createElement("img");
      postAuthorAvatar.classList.add("post-name-avatar");
      postAuthorAvatar.src =
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";
      postAuthorAvatar.width = "30";
      postAuthor.appendChild(postAuthorAvatar);
      postAuthor.appendChild(postAuthorName);

      let postInfo = document.createElement("div");
      postInfo.classList.add("post-info");

      let postImage = document.createElement("img");
      postImage.src = post.img;
      postImage.classList.add("post-img");
      postImage.width = "250";
      postImage.height = "300";

      let postText = document.createElement("p");
      postText.classList.add("post-name-author");
      postText.innerText = post.textarea;

      let postBtns = document.createElement("div");
      postBtns.classList.add("btns");

      let detailsBtn = document.createElement("button");
      detailsBtn.classList.add("btn");
      detailsBtn.classList.add("btn-primary");
      detailsBtn.innerText = "عرض التفاصيل";
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn");
      deleteBtn.classList.add("btn-delete");
      deleteBtn.id = "delete-btn";
      deleteBtn.innerText = "حذف ";

      deleteBtn.addEventListener("click", () => {
        fetch(
          `http://6821ad3d259dad2655b02055.mockapi.io/posts/posts/${post.id}`,
          {
            method: "DELETE",

            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
      });

      postBtns.appendChild(detailsBtn);
      postBtns.appendChild(deleteBtn);

      postInfo.appendChild(postImage);
      postInfo.appendChild(postText);
      postInfo.appendChild(postBtns);

      postItem.appendChild(postAuthor);
      postItem.appendChild(postInfo);

      posts.appendChild(postItem);
    })
  );

submitBtn.addEventListener("click", () => {
  console.log(username.value, postContent.value, postImg.value);
  if (username.value == "" && postContent.value == "" && post.value) {
    errorMsg.innerText = "أدخل جميع الحقول";
  }
  fetch("https://6821ad3d259dad2655b02055.mockapi.io/posts/posts", {
    method: "POST",
    body: JSON.stringify({
      username: username.value,
      textarea: postContent.value,
      img: postImg.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  setTimeout(() => {
    getPostItems();
  }, 500);
});
