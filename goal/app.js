const image = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const schools = [
  {
    id: "nju",
    name: "南京大学",
    mark: "南",
    province: "江苏",
    city: "南京",
    type: "综合类",
    levels: ["C9", "985", "211", "双一流"],
    score: 660,
    intro:
      "南京大学是综合性研究型大学，学科基础厚，校园文化鲜明。Demo 中作为学生当前长期目标展示。",
    images: [
      image("photo-1562774053-701939374585"),
      image("photo-1523050854058-8df90110c9f1"),
      image("photo-1498243691581-b145c3f54a5a"),
    ],
    line: [638, 642, 648, 652, 656, 660],
  },
  {
    id: "ahu",
    name: "安徽大学",
    mark: "安",
    province: "安徽",
    city: "合肥",
    type: "综合类",
    levels: ["211", "双一流", "本科"],
    score: 590,
    intro:
      "安徽大学是一所综合类高校，面向省内学生认知度高，适合演示本地院校目标切换。",
    images: [
      image("photo-1498243691581-b145c3f54a5a"),
      image("photo-1523580494863-6f3031224c94"),
      image("photo-1541339907198-e08756dedf3f"),
    ],
    line: [568, 572, 576, 582, 586, 590],
  },
  {
    id: "aufe",
    name: "安徽财经大学",
    mark: "财",
    province: "安徽",
    city: "蚌埠",
    type: "财经类",
    levels: ["本科"],
    score: 518,
    intro:
      "安徽财经大学以财经学科为特色。截图里出现该校详情，本 demo 用它作为默认选中院校。",
    images: [
      image("photo-1523050854058-8df90110c9f1"),
      image("photo-1607013407627-6ee814329547"),
      image("photo-1564981797816-1043664bf78d"),
    ],
    line: [502, 506, 510, 512, 516, 518],
  },
  {
    id: "ustc",
    name: "中国科学技术大学",
    mark: "科",
    province: "安徽",
    city: "合肥",
    type: "理工类",
    levels: ["C9", "985", "211", "双一流"],
    score: 670,
    intro:
      "中国科学技术大学以理工科见长，适合作为高挑战度目标展示。",
    images: [
      image("photo-1541339907198-e08756dedf3f"),
      image("photo-1607237138185-eedd9c632b0b"),
      image("photo-1562774053-701939374585"),
    ],
    line: [650, 653, 658, 662, 666, 670],
  },
  {
    id: "hfut",
    name: "合肥工业大学",
    mark: "工",
    province: "安徽",
    city: "合肥",
    type: "理工类",
    levels: ["211", "双一流", "本科"],
    score: 598,
    intro:
      "合肥工业大学是理工特色高校，适合在筛选中验证院校类型和层次过滤。",
    images: [
      image("photo-1607237138185-eedd9c632b0b"),
      image("photo-1564981797816-1043664bf78d"),
      image("photo-1523050854058-8df90110c9f1"),
    ],
    line: [578, 582, 586, 590, 594, 598],
  },
  {
    id: "bnu",
    name: "北京师范大学",
    mark: "师",
    province: "北京",
    city: "北京",
    type: "师范类",
    levels: ["985", "211", "双一流"],
    score: 642,
    intro:
      "北京师范大学是师范类代表院校，用于展示跨地区与院校类型筛选。",
    images: [
      image("photo-1541339907198-e08756dedf3f"),
      image("photo-1498243691581-b145c3f54a5a"),
      image("photo-1523580494863-6f3031224c94"),
    ],
    line: [620, 625, 630, 634, 638, 642],
  },
];

const subjects = [
  ["语文", 92],
  ["数学", 92],
  ["英语", 92],
  ["物理", 60],
  ["化学", 60],
  ["生物", 60],
];

const examTypes = ["月考", "模考", "期中", "期末", "联考", "周测", "普通"];

const studentProfile = {
  name: "诸葛孔明",
  school: "蜀山高中",
  className: "高一(2)班",
  avatar: "诸",
};

const targetPledgeTexts = [
  "日积跬步，终至千里。愿你考入理想的学府！",
  "脚踏实地，步步生花。愿你奔赴心中的大学！",
  "坚持不辍，未来可期。愿你抵达理想的校园！",
  "笃行致远，功到自成。愿你圆梦目标大学！",
  "一路努力，一路靠近。愿你考上向往的学府！",
  "星光不负赶路人。愿你走进理想的大学！",
  "每一份坚持，都在靠近答案。愿你成功上岸！",
  "心有所向，行必能至。愿你实现大学目标！",
  "稳扎稳打，终有回响。愿你考入梦校！",
  "今日多一分努力，明日多一分从容。愿你奔向理想学府！",
];

const defaultReportSubjects = subjects.map(([name, score], index) => ({
  name,
  score: index < 3 ? score : 72,
  classRank: 20,
  gradeRank: 86,
}));

const defaultGoalSubjects = subjects.map(([name, score]) => ({ name, score }));

const defaultReports = [
  {
    id: "exam-2026-06-monthly",
    name: "6月月考",
    type: "月考",
    date: "2026-06-05",
    classRank: 12,
    gradeRank: 86,
    subjects: structuredClone(defaultReportSubjects),
    updatedAt: "06/05 19:40",
  },
  {
    id: "exam-2026-05-weekly",
    name: "第75周周测",
    type: "周测",
    date: "2026-05-29",
    classRank: 18,
    gradeRank: 102,
    subjects: subjects.map(([name, score], index) => ({
      name,
      score: index < 3 ? score - 4 : 68,
      classRank: 18,
      gradeRank: 102,
    })),
    updatedAt: "05/29 18:20",
  },
];

