import avatar from './avatar.jpg';
// import style from './index.scss';

function createAvatar() {
    var img = new Image();
    img.src = avatar;
    img.classList.add('avatar');
    // img.classList.add(style.avatar);
    document.getElementById('root').append(img);
}

export default createAvatar;