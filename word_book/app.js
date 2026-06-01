const appRoot = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");
const toastRoot = document.querySelector("#toast-root");

const versionStatus = {
  DRAFT: { label: "草稿", tone: "gray" },
  LIST_GENERATING: { label: "清单生成中", tone: "blue" },
  LIST_CONFIRMING: { label: "清单确认中", tone: "amber" },
  CONTENT_GENERATING: { label: "内容生成中", tone: "purple" },
  READY_TO_PUBLISH: { label: "内容生成完成", tone: "green" },
  PUBLISH_CHECKING: { label: "发布中", tone: "blue" },
  PUBLISH_FAILED: { label: "发布失败", tone: "red" },
  PUBLISHED: { label: "已发布", tone: "green" },
};

const categoryStatus = {
  ENABLED: { label: "已发布", tone: "green" },
  DISABLED: { label: "未发布", tone: "gray" },
};

const bookStatus = {
  PUBLISHED: { label: "最新发布版本", tone: "green" },
  UNPUBLISHED: { label: "未发布", tone: "gray" },
};

const stageOptions = ["小学", "初中", "高中", "大学", "其他"];

const seed = {
  page: "catalog",
  selectedCategoryId: "cat-hot",
  selectedTextbookId: "book-gaokao-high",
  selectedVersionId: "ver-gaokao-v2",
  detailTab: "words",
  wordUnitFilter: "all",
  wordSearchField: "text",
  wordSearch: "",
  groupSearch: "",
  modal: null,
  toast: null,
  categories: [
    { id: "cat-hot", name: "高中热门", status: "ENABLED", sort: 1 },
    { id: "cat-pep", name: "人教版", status: "ENABLED", sort: 2 },
    { id: "cat-foreign", name: "外研社版", status: "DISABLED", sort: 3 },
    { id: "cat-yilin", name: "译林版", status: "DISABLED", sort: 4 },
    { id: "cat-bsd", name: "北师大版", status: "DISABLED", sort: 5 },
  ],
  textbooks: [
    {
      id: "book-gaokao-high",
      categoryId: "cat-hot",
      name: "高考高频词",
      publisher: "通用",
      stage: "高中",
      volume: "高中",
      creator: "潘婷婷",
      displayWordCount: 1706,
      sort: 1,
      status: "PUBLISHED",
      onlineVersionId: "ver-gaokao-v1",
      cover: "orange",
      screenshotCount: 12,
    },
    {
      id: "book-gaokao-mid",
      categoryId: "cat-hot",
      name: "高中频词",
      publisher: "通用",
      stage: "高中",
      volume: "高中",
      creator: "潘婷婷",
      displayWordCount: 1746,
      sort: 2,
      status: "PUBLISHED",
      onlineVersionId: "ver-mid-v1",
      cover: "orange",
      screenshotCount: 8,
    },
    {
      id: "book-gaokao-low",
      categoryId: "cat-hot",
      name: "高考低频词",
      publisher: "通用",
      stage: "高中",
      volume: "高中",
      creator: "潘婷婷",
      displayWordCount: 1313,
      sort: 3,
      status: "PUBLISHED",
      onlineVersionId: "ver-low-v1",
      cover: "green",
      screenshotCount: 9,
    },
    {
      id: "book-pep-8b",
      categoryId: "cat-pep",
      name: "人教版八下核心词",
      publisher: "人教版",
      stage: "初中",
      volume: "八下",
      creator: "潘婷婷",
      displayWordCount: 1146,
      sort: 1,
      status: "UNPUBLISHED",
      onlineVersionId: "",
      cover: "blue",
      screenshotCount: 6,
    },
    {
      id: "book-foreign-8b",
      categoryId: "cat-foreign",
      name: "外研社八下同步词",
      publisher: "外研社版",
      stage: "初中",
      volume: "八下",
      creator: "李明",
      displayWordCount: 982,
      sort: 1,
      status: "UNPUBLISHED",
      onlineVersionId: "",
      cover: "purple",
      screenshotCount: 5,
    },
  ],
  versions: [
    {
      id: "ver-gaokao-v1",
      textbookId: "book-gaokao-high",
      no: 1,
      status: "PUBLISHED",
      baseVersionId: "",
      changeSummary: "首个线上版本，完成高中高频词基础内容生成。",
      creator: "潘婷婷",
      createdAt: "2026-05-18 10:20",
      publishedAt: "2026-05-18 17:22",
      releaseNote: "发布首版词书。",
    },
    {
      id: "ver-gaokao-v2",
      textbookId: "book-gaokao-high",
      no: 2,
      status: "LIST_CONFIRMING",
      baseVersionId: "ver-gaokao-v1",
      changeSummary: "补充词书截图识别结果，待确认新增词条与排序。",
      creator: "潘婷婷",
      createdAt: "2026-05-22 10:12",
      publishedAt: "",
      releaseNote: "",
    },
    {
      id: "ver-mid-v1",
      textbookId: "book-gaokao-mid",
      no: 1,
      status: "PUBLISHED",
      baseVersionId: "",
      changeSummary: "首个线上版本。",
      creator: "潘婷婷",
      createdAt: "2026-05-17 09:30",
      publishedAt: "2026-05-18 17:10",
      releaseNote: "发布首版词书。",
    },
    {
      id: "ver-low-v1",
      textbookId: "book-gaokao-low",
      no: 1,
      status: "PUBLISHED",
      baseVersionId: "",
      changeSummary: "首个线上版本。",
      creator: "潘婷婷",
      createdAt: "2026-05-17 09:45",
      publishedAt: "2026-05-18 17:12",
      releaseNote: "发布首版词书。",
    },
    {
      id: "ver-pep8-v1",
      textbookId: "book-pep-8b",
      no: 1,
      status: "LIST_GENERATING",
      baseVersionId: "",
      changeSummary: "已上传词汇表截图，后台正在生成单词清单。",
      creator: "潘婷婷",
      createdAt: "2026-05-22 09:54",
      publishedAt: "",
      releaseNote: "",
    },
    {
      id: "ver-foreign-v1",
      textbookId: "book-foreign-8b",
      no: 1,
      status: "DRAFT",
      baseVersionId: "",
      changeSummary: "词书已创建，等待上传完整词汇表图片。",
      creator: "李明",
      createdAt: "2026-05-22 11:04",
      publishedAt: "",
      releaseNote: "",
    },
  ],
  words: {
    "ver-gaokao-v1": [
      word("w101", "Unit 1", "abandon", "/əˈbændən/", "放弃，抛弃", "OCR", "原有"),
      word("w102", "Unit 1", "ability", "/əˈbɪləti/", "能力", "OCR", "原有"),
      word("w103", "Unit 1", "absolute", "/ˈæbsəluːt/", "绝对的", "OCR", "原有"),
      word("w104", "Unit 2", "absorb", "/əbˈzɔːrb/", "吸收", "OCR", "原有"),
      word("w105", "Unit 2", "access", "/ˈækses/", "通道，机会", "OCR", "原有"),
    ],
    "ver-gaokao-v2": [
      word("w201", "Unit 1", "abandon", "/əˈbændən/", "放弃，抛弃", "OCR", "原有"),
      word("w202", "Unit 1", "ability", "/əˈbɪləti/", "能力", "OCR", "原有"),
      word("w203", "Unit 1", "academic", "/ˌækəˈdemɪk/", "学术的", "人工新增", "新增"),
      word("w204", "Unit 2", "absorb", "/əbˈzɔːrb/", "吸收", "OCR", "原有"),
      word("w205", "Unit 2", "access", "/ˈækses/", "通道，机会", "人工修改", "修改"),
    ],
    "ver-mid-v1": [
      word("w301", "Unit 1", "accept", "/əkˈsept/", "接受", "OCR", "原有"),
      word("w302", "Unit 1", "achieve", "/əˈtʃiːv/", "实现", "OCR", "原有"),
      word("w303", "Unit 2", "active", "/ˈæktɪv/", "积极的", "OCR", "原有"),
    ],
    "ver-low-v1": [
      word("w401", "Unit 1", "boundary", "/ˈbaʊndəri/", "边界", "OCR", "原有"),
      word("w402", "Unit 2", "calculate", "/ˈkælkjuleɪt/", "计算", "OCR", "原有"),
    ],
    "ver-pep8-v1": [],
    "ver-foreign-v1": [],
  },
  groups: {
    "ver-gaokao-v1": [
      group("g101", "Unit 1 - Group 1", ["abandon", "ability", "absolute"], "forest-route.png", "story-001.mp3", "用一条校园路线串联 abandon、ability 与 absolute。"),
      group("g102", "Unit 2 - Group 1", ["absorb", "access"], "lab-door.png", "story-002.mp3", "用实验室场景帮助学生理解 absorb 和 access。"),
    ],
    "ver-gaokao-v2": [],
    "ver-mid-v1": [
      group("g301", "Unit 1 - Group 1", ["accept", "achieve"], "climb.png", "story-101.mp3", "用攀登目标的故事串联词义。"),
    ],
    "ver-low-v1": [
      group("g401", "Unit 1 - Group 1", ["boundary"], "map.png", "story-201.mp3", "用地图边界场景解释 boundary。"),
    ],
    "ver-pep8-v1": [],
    "ver-foreign-v1": [],
  },
};

const state = structuredClone(seed);

const initialHash = window.location.hash.replace("#", "");
if (initialHash.startsWith("detail/")) {
  const [, bookId] = initialHash.split("/");
  if (state.textbooks.some((item) => item.id === bookId)) {
    state.page = "detail";
    state.selectedTextbookId = bookId;
    selectDefaultVersion(bookId);
  }
}

function word(id, unit, text, phonetic, meaning, source, changeType, detailGenerated = true) {
  return {
    id,
    unit,
    text,
    phonetic,
    meaning,
    source,
    changeType,
    detailGenerated,
    detail: buildWordDetail(text, phonetic, meaning),
  };
}

function buildWordDetail(text, phonetic, meaning) {
  return {
    image: `${text}-detail.png`,
    audio: `${text}-audio.mp3`,
    imageStatus: "已生成",
    audioStatus: "已生成",
    storyStatus: "已生成",
    examples: [
      {
        en: `The teacher used ${text} in a short sentence so everyone could remember it.`,
        zh: `老师把 ${text} 放进一个短句里，帮助大家记住它。`,
      },
      {
        en: `When students see ${text} with a picture and audio, the meaning becomes clearer.`,
        zh: `当学生结合图片和音频学习 ${text} 时，含义会更清晰。`,
      },
    ],
    memory: {
      en: `${text} means "${meaning}". Connect the sound, picture, and sentence to build a stable memory.`,
      zh: `${text} 的核心含义是“${meaning}”。通过声音、图片和例句建立稳定记忆。`,
    },
  };
}

function group(id, title, words, image, audio, story) {
  return {
    id,
    title,
    words,
    image,
    audio,
    story,
    storyLines: buildStoryLines(words),
    imageStatus: "已生成",
    audioStatus: "已生成",
    storyStatus: "已生成",
  };
}

