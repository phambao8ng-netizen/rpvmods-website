(() => {
  'use strict';
  const config = window.SITE_CONFIG || {};
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const dictionary = {
    vi: {
      navHome:'Trang Chủ',navServices:'Dịch Vụ',navPricing:'Bảng Giá',navProjects:'Dự Án',navAbout:'Info',
      eyebrow:'GAMING • TECHNOLOGY • COMMUNITY',heroLine1:'CHÀO MỪNG',heroLine2:'ĐẾN VỚI',
      heroDescription:'Chào mừng bạn đến với RPV MODS — nơi cung cấp giải pháp công nghệ và dịch vụ gaming chuyên sâu. Chúng tôi hỗ trợ tối ưu máy tính, xây dựng cộng đồng Discord, thiết kế nhận diện và phát triển bot theo nhu cầu.',
      joinDiscord:'Tham gia Discord',explore:'Khám phá dịch vụ',metaText:'Dành cho cộng đồng game thủ Việt Nam',scroll:'CUỘN ĐỂ KHÁM PHÁ',
      servicesKicker:'DANH MỤC DỊCH VỤ',servicesTitle:'DỊCH VỤ <span class="gold-text">NỔI BẬT</span>',servicesSub:'Thiết kế theo phong cách gaming hiện đại, tập trung vào những dịch vụ bạn đang cung cấp.',
      service1Badge:'NỔI BẬT',service1Type:'CUSTOM DISCORD',service1Title:'Custom Discord',service1Desc:'Thiết kế server Discord theo yêu cầu: hệ thống kênh, role, bảo mật, ticket, cửa hàng và bot tiện ích.',service1Tag1:'Role & Bot',service1Tag2:'Ticket Shop',service1Tag3:'Branding',service1Price:'150k - 500k',
      service2Badge:'THỊNH HÀNH',service2Type:'SETUP DISCORD',service2Title:'Setup Discord',service2Desc:'Setup server Discord từ đầu: channel, role, welcome, verify, ticket và bố cục gọn gàng dễ sử dụng.',service2Tag1:'Welcome',service2Tag2:'Verify',service2Tag3:'Ticket',service2Price:'50k - 200k',
      service3Badge:'HOT',service3Type:'SOCIAL MEDIA',service3Title:'Dịch vụ Mạng xã hội',service3Desc:'Hỗ trợ nội dung, thiết kế và phát triển Facebook, TikTok, Instagram, tăng độ nhận diện thương hiệu.',service3Tag1:'Facebook',service3Tag2:'TikTok',service3Tag3:'Content',service3Price:'80k - 350k',
      service4Badge:'HIỆU NĂNG',service4Type:'PC OPTIMIZATION',service4Title:'Tối ưu máy tính',service4Desc:'Tối ưu Windows cho chơi game và làm việc: dọn rác, giảm nền, boost FPS, giảm input lag và tăng độ ổn định.',service4Tag1:'FPS Boost',service4Tag2:'Clean System',service4Tag3:'Gaming',service4Price:'100k - 300k',servicePriceNote:'tùy gói dịch vụ',serviceCardBtn:'Liên Hệ Ngay',
      pricingKicker:'GÓI DỊCH VỤ',pricingTitle:'BẢNG <span class="gold-text">GIÁ</span>',pricingSub:'Giá và nội dung dưới đây là dữ liệu mẫu, hãy thay bằng thông tin thực tế của bạn.',
      plan1Name:'Cơ bản',plan1Desc:'Dành cho nhu cầu nhỏ',contactPrice:'Liên hệ',plan1F1:'Tư vấn nhu cầu',plan1F2:'Thiết lập cơ bản',plan1F3:'Hỗ trợ qua Discord',
      plan2Name:'Nâng cao',plan2Desc:'Dành cho game thủ và cộng đồng',plan2F1:'Tư vấn theo yêu cầu',plan2F2:'Tùy chỉnh chuyên sâu',plan2F3:'Hướng dẫn sử dụng',
      plan3Name:'Theo yêu cầu',plan3Desc:'Giải pháp riêng cho dự án của bạn',plan3F1:'Phạm vi tùy chỉnh',plan3F2:'Thiết kế theo thương hiệu',plan3F3:'Thỏa thuận hỗ trợ',popular:'PHỔ BIẾN',requestQuote:'Nhận báo giá ↗',
      projectKicker:'TRƯNG BÀY MẪU',projectTitle:'DỰ ÁN <span class="gold-text">TIÊU BIỂU</span>',projectSub:'Các thẻ bên dưới là dự án minh họa. Thay nội dung bằng sản phẩm thực tế của bạn.',project1:'Bộ nhận diện Gaming',project2:'Bot quản lý cộng đồng',project3:'Bộ công cụ tối ưu PC',
      aboutKicker:'VỀ CHÚNG TÔI',aboutTitle:'ĐAM MÊ <span class="gold-text">CÔNG NGHỆ</span><br />KẾT NỐI GAME THỦ',aboutText:'RPV MODS là thương hiệu mẫu dành cho cộng đồng yêu công nghệ và gaming. Website này được thiết kế để bạn dễ dàng thay tên thương hiệu, nội dung, dịch vụ và đường dẫn cộng đồng theo nhu cầu.',contactNow:'Liên hệ ngay ↗',
      contactKicker:'KẾT NỐI VỚI CHÚNG TÔI',contactTitle:'SẴN SÀNG <span class="gold-text">BẮT ĐẦU?</span>',contactDesc:'Liên hệ qua Discord hoặc email để trao đổi về nhu cầu của bạn.',sendEmail:'Gửi email',copyright:'Bảo lưu mọi quyền.',backTop:'Về đầu trang ↑',settingsTitle:'Tùy chỉnh hiển thị',particlesSetting:'Hiệu ứng hạt',settingsNote:'Cài đặt chỉ lưu trên trình duyệt này.',
      musicOff:'Bật nhạc',musicOn:'Tắt nhạc',musicError:'Không phát được nhạc. Kiểm tra âm lượng và file assets/background-music.mp3.',
      noDiscord:'Hãy thêm link Discord vào config.js (discordUrl).',noEmail:'Hãy thêm email liên hệ vào config.js (email).'
    },
    en: {
      navHome:'Home',navServices:'Services',navPricing:'Pricing',navProjects:'Projects',navAbout:'Info',
      eyebrow:'GAMING • TECHNOLOGY • COMMUNITY',heroLine1:'WELCOME',heroLine2:'TO',
      heroDescription:'Welcome to RPV MODS — your destination for gaming and technology solutions. We help with PC performance, Discord communities, visual branding, and custom automation bots.',
      joinDiscord:'Join Discord',explore:'Explore services',metaText:'Built for the Vietnamese gaming community',scroll:'SCROLL TO EXPLORE',
      servicesKicker:'SERVICE CATEGORIES',servicesTitle:'FEATURED <span class="gold-text">SERVICES</span>',servicesSub:'Gaming-styled service cards designed around the offers you want to show on your website.',
      service1Badge:'FEATURED',service1Type:'CUSTOM DISCORD',service1Title:'Custom Discord',service1Desc:'Custom Discord server design with channels, roles, security, ticket systems, shop sections, and utility bots.',service1Tag1:'Roles & Bots',service1Tag2:'Ticket Shop',service1Tag3:'Branding',service1Price:'150k - 500k',
      service2Badge:'TRENDING',service2Type:'DISCORD SETUP',service2Title:'Setup Discord',service2Desc:'Complete Discord setup from scratch: channels, roles, welcome flow, verification, tickets, and a clean layout.',service2Tag1:'Welcome',service2Tag2:'Verify',service2Tag3:'Tickets',service2Price:'50k - 200k',
      service3Badge:'HOT',service3Type:'SOCIAL MEDIA',service3Title:'Social Media Services',service3Desc:'Content support, design, and growth services for Facebook, TikTok, and Instagram to boost brand presence.',service3Tag1:'Facebook',service3Tag2:'TikTok',service3Tag3:'Content',service3Price:'80k - 350k',
      service4Badge:'PERFORMANCE',service4Type:'PC OPTIMIZATION',service4Title:'PC Optimization',service4Desc:'Windows optimization for gaming and work: cleanup, fewer background tasks, FPS boost, lower input lag, and better stability.',service4Tag1:'FPS Boost',service4Tag2:'Clean System',service4Tag3:'Gaming',service4Price:'100k - 300k',servicePriceNote:'depending on the package',serviceCardBtn:'Contact Now',
      pricingKicker:'SERVICE PACKAGES',pricingTitle:'OUR <span class="gold-text">PRICING</span>',pricingSub:'These are sample packages without published prices. Replace with your actual offers.',
      plan1Name:'Starter',plan1Desc:'For smaller needs',contactPrice:'Contact us',plan1F1:'Needs consultation',plan1F2:'Basic setup',plan1F3:'Discord support',
      plan2Name:'Advanced',plan2Desc:'For gamers and communities',plan2F1:'Personal consultation',plan2F2:'Advanced customization',plan2F3:'Usage guidance',
      plan3Name:'Custom',plan3Desc:'Tailored to your project',plan3F1:'Custom scope',plan3F2:'On-brand design',plan3F3:'Agreed support terms',popular:'POPULAR',requestQuote:'Get a quote ↗',
      projectKicker:'SAMPLE SHOWCASE',projectTitle:'FEATURED <span class="gold-text">PROJECTS</span>',projectSub:'These are demo project cards. Replace them with your real work.',project1:'Gaming Visual Identity',project2:'Community Management Bot',project3:'PC Optimization Toolkit',
      aboutKicker:'ABOUT US',aboutTitle:'PASSION FOR <span class="gold-text">TECH</span><br />CONNECTED BY GAMING',aboutText:'RPV MODS is a sample brand for technology and gaming enthusiasts. You can easily customize this website’s brand, content, services, and community links.',contactNow:'Contact us ↗',
      contactKicker:'GET IN TOUCH',contactTitle:'READY TO <span class="gold-text">START?</span>',contactDesc:'Reach out via Discord or email to discuss your needs.',sendEmail:'Send email',copyright:'All rights reserved.',backTop:'Back to top ↑',settingsTitle:'Display settings',particlesSetting:'Particle effects',settingsNote:'Settings are saved in this browser only.',
      musicOff:'Play music',musicOn:'Pause music',musicError:'Cannot play audio. Check the audio file in the assets folder.',
      noDiscord:'Add your invite URL to config.js (discordUrl).',noEmail:'Add your email address to config.js (email).'
    }
  };
  let lang = 'vi';
  try { lang = localStorage.getItem('rpvmods-lang') === 'en' ? 'en' : 'vi'; } catch (_) {}
  const brand = String(config.brandName || 'RPV MODS').trim().slice(0, 50);
  $$('[data-brand]').forEach(el => { el.textContent = brand.toUpperCase(); });
  document.title = brand + ' | Gaming & Technology';
  const notify = (message) => {
    const el = $('#toast'); if (!el) return;
    el.textContent = message; el.classList.add('visible');
    clearTimeout(notify.timer); notify.timer = setTimeout(() => el.classList.remove('visible'), 3400);
  };
  const setLanguage = (next) => {
    lang = next; document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(el => {
      const value = dictionary[lang][el.dataset.i18n];
      if (!value) return;
      // Only markup in our own constant translation strings is inserted.
      if (value.includes('<span') || value.includes('<br')) el.innerHTML = value;
      else el.textContent = value;
    });
    $$('[data-lang-choice]').forEach(el => {
      el.classList.toggle('lang-badge', el.dataset.langChoice === lang);
      el.setAttribute('aria-pressed', el.dataset.langChoice === lang ? 'true' : 'false');
    });
    const musicLabel = $('#musicLabel'); if (musicLabel) musicLabel.textContent = dictionary[lang][musicLabel.dataset.musicPlaying === 'true' ? 'musicOn' : 'musicOff'];
    try { localStorage.setItem('rpvmods-lang', lang); } catch (_) {}
  };
  $$('[data-lang-choice]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.langChoice));
  });
  setLanguage(lang);
  // Explicit click-to-play; browsers do not allow unprompted audio autoplay.
  const audio = $('#backgroundMusic');
  const musicBtn = $('#musicToggle'); const musicLabel = $('#musicLabel');
  audio.volume = 0.35;
  $('#musicVolume').addEventListener('input', e => {audio.volume = Number(e.target.value) / 100;});
  const syncMusic = () => {
    const playing = !audio.paused;
    musicLabel.dataset.musicPlaying = String(playing);
    musicLabel.textContent = dictionary[lang][playing ? 'musicOn' : 'musicOff'];
    musicBtn.setAttribute('aria-pressed', String(playing));
    musicBtn.setAttribute('aria-label', dictionary[lang][playing ? 'musicOn' : 'musicOff']);
    musicBtn.textContent = playing ? 'Ⅱ' : '♫';
  };
  const toggleMusic = async () => {
    if (!audio.paused) { audio.pause(); syncMusic(); return; }
    try { await audio.play(); } catch (_) { notify(dictionary[lang].musicError); }
    syncMusic();
  };
  musicBtn.addEventListener('click', toggleMusic);
  musicLabel.addEventListener('click', toggleMusic);
  audio.addEventListener('play', syncMusic);
  audio.addEventListener('pause', syncMusic);
  audio.addEventListener('error', () => notify(dictionary[lang].musicError));
  syncMusic();
  // Set real hyperlink destinations so links still work if JavaScript stops.
  const discordUrl = String(config.discordUrl || 'https://discord.gg/rpvmods').trim();
  $$('[data-discord]').forEach(a => {
    a.href = discordUrl; a.target = '_blank'; a.rel = 'noopener noreferrer';
  });
  const contactEmail = String(config.email || 'Phambao8ng@Gmail.com').trim();
  $('#emailLink').href = `mailto:${contactEmail}?subject=${encodeURIComponent('Liên hệ ' + brand)}`;
  $('#year').textContent = String(new Date().getFullYear());
  const menu = $('#mobileNav'); const menuToggle = $('#menuToggle');
  const closeMenu = () => { menu.hidden = true; menuToggle.setAttribute('aria-expanded', 'false'); };
  menuToggle.addEventListener('click', () => { menu.hidden = !menu.hidden; menuToggle.setAttribute('aria-expanded', String(!menu.hidden)); });
  $$('#mobileNav a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); $('#settingsPanel').hidden = true; $('#settingsToggle').setAttribute('aria-expanded','false'); } });
  const settings = $('#settingsPanel');
  $('#settingsToggle').addEventListener('click', () => { settings.hidden = !settings.hidden; $('#settingsToggle').setAttribute('aria-expanded', String(!settings.hidden)); });
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries, obs) => { entries.forEach(e => { if(e.isIntersecting) {e.target.classList.add('visible');obs.unobserve(e.target);} }); }, {threshold:.08}) : null;
  $$('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));
  const navLinks = $$('.desktop-nav [data-nav]');
  const sections = ['home','services','pricing','projects','about'].map(id => document.getElementById(id));
  // Native fragment links work even when JavaScript or animations fail.
  $$('.desktop-nav a[href^="#"], .mobile-nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      navLinks.forEach(nav => nav.classList.toggle('active', nav.dataset.nav === id));
    });
  });
  const activeNav = () => {
    let current = 'home';
    for (const section of sections) if (section && section.getBoundingClientRect().top <= 170) current = section.id;
    navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === current));
  };
  document.addEventListener('scroll', activeNav, {passive:true}); activeNav();
  // Lightweight canvas stars, designed to work without third-party libraries.
  const canvas = $('#particles'); const ctx = canvas && canvas.getContext('2d');
  if (!ctx) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let enabled = !prefersReducedMotion.matches;
  try { if (localStorage.getItem('ef-particles') !== null) enabled = localStorage.getItem('ef-particles') === 'true'; } catch (_) {}
  const toggle = $('#particlesToggle'); toggle.checked = enabled;
  let particles = [], width = 0, height = 0, raf = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count = Math.min(100, Math.floor(width * height / 13500));
    particles = Array.from({length:count}, () => ({x:Math.random()*width,y:Math.random()*height,r:.5+Math.random()*1.2,speed:.05+Math.random()*.22,alpha:.14+Math.random()*.45,gold:Math.random()>.83}));
  };
  const render = () => {
    ctx.clearRect(0,0,width,height);
    if (!enabled || document.hidden) {raf=0;return;}
    particles.forEach(p => {
      p.y -= p.speed; if(p.y < -5){p.y=height+5;p.x=Math.random()*width;}
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.gold?`rgba(184,110,255,${p.alpha})`:`rgba(200,210,243,${p.alpha})`;ctx.fill();
    });
    raf=requestAnimationFrame(render);
  };
  const updateParticles = () => {
    canvas.style.display = enabled ? 'block' : 'none';
    if(raf){cancelAnimationFrame(raf);raf=0;}
    if(enabled)render();
  };
  toggle.addEventListener('change', () => {enabled=toggle.checked;try{localStorage.setItem('ef-particles',String(enabled));}catch(_){}updateParticles();});
  window.addEventListener('resize', () => {resize();updateParticles();}, {passive:true});
  document.addEventListener('visibilitychange',updateParticles);
  resize();updateParticles();
})();