const defaultState = {
  view: "profile",
  selectedSchoolId: "aufe",
  targetSchoolId: "nju",
  drawerOpen: false,
  toast: "",
  filters: {
    query: "",
    province: "全部",
    tags: [],
    type: "全部",
    track: "理科",
  },
  activeReportId: "exam-2026-06-monthly",
  targetEditorOpen: false,
  targetConfirmStep: "",
  pendingTargetSchoolId: "",
  reports: structuredClone(defaultReports),
  goal: {
    currentTotal: "",
    currentRank: "",
    currentScope: "年级",
    targetExam: "期末考试",
    targetTotal: 456,
    targetRank: 20,
    targetScope: "班级",
    targetClassRank: 20,
    targetGradeRank: 86,
    updatedAt: "",
    published: false,
    subjects: structuredClone(defaultGoalSubjects),
  },
};

const storageKey = "target-university-demo-state";
const visibleViews = ["profile", "schools", "goals"];
const app = document.querySelector("#app");
const toastEl = document.querySelector("#toast");
let toastTimer;

let state = loadState();
const initialView = getHashView();
if (initialView) {
  state.view = initialView;
}

function loadState() {
  try {
    const cached = localStorage.getItem(storageKey);
    if (!cached) return structuredClone(defaultState);
    const parsed = JSON.parse(cached);
    const nextState = {
      ...structuredClone(defaultState),
      ...parsed,
      filters: { ...defaultState.filters, ...(parsed.filters || {}) },
    };
    nextState.goal = normalizeGoal(parsed.goal);
    if (!Array.isArray(nextState.reports) || !nextState.reports.length) {
      nextState.reports = structuredClone(defaultReports);
    }
    nextState.reports = nextState.reports.map((report) => ({
      ...report,
      subjects:
        Array.isArray(report.subjects) && report.subjects.length
          ? report.subjects.map((subject, index) => ({
              ...defaultReportSubjects[index],
              ...subject,
            }))
          : structuredClone(defaultReportSubjects),
    }));
    if (!nextState.activeReportId || !nextState.reports.some((report) => report.id === nextState.activeReportId)) {
      nextState.activeReportId = nextState.reports[0].id;
    }
    if (!visibleViews.includes(nextState.view)) {
      nextState.view = defaultState.view;
    }
    nextState.targetConfirmStep = "";
    nextState.pendingTargetSchoolId = "";
    return nextState;
  } catch {
    return structuredClone(defaultState);
  }
}

function normalizeGoal(goal = {}) {
  const merged = { ...structuredClone(defaultState.goal), ...goal };
  const legacyRank = Number(merged.targetRank);
  const targetScope = merged.targetScope;

  if (!Number.isInteger(Number(merged.targetClassRank)) || Number(merged.targetClassRank) < 1) {
    merged.targetClassRank =
      targetScope === "班级" && Number.isInteger(legacyRank) && legacyRank > 0
        ? legacyRank
        : defaultState.goal.targetClassRank;
  }

  if (!Number.isInteger(Number(merged.targetGradeRank)) || Number(merged.targetGradeRank) < 1) {
    merged.targetGradeRank =
      targetScope === "年级" && Number.isInteger(legacyRank) && legacyRank > 0
        ? legacyRank
        : defaultState.goal.targetGradeRank;
  }

  merged.subjects =
    Array.isArray(merged.subjects) && merged.subjects.length
      ? merged.subjects.map((subject, index) => ({
          ...(defaultGoalSubjects[index] || {}),
          ...subject,
        }))
      : structuredClone(defaultGoalSubjects);
  merged.targetTotal = goalSubjectTotal(merged);
  return merged;
}

function getHashView() {
  const view = window.location.hash.replace("#", "");
  return visibleViews.includes(view) ? view : "";
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function getSchool(id) {
  return schools.find((school) => school.id === id) || schools[0];
}

function getTargetSchool() {
  return getSchool(state.targetSchoolId);
}

function getPendingTargetSchool() {
  return getSchool(state.pendingTargetSchoolId || state.selectedSchoolId);
}

function getActiveReport() {
  return state.reports.find((report) => report.id === state.activeReportId) || state.reports[0];
}

function getLatestReport() {
  return [...state.reports].sort((a, b) => `${b.date}`.localeCompare(`${a.date}`))[0];
}

function reportTotal(report) {
  return report.subjects.reduce((total, subject) => total + Number(subject.score || 0), 0);
}

function reportRankSummary(report) {
  return `班级 ${report.classRank} 名 · 年级 ${report.gradeRank} 名`;
}

function hasRankValue(value) {
  const rank = Number(value);
  return Number.isInteger(rank) && rank > 0;
}

function reportListSummary(report) {
  const summary = [`总分 ${reportTotal(report)} 分`];
  if (hasRankValue(report.classRank)) summary.push(`班级排名 ${Number(report.classRank)} 名`);
  if (hasRankValue(report.gradeRank)) summary.push(`年级排名 ${Number(report.gradeRank)} 名`);
  return summary.join(" · ");
}

function goalSubjectTotal(goal = state.goal) {
  return goal.subjects.reduce((total, subject) => total + Number(subject.score || 0), 0);
}

function subjectMax(name) {
  return ["物理", "化学", "生物"].includes(name) ? 100 : 150;
}

function setView(view) {
  state.view = view;
  state.drawerOpen = false;
  saveState();
  if (window.location.hash.replace("#", "") !== view) {
    window.history.replaceState(null, "", `#${view}`);
  }
  render();
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function showToast(message) {
  state.toast = message;
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastEl.classList.remove("is-visible");
  }, 2400);
}

