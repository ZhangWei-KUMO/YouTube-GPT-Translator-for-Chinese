// eslint-disable-next-line import/no-cycle
// import { scrollIntoCurrTimeDiv } from '../action';
const languages = [
  { value: 'zh-TW', text: '繁体中文' },
  { value: 'zh-CN', text: '简体中文' },
  { value: 'en', text: 'English' },
  { value: 'ja', text: '日本語' },
  { value: 'ko', text: '한국어' },
  { value: 'fr', text: 'Français' },
  { value: 'de', text: 'Deutsch' },
  { value: 'es', text: 'Español', ex: '西班牙语' },
  { value: 'pt', text: 'Português', ex: '葡萄牙语' },
  { value: 'ru', text: 'Русский', ex: '俄语' },
  { value: 'ar', text: 'العربية' },
  { value: 'id', text: 'Indonesia' },
  { value: 'vi', text: 'Tiếng Việt', ex: '越南语' },
  { value: 'th', text: 'ภาษาไทย', ex: '泰语' },
  { value: 'tr', text: 'Türkçe', ex: '土耳其语' },
  { value: 'it', text: 'Italiano' },
  { value: 'he', text: 'עברית', ex: '希伯来语' },
  { value: 'pl', text: 'Polski', ex: '波兰语' },
  { value: 'nl', text: 'Nederlands', ex: '荷兰语' },
  { value: 'ro', text: 'Română', ex: '罗马尼亚语' },
  { value: 'hu', text: 'Magyar', ex: '匈牙利语' },
  { value: 'sv', text: 'Svenska', ex: '瑞典语' },
  { value: 'cs', text: 'Čeština', ex: '捷克语' },
  { value: 'hi', text: 'हिन्दी', ex: '印地语' },
  { value: 'bn', text: 'বাংলা', ex: '孟加拉语' },
  { value: 'da', text: 'Dansk', ex: '丹麦语' },
  { value: 'fi', text: 'Suomi', ex: '芬兰语' },
];

const evtListenerOnWindow = () => {
  const titleEle = document.getElementById('yt_ai_header_text');

  // 动态添加选项
  languages.forEach((option) => {
    const newOption = document.createElement('option');
    newOption.value = option.value;
    newOption.text = option.text;
    titleEle.appendChild(newOption);
  });

  // 设置默认值
  titleEle.value = navigator.language;

  // 监听选择事件
  titleEle.addEventListener('change', (e) => {
    titleEle.value = e.target.value;
  });
  // 监听window滚动事件
  window.addEventListener('scroll', () => {
    const ytVideoEl = document.querySelector('#movie_player > div.html5-video-container > video');
    const startbtn = document.querySelector('#hercules_track');
    if (!startbtn) { return; }
    if (window.pageYOffset > 300) {
      if (!ytVideoEl.paused) {
        startbtn.click();
      }
    } else if (ytVideoEl.paused) {
      startbtn.click();
    }
  });
};

export default evtListenerOnWindow;