const films = [{
  id: 'big-buck-bunny', title: 'Big Buck Bunny',
  description: 'Phim hoạt hình Big Buck Bunny – Blender Foundation.',
  source: 'mov_bbb.mp4', updated: 2, views: 0
}, {
  id: 'wolfoo', title: 'Wolfoo – Lucy học luật an toàn giao thông',
  description: 'Hoạt hình tiếng Việt về an toàn giao thông từ kênh Wolfoo Việt Nam.',
  youtube: 'eJ-ZD_B6ySQ', updated: 1, views: 0
}];
const list = document.querySelector('#videos');
const search = document.querySelector('#search');
const sort = document.querySelector('#sort');
let selected = films[0].id;
function normalize(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/gi, 'd').toLowerCase();
}
function render() {
  const shown = films.filter(film => normalize(film.title).includes(normalize(search.value.trim())));
  shown.sort((a, b) => sort.value === 'views' ? b.views - a.views : b.updated - a.updated);
  list.replaceChildren();
  for (const film of shown) {
    const link = document.createElement('a');
    link.href = '#content';
    link.className = 'video-link';
    link.setAttribute('aria-current', String(film.id === selected));
    link.textContent = film.title;
    const detail = document.createElement('small');
    detail.textContent = `${film.views} lượt xem trên trang`;
    link.append(detail);
    link.addEventListener('click', () => selectFilm(film));
    list.append(link);
  }
  document.querySelector('#empty').hidden = shown.length > 0;
}
function selectFilm(film) {
  selected = film.id;
  film.views++;
  const youtube = document.querySelector('#youtube');
  const video = document.querySelector('#local-video');
  video.pause();
  youtube.hidden = !film.youtube;
  video.hidden = !!film.youtube;
  if (film.youtube) youtube.src = `https://www.youtube-nocookie.com/embed/${film.youtube}`;
  else { youtube.src = 'about:blank'; video.src = film.source; }
  document.querySelector('#title').textContent = film.title;
  document.querySelector('#description').textContent = film.description;
  document.querySelector('#views').textContent = `${film.views} lượt xem trên trang`;
  render();
}
search.addEventListener('input', render);
sort.addEventListener('change', render);
render();
selectFilm(films[0]);