function buildStoryLines(words) {
  const [first = "memory", second = "story", third = "lesson"] = words;
  return [
    {
      en: `The class used ${first} and ${second} to create a vivid scene for today's lesson.`,
      zh: `同学们用 ${first} 和 ${second} 创造了一个生动的课堂场景。`,
    },
    {
      en: `Everyone connected ${third} with the picture, the audio, and the short story.`,
      zh: `每个人都把 ${third} 和图片、音频以及短故事联系起来。`,
    },
  ];
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function nowText() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegExp(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlightedSentence(sentence, words) {
  let output = escapeHtml(sentence);
  words.forEach((wordText) => {
    const escapedWord = escapeHtml(wordText);
    output = output.replace(new RegExp(`\\b${escapeRegExp(escapedWord)}\\b`, "gi"), (match) => `<mark>${match}</mark>`);
  });
  return output;
}

function renderMarkedHtml(sentence, fallbackWords = []) {
  const output = escapeHtml(sentence).replace(/&lt;mark(?:.*?)&gt;/g, "<mark>").replaceAll("&lt;/mark&gt;", "</mark>");
  return output.includes("<mark>") ? output : renderHighlightedSentence(sentence, fallbackWords);
}

const silentAudioSrc =
  "data:audio/wav;base64,UklGRqQCAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YYACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

function isRenderableAssetUrl(value = "") {
  const text = String(value).trim();
  return /^(https?:|data:|blob:|file:|\/|\.\/|\.\.\/)/i.test(text);
}

function getPlayableAudioSrc(value = "") {
  const text = String(value).trim();
  return isRenderableAssetUrl(text) ? text : silentAudioSrc;
}

function getRenderableImageSrc(value = "", label = "图片") {
  const text = String(value).trim();
  if (isRenderableAssetUrl(text)) return text;
  const title = escapeHtml(label || "图片");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e8f1ff"/>
          <stop offset="58%" stop-color="#f7fbff"/>
          <stop offset="100%" stop-color="#fff5df"/>
        </linearGradient>
      </defs>
      <rect width="960" height="540" rx="24" fill="url(#bg)"/>
      <circle cx="730" cy="146" r="70" fill="#cde3ff" opacity="0.8"/>
      <rect x="150" y="150" width="660" height="240" rx="28" fill="#ffffff" opacity="0.74"/>
      <text x="480" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="#1f2937">${title}</text>
      <text x="480" y="312" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#667085">图片预览</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderImagePreview(src, label, actionHtml = "") {
  return `
    <div class="asset-image-preview">
      <img src="${escapeHtml(getRenderableImageSrc(src, label))}" alt="${escapeHtml(label || "图片预览")}" loading="lazy" />
      ${actionHtml ? `<div class="asset-image-action">${actionHtml}</div>` : ""}
    </div>
  `;
}

function renderAudioPlayer(src, label = "音频") {
  return `
    <div class="asset-audio-player">
      <span>${escapeHtml(label)}</span>
      <audio controls preload="metadata" src="${escapeHtml(getPlayableAudioSrc(src))}"></audio>
    </div>
  `;
}

function sortedBySort(items) {
  return [...items].sort((a, b) => a.sort - b.sort);
}

function getCategory(id = state.selectedCategoryId) {
  return state.categories.find((item) => item.id === id);
}

function getBook(id = state.selectedTextbookId) {
  return state.textbooks.find((item) => item.id === id);
}

function getVersion(id = state.selectedVersionId) {
  return state.versions.find((item) => item.id === id);
}

function getBookVersions(bookId = state.selectedTextbookId) {
  return state.versions.filter((item) => item.textbookId === bookId).sort((a, b) => a.no - b.no);
}

function getBookStage(bookItem) {
  if (bookItem?.stage) return bookItem.stage;
  const categoryName = bookItem?.categoryId ? state.categories.find((item) => item.id === bookItem.categoryId)?.name || "" : "";
  const text = `${bookItem?.name || ""}${bookItem?.volume || ""}${categoryName}`;
  if (text.includes("小学")) return "小学";
  if (text.includes("初") || text.includes("七") || text.includes("八") || text.includes("九")) return "初中";
  if (text.includes("高")) return "高中";
  return "未设置";
}

function getSelectedWords() {
  return state.words[state.selectedVersionId] || [];
}

function getFilteredWords(words) {
  const selectedUnit = state.wordUnitFilter || "all";
  const searchField = state.wordSearchField === "id" ? "id" : "text";
  const keyword = (state.wordSearch || "").trim().toLowerCase();
  return words.filter((item) => {
    const matchedUnit = selectedUnit === "all" || item.unit === selectedUnit;
    const matchedKeyword = !keyword || String(item[searchField] || "").toLowerCase().includes(keyword);
    return matchedUnit && matchedKeyword;
  });
}

function getSelectedGroups() {
  return state.groups[state.selectedVersionId] || [];
}

function getVersionReleaseRequests(versionId) {
  return [];
}

function getActiveReleaseRequest(versionId) {
  return null;
}

function getReleaseFailureReason(version) {
  if (!version) return "";
  return version.publishFailureReason || "";
}

function isPublishingLocked(version) {
  return version?.status === "PUBLISH_CHECKING";
}

function hasPublishedVersion(bookId) {
  return state.versions.some((item) => item.textbookId === bookId && item.status === "PUBLISHED");
}

function getCategoryStatusConfig(categoryId) {
  return countPublishedBooks(categoryId) > 0 ? categoryStatus.ENABLED : categoryStatus.DISABLED;
}

function getItemPublishBadge(item, version) {
  if (item?.publishState === "未发布") {
    return { label: "未发布", tone: "amber" };
  }
  return { label: version?.status === "PUBLISHED" ? "已发布" : "未发布", tone: version?.status === "PUBLISHED" ? "green" : "amber" };
}

function markVersionPendingContentChange(summary) {
  const version = getVersion();
  if (!version) return;
  version.publishFailureReason = "";
  version.changeSummary = summary;
  if (version.status === "PUBLISHED") {
    version.hasPendingContentChanges = true;
    return;
  }
  if (!isPublishingLocked(version)) {
    version.status = "READY_TO_PUBLISH";
  }
}

function markWordContentChanged(wordItem, summary) {
  if (wordItem) wordItem.publishState = "未发布";
  markVersionPendingContentChange(summary);
}

function markGroupContentChanged(groupItem, summary) {
  if (groupItem) groupItem.publishState = "未发布";
  markVersionPendingContentChange(summary);
}

function getFilteredGroups(groups) {
  const keyword = (state.groupSearch || "").trim().toLowerCase();
  return groups.filter((item) => !keyword || item.id.toLowerCase().includes(keyword));
}

function countBooks(categoryId) {
  return state.textbooks.filter((item) => item.categoryId === categoryId).length;
}

function countPublishedBooks(categoryId) {
  return state.textbooks.filter((item) => item.categoryId === categoryId && item.status === "PUBLISHED").length;
}

function badge(config, extraClass = "") {
  return `<span class="badge tone-${config.tone} ${extraClass}">${escapeHtml(config.label)}</span>`;
}

function render() {
  appRoot.innerHTML = `
    <div class="pro-app">
        ${renderTopBar()}
      <div class="app-shell">
        ${renderSidebar()}
        <main class="workspace">
          ${state.page === "catalog" ? renderCatalogPage() : renderDetailPage()}
        </main>
      </div>
    </div>
  `;
  modalRoot.innerHTML = renderModal();
  toastRoot.innerHTML = state.toast ? renderToast() : "";
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderTopBar() {
  return `
    <header class="pro-topbar">
      <div class="pro-product">
        <span class="pro-logo-mark"></span>
        <strong>内容管理平台</strong>
      </div>
      <div class="pro-user">
        <span class="pro-avatar"><i data-lucide="user"></i></span>
        <span>耿庆博</span>
      </div>
    </header>
  `;
}

function renderSidebar() {
  const publishedCount = state.textbooks.filter((item) => item.status === "PUBLISHED").length;
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark"><i data-lucide="book-open-check"></i></div>
        <div class="brand-copy">
          <div class="brand-title">内容管理平台</div>
          <div class="brand-subtitle">背单词内容生产</div>
        </div>
      </div>
      <nav class="nav">
        <div class="nav-section">业务功能</div>
        <button class="nav-item active" type="button" data-action="go-catalog">
          <i data-lucide="library-big"></i><span>背单词词书管理</span>
        </button>
      </nav>
      <div class="sidebar-foot">
        <div class="mini-metric">
          <span>已发布词书</span>
          <strong>${publishedCount}</strong>
        </div>
        <div class="mini-metric">
          <span>发布入口</span>
          <strong>详情页</strong>
        </div>
      </div>
    </aside>
  `;
}

function renderCatalogPage() {
  const selectedCategory = getCategory();
  const books = sortedBySort(state.textbooks.filter((bookItem) => bookItem.categoryId === state.selectedCategoryId));
  return `
    <div class="catalog-page">
      <header class="page-header catalog-header">
        <div>
          <div class="page-kicker"><i data-lucide="layout-dashboard"></i>词书生产后台</div>
          <h1>词书管理</h1>
        </div>
      </header>

      <div class="catalog-layout">
        <section class="panel catalog-panel">
          <div class="panel-header">
            <div class="panel-title">
              <i data-lucide="folder-tree"></i>
              <div>
                <h2>词书分类</h2>
                <small>支持新增、修改、删除</small>
              </div>
            </div>
            <button class="btn primary" type="button" data-action="open-category-form"><i data-lucide="plus"></i>新增</button>
          </div>
          <div class="category-list">
            ${sortedBySort(state.categories).map(renderCategoryRow).join("")}
          </div>
        </section>

        <section class="panel catalog-panel">
          <div class="panel-header">
            <div class="panel-title">
              <i data-lucide="book-copy"></i>
              <div>
                <h2>${escapeHtml(selectedCategory?.name || "未选择分类")} / 词书列表</h2>
                <small>新增词书后自动创建首个草稿版本 V1</small>
              </div>
            </div>
            <div class="toolbar">
              <button class="btn primary" type="button" data-action="open-book-form"><i data-lucide="plus"></i>新建词书</button>
            </div>
          </div>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>词书</th>
                  <th>出版社</th>
                  <th>学段</th>
                  <th>册别</th>
                  <th>创建人</th>
                  <th>单词数量</th>
                  <th>状态</th>
                  <th style="width: 160px;">操作</th>
                </tr>
              </thead>
              <tbody>
                ${books.length ? books.map(renderBookRow).join("") : renderEmptyTableRow("当前分类下暂无词书")}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderCategoryRow(category) {
  const active = category.id === state.selectedCategoryId ? "active" : "";
  const bookTotal = countBooks(category.id);
  const onlineTotal = countPublishedBooks(category.id);
  const locked = onlineTotal > 0;
  return `
    <div class="category-row ${active}" data-action="select-category" data-category-id="${category.id}">
      <div class="category-main">
        <div class="category-name" title="${escapeHtml(category.name)}">${escapeHtml(category.name)}</div>
        ${badge(getCategoryStatusConfig(category.id))}
      </div>
      <div class="category-meta">
        <span>${bookTotal} 本词书</span>
        <span>${onlineTotal} 本已发布</span>
      </div>
      <div class="category-footer">
        <span class="category-sort">排序 ${category.sort}</span>
        ${
          locked
            ? `<span class="category-lock">已发布不可改</span>`
            : `<div class="category-actions">
                <button class="category-action" type="button" data-action="edit-category" data-category-id="${category.id}" title="修改分类"><i data-lucide="pencil"></i></button>
                <button class="category-action danger" type="button" data-action="confirm-delete-category" data-category-id="${category.id}" title="删除分类"><i data-lucide="trash-2"></i></button>
              </div>`
        }
      </div>
    </div>
  `;
}

function renderBookRow(bookItem) {
  const onlineVersion = state.versions.find((item) => item.id === bookItem.onlineVersionId);
  const deletable = !hasPublishedVersion(bookItem.id);
  return `
    <tr data-action="open-book" data-book-id="${bookItem.id}">
      <td>
        <div class="book-cell">
          <div class="book-cover cover-${bookItem.cover}">词书</div>
          <div>
            <div class="book-name">${escapeHtml(bookItem.name)}</div>
            <div class="book-extra">截图 ${bookItem.screenshotCount} 张 · 点击进入详情</div>
          </div>
        </div>
      </td>
      <td>${escapeHtml(bookItem.publisher)}</td>
      <td>${escapeHtml(getBookStage(bookItem))}</td>
      <td>${escapeHtml(bookItem.volume)}</td>
      <td>${escapeHtml(bookItem.creator)}</td>
      <td>${Number(bookItem.displayWordCount || 0).toLocaleString()}</td>
      <td>
        ${badge(bookStatus[bookItem.status])}
        <div class="book-extra">${onlineVersion ? `线上 V${onlineVersion.no}` : "暂无线上版本"}</div>
      </td>
      <td>
        <div class="row-actions">
          <button class="icon-btn" type="button" data-action="open-book" data-book-id="${bookItem.id}" title="进入详情"><i data-lucide="square-arrow-out-up-right"></i></button>
          <button class="icon-btn" type="button" data-action="edit-book" data-book-id="${bookItem.id}" title="修改词书"><i data-lucide="pencil"></i></button>
          ${deletable ? `<button class="icon-btn danger" type="button" data-action="confirm-delete-book" data-book-id="${bookItem.id}" title="删除词书"><i data-lucide="trash-2"></i></button>` : ""}
        </div>
      </td>
    </tr>
  `;
}

function renderEmptyTableRow(text) {
  return `<tr><td colspan="8"><div class="empty-state" style="min-height: 160px;"><div><div class="empty-icon"><i data-lucide="inbox"></i></div><h3>${text}</h3></div></div></td></tr>`;
}

function renderDetailPage() {
  const bookItem = getBook();
  if (!bookItem) {
    return renderCatalogPage();
  }
  const category = getCategory(bookItem.categoryId);
  const versions = getBookVersions(bookItem.id);
  if (!getVersion() || getVersion().textbookId !== bookItem.id) {
    state.selectedVersionId = versions[0]?.id || "";
  }
  const version = getVersion();
  return `
    <header class="detail-header">
      <div>
        <div class="breadcrumb">
          <button type="button" data-action="go-catalog">词书管理</button>
          <i data-lucide="chevron-right"></i>
          <span>${escapeHtml(category?.name || "")}</span>
          <i data-lucide="chevron-right"></i>
          <strong>${escapeHtml(bookItem.name)}</strong>
        </div>
        <h1>词书详情与版本维护</h1>
        <p class="page-desc">维护单个词书的版本、单词清单和分组内容。已发布版本受版本规则保护，词条增删与排序必须先创建新版本。</p>
      </div>
      <div class="header-actions">
        <button class="btn" type="button" data-action="go-catalog"><i data-lucide="arrow-left"></i>返回词书管理</button>
      </div>
    </header>

    <div class="detail-stack">
      ${version ? renderVersionConsole(bookItem, versions, version) : renderNoVersion()}
      ${version ? renderVersionContent(version) : ""}
    </div>
  `;
}

function renderVersionPill(version, bookItem) {
  const active = version.id === state.selectedVersionId ? "active" : "";
  const isOnline = bookItem.onlineVersionId === version.id;
  const isPublished = version.status === "PUBLISHED";
  return `
    <button class="version-pill ${active}" type="button" data-action="switch-version" data-version-id="${version.id}">
      <strong>V${version.no}</strong>
      ${isOnline ? `<span class="online-dot" title="当前已发布版本"></span>` : ""}
      ${!isPublished ? `<span class="draft-dot" title="${escapeHtml(versionStatus[version.status].label)}"></span>` : ""}
    </button>
  `;
}

function getVersionActionState(version) {
  const status = version?.status || "DRAFT";
  const canRerunRecognition = ["LIST_GENERATING", "LIST_CONFIRMING"].includes(status) && !version?.baseVersionId;
  const hasPendingContentChanges = Boolean(version?.hasPendingContentChanges);
  return {
    recognition: {
      label: status === "LIST_CONFIRMING" && !version?.baseVersionId ? "重新识别" : "识别完成",
      enabled: canRerunRecognition,
    },
    confirmWordlist: {
      enabled: status === "LIST_CONFIRMING",
    },
    publish: {
      label: status === "PUBLISH_FAILED" ? "重新发布" : "发布",
      visible: status !== "PUBLISH_CHECKING",
      enabled: ["READY_TO_PUBLISH", "PUBLISH_FAILED"].includes(status) || (status === "PUBLISHED" && hasPendingContentChanges),
    },
    deleteVersion: {
      enabled: !["PUBLISHED", "PUBLISH_CHECKING"].includes(status),
    },
  };
}

function getPublishProgressText(version) {
  if (version.status === "PUBLISHED" && version.hasPendingContentChanges) return "有待发布内容修改";
  if (version.status === "PUBLISHED") return "已发布";
  if (version.status === "PUBLISH_CHECKING") return "后台执行中";
  if (version.status === "PUBLISH_FAILED") return "失败后可重新发布";
  if (version.status === "READY_TO_PUBLISH") return "可提交发布";
  return "未进入发布";
}

function getPublishTimingText(version, bookItem = getBook(version?.textbookId)) {
  if (!version || !bookItem) return "-";
  if (bookItem.onlineVersionId === version.id && version.hasPendingContentChanges) return "内容修改校验后立即上线";
  if (bookItem.onlineVersionId === version.id) return "当前线上版本";
  if (version.status === "PUBLISH_CHECKING") return "发布后后台自动执行";
  return "新版本由后台按上线窗口生效";
}

function renderVersionConsole(bookItem, versions, version) {
  const base = version.baseVersionId ? getVersion(version.baseVersionId) : null;
  const words = state.words[version.id] || [];
  const groups = state.groups[version.id] || [];
  const failureReason = getReleaseFailureReason(version);
  const actionState = getVersionActionState(version);
  return `
    <section class="version-console">
      <div class="version-console-head">
        <div class="version-switcher">
          <span class="version-label">版本</span>
          <div class="version-strip">
            ${versions.map((item) => renderVersionPill(item, bookItem)).join("")}
          </div>
        </div>
        <button class="btn" type="button" data-action="create-version"><i data-lucide="git-branch-plus"></i>新建版本</button>
      </div>
      <div class="version-console-body">
        <div class="version-facts">
          <div class="version-fact"><span>词书</span><strong>${escapeHtml(bookItem.name)}</strong></div>
          <div class="version-fact"><span>当前版本</span><strong>V${version.no}</strong></div>
          <div class="version-fact"><span>基础版本</span><strong>${base ? `V${base.no}` : "无"}</strong></div>
          <div class="version-fact"><span>状态</span>${badge(versionStatus[version.status])}</div>
          <div class="version-fact"><span>数据量</span><strong>${words.length} 词 / ${groups.length} 组</strong></div>
          <div class="version-fact"><span>发布进度</span><strong>${getPublishProgressText(version)}</strong></div>
          <div class="version-fact"><span>上线方式</span><strong>${escapeHtml(getPublishTimingText(version, bookItem))}</strong></div>
        </div>
        ${
          version.status === "PUBLISHED" && version.hasPendingContentChanges
            ? `<div class="pending-change-banner">
                <i data-lucide="file-warning"></i>
                <div>
                  <strong>当前线上版本存在未发布内容修改</strong>
                  <span>已发布版本允许修改单词、故事、图片、音频等内容；增删词条和排序仍需创建新版本。</span>
                </div>
              </div>`
            : ""
        }
        ${
          version.status === "PUBLISH_FAILED"
            ? `<div class="failure-banner">
                <i data-lucide="circle-alert"></i>
                <div>
                  <strong>发布失败</strong>
                  <span>${escapeHtml(failureReason || "后台校验失败，请修改数据后重新发布。")}</span>
                </div>
              </div>`
            : ""
        }
        <div class="version-actions">
          <button class="btn" type="button" data-action="complete-recognition" ${actionState.recognition.enabled ? "" : "disabled"}><i data-lucide="scan-text"></i>${actionState.recognition.label}</button>
          <button class="btn" type="button" data-action="confirm-wordlist" ${actionState.confirmWordlist.enabled ? "" : "disabled"}><i data-lucide="list-checks"></i>确认词清单</button>
          ${actionState.publish.visible ? `<button class="btn primary" type="button" data-action="open-publish" ${actionState.publish.enabled ? "" : "disabled"}><i data-lucide="send"></i>${actionState.publish.label}</button>` : ""}
          <button class="btn danger" type="button" data-action="confirm-delete-version" ${actionState.deleteVersion.enabled ? "" : "disabled"}><i data-lucide="trash-2"></i>删除</button>
        </div>
      </div>
    </section>
  `;
}

function renderNoVersion() {
  return `
    <section class="content-panel">
      <div class="empty-state">
        <div>
          <div class="empty-icon"><i data-lucide="git-branch"></i></div>
          <h3>暂无版本</h3>
          <p>请先新建版本。</p>
          <div style="margin-top: 16px;">
            <button class="btn" type="button" data-action="create-version"><i data-lucide="git-branch-plus"></i>新建版本</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderVersionContent(version) {
  return `
    <section class="content-panel">
      <div class="tabs">
        <div class="tab-list">
          <button class="tab ${state.detailTab === "words" ? "active" : ""}" type="button" data-action="switch-detail-tab" data-tab="words">单词清单</button>
          <button class="tab ${state.detailTab === "groups" ? "active" : ""}" type="button" data-action="switch-detail-tab" data-tab="groups">分组数据</button>
        </div>
        <div class="tab-actions">
          ${state.detailTab === "words" ? renderWordActions(version) : renderGroupActions(version)}
        </div>
      </div>
      <div class="content-panel-body">
        ${state.detailTab === "words" ? renderWordList(version) : renderGroupList(version)}
      </div>
    </section>
  `;
}

function renderWordActions(version) {
  if (isPublishingLocked(version)) {
    return `<span class="subtle">后台执行中，暂不可编辑</span>`;
  }
  if (version.status === "PUBLISHED") {
    return `<span class="subtle">已发布版本仅支持内容编辑</span>`;
  }
  return `<button class="btn primary" type="button" data-action="open-word-form"><i data-lucide="list-plus"></i>插入单词</button>`;
}

function renderGroupActions(version) {
  if (version.status === "PUBLISHED" || isPublishingLocked(version)) return "";
  const hasGroups = getSelectedGroups().length > 0;
  return `
    <button class="btn" type="button" data-action="regenerate-groups" ${hasGroups ? "" : "disabled"}><i data-lucide="refresh-cw"></i>重新生成分组数据</button>
  `;
}

function renderWordList(version) {
  const words = getSelectedWords();
  if (!words.length) {
    return renderEmptyWords(version);
  }
  const filteredWords = getFilteredWords(words);
  const units = [...new Set(filteredWords.map((item) => item.unit))];
  return `
    ${renderWordFilters(words, filteredWords)}
    ${
      filteredWords.length
        ? units.map((unit) => renderUnitWords(unit, filteredWords.filter((item) => item.unit === unit), version)).join("")
        : renderNoMatchedWords()
    }
  `;
}

function renderWordFilters(words, filteredWords) {
  const units = [...new Set(words.map((item) => item.unit))];
  const selectedUnit = units.includes(state.wordUnitFilter) ? state.wordUnitFilter : "all";
  const selectedSearchField = state.wordSearchField === "id" ? "id" : "text";
  const searchPlaceholder = selectedSearchField === "id" ? "输入单词 ID" : "输入单词内容";
  return `
    <form id="word-filter-form" class="word-filter-bar">
      <div class="word-filter-field">
        <label>单元</label>
        <select name="wordUnitFilter">
          <option value="all" ${selectedUnit === "all" ? "selected" : ""}>全部单元</option>
          ${units.map((unit) => `<option value="${escapeHtml(unit)}" ${unit === selectedUnit ? "selected" : ""}>${escapeHtml(unit)}</option>`).join("")}
        </select>
      </div>
      <div class="word-filter-field word-filter-search">
        <label>搜索</label>
        <div class="word-search-combo">
          <select name="wordSearchField" aria-label="搜索字段">
            <option value="text" ${selectedSearchField === "text" ? "selected" : ""}>单词内容</option>
            <option value="id" ${selectedSearchField === "id" ? "selected" : ""}>单词 ID</option>
          </select>
          <div class="word-search-box">
            <i data-lucide="search"></i>
            <input name="wordSearch" value="${escapeHtml(state.wordSearch || "")}" placeholder="${searchPlaceholder}" />
          </div>
        </div>
      </div>
      <div class="word-filter-actions">
        <button class="btn primary" type="submit"><i data-lucide="search"></i>查询</button>
        <button class="btn" type="button" data-action="clear-word-filters">重置</button>
      </div>
      <div class="word-filter-count">显示 ${filteredWords.length} / ${words.length} 个单词</div>
    </form>
  `;
}

function renderNoMatchedWords() {
  return `
    <div class="filter-empty">
      <div class="empty-icon"><i data-lucide="search-x"></i></div>
      <h3>暂无匹配单词</h3>
      <p>请调整单元或搜索关键词后再试。</p>
    </div>
  `;
}

function renderEmptyWords(version) {
  const canComplete = version.status === "LIST_GENERATING";
  return `
    <div class="empty-state">
      <div>
        <div class="empty-icon"><i data-lucide="file-search"></i></div>
        <h3>${version.status === "DRAFT" ? "尚未上传完整词汇表" : "单词清单尚未生成"}</h3>
        <p>创建词书后会进入清单生成流程，生成完成后在这里进行人工确认。</p>
        <div style="margin-top: 16px;">
          <button class="btn primary" type="button" data-action="complete-recognition" ${canComplete ? "" : "disabled"}><i data-lucide="scan-text"></i>模拟识别完成</button>
        </div>
      </div>
    </div>
  `;
}

function renderUnitWords(unit, words, version) {
  const structuralEditable = !["PUBLISHED", "PUBLISH_CHECKING"].includes(version.status);
  const actionWidth = structuralEditable ? "290px" : version.status === "PUBLISHED" ? "138px" : "90px";
  return `
    <section class="word-unit">
      <div class="unit-head">
        <div>
          <strong>${escapeHtml(unit)}</strong>
          <span class="muted"> · ${words.length} 个单词</span>
        </div>
        ${structuralEditable ? `<span class="subtle">同单元内支持上移 / 下移</span>` : `<span class="subtle">已发布或发布中版本不支持增删排序</span>`}
      </div>
      <table class="word-table">
        <thead>
          <tr>
            <th style="width: 26%;">单词</th>
            <th>释义</th>
            <th style="width: 18%;">状态</th>
            <th style="width: ${actionWidth};">操作</th>
          </tr>
        </thead>
        <tbody>
          ${words.map((item) => renderWordRow(item, version)).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function renderWordRow(item, version) {
  const structuralEditable = !["PUBLISHED", "PUBLISH_CHECKING"].includes(version.status);
  const contentEditable = !isPublishingLocked(version);
  const detailButton = item.detailGenerated
    ? `<button class="icon-btn" type="button" data-action="view-word-detail" data-word-id="${item.id}" title="查看详情"><i data-lucide="panel-right-open"></i></button>`
    : "";
  const editOnlyButton =
    version.status === "PUBLISHED" && contentEditable
      ? `<button class="icon-btn" type="button" data-action="edit-word" data-word-id="${item.id}" title="编辑单词内容"><i data-lucide="pencil"></i></button>`
      : "";
  const editableActions = structuralEditable
    ? `
        <button class="icon-btn accent" type="button" data-action="insert-word-after" data-word-id="${item.id}" title="在下方插入单词"><i data-lucide="list-plus"></i></button>
        <button class="icon-btn" type="button" data-action="move-word" data-direction="up" data-word-id="${item.id}" title="上移"><i data-lucide="arrow-up"></i></button>
        <button class="icon-btn" type="button" data-action="move-word" data-direction="down" data-word-id="${item.id}" title="下移"><i data-lucide="arrow-down"></i></button>
        <button class="icon-btn" type="button" data-action="edit-word" data-word-id="${item.id}" title="编辑"><i data-lucide="pencil"></i></button>
        <button class="icon-btn danger" type="button" data-action="confirm-delete-word" data-word-id="${item.id}" title="删除"><i data-lucide="trash-2"></i></button>
      `
    : "";
  const hasActions = detailButton || editOnlyButton || editableActions;
  return `
    <tr>
      <td>
        <div class="word-main">${escapeHtml(item.text)}</div>
        <div class="word-pron">ID：${escapeHtml(item.id)} · ${escapeHtml(item.phonetic)}</div>
      </td>
      <td>${escapeHtml(item.meaning)}</td>
      <td>${badge(getItemPublishBadge(item, version))}</td>
      <td>
        <div class="row-actions">
          ${detailButton}
          ${editOnlyButton}
          ${editableActions}
          ${hasActions ? "" : `<span class="muted">-</span>`}
        </div>
      </td>
    </tr>
  `;
}

function renderGroupList(version) {
  const groups = getSelectedGroups();
  if (!groups.length) {
    return `
      <div class="empty-state">
        <div>
          <div class="empty-icon"><i data-lucide="sparkles"></i></div>
          <h3>内容尚未生成</h3>
          <p>确认词清单后，后台服务会生成单词分组、图片、音频和小组故事内容。</p>
          <div style="margin-top: 16px;">
            <button class="btn primary" type="button" data-action="confirm-wordlist" ${version.status === "LIST_CONFIRMING" ? "" : "disabled"}><i data-lucide="list-checks"></i>确认词清单并生成</button>
          </div>
        </div>
      </div>
    `;
  }
  const filteredGroups = getFilteredGroups(groups);
  return `
    ${renderGroupFilters(groups, filteredGroups)}
    ${
      filteredGroups.length
        ? `<section class="word-unit">
            <div class="unit-head">
              <div>
                <strong>分组列表</strong>
                <span class="muted"> · ${filteredGroups.length} / ${groups.length} 个分组</span>
              </div>
              <span class="subtle">分组内容包含图片、音频和故事数据</span>
            </div>
            <table class="word-table group-table">
              <thead>
                <tr>
                  <th style="width: 24%;">分组</th>
                  <th>包含单词</th>
                  <th style="width: 22%;">内容数据</th>
                  <th style="width: 14%;">状态</th>
                  <th style="width: 170px;">操作</th>
                </tr>
              </thead>
              <tbody>
                ${filteredGroups.map((item) => renderGroupRow(item, version)).join("")}
              </tbody>
            </table>
          </section>`
        : renderNoMatchedGroups()
    }
  `;
}

function renderGroupFilters(groups, filteredGroups) {
  return `
    <form id="group-filter-form" class="group-filter-bar">
      <div class="word-filter-field">
        <label>分组 ID</label>
        <div class="word-search-box">
          <i data-lucide="search"></i>
          <input name="groupSearch" value="${escapeHtml(state.groupSearch || "")}" placeholder="输入分组 ID" />
        </div>
      </div>
      <div class="word-filter-actions">
        <button class="btn primary" type="submit"><i data-lucide="search"></i>查询</button>
        <button class="btn" type="button" data-action="clear-group-filters">重置</button>
      </div>
      <div class="word-filter-count">显示 ${filteredGroups.length} / ${groups.length} 个分组</div>
    </form>
  `;
}

function renderNoMatchedGroups() {
  return `
    <div class="filter-empty">
      <div class="empty-icon"><i data-lucide="search-x"></i></div>
      <h3>暂无匹配分组</h3>
      <p>请调整分组 ID 后再试。</p>
    </div>
  `;
}

function renderGroupRow(item, version) {
  const published = version.status === "PUBLISHED";
  const locked = isPublishingLocked(version);
  return `
    <tr>
      <td>
        <div class="word-main">${escapeHtml(item.title)}</div>
        <div class="word-pron">ID：${escapeHtml(item.id)} · ${escapeHtml(item.story)}</div>
      </td>
      <td>
        <div class="tag-list">
          ${item.words.map((wordText) => `<span class="tag">${escapeHtml(wordText)}</span>`).join("")}
        </div>
      </td>
      <td>
        <div class="asset-summary">
          <span>图片：${escapeHtml(item.imageStatus)}</span>
          <span>音频：${escapeHtml(item.audioStatus)}</span>
          <span>故事：${escapeHtml(item.storyStatus)}</span>
        </div>
      </td>
      <td>${badge(getItemPublishBadge(item, version))}</td>
      <td>
        <div class="row-actions">
          <button class="icon-btn" type="button" data-action="view-group" data-group-id="${item.id}" title="查看详情"><i data-lucide="panel-right-open"></i></button>
          ${published || locked ? "" : `<button class="icon-btn" type="button" data-action="regenerate-one-group" data-group-id="${item.id}" title="重新生成"><i data-lucide="refresh-cw"></i></button>`}
        </div>
      </td>
    </tr>
  `;
}

function renderModal() {
  if (!state.modal) return "";
  const { type } = state.modal;
  if (type === "category-form") return renderCategoryModal();
  if (type === "book-form") return renderBookModal();
  if (type === "word-form") return renderWordModal();
  if (type === "confirm") return renderConfirmModal();
  if (type === "publish") return renderPublishModal();
  if (type === "create-version-tip") return renderCreateVersionTipModal();
  if (type === "create-version") return renderCreateVersionModal();
  if (type === "word-detail") return renderWordDetailModal();
  if (type === "word-compare") return renderWordCompareModal();
  if (type === "group-detail") return renderGroupDetailModal();
  if (type === "group-compare") return renderGroupCompareModal();
  if (type === "readonly-guard") return renderReadonlyGuardModal();
  return "";
}

function renderCreateVersionTipModal() {
  return modalShell({
    size: "sm",
    title: "新建词书版本",
    body: `<p style="line-height: 1.7;">有单词增、删、排序操作才可创建新版本！如果只是修改已发布单词或故事内容，可在当前线上版本中编辑后重新发布。</p>`,
    foot: `
      <button class="btn" type="button" data-action="close-modal">取消</button>
      <button class="btn primary" type="button" data-action="open-create-version-form"><i data-lucide="git-branch-plus"></i>创建</button>
    `,
  });
}

function renderCategoryModal() {
  const category = state.modal.categoryId ? getCategory(state.modal.categoryId) : null;
  return modalShell({
    size: "sm",
    title: category ? "修改词书分类" : "新增词书分类",
    body: `
      <form id="category-form" class="form-grid">
        <input type="hidden" name="categoryId" value="${category?.id || ""}" />
        <div class="form-row full">
          <label>分类名称</label>
          <input name="name" value="${escapeHtml(category?.name || "")}" placeholder="请输入分类名称" required />
        </div>
      </form>
    `,
    foot: `
      <button class="btn" type="button" data-action="close-modal">取消</button>
      <button class="btn primary" type="submit" form="category-form">保存</button>
    `,
  });
}

function renderBookModal() {
  const bookItem = state.modal.bookId ? getBook(state.modal.bookId) : null;
  const isEdit = Boolean(bookItem);
  const title = bookItem ? "修改词书" : "新建词书";
  const selectedStage = bookItem ? getBookStage(bookItem) : "高中";
  return modalShell({
    size: "lg",
    title,
    body: `
      <form id="book-form" class="form-grid">
        <input type="hidden" name="bookId" value="${bookItem?.id || ""}" />
        <div class="form-row">
          <label>词书名称</label>
          <input name="name" value="${escapeHtml(bookItem?.name || "")}" placeholder="如：高考高频词" required />
        </div>
        <div class="form-row">
          <label>所属分类</label>
          <select name="categoryId">
            ${sortedBySort(state.categories).map((category) => `<option value="${category.id}" ${category.id === (bookItem?.categoryId || state.selectedCategoryId) ? "selected" : ""}>${escapeHtml(category.name)}</option>`).join("")}
          </select>
        </div>
        <div class="form-row">
          <label>出版社</label>
          <input name="publisher" value="${escapeHtml(bookItem?.publisher || "")}" placeholder="如：人教版" required />
        </div>
        <div class="form-row">
          <label>学段</label>
          <select name="stage" required>
            ${stageOptions.map((stage) => `<option value="${stage}" ${stage === selectedStage ? "selected" : ""}>${stage}</option>`).join("")}
          </select>
        </div>
        <div class="form-row">
          <label>册别</label>
          <input name="volume" value="${escapeHtml(bookItem?.volume || "")}" placeholder="如：八下" required />
        </div>
        <div class="form-row full">
          <label>${isEdit ? "修改封面图" : "封面图"}</label>
          ${isEdit ? `<div class="upload-current"><span>当前封面</span><strong>${escapeHtml(bookItem.coverImageName || "默认封面")}</strong></div>` : ""}
          <input name="coverImage" type="file" accept=".png,.jpg,.jpeg" ${isEdit ? "" : "required"} />
        </div>
        ${
          isEdit
            ? `<div class="form-row full">
                <div class="form-hint"><i data-lucide="info"></i>修改词书基础信息时不支持上传单词图片；如需调整词条内容，请进入词书详情后创建新版本。</div>
              </div>`
            : `<div class="form-row full">
                <label>单词列表图片</label>
                <input name="screenshots" type="file" accept=".png,.jpg,.jpeg" multiple required />
              </div>`
        }
        <div class="form-row full">
          <label>说明</label>
          <textarea name="note" placeholder="可填写词书来源、截图说明或本次导入范围"></textarea>
        </div>
      </form>
    `,
    foot: `
      <button class="btn" type="button" data-action="close-modal">取消</button>
      <button class="btn primary" type="submit" form="book-form">保存</button>
    `,
  });
}

function renderWordModal() {
  const wordItem = findWord(state.modal.wordId);
  const insertTarget = state.modal.insertAfterWordId ? findWord(state.modal.insertAfterWordId) : null;
  const title = wordItem ? "修改单词" : insertTarget ? `在 ${insertTarget.text} 后插入单词` : "新增单词";
  const lockedUnit = Boolean(wordItem && getVersion()?.status === "PUBLISHED");
  return modalShell({
    title,
    body: `
      <form id="word-form" class="form-grid">
        <input type="hidden" name="wordId" value="${wordItem?.id || ""}" />
        <input type="hidden" name="insertAfterWordId" value="${insertTarget?.id || ""}" />
        <div class="form-row">
          <label>单词</label>
          <input name="text" value="${escapeHtml(wordItem?.text || "")}" placeholder="请输入单词" required />
        </div>
        <div class="form-row">
          <label>所属单元</label>
          <input name="unit" value="${escapeHtml(wordItem?.unit || insertTarget?.unit || "Unit 1")}" placeholder="如：Unit 1" ${lockedUnit ? "disabled" : "required"} />
          ${lockedUnit ? `<input type="hidden" name="unit" value="${escapeHtml(wordItem.unit)}" />` : ""}
        </div>
        <div class="form-row">
          <label>音标</label>
          <input name="phonetic" value="${escapeHtml(wordItem?.phonetic || "")}" placeholder="/.../" />
        </div>
        <div class="form-row full">
          <label>释义</label>
          <textarea name="meaning" placeholder="请输入释义">${escapeHtml(wordItem?.meaning || "")}</textarea>
        </div>
        ${
          insertTarget
            ? `<div class="form-row full">
                <div class="form-hint"><i data-lucide="info"></i>保存后，新单词会插入到「${escapeHtml(insertTarget.text)}」的下方，并保留同单元排序。</div>
              </div>`
            : ""
        }
        ${
          lockedUnit
            ? `<div class="form-row full">
                <div class="form-hint"><i data-lucide="info"></i>已发布版本只允许修改单词内容，不允许修改所属单元、增删词条或调整排序。</div>
              </div>`
            : ""
        }
      </form>
    `,
    foot: `
      <button class="btn" type="button" data-action="close-modal">取消</button>
      <button class="btn primary" type="submit" form="word-form">保存</button>
    `,
  });
}

function renderConfirmModal() {
  return modalShell({
    size: "sm",
    title: state.modal.title,
    body: `<p style="line-height: 1.7;">${escapeHtml(state.modal.body)}</p>`,
    foot: `
      <button class="btn" type="button" data-action="close-modal">取消</button>
      <button class="btn ${state.modal.danger ? "danger" : "primary"}" type="button" data-action="confirm-modal">${escapeHtml(state.modal.confirmText || "确认")}</button>
    `,
  });
}

function renderPublishModal() {
  const bookItem = getBook();
  const version = getVersion();
  const online = bookItem.onlineVersionId ? getVersion(bookItem.onlineVersionId) : null;
  const contentUpdate = bookItem.onlineVersionId === version.id && version.hasPendingContentChanges;
  return modalShell({
    title: version?.status === "PUBLISH_FAILED" ? "重新发布" : contentUpdate ? "发布内容修改" : "发布词书版本",
    body: `
      <form id="publish-form" class="form-grid">
        <div class="form-row">
          <label>发布版本</label>
          <input value="${escapeHtml(bookItem.name)} V${version.no}" disabled />
        </div>
        <div class="form-row">
          <label>当前已发布版本</label>
          <input value="${online ? `V${online.no}` : "暂无已发布版本"}" disabled />
        </div>
        <div class="form-row full">
          <label>本次发布内容描述</label>
          <textarea name="releaseNote" placeholder="请说明本次调整内容。提交后后台自动执行校验与上线流程。" required>${escapeHtml(version.releaseNote || version.changeSummary || "")}</textarea>
        </div>
        <div class="form-row full">
          <div class="form-hint"><i data-lucide="info"></i>${contentUpdate ? "本次为已发布内容修改，后台校验通过后立即生效。" : "本次为新词书版本发布，后台校验通过后按上线窗口生效。"}提交后无需人工处理。</div>
        </div>
      </form>
    `,
    foot: `
      <button class="btn" type="button" data-action="close-modal">取消</button>
      <button class="btn primary" type="submit" form="publish-form">提交发布</button>
    `,
  });
}

function renderCreateVersionModal() {
  const bookItem = getBook();
  const versions = getBookVersions(bookItem.id);
  const maxNo = versions.reduce((max, item) => Math.max(max, item.no), 0);
  const { base, baseLabel } = getNewVersionBase(bookItem);
  const selectableVersions = [...versions].sort((a, b) => b.no - a.no);
  const selectedBaseId = base?.id || selectableVersions[0]?.id || "";
  const selectedBaseWords = selectedBaseId ? state.words[selectedBaseId] || [] : [];
  const hasBaseVersion = selectableVersions.length > 0;
  return modalShell({
    title: "新建版本",
    body: `
      <form id="create-version-form" class="version-create-form">
        <div class="version-create-card">
          <div class="version-create-row">
            <span>词书</span>
            <strong>${escapeHtml(bookItem.name)}</strong>
          </div>
          <div class="version-create-row">
            <span>新版本</span>
            <strong>V${maxNo + 1}</strong>
          </div>
        </div>

        <div class="version-source-list">
          <div class="version-source-option ${hasBaseVersion ? "" : "disabled"}">
            <label class="version-source-title">
              <input type="radio" name="sourceMode" value="base" ${hasBaseVersion ? "checked" : "disabled"} />
              <span>
                <strong>基于已有版本创建</strong>
                <em>复用所选版本的单词清单作为基础数据，进入清单确认。</em>
              </span>
            </label>
            <div class="form-row">
              <label>选择基础版本</label>
              <select name="baseVersionId" ${hasBaseVersion ? "" : "disabled"}>
                ${hasBaseVersion
                  ? selectableVersions
                      .map((item) => {
                        const words = state.words[item.id] || [];
                        const label = item.id === bookItem.onlineVersionId ? "当前已发布版本" : versionStatus[item.status].label;
                        return `<option value="${item.id}" ${item.id === selectedBaseId ? "selected" : ""}>V${item.no} · ${label} · ${words.length} 词</option>`;
                      })
                      .join("")
                  : `<option value="">暂无可基于版本</option>`}
              </select>
            </div>
            <div class="version-source-meta">默认建议：${base ? `${baseLabel} V${base.no}，${selectedBaseWords.length} 个单词` : "暂无基础版本"}</div>
          </div>

          <div class="version-source-option">
            <label class="version-source-title">
              <input type="radio" name="sourceMode" value="fresh" ${hasBaseVersion ? "" : "checked"} />
              <span>
                <strong>不基于版本，重新生成</strong>
                <em>上传新的单词清单图片，创建后进入清单生成中。</em>
              </span>
            </label>
            <div class="form-row">
              <label>单词清单图片</label>
              <input name="screenshots" type="file" accept=".png,.jpg,.jpeg" multiple />
            </div>
          </div>
        </div>

        <div class="form-hint">
          <i data-lucide="info"></i>
          <span>基于版本会复用词清单；不基于版本会重新上传图片并等待后台识别，识别完成后再确认词清单。</span>
        </div>
      </form>
    `,
    foot: `
      <button class="btn" type="button" data-action="close-modal">取消</button>
      <button class="btn primary" type="submit" form="create-version-form"><i data-lucide="git-branch-plus"></i>确认创建</button>
    `,
  });
}

function renderWordDetailModal() {
  const wordItem = findWord(state.modal.wordId);
  if (!wordItem) return "";
  const data = getWordGeneratedData(wordItem);
  const version = getVersion();
  const locked = isPublishingLocked(version);
  const compareContext = getCompareContext();
  return modalShell({
    size: "xl",
    title: "单词详情",
    body: `
      <div class="word-detail-view">
        <div class="word-detail-head">
          <div>
            <div class="word-detail-title">
              <h3>${escapeHtml(data.wordText)}</h3>
              ${badge(getItemPublishBadge(wordItem, version))}
            </div>
            <div class="word-detail-meta">
              <span>${escapeHtml(data.unitName)}</span>
              <span>Unit ${data.unitSequence}</span>
              <span>Group ${data.groupSequence}</span>
              <span>词序 ${data.wordSequence}</span>
            </div>
          </div>
          <div class="detail-action-row">
            ${compareContext ? `<button class="btn" type="button" data-action="view-word-compare" data-word-id="${wordItem.id}"><i data-lucide="git-compare"></i>对比</button>` : ""}
            ${locked ? "" : `<button class="btn primary" type="button" data-action="edit-word" data-word-id="${wordItem.id}"><i data-lucide="pencil"></i>编辑单词</button>`}
          </div>
        </div>

        <div class="word-review-stack">
          ${renderPronunciationSection(wordItem, data)}
          ${renderMeaningSection(wordItem, data)}
          ${renderDistractorSection(wordItem, data)}
        </div>
      </div>
    `,
    foot: `<button class="btn primary" type="button" data-action="close-modal">关闭</button>`,
  });
}

function renderPronunciationSection(wordItem, data) {
  const canDelete = data.pronunciations.length > 1;
  return `
    <section class="review-section">
      <div class="review-section-head">
        <div>
          <h4>发音数据</h4>
        </div>
        <button class="btn" type="button" data-action="add-word-pronunciation" data-word-id="${wordItem.id}"><i data-lucide="plus"></i>新增发音对象</button>
      </div>
      <div class="audio-row-list">
        ${data.pronunciations
          .map(
            (item, index) => `
              <div class="audio-data-row">
                <div class="row-index">#${index + 1}</div>
                <strong>${escapeHtml(item.phonetic || "暂无音标")}</strong>
                <div class="audio-cell">
                  ${renderAudioPlayer(item.pronAudioUrl, `发音 ${index + 1}`)}
                </div>
                <div class="object-actions">
                  <button class="btn" type="button" data-action="edit-word-generated" data-word-id="${wordItem.id}" data-field="pronunciation" data-index="${index}"><i data-lucide="pencil"></i>修改</button>
                  <button class="btn danger" type="button" data-action="delete-word-pronunciation" data-word-id="${wordItem.id}" data-index="${index}" ${canDelete ? "" : "disabled"}><i data-lucide="trash-2"></i>删除</button>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderMeaningSection(wordItem, data) {
  return `
    <section class="review-section">
      <div class="review-section-head">
        <div>
          <h4>释义与例句</h4>
        </div>
        <button class="btn" type="button" data-action="add-word-meaning" data-word-id="${wordItem.id}"><i data-lucide="plus"></i>新增释义对象</button>
      </div>
      <div class="meaning-review-list">
        ${data.meanings.map((meaning, index) => renderMeaningCard(wordItem, meaning, index, data.meanings.length > 1)).join("")}
      </div>
    </section>
  `;
}

function renderMeaningCard(wordItem, meaning, meaningIndex, canDeleteMeaning) {
  const examples = meaning.examples?.length
    ? meaning.examples
    : [
        {
          en: `A sample sentence helps students remember ${wordItem.text}.`,
          cn: "示例句用于辅助理解当前释义。",
          exampleEnAudioUrl: `${wordItem.text}-example-${meaningIndex + 1}-1.mp3`,
        },
      ];
  meaning.examples = examples;
  const canDeleteExample = examples.length > 1;
  return `
    <article class="meaning-review-card">
      <div class="meaning-review-head">
        <div class="meaning-title-row">
          <span class="row-index">#${meaning.sequence || meaningIndex + 1}</span>
          <strong>${escapeHtml(meaning.partOfSpeech || "未设置词性")} · ${escapeHtml(meaning.chineseMeaning || "暂无释义")}</strong>
        </div>
        <div class="inline-actions">
          <button class="btn" type="button" data-action="edit-word-generated" data-word-id="${wordItem.id}" data-field="meaning" data-index="${meaningIndex}"><i data-lucide="pencil"></i>编辑释义</button>
          <button class="btn" type="button" data-action="add-word-example" data-word-id="${wordItem.id}" data-meaning-index="${meaningIndex}"><i data-lucide="plus"></i>新增例句</button>
          <button class="btn danger" type="button" data-action="delete-word-meaning" data-word-id="${wordItem.id}" data-index="${meaningIndex}" ${canDeleteMeaning ? "" : "disabled"}><i data-lucide="trash-2"></i>删除释义</button>
        </div>
      </div>
      <div class="meaning-review-body">
        <div class="meaning-thumb-cell">
          ${renderImagePreview(
            meaning.meaningImageUrl,
            `${wordItem.text} 释义图片`,
            `<button class="btn" type="button" data-action="regenerate-word-image" data-word-id="${wordItem.id}" data-meaning-index="${meaningIndex}"><i data-lucide="refresh-cw"></i>重新生成</button>`,
          )}
        </div>
        <div class="example-review-list">
            ${examples
              .map(
                (example, exampleIndex) => `
                  <div class="example-review-row">
                    <div class="example-copy">
                      <span class="sub-row-label">例句 ${exampleIndex + 1}</span>
                      <p>${renderMarkedHtml(example.en, [wordItem.text])}</p>
                      <span>${escapeHtml(example.cn || "")}</span>
                      ${renderAudioPlayer(example.exampleEnAudioUrl, `例句音频 ${exampleIndex + 1}`)}
                    </div>
                    <div class="object-actions">
                      <button class="btn" type="button" data-action="edit-word-generated" data-word-id="${wordItem.id}" data-field="example" data-index="${meaningIndex}" data-example-index="${exampleIndex}"><i data-lucide="pencil"></i>编辑例句</button>
                      <button class="btn danger" type="button" data-action="delete-word-example" data-word-id="${wordItem.id}" data-index="${meaningIndex}" data-example-index="${exampleIndex}" ${canDeleteExample ? "" : "disabled"}><i data-lucide="trash-2"></i>删除例句</button>
                    </div>
                  </div>
                `,
              )
              .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderDistractorSection(wordItem, data) {
  return `
    <section class="review-section">
      <div class="review-section-head">
        <div>
          <h4>干扰词</h4>
        </div>
        <button class="btn" type="button" data-action="add-word-distractor" data-word-id="${wordItem.id}"><i data-lucide="plus"></i>新增干扰词</button>
      </div>
      <div class="distractor-grid">
        ${data.distractorWords
          .map(
            (wordText, index) => `
              <span class="distractor-edit-chip">
                ${escapeHtml(wordText)}
                <button type="button" data-action="delete-word-distractor" data-word-id="${wordItem.id}" data-index="${index}" title="删除当前干扰词"><i data-lucide="x"></i></button>
              </span>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderGroupDetailModal() {
  const item = getSelectedGroups().find((groupItem) => groupItem.id === state.modal.groupId);
  if (!item) return "";
  const version = getVersion();
  const locked = isPublishingLocked(version);
  const data = getGroupGeneratedData(item);
  const compareContext = getCompareContext();
  return modalShell({
    size: "xl",
    title: "分组详情",
    body: `
      <div class="group-detail-view">
        <div class="group-detail-top">
          <div>
            <div class="group-title">
              <h3>${escapeHtml(item.title)}</h3>
              ${badge(getItemPublishBadge(item, version))}
            </div>
            <div class="word-detail-meta">
              <span>${escapeHtml(data.unitName)}</span>
              <span>Unit ${data.unitSequence}</span>
              <span>Group ${data.groupSequence}</span>
              <span>故事句 ${data.storyInfo.textList.length}</span>
            </div>
            <div class="tag-list" style="margin-top: 8px;">${item.words.map((wordText) => `<span class="tag">${escapeHtml(wordText)}</span>`).join("")}</div>
          </div>
          <div class="detail-action-row">
            ${compareContext ? `<button class="btn" type="button" data-action="view-group-compare" data-group-id="${item.id}"><i data-lucide="git-compare"></i>对比</button>` : ""}
            ${locked ? "" : `<button class="btn primary" type="button" data-action="edit-group-story" data-group-id="${item.id}"><i data-lucide="pencil"></i>编辑故事</button>`}
          </div>
        </div>

        ${renderGroupMediaSection(item, data)}
        ${renderGroupStoryTextSection(item, data)}
      </div>
    `,
    foot: `<button class="btn primary" type="button" data-action="close-modal">关闭</button>`,
  });
}

function renderGroupMediaSection(item, data) {
  return `
    <section class="generated-section">
      <div class="generated-section-head">
        <div>
          <h4>故事资源</h4>
        </div>
      </div>
      <div class="media-field-grid">
        <div class="media-field-card image-media-card">
          ${renderImagePreview(data.storyInfo.storyImageUrl, `${item.title} 故事图片`)}
          <div class="media-field-content">
            <strong>故事图片</strong>
            <button class="btn" type="button" data-action="regenerate-group-image" data-group-id="${item.id}"><i data-lucide="refresh-cw"></i>重新生成图片</button>
          </div>
        </div>
        <div class="media-field-card audio-media-card">
          <div class="media-field-content">
            <strong>故事音频</strong>
            ${renderAudioPlayer(data.storyInfo.storyAudioUrl, "故事音频")}
          </div>
          <button class="btn" type="button" data-action="regenerate-group-audio" data-group-id="${item.id}"><i data-lucide="refresh-cw"></i>重新生成音频</button>
        </div>
      </div>
    </section>
  `;
}

function renderGroupStoryTextSection(item, data) {
  return `
    <section class="generated-section">
      <div class="generated-section-head">
        <div>
          <h4>故事文本</h4>
        </div>
        <button class="btn" type="button" data-action="add-group-story-line" data-group-id="${item.id}"><i data-lucide="plus"></i>新增故事句对象</button>
      </div>
      <div class="story-object-list">
        ${data.storyInfo.textList
          .map(
            (line, index) => `
              <div class="story-object-card">
                <div class="story-object-index">#${index + 1}</div>
                <div>
                  <p>${renderMarkedHtml(line.en, item.words)}</p>
                  <span>${escapeHtml(line.cn || "")}</span>
                </div>
                <button class="btn" type="button" data-action="edit-group-story-line" data-group-id="${item.id}" data-index="${index}"><i data-lucide="pencil"></i>编辑当前句</button>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderWordCompareModal() {
  const sourceWord = findWord(state.modal.wordId);
  const context = sourceWord ? getCompareContext() : null;
  if (!sourceWord || !context) return "";
  const leftWord = findWordInVersion(context.leftVersion.id, sourceWord);
  const rightWord = findWordInVersion(context.rightVersion.id, sourceWord);
  return modalShell({
    size: "xl",
    title: "单词内容对比",
    body: `
      ${renderCompareIntro(context)}
      <div class="compare-grid">
        ${renderWordComparePanel(context.leftTitle, context.leftVersion, leftWord, sourceWord)}
        ${renderWordComparePanel(context.rightTitle, context.rightVersion, rightWord, sourceWord)}
      </div>
    `,
    foot: `<button class="btn primary" type="button" data-action="close-modal">关闭</button>`,
  });
}

function renderGroupCompareModal() {
  const sourceGroup = getSelectedGroups().find((groupItem) => groupItem.id === state.modal.groupId);
  const context = sourceGroup ? getCompareContext() : null;
  if (!sourceGroup || !context) return "";
  const leftGroup = findGroupInVersion(context.leftVersion.id, sourceGroup);
  const rightGroup = findGroupInVersion(context.rightVersion.id, sourceGroup);
  return modalShell({
    size: "xl",
    title: "分组内容对比",
    body: `
      ${renderCompareIntro(context)}
      <div class="compare-grid">
        ${renderGroupComparePanel(context.leftTitle, context.leftVersion, leftGroup, sourceGroup)}
        ${renderGroupComparePanel(context.rightTitle, context.rightVersion, rightGroup, sourceGroup)}
      </div>
    `,
    foot: `<button class="btn primary" type="button" data-action="close-modal">关闭</button>`,
  });
}

function renderCompareIntro(context) {
  return `
    <div class="compare-intro">
      <i data-lucide="git-compare"></i>
      <div>
        <strong>${escapeHtml(context.reason)}</strong>
        <span>左侧为基准内容，右侧为当前词书最新版本内容。</span>
      </div>
    </div>
  `;
}

function renderWordComparePanel(title, version, wordItem, sourceWord) {
  if (!wordItem) {
    return renderCompareMissingPanel(title, version, `该版本中不存在「${sourceWord.text}」这个单词。`);
  }
  const detail = getWordDetail(wordItem);
  return `
    <section class="compare-panel">
      <div class="compare-panel-head">
        <div>
          <strong>${escapeHtml(title)}</strong>
          <span>V${version.no} · ${escapeHtml(versionStatus[version.status].label)}</span>
        </div>
        ${badge({ label: version.status === "PUBLISHED" ? "已发布" : "未发布", tone: version.status === "PUBLISHED" ? "green" : "amber" })}
      </div>
      <dl class="compare-fields">
        <div><dt>单词 ID</dt><dd>${escapeHtml(wordItem.id)}</dd></div>
        <div><dt>单词</dt><dd>${escapeHtml(wordItem.text)}</dd></div>
        <div><dt>所属单元</dt><dd>${escapeHtml(wordItem.unit)}</dd></div>
        <div><dt>音标</dt><dd>${escapeHtml(wordItem.phonetic || "暂无")}</dd></div>
        <div><dt>释义</dt><dd>${escapeHtml(wordItem.meaning || "暂无")}</dd></div>
        <div><dt>内容状态</dt><dd>图片 ${escapeHtml(detail.imageStatus)} / 音频 ${escapeHtml(detail.audioStatus)} / 例句 ${escapeHtml(detail.storyStatus)}</dd></div>
      </dl>
      <div class="compare-story-list">
        ${detail.examples
          .map(
            (line) => `
              <div class="compare-story">
                <p>${renderHighlightedSentence(line.en, [wordItem.text])}</p>
                <span>${escapeHtml(line.zh)}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderGroupComparePanel(title, version, groupItem, sourceGroup) {
  if (!groupItem) {
    return renderCompareMissingPanel(title, version, `该版本中不存在「${sourceGroup.title}」这个分组。`);
  }
  const storyLines = groupItem.storyLines?.length ? groupItem.storyLines : buildStoryLines(groupItem.words);
  return `
    <section class="compare-panel">
      <div class="compare-panel-head">
        <div>
          <strong>${escapeHtml(title)}</strong>
          <span>V${version.no} · ${escapeHtml(versionStatus[version.status].label)}</span>
        </div>
        ${badge({ label: version.status === "PUBLISHED" ? "已发布" : "未发布", tone: version.status === "PUBLISHED" ? "green" : "amber" })}
      </div>
      <dl class="compare-fields">
        <div><dt>分组 ID</dt><dd>${escapeHtml(groupItem.id)}</dd></div>
        <div><dt>分组名称</dt><dd>${escapeHtml(groupItem.title)}</dd></div>
        <div><dt>包含单词</dt><dd>${groupItem.words.map((wordText) => `<span class="tag">${escapeHtml(wordText)}</span>`).join("")}</dd></div>
        <div><dt>图片</dt><dd>${escapeHtml(groupItem.image)} · ${escapeHtml(groupItem.imageStatus)}</dd></div>
        <div><dt>音频</dt><dd>${escapeHtml(groupItem.audio)} · ${escapeHtml(groupItem.audioStatus)}</dd></div>
        <div><dt>故事状态</dt><dd>${escapeHtml(groupItem.storyStatus)}</dd></div>
      </dl>
      <div class="compare-story-list">
        ${storyLines
          .map(
            (line) => `
              <div class="compare-story">
                <p>${renderHighlightedSentence(line.en, groupItem.words)}</p>
                <span>${escapeHtml(line.zh)}</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCompareMissingPanel(title, version, message) {
  return `
    <section class="compare-panel">
      <div class="compare-panel-head">
        <div>
          <strong>${escapeHtml(title)}</strong>
          <span>V${version.no} · ${escapeHtml(versionStatus[version.status].label)}</span>
        </div>
      </div>
      <div class="compare-empty">
        <div class="empty-icon"><i data-lucide="file-x"></i></div>
        <h3>无对应内容</h3>
        <p>${escapeHtml(message)}</p>
      </div>
    </section>
  `;
}

function renderReadonlyGuardModal() {
  const version = getVersion();
  const isOnlineFlow = isPublishingLocked(version);
  return modalShell({
    size: "sm",
    title: isOnlineFlow ? "版本正在发布中" : "需要先创建新版本",
    body: `
      <p style="line-height: 1.7;">${isOnlineFlow ? "当前版本已提交发布，后台正在执行校验与上线流程，完成前暂不可修改。" : "已发布版本不允许直接进行增删词条或词条排序。系统会基于当前已发布版本创建一个可编辑的新版本，编辑完成后再重新生成内容并发布。"}</p>
    `,
    foot: `
      <button class="btn" type="button" data-action="close-modal">取消</button>
      ${isOnlineFlow ? "" : `<button class="btn primary" type="button" data-action="create-version-from-guard"><i data-lucide="git-branch-plus"></i>创建新版本</button>`}
    `,
  });
}

function modalShell({ title, body, foot, size = "" }) {
  return `
    <div class="modal-backdrop" data-action="close-modal-on-backdrop">
      <section class="modal ${size}" role="dialog" aria-modal="true">
        <div class="modal-head">
          <h2>${escapeHtml(title)}</h2>
          <button class="icon-btn" type="button" data-action="close-modal" title="关闭"><i data-lucide="x"></i></button>
        </div>
        <div class="modal-body">${body}</div>
        <div class="modal-foot">${foot}</div>
      </section>
    </div>
  `;
}

function renderToast() {
  return `
    <div class="toast">
      <i data-lucide="${state.toast.tone === "danger" ? "circle-alert" : "circle-check"}"></i>
      <div>
        <strong>${escapeHtml(state.toast.title)}</strong>
        <div>${escapeHtml(state.toast.message || "")}</div>
      </div>
    </div>
  `;
}

function findWord(wordId) {
  return getSelectedWords().find((item) => item.id === wordId);
}

function getWordDetail(wordItem) {
  if (!wordItem.detail) {
    wordItem.detail = buildWordDetail(wordItem.text, wordItem.phonetic, wordItem.meaning);
  }
  return wordItem.detail;
}

function getWordGeneratedData(wordItem) {
  const detail = getWordDetail(wordItem);
  if (!wordItem.generatedData) {
    const wordIndex = Math.max(0, getSelectedWords().findIndex((item) => item.id === wordItem.id));
    const unitSequence = Number(String(wordItem.unit).match(/\d+/)?.[0] || 1);
    wordItem.generatedData = {
      unitName: wordItem.unit,
      unitSequence,
      groupSequence: Math.floor(wordIndex / 3) + 1,
      wordText: wordItem.text,
      wordSequence: wordIndex + 1,
      pronunciations: [
        {
          phonetic: wordItem.phonetic || "",
          pronAudioUrl: detail.audio,
        },
      ],
      meanings: [
        {
          chineseMeaning: wordItem.meaning || "",
          partOfSpeech: inferPartOfSpeech(wordItem.text),
          sequence: 1,
          examples: detail.examples.slice(0, 1).map((line, index) => ({
            en: line.en,
            cn: line.zh,
            exampleEnAudioUrl: `${wordItem.text}-example-${index + 1}.mp3`,
          })),
          meaningImageUrl: detail.image,
        },
      ],
      distractorWords: buildDefaultDistractors(wordItem.text),
    };
  }
  return wordItem.generatedData;
}

function getGroupGeneratedData(groupItem) {
  if (!groupItem.generatedData) {
    const unitSequence = Number(String(groupItem.title).match(/Unit\s*(\d+)/i)?.[1] || 1);
    const groupSequence = Number(String(groupItem.title).match(/Group\s*(\d+)/i)?.[1] || 1);
    groupItem.generatedData = {
      unitName: `Unit ${unitSequence}`,
      unitSequence,
      groupSequence,
      storyInfo: {
        textList: (groupItem.storyLines?.length ? groupItem.storyLines : buildStoryLines(groupItem.words)).map((line) => ({
          en: line.en,
          cn: line.zh,
        })),
        storyAudioUrl: groupItem.audio,
        storyImageUrl: groupItem.image,
      },
    };
  }
  return groupItem.generatedData;
}

function inferPartOfSpeech(text = "") {
  if (text.includes(" ")) return "";
  if (text.endsWith("ly")) return "adv.";
  if (text.endsWith("ive") || text.endsWith("al")) return "adj.";
  return "n.";
}

function buildDefaultDistractors(text = "") {
  const candidates = ["term", "achieve", "rarely", "sugar", "boss", "keyboard", "weight", "strategy", "topic", "foreign"];
  return candidates.filter((item) => item !== text).slice(0, 9);
}

function markGeneratedContentChanged(summary) {
  markVersionPendingContentChange(summary);
}

function getGroupById(groupId) {
  return getSelectedGroups().find((item) => item.id === groupId);
}

function syncGroupStoryLinesFromGenerated(groupItem) {
  const data = getGroupGeneratedData(groupItem);
  groupItem.storyLines = data.storyInfo.textList.map((line) => ({
    en: line.en,
    zh: line.cn,
  }));
}

function appendChangedLabel(value, suffix = "（已修改）") {
  const text = String(value || "");
  return text.includes(suffix) ? text : `${text}${suffix}`;
}

function showToast(title, message = "", tone = "success") {
  state.toast = { title, message, tone };
  render();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = null;
    render();
  }, 2400);
}

function closeModal() {
  state.modal = null;
  render();
}

function openConfirm(config) {
  state.modal = { type: "confirm", ...config };
  render();
}

function ensureEditableVersion() {
  const version = getVersion();
  if (version?.status === "PUBLISHED" || isPublishingLocked(version)) {
    state.modal = { type: "readonly-guard" };
    render();
    return false;
  }
  return true;
}

function ensureContentEditableVersion() {
  const version = getVersion();
  if (isPublishingLocked(version)) {
    state.modal = { type: "readonly-guard" };
    render();
    return false;
  }
  return true;
}

function selectDefaultVersion(bookId) {
  const bookItem = state.textbooks.find((item) => item.id === bookId);
  const versions = getBookVersions(bookId);
  const editable = versions.find((item) => item.status !== "PUBLISHED");
  state.selectedVersionId = editable?.id || bookItem?.onlineVersionId || versions.at(-1)?.id || "";
}

function resetWordFilters() {
  state.wordUnitFilter = "all";
  state.wordSearchField = "text";
  state.wordSearch = "";
}

function resetGroupFilters() {
  state.groupSearch = "";
}

function getCompareContext(bookItem = getBook()) {
  if (!bookItem) return null;
  const versions = getBookVersions(bookItem.id);
  if (versions.length <= 1) return null;
  const latestVersion = versions.at(-1);
  const publishedVersion =
    (bookItem.onlineVersionId ? getVersion(bookItem.onlineVersionId) : null) ||
    versions
      .filter((item) => item.status === "PUBLISHED")
      .at(-1);
  if (publishedVersion) {
    return {
      leftVersion: publishedVersion,
      rightVersion: latestVersion,
      leftTitle: "已发布版本内容",
      rightTitle: "最新内容",
      reason: `存在已发布版本，按 V${publishedVersion.no} 与最新 V${latestVersion.no} 对比。`,
    };
  }
  const previousVersion = versions.at(-2);
  if (!previousVersion) return null;
  return {
    leftVersion: previousVersion,
    rightVersion: latestVersion,
    leftTitle: "上一版本内容",
    rightTitle: "最新内容",
    reason: `暂无已发布版本，按上一版本 V${previousVersion.no} 与最新 V${latestVersion.no} 对比。`,
  };
}

function findWordInVersion(versionId, sourceWord) {
  const words = state.words[versionId] || [];
  return (
    words.find((item) => item.id === sourceWord.id) ||
    words.find((item) => item.text.toLowerCase() === sourceWord.text.toLowerCase()) ||
    null
  );
}

function findGroupInVersion(versionId, sourceGroup) {
  const groups = state.groups[versionId] || [];
  const sourceWords = sourceGroup.words.join("|").toLowerCase();
  return (
    groups.find((item) => item.id === sourceGroup.id) ||
    groups.find((item) => item.title === sourceGroup.title) ||
    groups.find((item) => item.words.join("|").toLowerCase() === sourceWords) ||
    null
  );
}

function getNewVersionBase(bookItem = getBook()) {
  const versions = getBookVersions(bookItem.id);
  const online = bookItem.onlineVersionId ? getVersion(bookItem.onlineVersionId) : null;
  return {
    base: online || versions.at(-1) || null,
    baseLabel: online ? "当前已发布版本" : "当前最新版本",
  };
}

function createVersionFromForm(data = {}, form = null) {
  const bookItem = getBook();
  const versions = getBookVersions(bookItem.id);
  const maxNo = versions.reduce((max, item) => Math.max(max, item.no), 0);
  const sourceMode = data.sourceMode || "base";
  const { base: suggestedBase } = getNewVersionBase(bookItem);
  const selectedBase = sourceMode === "base" ? getVersion(data.baseVersionId || suggestedBase?.id) : null;
  const screenshotCount = form?.elements?.screenshots?.files?.length || 0;
  if (sourceMode === "base" && !selectedBase) {
    showToast("请选择基础版本", "当前词书暂无可复用的版本时，请选择不基于版本并上传单词清单图片。", "danger");
    return;
  }
  if (sourceMode === "fresh" && screenshotCount === 0) {
    showToast("请上传单词清单图片", "不基于版本创建时，需要上传图片用于后台重新识别词清单。", "danger");
    return;
  }
  const newId = uid("ver");
  const newVersion = {
    id: newId,
    textbookId: bookItem.id,
    no: maxNo + 1,
    status: sourceMode === "fresh" ? "LIST_GENERATING" : "LIST_CONFIRMING",
    baseVersionId: selectedBase?.id || "",
    changeSummary:
      sourceMode === "fresh"
        ? `不基于历史版本创建，已上传 ${screenshotCount} 张单词清单图片，后台正在重新识别生成词清单。`
        : `基于 V${selectedBase.no} 创建，可编辑词清单并重新生成内容。`,
    creator: "当前用户",
    createdAt: nowText(),
    publishedAt: "",
    releaseNote: "",
  };
  state.versions.push(newVersion);
  state.words[newId] = sourceMode === "base" ? structuredClone(state.words[selectedBase.id] || []) : [];
  state.groups[newId] = [];
  state.selectedVersionId = newId;
  state.detailTab = "words";
  resetWordFilters();
  resetGroupFilters();
  state.modal = null;
  showToast(
    "已创建新版本",
    sourceMode === "fresh" ? `V${newVersion.no} 已进入清单生成中，等待识别完成。` : `V${newVersion.no} 已进入清单确认，可继续编辑词条。`,
  );
}

function completeRecognition() {
  const version = getVersion();
  if (!version || !["LIST_GENERATING", "LIST_CONFIRMING"].includes(version.status)) return;
  state.words[version.id] = [
    word(uid("w"), "Unit 1", "journey", "/ˈdʒɜːrni/", "旅行，旅程", "OCR", "新增", false),
    word(uid("w"), "Unit 1", "realize", "/ˈriːəlaɪz/", "认识到，实现", "OCR", "新增", false),
    word(uid("w"), "Unit 2", "treasure", "/ˈtreʒər/", "财富，珍宝", "OCR", "新增", false),
  ];
  version.status = "LIST_CONFIRMING";
  version.changeSummary = "后台服务已完成图片识别，等待人工确认词清单。";
  showToast("识别完成", "单词清单已生成，请确认词条、单元和排序。");
}

function confirmWordlist() {
  const version = getVersion();
  if (!version || version.status !== "LIST_CONFIRMING") return;
  version.status = "CONTENT_GENERATING";
  version.changeSummary = "词清单已确认，后台服务正在生成分组、图片、音频和故事。";
  render();
  window.setTimeout(() => {
    generateGroups(version.id);
    (state.words[version.id] || []).forEach((item) => {
      item.detailGenerated = true;
      item.detail = buildWordDetail(item.text, item.phonetic, item.meaning);
    });
    version.status = "READY_TO_PUBLISH";
    version.publishFailureReason = "";
    version.changeSummary = "词清单已确认，分组数据与内容资源已生成，等待发布。";
    showToast("内容已生成", "当前版本已进入内容生成完成状态。");
  }, 700);
}

function generateGroups(versionId) {
  const words = state.words[versionId] || [];
  const byUnit = words.reduce((map, item) => {
    map[item.unit] ||= [];
    map[item.unit].push(item);
    return map;
  }, {});
  state.groups[versionId] = Object.entries(byUnit).map(([unit, unitWords], index) =>
    group(
      uid("g"),
      `${unit} - Group ${index + 1}`,
      unitWords.map((item) => item.text),
      `${unit.toLowerCase().replace(/\s+/g, "-")}.png`,
      `${unit.toLowerCase().replace(/\s+/g, "-")}.mp3`,
      `围绕 ${unitWords.map((item) => item.text).join("、")} 生成一段可听可看的记忆故事。`,
    ),
  );
}

function moveInSortedCollection(items, id, direction) {
  const sorted = sortedBySort(items);
  const index = sorted.findIndex((item) => item.id === id);
  const targetIndex = direction === "up" ? index - 1 : index + 1;
  if (index < 0 || targetIndex < 0 || targetIndex >= sorted.length) return false;
  const current = sorted[index];
  const target = sorted[targetIndex];
  [current.sort, target.sort] = [target.sort, current.sort];
  return true;
}

function reorderWord(wordId, direction) {
  const versionWords = getSelectedWords();
  const index = versionWords.findIndex((item) => item.id === wordId);
  if (index < 0) return;
  const sameUnit = versionWords
    .map((item, itemIndex) => ({ ...item, itemIndex }))
    .filter((item) => item.unit === versionWords[index].unit);
  const unitIndex = sameUnit.findIndex((item) => item.id === wordId);
  const target = sameUnit[direction === "up" ? unitIndex - 1 : unitIndex + 1];
  if (!target) return;
  [versionWords[index], versionWords[target.itemIndex]] = [versionWords[target.itemIndex], versionWords[index]];
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  const action = actionTarget.dataset.action;
  if (action !== "close-modal-on-backdrop") {
    event.preventDefault();
    event.stopPropagation();
  } else if (event.target !== actionTarget) {
    return;
  }

  if (action === "go-catalog") {
    state.page = "catalog";
    state.modal = null;
    window.history.replaceState(null, "", "#catalog");
    render();
    return;
  }

  if (action === "select-category") {
    state.selectedCategoryId = actionTarget.dataset.categoryId;
    render();
    return;
  }

  if (action === "open-category-form") {
    state.modal = { type: "category-form" };
    render();
    return;
  }

  if (action === "edit-category") {
    state.modal = { type: "category-form", categoryId: actionTarget.dataset.categoryId };
    render();
    return;
  }

  if (action === "confirm-delete-category") {
    const categoryId = actionTarget.dataset.categoryId;
    const category = getCategory(categoryId);
    openConfirm({
      title: "删除词书分类",
      body: countBooks(categoryId) > 0 ? "当前分类下存在词书，不可删除。" : `删除后不可恢复，是否确认删除「${category.name}」这个词书分类？`,
      confirmText: countBooks(categoryId) > 0 ? "知道了" : "删除",
      danger: countBooks(categoryId) === 0,
      action: countBooks(categoryId) > 0 ? "noop" : "delete-category",
      payload: { categoryId },
    });
    return;
  }

  if (action === "move-category") {
    const moved = moveInSortedCollection(state.categories, actionTarget.dataset.categoryId, actionTarget.dataset.direction);
    if (moved) showToast("排序已更新", "词书分类排序已调整。");
    else render();
    return;
  }

  if (action === "open-book-form") {
    state.modal = { type: "book-form" };
    render();
    return;
  }

  if (action === "edit-book") {
    state.modal = { type: "book-form", bookId: actionTarget.dataset.bookId };
    render();
    return;
  }

  if (action === "open-book") {
    state.selectedTextbookId = actionTarget.dataset.bookId;
    state.page = "detail";
    state.detailTab = "words";
    selectDefaultVersion(state.selectedTextbookId);
    resetWordFilters();
    resetGroupFilters();
    window.history.replaceState(null, "", `#detail/${state.selectedTextbookId}`);
    render();
    return;
  }

  if (action === "move-book") {
    const bookItem = state.textbooks.find((item) => item.id === actionTarget.dataset.bookId);
    const scoped = state.textbooks.filter((item) => item.categoryId === bookItem.categoryId);
    const moved = moveInSortedCollection(scoped, bookItem.id, actionTarget.dataset.direction);
    if (moved) showToast("排序已更新", "当前分类内词书排序已调整。");
    else render();
    return;
  }

  if (action === "confirm-delete-book") {
    const bookItem = state.textbooks.find((item) => item.id === actionTarget.dataset.bookId);
    const hasPublished = state.versions.some((item) => item.textbookId === bookItem.id && item.status === "PUBLISHED");
    openConfirm({
      title: "删除词书",
      body: hasPublished ? "该词书存在已发布或历史发布版本，不允许物理删除。" : `确认删除「${bookItem.name}」吗？`,
      confirmText: hasPublished ? "知道了" : "删除",
      danger: !hasPublished,
      action: hasPublished ? "noop" : "delete-book",
      payload: { bookId: bookItem.id },
    });
    return;
  }

  if (action === "switch-version") {
    state.selectedVersionId = actionTarget.dataset.versionId;
    resetWordFilters();
    resetGroupFilters();
    render();
    return;
  }

  if (action === "switch-detail-tab") {
    state.detailTab = actionTarget.dataset.tab;
    render();
    return;
  }

  if (action === "clear-word-filters") {
    resetWordFilters();
    render();
    return;
  }

  if (action === "clear-group-filters") {
    resetGroupFilters();
    render();
    return;
  }

  if (action === "create-version") {
    state.modal = { type: "create-version-tip" };
    render();
    return;
  }

  if (action === "create-version-from-guard") {
    state.modal = { type: "create-version-tip" };
    render();
    return;
  }

  if (action === "open-create-version-form") {
    state.modal = { type: "create-version" };
    render();
    return;
  }

  if (action === "confirm-create-version") {
    createVersionFromForm();
    return;
  }

  if (action === "complete-recognition") {
    completeRecognition();
    return;
  }

  if (action === "confirm-wordlist") {
    confirmWordlist();
    return;
  }

  if (action === "confirm-delete-version") {
    const version = getVersion();
    if (!version || version.status === "PUBLISHED") return;
    openConfirm({
      title: "删除版本",
      body: "确认要删除当前版本吗？",
      confirmText: "删除",
      danger: true,
      action: "delete-version",
      payload: { versionId: version.id },
    });
    return;
  }

  if (action === "open-word-form") {
    if (!ensureEditableVersion()) return;
    state.modal = { type: "word-form" };
    render();
    return;
  }

  if (action === "insert-word-after") {
    if (!ensureEditableVersion()) return;
    state.modal = { type: "word-form", insertAfterWordId: actionTarget.dataset.wordId };
    render();
    return;
  }

  if (action === "edit-word") {
    if (!ensureContentEditableVersion()) return;
    state.modal = { type: "word-form", wordId: actionTarget.dataset.wordId };
    render();
    return;
  }

  if (action === "confirm-delete-word") {
    if (!ensureEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    openConfirm({
      title: "删除单词",
      body: `确认删除「${wordItem.text}」吗？删除后需要重新确认词清单并生成内容。`,
      confirmText: "删除",
      danger: true,
      action: "delete-word",
      payload: { wordId: wordItem.id },
    });
    return;
  }

  if (action === "move-word") {
    if (!ensureEditableVersion()) return;
    reorderWord(actionTarget.dataset.wordId, actionTarget.dataset.direction);
    const version = getVersion();
    version.changeSummary = "调整了词条排序，需重新确认词清单并生成内容。";
    version.publishFailureReason = "";
    state.groups[version.id] = [];
    if (["READY_TO_PUBLISH", "PUBLISH_FAILED"].includes(version.status)) version.status = "LIST_CONFIRMING";
    showToast("排序已更新", "词条排序已调整。");
    return;
  }

  if (action === "regenerate-groups") {
    if (!ensureEditableVersion()) return;
    const version = getVersion();
    version.status = "CONTENT_GENERATING";
    render();
    window.setTimeout(() => {
      generateGroups(version.id);
      version.status = "READY_TO_PUBLISH";
      version.publishFailureReason = "";
      version.changeSummary = "已重新生成分组数据、图片、音频和故事内容，等待发布。";
      showToast("分组数据已重新生成", "当前版本已回到内容生成完成状态。");
    }, 700);
    return;
  }

  if (action === "regenerate-one-group") {
    if (!ensureContentEditableVersion()) return;
    const groupItem = getGroupById(actionTarget.dataset.groupId);
    if (!groupItem) return;
    groupItem.story = `${groupItem.story}（本次已重新生成）`;
    const data = getGroupGeneratedData(groupItem);
    data.storyInfo.textList = buildStoryLines(groupItem.words).map((line) => ({
      en: line.en,
      cn: appendChangedLabel(line.zh),
    }));
    data.storyInfo.storyAudioUrl = `${groupItem.id}-audio-${Date.now().toString(36)}.mp3`;
    data.storyInfo.storyImageUrl = `${groupItem.id}-image-${Date.now().toString(36)}.png`;
    syncGroupStoryLinesFromGenerated(groupItem);
    markGroupContentChanged(groupItem, "部分分组内容已重新生成，等待发布。");
    showToast("分组已重新生成", groupItem.title);
    return;
  }

  if (action === "regenerate-group-image") {
    if (!ensureContentEditableVersion()) return;
    const groupItem = getGroupById(actionTarget.dataset.groupId);
    if (!groupItem) return;
    groupItem.imageStatus = "已重新生成";
    groupItem.image = `${groupItem.id}-image-${Date.now().toString(36)}.png`;
    getGroupGeneratedData(groupItem).storyInfo.storyImageUrl = groupItem.image;
    markGroupContentChanged(groupItem, "分组图片已重新生成，等待发布。");
    showToast("图片已重新生成", groupItem.title);
    return;
  }

  if (action === "regenerate-group-audio") {
    if (!ensureContentEditableVersion()) return;
    const groupItem = getGroupById(actionTarget.dataset.groupId);
    if (!groupItem) return;
    groupItem.audioStatus = "已重新生成";
    groupItem.audio = `${groupItem.id}-audio-${Date.now().toString(36)}.mp3`;
    getGroupGeneratedData(groupItem).storyInfo.storyAudioUrl = groupItem.audio;
    markGroupContentChanged(groupItem, "分组音频已重新生成，等待发布。");
    showToast("音频已重新生成", groupItem.title);
    return;
  }

  if (action === "edit-group-story") {
    if (!ensureContentEditableVersion()) return;
    const groupItem = getGroupById(actionTarget.dataset.groupId);
    if (!groupItem) return;
    groupItem.storyStatus = "已编辑";
    groupItem.storyLines = [
      ...(groupItem.storyLines || buildStoryLines(groupItem.words)),
      {
        en: `The new story keeps ${groupItem.words[0] || "memory"} clear and easy to remember.`,
        zh: "新故事让重点词更清晰、更容易记住。",
      },
    ];
    getGroupGeneratedData(groupItem).storyInfo.textList = groupItem.storyLines.map((line) => ({
      en: line.en,
      cn: line.zh,
    }));
    markGroupContentChanged(groupItem, "分组故事已编辑，等待发布。");
    showToast("故事已编辑", groupItem.title);
    return;
  }

  if (action === "add-group-story-line") {
    if (!ensureContentEditableVersion()) return;
    const groupItem = getGroupById(actionTarget.dataset.groupId);
    if (!groupItem) return;
    const data = getGroupGeneratedData(groupItem);
    data.storyInfo.textList.push({
      en: `A new sentence links ${groupItem.words[0] || "the word"} with this group story.`,
      cn: "新增一句故事文本，用于补充当前分组的记忆场景。",
    });
    groupItem.storyStatus = "已编辑";
    syncGroupStoryLinesFromGenerated(groupItem);
    markGroupContentChanged(groupItem, "新增了分组故事文本对象，等待发布。");
    showToast("已新增故事句对象", groupItem.title);
    return;
  }

  if (action === "edit-group-story-line") {
    if (!ensureContentEditableVersion()) return;
    const groupItem = getGroupById(actionTarget.dataset.groupId);
    if (!groupItem) return;
    const data = getGroupGeneratedData(groupItem);
    const line = data.storyInfo.textList[Number(actionTarget.dataset.index)];
    if (!line) return;
    line.cn = appendChangedLabel(line.cn);
    groupItem.storyStatus = "已编辑";
    syncGroupStoryLinesFromGenerated(groupItem);
    markGroupContentChanged(groupItem, "修改了分组故事文本对象，等待发布。");
    showToast("故事句已修改", groupItem.title);
    return;
  }

  if (action === "view-group") {
    state.modal = { type: "group-detail", groupId: actionTarget.dataset.groupId };
    render();
    return;
  }

  if (action === "view-group-compare") {
    if (!getCompareContext()) return;
    state.modal = { type: "group-compare", groupId: actionTarget.dataset.groupId };
    render();
    return;
  }

  if (action === "view-word-detail") {
    state.modal = { type: "word-detail", wordId: actionTarget.dataset.wordId };
    render();
    return;
  }

  if (action === "view-word-compare") {
    if (!getCompareContext()) return;
    state.modal = { type: "word-compare", wordId: actionTarget.dataset.wordId };
    render();
    return;
  }

  if (action === "add-word-pronunciation") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const data = getWordGeneratedData(wordItem);
    data.pronunciations.push({
      phonetic: wordItem.phonetic || "",
      pronAudioUrl: `${wordItem.text}-pron-${data.pronunciations.length + 1}-${Date.now().toString(36)}.mp3`,
    });
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "新增了单词发音对象，等待发布。");
    showToast("已新增发音对象", wordItem.text);
    return;
  }

  if (action === "add-word-meaning") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const data = getWordGeneratedData(wordItem);
    const sequence = data.meanings.length + 1;
    data.meanings.push({
      chineseMeaning: "新增释义",
      partOfSpeech: "",
      sequence,
      examples: [
        {
          en: `A new example helps students remember ${wordItem.text}.`,
          cn: "新增例句用于补充当前释义的记忆场景。",
          exampleEnAudioUrl: `${wordItem.text}-example-${sequence}-1.mp3`,
        },
      ],
      meaningImageUrl: `${wordItem.text}-meaning-${sequence}.png`,
    });
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "新增了单词释义对象，等待发布。");
    showToast("已新增释义对象", wordItem.text);
    return;
  }

  if (action === "add-word-example") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const data = getWordGeneratedData(wordItem);
    const meaning = data.meanings[Number(actionTarget.dataset.meaningIndex)];
    if (!meaning) return;
    const sequence = meaning.examples.length + 1;
    meaning.examples.push({
      en: `A new example helps students remember ${wordItem.text}.`,
      cn: "新增例句用于补充当前释义的记忆场景。",
      exampleEnAudioUrl: `${wordItem.text}-example-${meaning.sequence || 1}-${sequence}.mp3`,
    });
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "新增了单词例句对象，等待发布。");
    showToast("已新增例句对象", wordItem.text);
    return;
  }

  if (action === "add-word-distractor") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const data = getWordGeneratedData(wordItem);
    data.distractorWords.push(`distractor-${data.distractorWords.length + 1}`);
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "新增了单词干扰词，等待发布。");
    showToast("已新增干扰词", wordItem.text);
    return;
  }

  if (action === "delete-word-pronunciation") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const data = getWordGeneratedData(wordItem);
    if (data.pronunciations.length <= 1) {
      showToast("不能删除", "至少需要保留一组发音数据。", "danger");
      return;
    }
    data.pronunciations.splice(Number(actionTarget.dataset.index), 1);
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "删除了单词发音对象，等待发布。");
    showToast("发音对象已删除", wordItem.text);
    return;
  }

  if (action === "delete-word-meaning") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const data = getWordGeneratedData(wordItem);
    if (data.meanings.length <= 1) {
      showToast("不能删除", "至少需要保留一组释义与例句数据。", "danger");
      return;
    }
    data.meanings.splice(Number(actionTarget.dataset.index), 1);
    data.meanings.forEach((meaning, index) => {
      meaning.sequence = index + 1;
    });
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "删除了单词释义对象，等待发布。");
    showToast("释义对象已删除", wordItem.text);
    return;
  }

  if (action === "delete-word-example") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const data = getWordGeneratedData(wordItem);
    const meaning = data.meanings[Number(actionTarget.dataset.index)];
    if (!meaning) return;
    if ((meaning.examples || []).length <= 1) {
      showToast("不能删除", "每组释义至少需要保留一条例句。", "danger");
      return;
    }
    meaning.examples.splice(Number(actionTarget.dataset.exampleIndex), 1);
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "删除了单词例句对象，等待发布。");
    showToast("例句已删除", wordItem.text);
    return;
  }

  if (action === "delete-word-distractor") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const data = getWordGeneratedData(wordItem);
    data.distractorWords.splice(Number(actionTarget.dataset.index), 1);
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "删除了单词干扰词，等待发布。");
    showToast("干扰词已删除", wordItem.text);
    return;
  }

  if (action === "edit-word-generated") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const data = getWordGeneratedData(wordItem);
    const field = actionTarget.dataset.field;
    const index = Number(actionTarget.dataset.index);
    if (field === "pronunciation" && data.pronunciations[index]) {
      data.pronunciations[index].phonetic = appendChangedLabel(data.pronunciations[index].phonetic || wordItem.phonetic || "", " · 已修改");
      data.pronunciations[index].pronAudioUrl = `${wordItem.text}-pron-${index + 1}-edited-${Date.now().toString(36)}.mp3`;
    }
    if (field === "meaning" && data.meanings[index]) {
      data.meanings[index].partOfSpeech = data.meanings[index].partOfSpeech || "n.";
      data.meanings[index].chineseMeaning = appendChangedLabel(data.meanings[index].chineseMeaning);
    }
    if (field === "example" && data.meanings[index]) {
      const example = data.meanings[index].examples[Number(actionTarget.dataset.exampleIndex)];
      if (example) {
        example.cn = appendChangedLabel(example.cn);
        example.exampleEnAudioUrl = `${wordItem.text}-example-${index + 1}-${Number(actionTarget.dataset.exampleIndex) + 1}-edited.mp3`;
      }
    }
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "修改了单词生成数据对象，等待发布。");
    showToast("当前值已修改", wordItem.text);
    return;
  }

  if (action === "regenerate-word-image") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const detail = getWordDetail(wordItem);
    detail.imageStatus = "已重新生成";
    detail.image = `${wordItem.text}-detail-${Date.now().toString(36)}.png`;
    const data = getWordGeneratedData(wordItem);
    const meaning = data.meanings[Number(actionTarget.dataset.meaningIndex) || 0];
    if (meaning) meaning.meaningImageUrl = detail.image;
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "单词详情图片已重新生成，等待发布。");
    showToast("单词图片已重新生成", wordItem.text);
    return;
  }

  if (action === "regenerate-word-audio") {
    if (!ensureContentEditableVersion()) return;
    const wordItem = findWord(actionTarget.dataset.wordId);
    if (!wordItem) return;
    const detail = getWordDetail(wordItem);
    detail.audioStatus = "已重新生成";
    detail.audio = `${wordItem.text}-audio-${Date.now().toString(36)}.mp3`;
    const data = getWordGeneratedData(wordItem);
    if (data.pronunciations[0]) data.pronunciations[0].pronAudioUrl = detail.audio;
    wordItem.detailGenerated = true;
    markWordContentChanged(wordItem, "单词详情音频已重新生成，等待发布。");
    showToast("单词音频已重新生成", wordItem.text);
    return;
  }

  if (action === "open-publish") {
    state.modal = { type: "publish" };
    render();
    return;
  }

  if (action === "close-modal" || action === "close-modal-on-backdrop") {
    closeModal();
    return;
  }

  if (action === "confirm-modal") {
    runConfirmAction();
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.name === "wordUnitFilter" && target.closest("#word-filter-form")) {
    state.wordUnitFilter = target.value || "all";
    render();
  }
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form).entries());
  if (form.id === "category-form") {
    saveCategory(data);
    return;
  }
  if (form.id === "book-form") {
    saveBook(data, form);
    return;
  }
  if (form.id === "word-form") {
    saveWord(data);
    return;
  }
  if (form.id === "word-filter-form") {
    state.wordUnitFilter = data.wordUnitFilter || "all";
    state.wordSearchField = data.wordSearchField === "id" ? "id" : "text";
    state.wordSearch = (data.wordSearch || "").trim();
    render();
    return;
  }
  if (form.id === "group-filter-form") {
    state.groupSearch = (data.groupSearch || "").trim();
    render();
    return;
  }
  if (form.id === "publish-form") {
    publishVersion(data.releaseNote);
    return;
  }
  if (form.id === "create-version-form") {
    createVersionFromForm(data, form);
  }
});