function clearTargetConfirm() {
  state.targetConfirmStep = "";
  state.pendingTargetSchoolId = "";
}

function targetPledgeText(school) {
  const schoolIndex = schools.findIndex((item) => item.id === school.id);
  return targetPledgeTexts[Math.max(0, schoolIndex) % targetPledgeTexts.length];
}

function tagList(school) {
  return [...school.levels, school.type, school.city];
}

function filteredSchools() {
  const query = state.filters.query.trim();
  const tags = state.filters.tags;
  return schools.filter((school) => {
    const haystack = [
      school.name,
      school.province,
      school.city,
      school.type,
      ...school.levels,
    ].join(" ");
    const matchQuery = !query || haystack.includes(query);
    const matchProvince =
      state.filters.province === "全部" ||
      school.province === state.filters.province;
    const matchType =
      state.filters.type === "全部" || school.type === state.filters.type;
    const matchTags = tags.every((tag) => school.levels.includes(tag));
    return matchQuery && matchProvince && matchType && matchTags;
  });
}

function render() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });

  if (state.view === "home") app.innerHTML = renderHome();
  if (state.view === "schools") app.innerHTML = renderSchools();
  if (state.view === "profile") app.innerHTML = renderProfile();
  if (state.view === "goals") app.innerHTML = renderGoals();
  if (state.targetConfirmStep) {
    app.insertAdjacentHTML("beforeend", renderTargetConfirmModal());
  }

  syncIcons();
}

