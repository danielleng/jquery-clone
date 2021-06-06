import $ from './jquery-clone';

$(document).ready(function() {
  console.log('Ready.');

  $(document).on('click', '.carousel__navRight', function() {
    const currentImg = $('.active');
    const nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.carousel__navLeft').on('click', function() {
    const currentImg = $('.active');
    const prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  })
});

$.get({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  success: data => {
    console.log('First success', data)
  }
})
  .done(data => console.log('Second success', data))
  .fail(e => console.error('Fail', e))
  .always(() => console.log('Always'));
  