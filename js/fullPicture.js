const fullPicture = document.querySelector('.big-picture');
const commentTemplate = document.querySelector('.social__comment');

function addFullPhotoClickHandler (photo, pictureInfo) {
    photo.addEventListener('click', () => {
        const img = fullPicture.querySelector('.big_picture__img').querySelector('img');
        const description = fullPicture.querySelector('.social__caption');
        const likes = fullPicture.querySelector('.likes-count');
        const commentsCount = fullPicture.querySelector('.comments-count');
        const commentsCountInfo = fullPicture.querySelector('.social__comment-count');
        const comments= fullPicture.querySelector('.social__comments');
        const commentsLoader = fullPicture.querySelector('.comments-loader');

        img.src = pictureInfo.url;
        likes.textContent = pictureInfo.likes;
        commentsCount.textContent = pictureInfo.comments.length;
        description.textContent = pictureInfo.description;
        addComments(comments, pictureInfo.comments);
        showFullPhoto(commentsCountInfo, commentsLoader);
        addClosingClickYandler(commentsCountInfo, commentsLoader);
    });
}

function addComments (container, commentsInfo) {
    container.innerHTML = '';
    commentsInfo.forEach((commentsInfo) => {
        const newComment = commentTemplate.cloneNode(true);
        newComment.querySelector('.social__picture').src = commentsInfo.avatar;
        newComment.querySelector('.social__text').textContent = commentsInfo.message;
        container.append(newComment);
    });
}

function addClosingClickHandler (commentsCountInfo, commentsLoader) {
    const button = document.querySelector('/big-picture__cancel');
    button.addEventListener('click', () => {
        closeFullPhoto(commentsCountInfo, commentsLoader);
    });
    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            closeFullPhoto(commentsCountInfo, commentsLoader);
        }
    });
}

function closeFullPhoto (commentsCountInfo, commentsLoader) {
    fullPicture.classList.add('hidden');
    commentsCountInfo.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    document.querySelector('body').classList.remove('modal-open');
}

function showFullPhoto (commentsCountInfo, commentsLoader) {
    fullPicture.classList.remove('hidden');
    commentsCountInfo.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
}

export {addFullPhotoClickHandler};