function renderHome() {
  const school = getTargetSchool();
  const latestReport = getLatestReport();
  return `
    <section class="view home-panel">
      <div class="student-head">
        <div class="avatar">${escapeHtml(studentProfile.avatar)}</div>
        <div class="student-meta">
          <h1>${escapeHtml(studentProfile.name)}</h1>
          <p>${escapeHtml(studentProfile.school)} · ${escapeHtml(studentProfile.className)}</p>
        </div>
        <div class="study-group">
          <span class="study-group-icon"><i data-lucide="book-open-check"></i></span>
          <div>
            <strong>学习小组</strong>
            <span>暂无组员信息</span>
          </div>
        </div>
      </div>

      <div class="metric-strip">
        <div class="metric-pill">今日成长分 <strong>+0</strong></div>
        <div class="metric-pill">头像 <strong>12</strong></div>
        <div class="metric-pill">头像框 <strong>0</strong></div>
        <div class="metric-pill">宠物服装 <strong>0</strong></div>
      </div>

      <div class="home-grid">
        <button type="button" class="target-entry" data-view="profile" aria-label="查看目标大学">
          <div class="target-photo" style="background-image:url('${school.images[0]}')"></div>
          <div class="target-body">
            <span class="school-logo">${school.mark}</span>
            <div>
              <h2>${school.name}</h2>
              <p>${school.province} · ${school.type} · ${school.levels[0]}</p>
            </div>
            <span class="link-arrow"><i data-lucide="chevron-right"></i></span>
          </div>
        </button>

        <div class="motto-entry">
          <div>
            <span class="motto-icon"><i data-lucide="pen-line"></i></span>
            <h2>${latestReport ? "最近成绩已填报" : "未填写座右铭"}</h2>
            <p class="subtle">${
              latestReport
                ? `${latestReport.name} · 总分 ${reportTotal(latestReport)} 分 · ${reportRankSummary(latestReport)}`
                : "补充一句目标宣言，让目标在个人页更醒目"
            }</p>
            <div class="action-row" style="justify-content:center;margin-top:18px;">
              <button type="button" class="primary-button" data-view="goals">
                <i data-lucide="pencil-line"></i>
                ${latestReport ? "编辑成绩" : "去填报"}
              </button>
              <button type="button" class="secondary-button" data-view="schools">
                <i data-lucide="school"></i>
                修改大学
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSchools() {
  const selected = getSchool(state.selectedSchoolId);
  const list = filteredSchools();
  return `
    <section class="view school-layout">
      <aside class="panel">
        <div class="panel-title">
          <h1>选择目标大学</h1>
          <button type="button" class="icon-button" data-view="profile" aria-label="返回目标档案">
            <i data-lucide="arrow-left"></i>
          </button>
        </div>
        <div class="tool-row">
          <label class="search-box">
            <i data-lucide="search"></i>
            <input id="school-search" type="search" placeholder="请输入学校名称" value="${escapeHtml(state.filters.query)}" />
          </label>
          <select id="province-select" aria-label="地区">
            ${["全部", "安徽", "江苏", "北京"]
              .map(
                (province) =>
                  `<option value="${province}" ${province === state.filters.province ? "selected" : ""}>${province}</option>`,
              )
              .join("")}
          </select>
          <button type="button" class="secondary-button" data-open-filter>
            <i data-lucide="sliders-horizontal"></i>
            筛选
          </button>
        </div>
        <div class="filter-row" style="margin-bottom:14px;">
          <span class="tag is-strong">${state.filters.track}</span>
          ${
            state.filters.tags.length
              ? state.filters.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")
              : '<span class="tag">未选择层次</span>'
          }
          <span class="tag">${state.filters.type}</span>
        </div>
        <div class="school-list">
          ${
            list.length
              ? list.map(renderSchoolItem).join("")
              : `<div class="empty-card" style="min-height:240px;box-shadow:none;">
                  <div>
                    <span class="empty-illustration"><i data-lucide="search-x"></i></span>
                    <h3>暂无匹配学校</h3>
                    <p class="subtle">试试清空关键词或重置筛选条件</p>
                    <button type="button" class="secondary-button" data-reset-filter>重置筛选</button>
                  </div>
                </div>`
          }
        </div>
      </aside>
      <section class="panel">
        ${renderSchoolDetail(selected)}
      </section>
      ${state.drawerOpen ? renderFilterDrawer() : ""}
    </section>
  `;
}

function renderSchoolItem(school) {
  const score = school.score ? `${school.score} 分` : "暂无数据";
  return `
    <button type="button" class="school-item ${school.id === state.selectedSchoolId ? "is-selected" : ""}" data-school="${school.id}">
      <span class="list-logo">${school.mark}</span>
      <span>
        <strong>${school.name}</strong>
        <span>${school.type} · ${school.levels.slice(0, 2).join(" · ")}</span>
      </span>
      <span class="school-score">${score}</span>
    </button>
  `;
}

function renderSchoolDetail(school) {
  return `
    <div class="detail-head">
      <span class="detail-logo">${school.mark}</span>
      <div class="detail-title">
        <h2>${school.name}</h2>
        <p>${school.type} · ${school.city} · ${school.levels.join(" · ")}</p>
      </div>
      <button type="button" class="primary-button" data-set-target>
        <i data-lucide="badge-check"></i>
        设为目标大学
      </button>
    </div>

    <div class="tag-row">${tagList(school)
      .map((tag) => `<span class="tag ${school.levels.includes(tag) ? "is-strong" : ""}">${tag}</span>`)
      .join("")}</div>

    <p class="intro"><strong class="tag is-strong">简介</strong> ${school.intro}</p>
    <div class="gallery">
      ${school.images.map((src) => `<div class="gallery-img" style="background-image:url('${src}')"></div>`).join("")}
    </div>

    <div class="score-card">
      <div class="score-card-head">
        <h3>录取分数线 <span class="subtle">ⓘ</span></h3>
        <div class="mini-selects">
          <span>综合</span>
          <span>${school.province}</span>
          <span>本科批</span>
          <span>专业组 01</span>
        </div>
      </div>
      ${renderChart(school.line)}
    </div>
  `;
}

function renderChart(points) {
  const max = 700;
  const min = 480;
  const width = 720;
  const height = 220;
  const usableWidth = width - 70;
  const usableHeight = height - 50;
  const coords = points.map((value, index) => {
    const x = 48 + (usableWidth / (points.length - 1)) * index;
    const y = 20 + (1 - (value - min) / (max - min)) * usableHeight;
    return [x, y, value];
  });
  const path = coords.map(([x, y], index) => `${index ? "L" : "M"} ${x} ${y}`).join(" ");
  return `
    <svg class="chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="近年录取分数线">
      <line x1="48" y1="20" x2="48" y2="188" stroke="#dfe6f0" />
      <line x1="48" y1="188" x2="700" y2="188" stroke="#dfe6f0" />
      ${[500, 560, 620, 680]
        .map((tick) => {
          const y = 20 + (1 - (tick - min) / (max - min)) * usableHeight;
          return `<line x1="48" y1="${y}" x2="700" y2="${y}" stroke="#edf1f7" /><text x="10" y="${y + 5}" fill="#8b95a8" font-size="12">${tick}</text>`;
        })
        .join("")}
      <path d="${path}" fill="none" stroke="#4d7df2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      ${coords
        .map(
          ([x, y, value]) =>
            `<circle cx="${x}" cy="${y}" r="5" fill="#fff" stroke="#4d7df2" stroke-width="3"><title>${value} 分</title></circle>`,
        )
        .join("")}
      ${["2017", "2018", "2019", "2020", "2021", "2022"]
        .map((year, index) => `<text x="${48 + (usableWidth / 5) * index - 12}" y="212" fill="#8b95a8" font-size="12">${year}</text>`)
        .join("")}
    </svg>
  `;
}

function renderFilterDrawer() {
  const levelTags = ["C9", "985", "211", "本科"];
  const typeTags = [
    "综合类",
    "理工类",
    "财经类",
    "艺术类",
    "农林类",
    "医药类",
    "师范类",
    "体育类",
    "语言类",
    "军事类",
    "政法类",
    "民族类",
  ];
  return `
    <div class="drawer-backdrop" data-close-filter>
      <aside class="drawer" aria-label="目标大学筛选" onclick="event.stopPropagation()">
        <div class="panel-title">
          <h2>目标大学筛选</h2>
          <button type="button" class="ghost-button" data-reset-filter>
            <i data-lucide="rotate-ccw"></i>
            重置
          </button>
        </div>

        <div class="drawer-section">
          <div class="summary-head">
            <h3>选择你的年级排名目标</h3>
            <button type="button" class="chip-button is-selected" data-track="理科">理科</button>
          </div>
          <p class="subtle">我们将基于学校历史高考情况，为你筛选大学。</p>
          <div class="empty-card" style="min-height:180px;box-shadow:none;">
            <div>
              <span class="empty-illustration"><i data-lucide="book-open"></i></span>
              <h3>暂无排名信息</h3>
            </div>
          </div>
        </div>

        <div class="drawer-section">
          <h3>院校层次</h3>
          <div class="chip-grid">
            ${levelTags
              .map(
                (tag) =>
                  `<button type="button" class="chip-button ${state.filters.tags.includes(tag) ? "is-selected" : ""}" data-toggle-tag="${tag}">${tag}</button>`,
              )
              .join("")}
          </div>
        </div>

        <div class="drawer-section">
          <h3>院校类型</h3>
          <div class="chip-grid">
            ${typeTags
              .map(
                (type) =>
                  `<button type="button" class="chip-button ${state.filters.type === type ? "is-selected" : ""}" data-set-type="${type}">${type}</button>`,
              )
              .join("")}
          </div>
        </div>

        <div class="action-row" style="margin-top:34px;justify-content:flex-end;">
          <button type="button" class="secondary-button" data-close-filter>取消</button>
          <button type="button" class="primary-button" data-apply-filter>
            <i data-lucide="check"></i>
            应用筛选
          </button>
        </div>
      </aside>
    </div>
  `;
}

function renderTargetConfirmModal() {
  const school = getPendingTargetSchool();
  if (state.targetConfirmStep === "pledge") {
    return `
      <div class="target-confirm-backdrop" data-target-confirm-backdrop>
        <section class="target-dialog target-pledge-dialog" role="dialog" aria-modal="true" aria-labelledby="target-pledge-title">
          <div class="pledge-school-head">
            <span class="pledge-school-logo">${escapeHtml(school.mark)}</span>
            <div>
              <small>目标大学军令状</small>
              <h2 id="target-pledge-title">${escapeHtml(school.name)}</h2>
              <p>${escapeHtml(school.type)} · ${escapeHtml(school.city)} · ${school.levels.map(escapeHtml).join(" · ")}</p>
            </div>
          </div>

          <div class="pledge-oath">
            <p>我确定以 <strong>${escapeHtml(school.name)}</strong> 作为我的奋斗目标，为此我将不断努力！</p>
            <p>${escapeHtml(targetPledgeText(school))}</p>
          </div>

          <form id="target-pledge-form" class="pledge-form">
            <label class="pledge-signature" for="targetSignature">
              <span>签署姓名</span>
              <input id="targetSignature" name="targetSignature" type="text" placeholder="请输入你的姓名" autocomplete="off" />
              <small>只能输入学生本人姓名：${escapeHtml(studentProfile.name)}</small>
            </label>
            <div id="target-pledge-validation" class="validation"></div>
            <div class="target-dialog-actions">
              <button type="button" class="secondary-button" data-target-confirm-back>
                <i data-lucide="arrow-left"></i>
                返回
              </button>
              <button type="submit" class="primary-button">
                <i data-lucide="badge-check"></i>
                确认目标
              </button>
            </div>
          </form>
        </section>
      </div>
    `;
  }

  return `
    <div class="target-confirm-backdrop" data-target-confirm-backdrop>
      <section class="target-dialog target-dialog-compact" role="dialog" aria-modal="true" aria-labelledby="target-confirm-title">
        <span class="target-dialog-icon"><i data-lucide="flag"></i></span>
        <h2 id="target-confirm-title">确定选择此大学为目标大学吗</h2>
        <p class="target-dialog-copy">设置目标成绩慎重！本次设置 30 天后才能修改目标哦</p>
        <div class="target-school-preview">
          <span class="pledge-school-logo">${escapeHtml(school.mark)}</span>
          <div>
            <strong>${escapeHtml(school.name)}</strong>
            <small>${escapeHtml(school.province)} · ${escapeHtml(school.type)} · ${escapeHtml(school.levels[0])}</small>
          </div>
        </div>
        <div class="target-dialog-actions">
          <button type="button" class="secondary-button" data-close-target-confirm>我再想想</button>
          <button type="button" class="primary-button" data-target-confirm-next>
            <i data-lucide="check"></i>
            确定
          </button>
        </div>
      </section>
    </div>
  `;
}

function renderProfile() {
  const school = getTargetSchool();
  const latestReport = getLatestReport();
  const hasCurrent = Boolean(latestReport);
  return `
    <section class="view profile-layout">
      <div class="panel profile-student-strip">
        <div class="profile-avatar">${escapeHtml(studentProfile.avatar)}</div>
        <div class="profile-student-text">
          <h1>${escapeHtml(studentProfile.name)}</h1>
          <p>${escapeHtml(studentProfile.school)} · ${escapeHtml(studentProfile.className)}</p>
        </div>
        <div class="profile-student-meta">
          <span class="tag is-strong">学生本人</span>
          <span class="tag">目标档案</span>
        </div>
      </div>

      <div class="panel university-banner">
        <div class="banner-info">
          <span class="detail-logo">${school.mark}</span>
          <div>
            <h1>${school.name}</h1>
            <p class="subtle">${school.province} · ${school.type} · ${school.levels[0]}</p>
            <div class="action-row" style="margin-top:12px;">
              <button type="button" class="secondary-button" data-view="schools">
                <i data-lucide="refresh-cw"></i>
                修改目标
              </button>
              <button type="button" class="ghost-button" data-view="schools">
                详情
                <i data-lucide="chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="banner-gallery">
          ${school.images.map((src) => `<div style="background-image:url('${src}')"></div>`).join("")}
        </div>
      </div>

      <div class="panel-title" style="margin: 8px 0 -4px;">
        <h2>我的排名目标</h2>
        <button type="button" class="primary-button" data-view="goals">
          <i data-lucide="pencil-line"></i>
          填报成绩
        </button>
      </div>

      <div class="rank-grid">
        <article class="score-summary summary-amber">
          <div class="summary-head">
            <h3>目标排名 <span class="subtle">ⓘ</span></h3>
            <i data-lucide="target"></i>
          </div>
          <div class="summary-value"><strong>${state.goal.targetGradeRank}</strong><small>年级目标名次</small></div>
          <p class="summary-note">班级目标排名 ${state.goal.targetClassRank} 名 · 目标总分 ${goalSubjectTotal()} 分</p>
        </article>

        <article class="score-summary summary-mint">
          <div class="summary-head">
            <h3>我的当前排名 <span class="subtle">ⓘ</span></h3>
            <i data-lucide="bar-chart-3"></i>
          </div>
          ${
            hasCurrent
              ? `<div class="summary-value"><strong>${latestReport.gradeRank}</strong><small>年级名次</small></div>
                 <p class="summary-note">${latestReport.name} · 总分 ${reportTotal(latestReport)} 分 · 班级排名 ${latestReport.classRank} 名</p>`
              : `<div class="summary-value">暂无近期考试成绩</div>
                 <p class="summary-note">可先手动填写当前基线</p>`
          }
        </article>
      </div>
    </section>
  `;
}

function renderGoals() {
  const report = getActiveReport();
  return `
    <section class="view report-layout">
      <aside class="panel report-list-panel">
        ${renderTargetScoreModule()}
        <div class="panel-title">
          <div>
            <h1>成绩单列表</h1>
            <p class="subtle">只管理学生考试成绩，不混填目标</p>
          </div>
          <button type="button" class="secondary-button" data-new-report>
            <i data-lucide="plus"></i>
            新增
          </button>
        </div>
        <div class="report-list">
          ${state.reports.map((item) => renderReportItem(item)).join("")}
        </div>
      </aside>

      <form id="score-form" class="form-panel">
        <div class="panel-title">
          <div>
            <h1>成绩编辑</h1>
            <p class="subtle">考试类型、考试时间、排名和各科成绩独立填报</p>
          </div>
          <button type="submit" class="primary-button">
            <i data-lucide="save"></i>
            保存成绩
          </button>
        </div>

        <div class="score-card">
          <div class="score-card-head score-report-head">
            <span class="tag is-strong">总分 ${reportTotal(report)} 分</span>
          </div>
          <div class="form-grid">
            ${selectField("examType", "考试类型", report.type, examTypes)}
            <div class="field">
              <label for="examDate">考试时间</label>
              <input id="examDate" name="examDate" type="date" value="${escapeHtml(report.date)}" />
            </div>
            ${field("classRank", "班级排名", report.classRank, "number", "例如 12")}
            ${field("gradeRank", "年级排名", report.gradeRank, "number", "例如 86")}
          </div>
          <div id="validation" class="validation"></div>
        </div>

        <div class="subject-grid">
          ${report.subjects.map((subject, index) => renderReportSubject(subject, index)).join("")}
        </div>
      </form>
    </section>
  `;
}

function renderTargetScoreModule() {
  const open = state.targetEditorOpen;
  const targetSchool = getTargetSchool();
  return `
    <section class="target-score-module">
      <button type="button" class="target-score-summary" data-toggle-target-score aria-expanded="${open}">
        <span class="target-score-title">
          <span class="target-score-icon"><i data-lucide="target"></i></span>
          <span>
            <strong>当前目标成绩</strong>
            <small>点击${open ? "收起" : "展开"}目标设置</small>
          </span>
        </span>
        <span class="target-score-chevron"><i data-lucide="${open ? "chevron-up" : "chevron-down"}"></i></span>
      </button>
      <div class="target-score-metrics">
        <span class="target-school-metric"><small>目标院校名称</small><strong>${escapeHtml(targetSchool.name)}</strong></span>
        <span><small>目标总分</small><strong>${goalSubjectTotal()} 分</strong></span>
        <span><small>班级目标排名</small><strong>${state.goal.targetClassRank} 名</strong></span>
        <span><small>年级目标排名</small><strong>${state.goal.targetGradeRank} 名</strong></span>
      </div>
      ${
        open
          ? `<form id="target-score-form" class="target-score-form">
              <div class="form-grid target-rank-grid">
                ${field("targetClassRank", "班级目标排名", state.goal.targetClassRank, "number", "例如 8")}
                ${field("targetGradeRank", "年级目标排名", state.goal.targetGradeRank, "number", "例如 60")}
              </div>
              <div class="target-subject-grid">
                ${state.goal.subjects.map((subject, index) => renderTargetSubject(subject, index)).join("")}
              </div>
              <div id="target-validation" class="validation"></div>
              <div class="action-row target-score-actions">
                <button type="button" class="secondary-button" data-toggle-target-score>
                  <i data-lucide="chevron-up"></i>
                  收起
                </button>
                <button type="submit" class="primary-button">
                  <i data-lucide="save"></i>
                  保存目标
                </button>
              </div>
            </form>`
          : ""
      }
    </section>
  `;
}

function renderReportItem(report) {
  const active = report.id === state.activeReportId;
  return `
    <button type="button" class="report-item ${active ? "is-selected" : ""}" data-report-id="${report.id}">
      <span class="report-icon"><i data-lucide="${report.type === "周测" ? "clipboard-list" : "file-text"}"></i></span>
      <span class="report-content">
        <strong>${escapeHtml(String(report.type || "普通"))} · ${escapeHtml(String(report.date || ""))}</strong>
        <span class="report-summary">${reportListSummary(report)}</span>
      </span>
    </button>
  `;
}

function field(name, label, value, type, placeholder, help = "") {
  return `
    <div class="field">
      <label for="${name}">${label}</label>
      <input id="${name}" name="${name}" type="${type}" value="${escapeHtml(String(value ?? ""))}" placeholder="${placeholder}" min="0" />
      ${help ? `<small>${help}</small>` : ""}
    </div>
  `;
}

function selectField(name, label, value, options) {
  return `
    <div class="field">
      <label for="${name}">${label}</label>
      <select id="${name}" name="${name}">
        ${options.map((option) => `<option value="${option}" ${option === value ? "selected" : ""}>${option}</option>`).join("")}
      </select>
    </div>
  `;
}

function renderReportSubject(subject, index) {
  return `
    <article class="subject-card">
      <h3>${subject.name}<i data-lucide="pencil-line"></i></h3>
      <div class="field">
        <label for="subject-${index}-score">分数</label>
        <input id="subject-${index}-score" name="subject-${index}-score" type="number" min="0" value="${subject.score}" />
        <small>满分 ${subjectMax(subject.name)}</small>
      </div>
      <div class="field">
        <label for="subject-${index}-class-rank">班级排名</label>
        <input id="subject-${index}-class-rank" name="subject-${index}-class-rank" type="number" min="1" value="${subject.classRank}" />
      </div>
      <div class="field">
        <label for="subject-${index}-grade-rank">年级排名</label>
        <input id="subject-${index}-grade-rank" name="subject-${index}-grade-rank" type="number" min="1" value="${subject.gradeRank}" />
      </div>
    </article>
  `;
}

function renderTargetSubject(subject, index) {
  return `
    <label class="target-subject-field" for="target-subject-${index}-score">
      <span>${subject.name}</span>
      <input id="target-subject-${index}-score" name="target-subject-${index}-score" type="number" min="0" value="${escapeHtml(String(subject.score ?? ""))}" />
    </label>
  `;
}

function readNumber(form, name) {
  const value = form.get(name)?.trim();
  if (value === "") return "";
  return Number(value);
}

function validateReport(form, report) {
  const classRank = readNumber(form, "classRank");
  const gradeRank = readNumber(form, "gradeRank");
  const errors = [];

  if (!form.get("examType")) {
    errors.push("请选择考试类型。");
  }
  if (!form.get("examDate")) {
    errors.push("请选择考试时间，需具体到日。");
  }
  if (classRank === "" || !Number.isInteger(classRank) || classRank < 1) {
    errors.push("班级排名必须是正整数。");
  }
  if (gradeRank === "" || !Number.isInteger(gradeRank) || gradeRank < 1) {
    errors.push("年级排名必须是正整数。");
  }

  report.subjects.forEach((subject, index) => {
    const score = readNumber(form, `subject-${index}-score`);
    const classSubjectRank = readNumber(form, `subject-${index}-class-rank`);
    const gradeSubjectRank = readNumber(form, `subject-${index}-grade-rank`);
    const max = subjectMax(subject.name);
    if (score === "" || score < 0 || score > max) {
      errors.push(`${subject.name}分数需在 0 到 ${max} 之间。`);
    }
    if (classSubjectRank === "" || !Number.isInteger(classSubjectRank) || classSubjectRank < 1) {
      errors.push(`${subject.name}班级排名必须是正整数。`);
    }
    if (gradeSubjectRank === "" || !Number.isInteger(gradeSubjectRank) || gradeSubjectRank < 1) {
      errors.push(`${subject.name}年级排名必须是正整数。`);
    }
  });

  return errors;
}

function validateTargetScore(form) {
  const targetClassRank = readNumber(form, "targetClassRank");
  const targetGradeRank = readNumber(form, "targetGradeRank");
  const errors = [];

  if (targetClassRank === "" || !Number.isInteger(targetClassRank) || targetClassRank < 1) {
    errors.push("班级目标排名必须是正整数。");
  }
  if (targetGradeRank === "" || !Number.isInteger(targetGradeRank) || targetGradeRank < 1) {
    errors.push("年级目标排名必须是正整数。");
  }

  state.goal.subjects.forEach((subject, index) => {
    const score = readNumber(form, `target-subject-${index}-score`);
    const max = subjectMax(subject.name);
    if (score === "" || score < 0 || score > max) {
      errors.push(`${subject.name}目标分数需在 0 到 ${max} 之间。`);
    }
  });

  return errors;
}

function handleTargetScoreSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const errors = validateTargetScore(formData);
  const validation = document.querySelector("#target-validation");

  if (errors.length) {
    validation.innerHTML = errors.map((error) => `<div>${error}</div>`).join("");
    validation.classList.add("is-visible");
    return;
  }

  const nextSubjects = state.goal.subjects.map((subject, index) => ({
    ...subject,
    score: Number(formData.get(`target-subject-${index}-score`)),
  }));
  state.goal = {
    ...state.goal,
    targetClassRank: Number(formData.get("targetClassRank")),
    targetGradeRank: Number(formData.get("targetGradeRank")),
    subjects: nextSubjects,
    targetTotal: nextSubjects.reduce((total, subject) => total + Number(subject.score || 0), 0),
    updatedAt: new Date().toLocaleString("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
  state.targetEditorOpen = false;
  saveState();
  render();
  showToast("目标成绩已保存");
}

function handleTargetPledgeSubmit(event) {
  event.preventDefault();
  const selected = getPendingTargetSchool();
  const formData = new FormData(event.target);
  const signature = String(formData.get("targetSignature") || "").trim();
  const validation = document.querySelector("#target-pledge-validation");

  if (signature !== studentProfile.name) {
    validation.innerHTML = `<div>请签署学生本人姓名：${escapeHtml(studentProfile.name)}</div>`;
    validation.classList.add("is-visible");
    return;
  }

  state.targetSchoolId = selected.id;
  state.selectedSchoolId = selected.id;
  state.view = "profile";
  clearTargetConfirm();
  if (window.location.hash.replace("#", "") !== "profile") {
    window.history.replaceState(null, "", "#profile");
  }
  saveState();
  render();
  showToast(`已点亮 ${selected.name}，目标档案已更新`);
}

function handleReportSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const report = getActiveReport();
  const errors = validateReport(formData, report);
  const validation = document.querySelector("#validation");

  if (errors.length) {
    validation.innerHTML = errors.map((error) => `<div>${error}</div>`).join("");
    validation.classList.add("is-visible");
    return;
  }

  const updatedAt = new Date().toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  state.reports = state.reports.map((item) =>
    item.id === report.id
      ? {
          ...item,
          name: `${formData.get("examDate")} ${formData.get("examType")}`,
          type: formData.get("examType"),
          date: formData.get("examDate"),
          classRank: Number(formData.get("classRank")),
          gradeRank: Number(formData.get("gradeRank")),
          updatedAt,
          subjects: item.subjects.map((subject, index) => ({
            ...subject,
            score: Number(formData.get(`subject-${index}-score`)),
            classRank: Number(formData.get(`subject-${index}-class-rank`)),
            gradeRank: Number(formData.get(`subject-${index}-grade-rank`)),
          })),
        }
      : item,
  );
  state.view = "profile";
  saveState();
  render();
  showToast("成绩单已保存，当前排名已同步到目标档案");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    setView(viewButton.dataset.view);
    return;
  }

  if (event.target.matches("[data-target-confirm-backdrop]") || event.target.closest("[data-close-target-confirm]")) {
    clearTargetConfirm();
    render();
    return;
  }

  if (event.target.closest("[data-target-confirm-next]")) {
    state.targetConfirmStep = "pledge";
    render();
    return;
  }

  if (event.target.closest("[data-target-confirm-back]")) {
    state.targetConfirmStep = "confirm";
    render();
    return;
  }

  const schoolButton = event.target.closest("[data-school]");
  if (schoolButton) {
    state.selectedSchoolId = schoolButton.dataset.school;
    saveState();
    render();
    return;
  }

  const reportButton = event.target.closest("[data-report-id]");
  if (reportButton) {
    state.activeReportId = reportButton.dataset.reportId;
    saveState();
    render();
    return;
  }

  if (event.target.closest("[data-toggle-target-score]")) {
    state.targetEditorOpen = !state.targetEditorOpen;
    saveState();
    render();
    return;
  }

  if (event.target.closest("[data-new-report]")) {
    const today = new Date().toISOString().slice(0, 10);
    const id = `exam-${Date.now()}`;
    state.reports = [
      {
        id,
        name: `${today} 普通`,
        type: "普通",
        date: today,
        classRank: 1,
        gradeRank: 1,
        subjects: subjects.map(([name]) => ({
          name,
          score: "",
          classRank: 1,
          gradeRank: 1,
        })),
        updatedAt: "",
      },
      ...state.reports,
    ];
    state.activeReportId = id;
    saveState();
    render();
    showToast("已新增一张成绩单");
    return;
  }

  if (event.target.closest("[data-open-filter]")) {
    state.drawerOpen = true;
    render();
    return;
  }

  if (event.target.closest("[data-close-filter]")) {
    state.drawerOpen = false;
    render();
    return;
  }

  if (event.target.closest("[data-reset-filter]")) {
    state.filters = structuredClone(defaultState.filters);
    state.drawerOpen = false;
    saveState();
    render();
    return;
  }

  const tagButton = event.target.closest("[data-toggle-tag]");
  if (tagButton) {
    const tag = tagButton.dataset.toggleTag;
    state.filters.tags = state.filters.tags.includes(tag)
      ? state.filters.tags.filter((item) => item !== tag)
      : [...state.filters.tags, tag];
    saveState();
    render();
    return;
  }

  const typeButton = event.target.closest("[data-set-type]");
  if (typeButton) {
    state.filters.type =
      state.filters.type === typeButton.dataset.setType
        ? "全部"
        : typeButton.dataset.setType;
    saveState();
    render();
    return;
  }

  if (event.target.closest("[data-apply-filter]")) {
    state.drawerOpen = false;
    saveState();
    render();
    showToast("筛选条件已应用");
    return;
  }

  if (event.target.closest("[data-set-target]")) {
    state.pendingTargetSchoolId = state.selectedSchoolId;
    state.targetConfirmStep = "confirm";
    render();
    return;
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "school-search") {
    const cursor = event.target.selectionStart || event.target.value.length;
    state.filters.query = event.target.value;
    saveState();
    render();
    const nextInput = document.querySelector("#school-search");
    if (nextInput) {
      nextInput.focus();
      nextInput.setSelectionRange(cursor, cursor);
    }
  }
});

document.addEventListener("change", (event) => {
  if (event.target.id === "province-select") {
    state.filters.province = event.target.value;
    saveState();
    render();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "target-pledge-form") {
    handleTargetPledgeSubmit(event);
    return;
  }

  if (event.target.id === "target-score-form") {
    handleTargetScoreSubmit(event);
  }

  if (event.target.id === "score-form") {
    handleReportSubmit(event);
  }
});

window.addEventListener("hashchange", () => {
  const view = getHashView();
  if (view && view !== state.view) {
    state.view = view;
    state.drawerOpen = false;
    saveState();
    render();
  }
});

render();
