const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const  toggle = player.querySelector('.toggle');
const  slider = player.querySelector('.player_slider');
const skipButtons = player.querySelector('[data-skip]');

function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]()
}
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚ ';
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
sliders.forEach(slider =>
  slider.addEventListener('input', handleRangeUpdate)
);
skipButtons.forEach(button =>
  button.addEventListener('click', skip)
);
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

