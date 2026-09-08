const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const siteNav = document.querySelector(".site-nav");
const observedSections = ["home", "work", "about"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if (!document.querySelector("[data-language-toggle]")) {
  const languageToggle = document.createElement("div");
  languageToggle.className = "language-toggle";
  languageToggle.setAttribute("data-language-toggle", "");
  languageToggle.setAttribute("aria-label", "Language switcher");
  languageToggle.innerHTML = `
    <button type="button" class="is-active" aria-pressed="true">EN</button>
    <span aria-hidden="true"></span>
    <button type="button" aria-pressed="false">中</button>
  `;
  document.body.append(languageToggle);

  const translationStorageKey = "megan-portfolio-language";
  const pageName = window.location.pathname.split("/").pop() || "index.html";
  const originalText = new WeakMap();
  const originalHtml = new WeakMap();
  const originalImageSrc = new WeakMap();
  const byCard = (index, selector) => `.project-card:nth-of-type(${index}) ${selector}`;
  const setHtml = (selector, zh) => ({ selector, zh, mode: "html" });
  const setText = (selector, zh) => ({ selector, zh, mode: "text" });
  const setAllText = (selector, zh) => ({ selector, zh, mode: "text", all: true });

  const navTranslations = [
    setText(".site-nav a:nth-child(1)", "主页"),
    setText(".site-nav a:nth-child(2)", "项目"),
    setText(".site-nav a:nth-child(3)", "关于"),
  ];

  const translations = {
    "index.html": [
      ...navTranslations,
      setHtml(".figma-lead", '一名探索AI、交互体验与创意想象的<span>全栈设计师</span>，用以人为本的设计将想法转化为有意义、有情绪、有记忆点的数字体验。'),
      setHtml(".figma-meta span", '现就读于纽约大学体验设计专业 <a href="https://www.ecthub.org/home" target="_blank" rel="noreferrer">Learning Technology and Experience Design <span aria-hidden="true">↗</span></a>'),
      setText(".figma-links a:nth-child(1)", "简历"),
      setText(".figma-links a:nth-child(2)", "邮件"),
      setText("#work-title", "精选项目 Selected Work"),
      setText(byCard(1, ".project-overlay h3"), "阿斯利康实习｜B2B 医疗健康"),
      setText(byCard(1, ".project-overlay p"), "B2B 设计系统优化与医疗产品设计支持"),
      setText(byCard(1, ".project-overlay .view-button"), "查看项目"),
      setText(byCard(1, ".project-mobile-copy h3"), "阿斯利康实习｜B2B 医疗健康"),
      setText(byCard(1, ".project-mobile-copy p"), "B2B 设计系统优化。"),
      setText(byCard(2, ".project-overlay h3"), "小红书体验设计重构｜AI"),
      setText(byCard(2, ".project-overlay p"), "针对小红书内容发现、筛选与决策流程的浏览体验及 AI 体验重设计。"),
      setText(byCard(2, ".project-overlay .view-button"), "查看项目"),
      setText(byCard(2, ".project-mobile-copy h3"), "小红书体验设计重构｜AI"),
      setText(byCard(2, ".project-mobile-copy p"), "浏览体验与 AI 体验设计重构"),
      setText(byCard(3, ".project-overlay h3"), "AI MentorHub｜AI 职业规划平台"),
      setText(byCard(3, ".project-overlay p"), "通过 AI 驱动的职业规划网页体验，帮助用户发现自身优势，并可视化未来职业发展路径。"),
      setText(byCard(3, ".project-overlay .view-button"), "查看项目"),
      setText(byCard(3, ".project-mobile-copy h3"), "AI MentorHub｜AI 职业规划平台"),
      setText(byCard(3, ".project-mobile-copy p"), "AI 职业规划平台"),
      setText("#about-title", "关于我 About me"),
      setText(".figma-about-copy p:nth-of-type(1)", "你好，我是 Megan（仇敏滢），目前正在纽约大学攻读学习技术与体验设计（Learning Technology and Experience Design, LTXD）硕士学位。"),
      setText(".figma-about-copy p:nth-of-type(2)", "我一直对艺术充满热情。从小我便开始接触绘画和数字艺术。在进入 NYU 之前，我在美国加州帕萨迪纳的 ArtCenter College of Design 获得了娱乐设计（Entertainment Design）艺术学士学位，并在那里学习如何通过设计讲述故事、塑造角色并赋予他们生命。"),
      setText(".figma-about-copy p:nth-of-type(3)", "现在，我正在探索一个融合交互、逻辑与 AI 的新领域，希望将自己的创意能力与用户体验、视觉设计和技术结合起来。"),
      setText(".figma-about-copy p:nth-of-type(4)", "除了设计之外，我也喜欢唱歌、游戏和旅行。"),
      setText(".about-contact-row > span", "联系我："),
      setText("#experience-title", "经历 Experience"),
      setText(".about-experience-list article:nth-child(1) p", "学习体验设计师"),
      setText(".about-experience-list article:nth-child(1) span", "2026/02-2026/05"),
      setText(".about-experience-list article:nth-child(2) h3", "阿斯利康 AstraZeneca"),
      setText(".about-experience-list article:nth-child(2) p", "UX 设计实习生"),
      setText(".about-experience-list article:nth-child(2) span", "2025/04-2025/08"),
      setText(".about-experience-list article:nth-child(3) p", "市场部视觉实习生"),
      setText(".about-experience-list article:nth-child(3) span", "2021/05-2021/08"),
      setText("#skills-title", "技能 Skills"),
      setText(".about-chip-list span:nth-child(1)", "UI设计"),
      setText(".about-chip-list span:nth-child(2)", "UX设计"),
      setText(".about-chip-list span:nth-child(3)", "用户研究"),
      setText(".about-chip-list span:nth-child(4)", "产品设计"),
      setText(".about-chip-list span:nth-child(5)", "App 设计"),
      setText(".about-chip-list span:nth-child(6)", "网页设计"),
      setText(".about-chip-list span:nth-child(7)", "设计系统"),
      setText(".about-chip-list span:nth-child(8)", "学习体验设计"),
      setText(".about-chip-list span:nth-child(9)", "AIGC工具"),
      setText(".about-chip-list span:nth-child(10)", "Vibe Coding"),
      setText(".about-chip-list span:nth-child(11)", "视觉设计"),
      setText(".about-chip-list span:nth-child(12)", "游戏设计"),
      setText("#tools-title", "工具 Tools"),
    ],
    "work.html": [
      ...navTranslations,
      setText(byCard(1, ".project-overlay h3"), "小红书体验设计重构｜AI"),
      setText(byCard(1, ".project-overlay p"), "针对小红书内容发现、筛选与决策流程的浏览体验及 AI 体验重设计。"),
      setText(byCard(1, ".project-overlay .view-button"), "查看项目"),
      setText(byCard(1, ".project-mobile-copy h3"), "小红书体验设计重构｜AI"),
      setText(byCard(2, ".project-overlay h3"), "AI MentorHub｜AI 职业规划平台"),
      setText(byCard(2, ".project-overlay p"), "通过 AI 驱动的职业规划网页体验，帮助用户发现自身优势，并可视化未来职业发展路径。"),
      setText(byCard(2, ".project-overlay .view-button"), "查看项目"),
      setText(byCard(2, ".project-mobile-copy h3"), "AI MentorHub｜AI 职业规划平台"),
      setText(byCard(3, ".project-overlay h3"), "阿斯利康实习｜B2B 医疗健康"),
      setText(byCard(3, ".project-overlay p"), "B2B 设计系统优化与医疗产品设计支持"),
      setText(byCard(3, ".project-overlay .view-button"), "查看项目"),
      setText(byCard(3, ".project-mobile-copy h3"), "阿斯利康实习｜B2B 医疗健康"),
      setText(byCard(4, ".project-overlay h3"), "Exotic Pet | App设计"),
      setText(byCard(4, ".project-overlay p"), "面向爬宠饲养场景与日常照护需求的宠物百科应用设计"),
      setText(byCard(4, ".project-overlay .view-button"), "查看项目"),
      setText(byCard(4, ".project-mobile-copy h3"), "Exotic Pet | App设计"),
      setText(byCard(5, ".project-overlay h3"), "石库门的一天"),
      setText(byCard(5, ".project-overlay p"), "受上海石库门文化启发的卡牌游戏与 AR 体验设计"),
      setText(byCard(5, ".project-overlay .view-button"), "查看项目"),
      setText(byCard(5, ".project-mobile-copy h3"), "石库门的一天"),
      setText(byCard(6, ".project-overlay h3"), "Poka Land | 角色概念设计"),
      setText(byCard(6, ".project-overlay p"), "角色概念设计"),
      setText(byCard(6, ".project-overlay .view-button"), "查看项目"),
      setText(byCard(6, ".project-mobile-copy h3"), "Poka Land | 角色概念设计"),
      setText(byCard(7, ".project-overlay p"), "游戏设计与视觉叙事项目"),
      setText(byCard(7, ".project-overlay .view-button"), "查看项目"),
    ],
    "az-intern.html": [
      ...navTranslations,
      setText(".detail-side-index a:nth-child(1)", "概览"),
      setText(".detail-side-index a:nth-child(2)", "简介"),
      setText(".detail-side-index a:nth-child(3)", "重点项目"),
      setText(".detail-side-index a:nth-child(4)", "项目总结"),
      setText("#az-title", "阿斯利康实习"),
      setText(".az-project-meta div:nth-child(1) dt", "类型 Type"),
      setText(".az-project-meta div:nth-child(1) dd", "实习项目"),
      setText(".az-project-meta div:nth-child(2) dt", "角色 Role"),
      setText(".az-project-meta div:nth-child(2) dd", "用户体验设计师"),
      setText(".az-project-meta div:nth-child(3) dt", "周期 Duration"),
      setHtml(".az-project-meta div:nth-child(3) dd", "4个月<br>(2025/04-2025/08)"),
      setText(".az-project-meta div:nth-child(4) dt", "技能 Skills"),
      setHtml(".az-project-meta div:nth-child(4) dd", '<span class="az-nowrap">UI设计, UX设计, 用户研究,</span><br>设计系统'),
      setText("#az-introduction", "简介 Introduction"),
      setText("#az-introduction-section p", "2025年4月至8月，我在阿斯利康（中国上海）完成了为期5个月的UX设计实习，这是一段非常难忘的经历。在此期间，我得以展示了自己的UIUX技能及设计方案。在此，我要向我的导师王老师以及UX团队所有优秀的同事们表达最深切的谢意，他们在工作上给了我非常多的帮助，让我得以成长。"),
      setText("#az-featured-title", "重点项目 Featured project"),
      setText("#az-featured p:nth-of-type(1)", "在阿斯利康用户体验实习期间，我参与了面向内部 B2B 平台的设计系统更新项目。由于旧版设计系统较为老旧，在组件规范、文档说明和复用一致性上已难以满足复杂业务场景需求，因此团队基于原有系统进行演进与优化。我主要主导导航栏组件优化、无障碍颜色检查与设计系统说明文档整理，参考 Material Design、Carbon Design System 等成熟设计系统的方法，梳理组件命名、状态规范和文档结构，并独立完成组件使用场景、结构说明、状态说明等规范内容。在导航栏设计中，面对 B2B 平台大量文字、图表、表格和多层级信息的承载需求，我与团队通过调研和讨论比较不同导航方案，最终确定采用顶部导航栏与侧边导航栏结合的结构，以兼顾全局入口识别和复杂页面层级管理。同时，我使用无障碍检查插件对颜色对比度进行检查，帮助提升系统的可读性、规范性与可访问性。"),
      setText("#az-featured p:nth-of-type(2)", ""),
      setText("#az-featured p:nth-of-type(3)", ""),
      setText(".az-process-step:nth-of-type(1) h3", "1. 调研"),
      setText(".az-process-step:nth-of-type(1) p", "调研如 Material Design、Carbon Design System 这样的设计规范"),
      setText(".az-process-step:nth-of-type(2) h3", "2. 定义"),
      setText(".az-process-step:nth-of-type(2) p", "定义公司设计系统的需求并与团队一起制定优化方案"),
      setText(".az-process-step:nth-of-type(3) h3", "3. 设计"),
      setText(".az-process-step:nth-of-type(3) p", "设计符合公司需求与视觉的 Figma 组件"),
      setText(".az-process-step:nth-of-type(4) h3", "4. 组件"),
      setText(".az-process-step:nth-of-type(4) p", "制作组件状态与变体"),
      setText(".az-process-step:nth-of-type(5) h3", "5. 文档编写与修改"),
      setText(".az-process-step:nth-of-type(5) p", "参考旧设计系统文档，根据新设计系统进行校对"),
      setText("#az-map p", "此外，我还有幸在 AZ Map 项目中与资深 UX 设计师及 IT 工程师紧密合作，期间我协助进行了交互设计工作，开展了易用性测试，并根据用户反馈积极推动了方案的迭代与优化。"),
      setText("#az-visual-materials p", "除以上内容之外，我还利用 Figma 和 Photoshop 创作了包括主视觉（KV）和海报在内的公司内部视觉材料，通过将人力资源部和 IT 部门的需求转化为清晰的视觉资产，我有效协助优化了内部工作流程并提升了员工的参与度。"),
      setText("#az-takeaways-title", "收获 Takeaways"),
      setText("#az-takeaways p:nth-of-type(1)", "在阿斯利康的这段时光，见证了我从一名设计专业的学生向专业设计师的蜕变，而我最大的收获便是深刻感受到了团队的重要性与实际工作中的UIUX流程。在此期间我掌握了真实企业环境下的UI/UX 设计流程，从最初的需求调研到最终的开发交付，我亲身体会到了团队协同与跨部门合作的力量，并学会了如何平衡设计目标、技术可行性与业务需求。更重要的是，这段旅程让我重新定义了“好设计”：它不仅关乎视觉上的美感，更核心的是一致性、无障碍性，以及在提供优质用户体验的同时解决复杂问题的能力。我非常欣赏阿斯利康所展现出的高效与创新，也由衷感谢团队对我的不断鞭策，让我能够不断超越自我。"),
      setText("#az-takeaways p:nth-of-type(2)", ""),
    ],
    "rednote-redesign.html": [
      ...navTranslations,
      setText(".detail-side-index a:nth-child(1)", "概览"),
      setText(".detail-side-index a:nth-child(2)", "业务目标"),
      setText(".detail-side-index a:nth-child(3)", "用户调研"),
      setText(".detail-side-index a:nth-child(4)", "设计目标"),
      setText(".detail-side-index a:nth-child(5)", "设计策略1"),
      setText(".detail-side-index a:nth-child(6)", "设计策略2"),
      setText(".detail-side-index a:nth-child(7)", "设计策略3"),
      setText(".detail-side-index a:nth-child(8)", "可用性测试"),
      setText(".detail-side-index a:nth-child(9)", "总结"),
      setText(".detail-side-index a:nth-child(10)", "Vibecoding"),
      setText("#rednote-title", "小红书体验设计重构"),
      setText(".az-project-meta div:nth-child(1) dt", "类型 Type"),
      setText(".az-project-meta div:nth-child(1) dd", "个人项目"),
      setText(".az-project-meta div:nth-child(2) dt", "角色 Role"),
      setText(".az-project-meta div:nth-child(2) dd", "UIUX设计师"),
      setText(".az-project-meta div:nth-child(3) dt", "周期 Duration"),
      setHtml(".az-project-meta div:nth-child(3) dd", "2个月<br>(2026/05-2026/06)"),
      setText(".az-project-meta div:nth-child(4) dt", "技能 Skills"),
      setHtml(".az-project-meta div:nth-child(4) dd", '<span class="az-nowrap">UI设计, UX设计, 用户研究,</span><br>App 设计'),
    ],
    "ai-mentorhub.html": [
      ...navTranslations,
      setText(".detail-side-index a:nth-child(1)", "概览"),
      setText(".detail-side-index a:nth-child(2)", "项目介绍"),
      setText(".detail-side-index a:nth-child(3)", "用户调研"),
      setText(".detail-side-index a:nth-child(4)", "交互链路"),
      setText(".detail-side-index a:nth-child(5)", "可用性测试"),
      setText(".detail-side-index a:nth-child(6)", "项目展示"),
      setText(".detail-side-index a:nth-child(7)", "总结"),
      setText("#mentor-title", "AI MentorHub｜AI 职业规划平台"),
      setText(".az-project-meta div:nth-child(1) dt", "类型 Type"),
      setText(".az-project-meta div:nth-child(1) dd", "个人项目"),
      setText(".az-project-meta div:nth-child(2) dt", "角色 Role"),
      setText(".az-project-meta div:nth-child(2) dd", "产品体验设计师"),
      setText(".az-project-meta div:nth-child(3) dt", "周期 Duration"),
      setHtml(".az-project-meta div:nth-child(3) dd", "3个月<br>(2025/09-2025/11)"),
      setText(".az-project-meta div:nth-child(4) dt", "技能 Skills"),
      setHtml(".az-project-meta div:nth-child(4) dd", '<span class="az-nowrap">0-1, UI设计, UX设计,</span><br>用户研究, 网页设计'),
      setText("#mentor-prototype-title", "原型展示"),
      setText("#mentor-takeaways-title", "8. 总结"),
      setText(".mentor-written-takeaways p:nth-of-type(1)", "我在这个项目中最大的一个 “aha moment（顿悟时刻）”，来自于直接观察用户如何与原型进行互动。我意识到，当用户做出一些我们没有预料到的行为时，反而会暴露出一些我们之前根本没有想到的真实需求。比如，当我看到用户出现犹豫或困惑时，我意识到仅仅提供一个简单、按步骤操作的工具还不够，我们还需要在整个过程中给予用户更多引导。这个项目让我真正学会了，不再基于自己的猜测去做设计，而是基于数据和真实用户反馈进行设计决策。可用性测试中的反馈帮助我发现了许多之前完全忽略的设计痛点。"),
      setText(".mentor-written-takeaways p:nth-of-type(2)", "每一轮测试都让我更清楚地看到用户会在哪些地方遇到阻碍。我发现，即使只是一些很小的调整，比如增加一个更明确的搜索按钮，或调整某个颜色，也可能对整体体验产生很大的影响。整个过程的核心，就是根据真实用户反馈不断优化和迭代原型。正是这种持续测试—发现问题—优化设计的循环，让我最终能够打造出一个更完善、也真正以用户为中心的产品。"),
    ],
    "exotic-pet.html": [
      ...navTranslations,
      setText(".detail-side-index a:nth-child(1)", "概览"),
      setText(".detail-side-index a:nth-child(2)", "介绍"),
      setText(".detail-side-index a:nth-child(3)", "调研"),
      setText(".detail-side-index a:nth-child(4)", "问题"),
      setText(".detail-side-index a:nth-child(5)", "可用性测试"),
      setText(".detail-side-index a:nth-child(6)", "成果展示"),
      setText(".detail-side-index a:nth-child(7)", "总结"),
      setText(".az-project-meta div:nth-child(1) dt", "类型 Type"),
      setText(".az-project-meta div:nth-child(1) dd", "团队项目"),
      setText(".az-project-meta div:nth-child(2) dt", "角色 Role"),
      setHtml(".az-project-meta div:nth-child(2) dd", "设计负责人/<br>项目经理"),
      setText(".az-project-meta div:nth-child(3) dt", "周期 Duration"),
      setHtml(".az-project-meta div:nth-child(3) dd", "3个月<br>(2025/09-2025/12)"),
      setText(".az-project-meta div:nth-child(4) dt", "技能 Skills"),
      setHtml(".az-project-meta div:nth-child(4) dd", '<span class="az-nowrap">0-1, UI设计, UX设计,</span><br>用户研究, 可用性测试,<br>App 设计'),
      setText("#exotic-showcase-title", "原型展示"),
      setText("#exotic-takeaway-title", "反思与成长"),
      setText(".exotic-written-takeaways p", "在设计过程中，我逐渐学会了如何通过基于证据的迭代来推动设计决策。最初，我主要根据前期研究结果和团队假设来搭建 App，但可用性测试暴露出了一些我们此前没有考虑到的关键问题。基于测试结果和设计原则，我进一步迭代了原型，例如将整体配色调整为更专业的“深绿色”体系，并建立更清晰的信息层级，从而提升产品的可用性。这个过程让我意识到，设计不仅仅关乎视觉美感，更重要的是通过真实用户反馈不断优化产品，打造一个用户能够放心依赖的工具。同时，我也很高兴能和同学们一起完成这个项目。我非常享受与团队成员讨论 UX 策略、功能设计、用户流程以及设计迭代的过程。"),
      setText(".exotic-roadmap-card h3", "下一步"),
      setHtml(".exotic-roadmap-card li:nth-child(1)", "<strong>降低认知负荷：</strong> 进一步优化极简设计方式，让用户能够更快速、轻松地获取信息，减少使用压力。"),
      setHtml(".exotic-roadmap-card li:nth-child(2)", "<strong>社区功能整合：</strong> 探索能够让新手用户安全连接到经过验证的专业人士的功能。"),
      setHtml(".exotic-roadmap-card li:nth-child(3)", "<strong>无障碍设计：</strong> 确保不同视觉或行动能力的宠物主人都能够顺利使用该 App。"),
    ],
    "shikumen.html": [
      ...navTranslations,
      setText(".detail-side-index a:nth-child(1)", "概览"),
      setText(".detail-side-index a:nth-child(2)", "介绍"),
      setText(".detail-side-index a:nth-child(3)", "调研"),
      setText(".detail-side-index a:nth-child(4)", "项目展示"),
      setText(".detail-side-index a:nth-child(5)", "总结"),
      setText("#shikumen-title", "石库门的一天"),
      setText(".az-project-meta div:nth-child(1) dt", "类型 Type"),
      setText(".az-project-meta div:nth-child(1) dd", "个人项目"),
      setText(".az-project-meta div:nth-child(2) dt", "角色 Role"),
      setText(".az-project-meta div:nth-child(2) dd", "交互设计师"),
      setText(".az-project-meta div:nth-child(3) dt", "周期 Duration"),
      setText(".az-project-meta div:nth-child(3) dd", "2个月"),
      setText(".az-project-meta div:nth-child(4) dt", "技能 Skills"),
      setHtml(".az-project-meta div:nth-child(4) dd", '<span class="az-nowrap">插画设计，桌游设计</span><br>调研，AR'),
    ],
    "blindrunner.html": [
      ...navTranslations,
      setText(".detail-side-index a:nth-child(1)", "概览"),
      setText(".detail-side-index a:nth-child(2)", "背景"),
      setText(".detail-side-index a:nth-child(3)", "用户旅程图"),
      setText(".detail-side-index a:nth-child(4)", "任务流程"),
      setText(".detail-side-index a:nth-child(5)", "作品展示"),
      setText(".detail-side-index a:nth-child(6)", "项目总结"),
      setText(".az-project-meta div:nth-child(1) dt", "类型 Type"),
      setText(".az-project-meta div:nth-child(1) dd", "个人项目"),
      setText(".az-project-meta div:nth-child(2) dt", "角色 Role"),
      setText(".az-project-meta div:nth-child(2) dd", "产品设计师"),
      setText(".az-project-meta div:nth-child(3) dt", "周期 Duration"),
      setText(".az-project-meta div:nth-child(3) dd", "3个月"),
      setText(".az-project-meta div:nth-child(4) dt", "技能 Skills"),
      setHtml(".az-project-meta div:nth-child(4) dd", '<span class="az-nowrap">用户调研，视觉设计，</span><br>产品设计'),
    ],
    "about.html": [
      ...navTranslations,
      setText("#about-page-title", "关于我 About me"),
      setText(".about-copy p:nth-of-type(1)", "你好，我是 Megan（仇敏滢），目前正在纽约大学攻读学习技术与体验设计（Learning Technology and Experience Design, LTXD）硕士学位。"),
      setText(".about-copy p:nth-of-type(2)", "我一直对艺术充满热情。从小我便开始接触绘画和数字艺术。在进入 NYU 之前，我在美国加州帕萨迪纳的 ArtCenter College of Design 获得了娱乐设计（Entertainment Design）艺术学士学位，并在那里学习如何通过设计讲述故事、塑造角色并赋予他们生命。"),
      setText(".about-copy p:nth-of-type(3)", "现在，我正在探索一个融合交互、逻辑与 AI 的新领域，希望将自己的创意能力与用户体验、视觉设计和技术结合起来。"),
      setText(".about-copy p:nth-of-type(4)", "除了设计之外，我也喜欢唱歌、游戏和旅行。"),
      setText(".about-contact-row > span", "联系我："),
      setText("#about-experience-title", "经历 Experience"),
      setText(".about-experience-list article:nth-child(1) p", "学习体验设计师"),
      setText(".about-experience-list article:nth-child(1) span", "2026/02-2026/05"),
      setText(".about-experience-list article:nth-child(2) h3", "阿斯利康 AstraZeneca"),
      setText(".about-experience-list article:nth-child(2) p", "UX 设计实习生"),
      setText(".about-experience-list article:nth-child(2) span", "2025/04-2025/08"),
      setText(".about-experience-list article:nth-child(3) p", "市场部视觉实习生"),
      setText(".about-experience-list article:nth-child(3) span", "2021/05-2021/08"),
      setText("#about-skills-title", "技能 Skills"),
      setText(".about-chip-list span:nth-child(1)", "UI设计"),
      setText(".about-chip-list span:nth-child(2)", "UX设计"),
      setText(".about-chip-list span:nth-child(3)", "用户研究"),
      setText(".about-chip-list span:nth-child(4)", "产品设计"),
      setText(".about-chip-list span:nth-child(5)", "App 设计"),
      setText(".about-chip-list span:nth-child(6)", "网页设计"),
      setText(".about-chip-list span:nth-child(7)", "设计系统"),
      setText(".about-chip-list span:nth-child(8)", "学习体验设计"),
      setText(".about-chip-list span:nth-child(9)", "AIGC工具"),
      setText(".about-chip-list span:nth-child(10)", "Vibe Coding"),
      setText(".about-chip-list span:nth-child(11)", "视觉设计"),
      setText(".about-chip-list span:nth-child(12)", "游戏设计"),
      setText("#about-tools-title", "工具 Tools"),
    ],
  };

  const imageTranslations = {
    "rednote-redesign.html": Array.from({ length: 43 }, (_, index) => {
      const pageNumber = index + 2;
      return {
        selector: `img[src^="assets/rednote-redesign/${pageNumber}.jpg"]`,
        zhSrc: `assets/rednote-redesign/中文版/${pageNumber}.jpg`,
      };
    }),
    "ai-mentorhub.html": [
      ...Array.from({ length: 10 }, (_, index) => {
        const pageNumber = index + 1;
        return {
          selector: `img[src^="assets/ai-mentorhub/${pageNumber}.png"]`,
          zhSrc: `assets/ai-mentorhub/中文版/${pageNumber}.png`,
        };
      }),
      {
        selector: 'img[src^="assets/ai-mentorhub/11.png"]',
        hideInZh: true,
      },
    ],
    "exotic-pet.html": Array.from({ length: 7 }, (_, index) => {
      const pageNumber = index + 1;
      return {
        selector: `img[src^="assets/exotic-pet/${pageNumber}.png"]`,
        zhSrc: `assets/exotic-pet/中文版/${pageNumber}.png`,
      };
    }),
  };

  const applyRule = (rule, language) => {
    const elements = rule.all
      ? Array.from(document.querySelectorAll(rule.selector))
      : [document.querySelector(rule.selector)].filter(Boolean);

    elements.forEach((element) => {
      if (rule.mode === "html" && !originalHtml.has(element)) {
        originalHtml.set(element, element.innerHTML);
      }

      if (rule.mode === "text" && !originalText.has(element)) {
        originalText.set(element, element.textContent);
      }

      if (language === "zh") {
        if (rule.mode === "html") {
          element.innerHTML = rule.zh;
        } else {
          element.textContent = rule.zh;
        }
        if (rule.zh === "") {
          element.hidden = true;
        }
        return;
      }

      element.hidden = false;

      if (rule.mode === "html" && originalHtml.has(element)) {
        element.innerHTML = originalHtml.get(element);
      }

      if (rule.mode === "text" && originalText.has(element)) {
        element.textContent = originalText.get(element);
      }
    });
  };

  const applyLanguage = (language) => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    (translations[pageName] || navTranslations).forEach((rule) => applyRule(rule, language));
    (imageTranslations[pageName] || []).forEach((rule) => {
      document.querySelectorAll(rule.selector).forEach((image) => {
        if (!originalImageSrc.has(image)) {
          originalImageSrc.set(image, image.getAttribute("src"));
        }

        if (language === "zh") {
          image.hidden = Boolean(rule.hideInZh);
          image.style.display = rule.hideInZh ? "none" : "";
          if (rule.zhSrc) {
            image.setAttribute("src", rule.zhSrc);
          }
          return;
        }

        image.hidden = false;
        image.style.display = "";
        image.setAttribute("src", originalImageSrc.get(image));
      });
    });
    languageToggle.querySelectorAll("button").forEach((button) => {
      const isActive = (language === "en" && button.textContent.trim() === "EN") ||
        (language === "zh" && button.textContent.trim() === "中");
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  languageToggle.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.textContent.trim() === "中" ? "zh" : "en";
      window.localStorage.setItem(translationStorageKey, language);
      applyLanguage(language);
    });
  });

  applyLanguage(window.localStorage.getItem(translationStorageKey) === "zh" ? "zh" : "en");
}

