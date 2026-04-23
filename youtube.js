import { videoData } from "./data.js";

let youtubeVideoHTML = "";

videoData.forEach((video) => {
  youtubeVideoHTML += `
  <div class="youtube-clone-video-preview-container">
    <div class="youtube-clone-thumbnail-container">
    <a href="https://www.youtube.com/watch?v=${video.videoLink}" target="_blank">
      <img
        class="youtube-clone-thumbnail-picture"
        src="channel-thumbnail/thumbnail-${video.id}.webp"
      />
    </a>
      <div class="youtube-clone-video-time">${video.videoDuration}</div>
    </div>
    <div class="youtube-clone-video-info-container">
      <div class="youtube-clone-video-channel-icon">
        <a href="https://www.youtube.com/${video.channelLink}" target="-blank">
          <img
            class="youtube-clone-video-channel-picture"
            src="channel-icon/channel-${video.id}.jpeg"
          />
        </a>
        <div class="youtube-clone-video-channel-subs-info">
          <img src="channel-icon/channel-${video.id}.jpeg" />
          <div>
            <p class="youtube-clone-video-channel-subs-info-author">
              ${video.channelName}
            </p>
            <p class="youtube-clone-video-channel-subs-info-sub-count">
              ${video.channelSubsCount}
            </p>
          </div>
        </div>
      </div>
      <div class="youtube-clone-video-info">
        <p class="youtube-clone-video-title">
          <a href="https://www.youtube.com/watch?v=${video.videoLink}" target="_blank" class="youtube-clone-video-link">
            ${video.videoTitle}
          </a>
        </p>

        <p class="youtube-clone-video-author">
          <a href="https://www.youtube.com/${video.channelLink}" target="_blank" class="youtube-clone-channel-link">
            ${video.channelName}
          </a>
        </p>

        <p class="youtube-clone-video-stats">
          ${video.videoViews} &#183; ${video.videoUploadTime}
        </p>
      </div>
    </div>
  </div>
  `;
});

document.querySelector(".js-youtube-clone-video-preview-grid").innerHTML =
  youtubeVideoHTML;