function saveCategory(data) {
  const normalized = data.name.trim();
  if (!normalized) return;
  const duplicated = state.categories.some((item) => item.name === normalized && item.id !== data.categoryId);
  if (duplicated) {
    showToast("分类名称重复", "请换一个分类名称。", "danger");
    return;
  }
  if (data.categoryId) {
    const category = getCategory(data.categoryId);
    category.name = normalized;
    category.status = countPublishedBooks(category.id) > 0 ? "ENABLED" : "DISABLED";
    showToast("分类已保存", "分类状态由已发布词书自动计算。");
  } else {
    const maxSort = state.categories.reduce((max, item) => Math.max(max, item.sort), 0);
    const category = { id: uid("cat"), name: normalized, status: "DISABLED", sort: maxSort + 1 };
    state.categories.push(category);
    state.selectedCategoryId = category.id;
    showToast("分类已创建", "新分类已插入列表末尾。");
  }
  state.modal = null;
  render();
}

function saveBook(data, form) {
  const normalized = data.name.trim();
  if (!normalized) return;
  const duplicated = state.textbooks.some((item) => item.name === normalized && item.id !== data.bookId);
  if (duplicated) {
    showToast("词书名称重复", "词书名称需全局唯一。", "danger");
    return;
  }
  if (data.bookId) {
    const bookItem = getBook(data.bookId);
    const coverFileName = form.elements.coverImage?.files?.[0]?.name || "";
    bookItem.name = normalized;
    bookItem.categoryId = data.categoryId;
    bookItem.publisher = data.publisher.trim();
    bookItem.stage = data.stage;
    bookItem.volume = data.volume.trim();
    if (coverFileName) {
      bookItem.coverImageName = coverFileName;
    }
    state.selectedCategoryId = data.categoryId;
    showToast("词书已保存", coverFileName ? "词书基础信息和封面图已更新，词条内容未被修改。" : "词书基础信息已更新，词条内容未被修改。");
  } else {
    const scoped = state.textbooks.filter((item) => item.categoryId === data.categoryId);
    const bookId = uid("book");
    const versionId = uid("ver");
    const coverFileName = form.elements.coverImage?.files?.[0]?.name || "";
    const screenshotCount = form.elements.screenshots?.files?.length || 0;
    state.textbooks.push({
      id: bookId,
      categoryId: data.categoryId,
      name: normalized,
      publisher: data.publisher.trim(),
      stage: data.stage,
      volume: data.volume.trim(),
      creator: "当前用户",
      displayWordCount: 0,
      sort: scoped.length + 1,
      status: "UNPUBLISHED",
      onlineVersionId: "",
      cover: "blue",
      coverImageName: coverFileName,
      screenshotCount,
    });
    state.versions.push({
      id: versionId,
      textbookId: bookId,
      no: 1,
      status: "LIST_GENERATING",
      baseVersionId: "",
      changeSummary: "词书已创建并上传资料，后台服务正在生成单词清单。",
      creator: "当前用户",
      createdAt: nowText(),
      publishedAt: "",
      releaseNote: "",
    });
    state.words[versionId] = [];
    state.groups[versionId] = [];
    state.selectedCategoryId = data.categoryId;
    showToast("词书已创建", "系统已自动创建首个版本 V1。");
  }
  state.modal = null;
  render();
}