const wechatButtons = Array.from(document.querySelectorAll("[data-wechat-open]"));

if (wechatButtons.length) {
  const wechatModal = document.createElement("div");
  wechatModal.className = "wechat-modal";
  wechatModal.setAttribute("data-wechat-modal", "");
  wechatModal.setAttribute("aria-hidden", "true");
  wechatModal.innerHTML = `
    <div class="wechat-modal-card" role="dialog" aria-modal="true" aria-labelledby="wechat-modal-title">
      <button type="button" class="wechat-modal-close" data-wechat-close aria-label="Close WeChat QR code">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M6 6l12 12"></path>
          <path d="M18 6L6 18"></path>
        </svg>
      </button>
      <h2 id="wechat-modal-title" class="wechat-modal-title">扫码添加微信</h2>
      <img class="wechat-modal-qr" src="assets/wechat-qr.jpg" alt="WeChat QR code for errorre">
      <p class="wechat-modal-caption">扫二维码，添加我为朋友。</p>
      <p class="wechat-modal-id">WeChat ID: errorre</p>
    </div>
  `;
  document.body.append(wechatModal);

  const closeWechatButton = wechatModal.querySelector("[data-wechat-close]");
  let previousBodyOverflow = "";

  const openWechatModal = () => {
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    wechatModal.classList.add("is-open");
    wechatModal.setAttribute("aria-hidden", "false");
    closeWechatButton?.focus({ preventScroll: true });
  };

  const closeWechatModal = () => {
    wechatModal.classList.remove("is-open");
    wechatModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = previousBodyOverflow;
  };

  wechatButtons.forEach((button) => {
    button.addEventListener("click", openWechatModal);
  });

  closeWechatButton?.addEventListener("click", closeWechatModal);

  wechatModal.addEventListener("click", (event) => {
    if (event.target === wechatModal) {
      closeWechatModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && wechatModal.classList.contains("is-open")) {
      closeWechatModal();
    }
  });
}

