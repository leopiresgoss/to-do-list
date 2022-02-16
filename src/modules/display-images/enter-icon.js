import enterIcon from '../../images/outline_subdirectory_arrow_left_black_24dp.png';

const displayEnterIcon = () => {
  const img = document.createElement('img');
  img.src = enterIcon;
  img.alt = '';
  img.id = 'add-img';
  document.querySelector('.add-btn').appendChild(img);
};

export default displayEnterIcon;