function saveWord(data) {
  const version = getVersion();
  const words = getSelectedWords();
  if (data.wordId) {
    if (!ensureContentEditableVersion()) return;
    const wordItem = words.find((item) => item.id === data.wordId);
    const previousText = wordItem.text;
    wordItem.text = data.text.trim();
    wordItem.unit = version.status === "PUBLISHED" ? wordItem.unit : data.unit.trim();
    wordItem.phonetic = data.phonetic.trim();
    wordItem.meaning = data.meaning.trim();
    wordItem.source = "人工修改";
    wordItem.changeType = wordItem.changeType === "新增" ? "新增" : "修改";
    if (version.status === "PUBLISHED") {
      (state.groups[version.id] || []).forEach((groupItem) => {
        groupItem.words = groupItem.words.map((wordText) => (wordText === previousText ? wordItem.text : wordText));
      });
      markWordContentChanged(wordItem, "修改了已发布词书的单词内容，等待发布。");
      state.modal = null;
      showToast("单词内容已更新", "已标记为未发布，提交发布后立即上线。");
      render();
      return;
    }
    version.changeSummary = "修改了单词信息，需重新确认词清单并生成内容。";
    showToast("单词已更新", wordItem.text);
  } else {
    if (!ensureEditableVersion()) return;
    const newWord = word(uid("w"), data.unit.trim(), data.text.trim(), data.phonetic.trim(), data.meaning.trim(), "人工新增", "新增", false);
    const insertIndex = data.insertAfterWordId ? words.findIndex((item) => item.id === data.insertAfterWordId) : -1;
    if (insertIndex >= 0) {
      words.splice(insertIndex + 1, 0, newWord);
    } else {
      words.push(newWord);
    }
    version.changeSummary = insertIndex >= 0 ? "插入了新单词，需重新确认词清单并生成内容。" : "新增了单词，需重新确认词清单并生成内容。";
    showToast("单词已新增", data.text.trim());
  }
  state.groups[version.id] = [];
  version.publishFailureReason = "";
  if (["READY_TO_PUBLISH", "PUBLISH_FAILED"].includes(version.status)) version.status = "LIST_CONFIRMING";
  state.modal = null;
  render();
}