if (siteNav) {
  let lastScrollY = window.scrollY;
  let tickingNav = false;
  const scrollThreshold = 8;

  const updateNavVisibility = () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    if (currentScrollY <= 24) {
      siteNav.classList.remove("is-hidden");
    } else if (scrollDelta > scrollThreshold) {
      siteNav.classList.add("is-hidden");
    } else if (scrollDelta < -scrollThreshold) {
      siteNav.classList.remove("is-hidden");
    }

    lastScrollY = currentScrollY;
    tickingNav = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (tickingNav) return;
      tickingNav = true;
      window.requestAnimationFrame(updateNavVisibility);
    },
    { passive: true }
  );
}

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) {
      setActiveLink(visible.target.id);
    }
  },
  {
    rootMargin: "-24% 0px -58% 0px",
    threshold: [0.08, 0.18, 0.34, 0.5],
  }
);

observedSections.forEach((section) => observer.observe(section));

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href")?.replace("#", "");
    if (id) setActiveLink(id);
  });
});

const aboutLockKey = "megan-portfolio-about-lock";
const aboutLockLinks = Array.from(document.querySelectorAll("[data-about-lock-link]"));
const aboutUnlockLinks = Array.from(document.querySelectorAll("[data-about-unlock-link]"));

aboutLockLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.sessionStorage.setItem(aboutLockKey, "true");
  });
});

aboutUnlockLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.sessionStorage.removeItem(aboutLockKey);
  });
});

const homeAboutLockSection = document.querySelector(".home-page #about");

if (homeAboutLockSection) {
  let isClampingAboutScroll = false;
  let aboutLockTouchY = 0;

  const isAboutLocked = () =>
    window.location.hash === "#about" &&
    window.sessionStorage.getItem(aboutLockKey) === "true";

  const getAboutLockTop = () => Math.max(0, homeAboutLockSection.offsetTop);

  const clampAboutScroll = () => {
    if (!isAboutLocked() || isClampingAboutScroll) return;

    const minScrollTop = getAboutLockTop();
    if (window.scrollY >= minScrollTop - 2) return;

    isClampingAboutScroll = true;
    window.scrollTo({ top: minScrollTop, behavior: "auto" });
    window.requestAnimationFrame(() => {
      isClampingAboutScroll = false;
    });
  };

  window.addEventListener(
    "wheel",
    (event) => {
      if (!isAboutLocked()) return;
      if (event.deltaY >= 0) return;
      if (window.scrollY > getAboutLockTop() + 2) return;

      event.preventDefault();
      clampAboutScroll();
    },
    { passive: false }
  );

  window.addEventListener(
    "touchstart",
    (event) => {
      aboutLockTouchY = event.touches[0]?.clientY || 0;
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      if (!isAboutLocked()) return;

      const currentTouchY = event.touches[0]?.clientY || 0;
      const isSwipingDownToScrollUp = currentTouchY > aboutLockTouchY;
      if (!isSwipingDownToScrollUp) return;
      if (window.scrollY > getAboutLockTop() + 2) return;

      event.preventDefault();
      clampAboutScroll();
    },
    { passive: false }
  );

  window.addEventListener("scroll", clampAboutScroll, { passive: true });
  window.addEventListener("hashchange", clampAboutScroll);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", clampAboutScroll, { once: true });
  } else {
    clampAboutScroll();
  }
}

