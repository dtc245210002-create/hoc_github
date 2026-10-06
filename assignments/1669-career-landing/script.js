document.getElementById('demo-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const goal = document.getElementById('goal');
  const track = document.getElementById('track');
  const feedback = document.getElementById('feedback');
  if (!goal.value || !track.value) {
    feedback.textContent = 'Hãy chọn mục tiêu và chương trình để xem gợi ý.';
    (!goal.value ? goal : track).focus();
    return;
  }
  feedback.textContent = `Bạn quan tâm ${track.value} với mục tiêu “${goal.value}”. Hãy mở trang tư vấn chính thức để tìm hiểu chương trình hiện hành.`;
});