function publishVersion(releaseNote) {
  const version = getVersion();
  const bookItem = getBook();
  const contentUpdate = version?.status === "PUBLISHED" && version.hasPendingContentChanges;
  if (!version || !(["READY_TO_PUBLISH", "PUBLISH_FAILED"].includes(version.status) || contentUpdate)) return;
  version.publishMode = contentUpdate ? "content-update" : "version-release";
  version.status = "PUBLISH_CHECKING";
  version.releaseNote = releaseNote.trim();
  version.publishFailureReason = "";
  version.submittedAt = nowText();
  state.modal = null;
  state.page = "detail";
  window.history.replaceState(null, "", `#detail/${bookItem.id}`);
  showToast("已提交发布", `${bookItem.name} V${version.no} 已进入发布中，后台会自动执行校验与上线。`);
}

function completePublish(versionId = state.selectedVersionId, options = {}) {
  const version = getVersion(versionId);
  const bookItem = getBook(version?.textbookId);
  if (!version || !bookItem) return;
  version.status = "PUBLISHED";
  version.publishedAt = nowText();
  version.publishFailureReason = "";
  version.hasPendingContentChanges = false;
  version.publishMode = "";
  (state.words[version.id] || []).forEach((item) => {
    item.publishState = "已发布";
  });
  (state.groups[version.id] || []).forEach((item) => {
    item.publishState = "已发布";
  });
  bookItem.onlineVersionId = version.id;
  bookItem.status = "PUBLISHED";
  bookItem.displayWordCount = (state.words[version.id] || []).length;
  state.modal = null;
  state.selectedTextbookId = bookItem.id;
  state.selectedVersionId = version.id;
  state.page = "detail";
  state.detailTab = "words";
  resetWordFilters();
  resetGroupFilters();
  window.history.replaceState(null, "", `#detail/${bookItem.id}`);
  showToast(options.contentUpdate ? "内容修改已发布" : "发布成功", `${bookItem.name} V${version.no} 已发布，学生端可见。`);
}