document.querySelectorAll("[data-project-pending]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

const aboutEntryTargets = Array.from(document.querySelectorAll("[data-about-entry]"));

if (aboutEntryTargets.length) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    aboutEntryTargets.forEach((target) => target.classList.add("is-visible"));
  } else {
    const aboutEntryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          aboutEntryObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18,
      }
    );

    aboutEntryTargets.forEach((target) => aboutEntryObserver.observe(target));
  }
}

const aboutJumpButton = document.querySelector("[data-about-jump]");
const homeWorkSection = document.getElementById("work");
const homeAboutSection = document.getElementById("about");

if (aboutJumpButton && homeWorkSection && homeAboutSection) {
  let isAutoScrollingHome = false;
  let isWorkSnapReady = false;
  const arrowViewportOffset = 36;

  const scrollToElementViewportTop = (element, viewportTop) => {
    const targetTop = element.getBoundingClientRect().top + window.scrollY - viewportTop;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  const getWorkSnapTargetTop = () => {
    const arrowRect = aboutJumpButton.getBoundingClientRect();
    return window.innerHeight - arrowViewportOffset - arrowRect.height;
  };

  const scrollToHomeAbout = () => {
    isAutoScrollingHome = true;
    homeAboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      isAutoScrollingHome = false;
    }, 900);
  };

  const snapToHomeWork = () => {
    isAutoScrollingHome = true;
    isWorkSnapReady = true;
    scrollToElementViewportTop(aboutJumpButton, getWorkSnapTargetTop());
    window.setTimeout(() => {
      isAutoScrollingHome = false;
    }, 900);
  };

  aboutJumpButton.addEventListener("click", () => {
    scrollToHomeAbout();
    aboutJumpButton.blur();
  });

  window.addEventListener(
    "wheel",
    (event) => {
      if (isAutoScrollingHome) return;

      const workRect = homeWorkSection.getBoundingClientRect();
      const aboutRect = homeAboutSection.getBoundingClientRect();

      if (event.deltaY < -24 && workRect.top > window.innerHeight * 0.35) {
        isWorkSnapReady = false;
        return;
      }

      if (event.deltaY <= 24) return;

      const isApproachingWork =
        !isWorkSnapReady &&
        workRect.top > 72 &&
        workRect.top < window.innerHeight * 0.72 &&
        aboutRect.top > window.innerHeight * 0.5;

      if (isApproachingWork) {
        event.preventDefault();
        snapToHomeWork();
        return;
      }

      const snapTargetTop = getWorkSnapTargetTop();
      const arrowRect = aboutJumpButton.getBoundingClientRect();
      const isAtWorkSnap =
        Math.abs(arrowRect.top - snapTargetTop) <= 36 &&
        aboutRect.top > 60;

      if (isAtWorkSnap) {
        event.preventDefault();
        scrollToHomeAbout();
      }
    },
    { passive: false }
  );
}

