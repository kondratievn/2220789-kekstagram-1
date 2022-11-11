import { addFullPhotoClickHandler } from "./fullPicture";

const template = document.querySelector('#picture').content.querySelector('.picture')
const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

function createMiniatures (picturesInfo) {
    picturesInfo.forEach((pictureInfo) => {
        const picture = template.cloneNode(true);
        picture.querySelector('.picture__img').src = pictureInfo.url;
        picture.querySelector('.picture__lines').textContent = pictureInfo.likes;
        picture.querySelector('.picture__comments').textContent = pictureInfo.comments.length;
        addFullPhotoClickHandler(newPhoto, pictureInfo);
        fragment.append(picture);
    });
    pictures.append(fragment);
};
export {createMiniatures};