function runConfirmAction() {
  const modal = state.modal;
  if (!modal || modal.type !== "confirm") return;
  if (modal.action === "complete-publish") {
    completePublish(modal.payload.versionId);
    return;
  }
  if (modal.action === "delete-category") {
    state.categories = state.categories.filter((item) => item.id !== modal.payload.categoryId);
    if (state.selectedCategoryId === modal.payload.categoryId) {
      state.selectedCategoryId = sortedBySort(state.categories)[0]?.id || "";
    }
    state.modal = null;
    showToast("分类已删除", "空分类已删除。");
    return;
  }
  if (modal.action === "delete-book") {
    const { bookId } = modal.payload;
    state.textbooks = state.textbooks.filter((item) => item.id !== bookId);
    const versionIds = state.versions.filter((item) => item.textbookId === bookId).map((item) => item.id);
    state.versions = state.versions.filter((item) => item.textbookId !== bookId);
    versionIds.forEach((id) => {
      delete state.words[id];
      delete state.groups[id];
    });
    state.modal = null;
    showToast("词书已删除", "未上架词书已删除。");
    return;
  }
  if (modal.action === "delete-version") {
    const { versionId } = modal.payload;
    const version = getVersion(versionId);
    state.versions = state.versions.filter((item) => item.id !== versionId);
    delete state.words[versionId];
    delete state.groups[versionId];
    state.modal = null;
    selectDefaultVersion(version.textbookId);
    showToast("版本已删除", "未发布版本已删除。");
    return;
  }
  if (modal.action === "delete-word") {
    const words = getSelectedWords();
    const index = words.findIndex((item) => item.id === modal.payload.wordId);
    const deleted = words[index];
    words.splice(index, 1);
    const version = getVersion();
    version.changeSummary = "删除了单词，需重新确认词清单并生成内容。";
    version.publishFailureReason = "";
    state.groups[version.id] = [];
    if (["READY_TO_PUBLISH", "PUBLISH_FAILED"].includes(version.status)) version.status = "LIST_CONFIRMING";
    state.modal = null;
    showToast("单词已删除", deleted.text);
    return;
  }
  state.modal = null;
  render();
}

render();