const nameColorTarget = document.querySelector("[data-name-color-target]");
const nameColorSwatches = Array.from(document.querySelectorAll("[data-name-color]"));

if (nameColorTarget && nameColorSwatches.length) {
  const setNameColor = (swatch) => {
    const color = swatch.dataset.nameColor;
    if (!color) return;

    nameColorTarget.style.setProperty("--name-color", color);
    nameColorSwatches.forEach((item) => item.classList.toggle("is-selected", item === swatch));
  };

  nameColorSwatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      setNameColor(swatch);
    });
  });

  const runNameColorIntro = () => {
    const picker = nameColorTarget.closest(".name-color-picker");
    if (!picker || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const colorDuration = 1000;
    const startDelay = 240;
    const blackColor = "#474747";
    const introSwatches = nameColorSwatches
      .filter((swatch) => swatch.dataset.nameColor?.toLowerCase() !== blackColor)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (introSwatches.length < 3) return;

    introSwatches.forEach((swatch, index) => {
      window.setTimeout(() => {
        setNameColor(swatch);
      }, startDelay + index * colorDuration);
    });
  };

  const splitLetters = (element) => {
    const text = element.textContent;
    element.textContent = "";
    const letters = [];

    Array.from(text).forEach((character) => {
      const letter = document.createElement("span");
      letter.className = "hero-letter";
      letter.innerHTML = character === " " || character === "\u00a0" ? "&nbsp;" : character;
      element.appendChild(letter);
      letters.push(letter);
    });

    return letters;
  };

  const runHeroIntro = () => {
    const intro = document.querySelector(".figma-intro-copy");
    const titleFragments = Array.from(document.querySelectorAll("[data-letter-text]"));
    const revealItems = Array.from(document.querySelectorAll(".figma-lead, .figma-meta, .figma-links"));

    if (!intro || !titleFragments.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      runNameColorIntro();
      return;
    }

    const letterGroups = titleFragments.map(splitLetters);
    const helloLetters = letterGroups[0] || [];
    const nameLetters = letterGroups.slice(1).flat();
    const letterDelay = 48;
    const letterSettle = 520;
    const namePause = 200;
    const nameStart = helloLetters.length * letterDelay + letterSettle + namePause;
    const revealStart = nameStart + nameLetters.length * letterDelay + letterSettle;

    intro.classList.add("is-animating");

    window.requestAnimationFrame(() => {
      helloLetters.forEach((letter, index) => {
        window.setTimeout(() => {
          letter.classList.add("is-visible");
        }, index * letterDelay);
      });

      nameLetters.forEach((letter, index) => {
        window.setTimeout(() => {
          letter.classList.add("is-visible");
        }, nameStart + index * letterDelay);
      });

      revealItems.forEach((item, index) => {
        window.setTimeout(() => {
          item.classList.add("is-revealed");
        }, revealStart + index * 180);
      });

      window.setTimeout(() => {
        runNameColorIntro();
      }, revealStart + revealItems.length * 180 + 420);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runHeroIntro, { once: true });
  } else {
    runHeroIntro();
  }
}

const carousel = document.querySelector("[data-project-carousel]");
const previousButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");

if (carousel && previousButton && nextButton) {
  const getCards = () => Array.from(carousel.querySelectorAll(".project-card"));

  const getCurrentCardIndex = () => {
    const cards = getCards();
    const carouselStyle = window.getComputedStyle(carousel);
    const carouselEdge = carousel.getBoundingClientRect().left + parseFloat(carouselStyle.paddingLeft || "0");
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const distance = Math.abs(rect.left - carouselEdge);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const updateCarouselButtons = () => {
    const cards = getCards();
    const index = getCurrentCardIndex();
    previousButton.disabled = index <= 0;
    nextButton.disabled = index >= cards.length - 1;
  };

  const alignProjectCard = (index, behavior = "auto") => {
    const cards = getCards();
    const card = cards[index];
    if (!card) return;

    const carouselStyle = window.getComputedStyle(carousel);
    const leadingPadding = parseFloat(carouselStyle.paddingLeft || "0");
    const targetLeft = card.offsetLeft - leadingPadding;
    carousel.scrollTo({ left: targetLeft, behavior });
  };

  previousButton.addEventListener("click", () => {
    alignProjectCard(Math.max(0, getCurrentCardIndex() - 1), "smooth");
    previousButton.blur();
  });

  nextButton.addEventListener("click", () => {
    const cards = getCards();
    alignProjectCard(Math.min(cards.length - 1, getCurrentCardIndex() + 1), "smooth");
    nextButton.blur();
  });

  carousel.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateCarouselButtons);
  }, { passive: true });

  window.addEventListener("resize", () => {
    updateCarouselButtons();
  });

  const initializeCarousel = () => {
    carousel.scrollTo({ left: 0, behavior: "auto" });
    updateCarouselButtons();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeCarousel);
  } else {
    initializeCarousel();
  }

  window.addEventListener("load", () => {
    carousel.scrollTo({ left: 0, behavior: "auto" });
    updateCarouselButtons();
  });
}

const lightbox = document.querySelector("[data-image-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxGalleryImages = Array.from(document.querySelectorAll("[data-lightbox-gallery] img"));

if (lightbox && lightboxImage && lightboxGalleryImages.length) {
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.removeAttribute("src");
    lightboxImage.removeAttribute("alt");
    document.body.style.removeProperty("overflow");
  };

  lightboxGalleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === lightboxImage) {
      closeLightbox();
    }
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

const detailSideIndex = document.querySelector("[data-detail-side-index]");
const detailSideLinks = Array.from(document.querySelectorAll("[data-detail-side-link]"));

if (detailSideIndex && detailSideLinks.length) {
  let sideIndexTimer;

  const showDetailSideIndex = () => {
    detailSideIndex.classList.add("is-visible");
    window.clearTimeout(sideIndexTimer);
    sideIndexTimer = window.setTimeout(() => {
      detailSideIndex.classList.remove("is-visible");
    }, 1800);
  };

  const setActiveDetailLink = (id) => {
    detailSideLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const detailSections = detailSideLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const detailObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveDetailLink(visible.target.id);
      }
    },
    {
      rootMargin: "-36% 0px -46% 0px",
      threshold: [0.01, 0.08, 0.18, 0.36, 0.58],
    }
  );

  detailSections.forEach((section) => detailObserver.observe(section));

  ["scroll", "wheel", "touchmove"].forEach((eventName) => {
    window.addEventListener(eventName, showDetailSideIndex, { passive: true });
  });

  detailSideLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const id = href?.replace("#", "");
      const target = href ? document.querySelector(href) : null;

      if (target && id) {
        event.preventDefault();
        target.scrollIntoView({ block: "start", behavior: "smooth" });
        window.history.replaceState(null, "", href);
        setActiveDetailLink(id);
      }

      showDetailSideIndex();
    });
  });
}
