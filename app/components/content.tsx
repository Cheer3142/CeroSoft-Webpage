import type { ReactNode } from 'react';

export type Lang = 'en' | 'th';

export const sheetIds = ['problem', 'services', 'condomate', 'process', 'about', 'contact'] as const;
export type SheetId = (typeof sheetIds)[number];

type Step = { n: string; title: string; text: string };
type Service = { code: string; title: string; text: string; items: string };
type Callout = { y: number; label: string };
type Screen = { src: string; w: number; h: number; title: string; text: string; callouts: Callout[] };
type Note = { title: string; text: string };

type Copy = {
  skip: string;
  menu: string;
  langLabel: string;
  talk: string;
  sheets: Record<SheetId, { no: string; title: string }>;
  hero: {
    sheetTitle: string;
    title: ReactNode;
    text: string;
    primary: string;
    secondary: string;
    plan: { excel: string; line: string; paper: string; reentry: string; friction: string; system: string; live: string; asis: string; asbuilt: string };
  };
  problem: { title: ReactNode; text: string; close: string; steps: Step[] };
  legacy: { words: string[]; title: string; text: string; cta: string; legendOld: string; legendNew: string };
  services: { title: ReactNode; text: string; head: [string, string, string, string]; rows: Service[] };
  condo: {
    title: string;
    sub: string;
    text: string;
    live: string;
    resident: string;
    management: string;
    note: string;
    stageTitle: string;
    screens: Screen[];
    more: string;
    moreScreens: { src: string; title: string }[];
    console: { title: string; text: string; items: { name: string; title: string; text: string }[] };
    legend: string;
    features: string[];
    cta: string;
  };
  process: { title: ReactNode; text: string; steps: Step[]; liveNote: string };
  about: { title: ReactNode; text: string; notesTitle: string; notes: Note[] };
  contact: {
    title: ReactNode;
    text: string;
    next: string;
    formTitle: string;
    fields: [string, string, string, string, string, string];
    optional: string;
    select: string;
    interests: string[];
    send: string;
    sending: string;
    success: string;
    invalid: string;
    failed: string;
    honeypot: string;
  };
  footer: { tagline: string; line: string; index: string; online: string; city: string; drawn: string };
};

const screensEn: Screen[] = [
  { src: '/portfolio/condomate-resident-dashboard.png', w: 390, h: 1105, title: 'Resident dashboard', text: 'A focused home for announcements, parcels, maintenance, and daily tasks.', callouts: [{ y: 29, label: 'Parcels waiting and open repairs, counted for the room' }, { y: 56, label: 'Latest announcement from the office' }, { y: 83, label: 'Quick actions for daily tasks' }] },
  { src: '/portfolio/condomate-resident-repairs.png', w: 390, h: 844, title: 'Maintenance workflow', text: 'Residents submit, track, and review repair requests in one place.', callouts: [{ y: 25, label: 'Status: received · in progress · done' }, { y: 31, label: 'New request in one tap' }, { y: 46, label: 'Every job gets a reference number' }] },
  { src: '/portfolio/condomate-resident-parcels.png', w: 390, h: 844, title: 'Parcel tracking', text: 'Residents can check deliveries and pickup details.', callouts: [{ y: 25, label: 'Waiting or collected' }, { y: 40, label: 'Carrier and tracking number' }] },
  { src: '/portfolio/condomate-resident-booking.png', w: 390, h: 844, title: 'Shared-space booking', text: 'Clear availability, capacity checks, and time-slot requests.', callouts: [{ y: 13, label: 'Book a shared space by the hour' }, { y: 25, label: 'Pending · approved · cancelled' }, { y: 50, label: 'A clear empty state, not a blank page' }] },
  { src: '/portfolio/condomate-resident-finance.png', w: 390, h: 844, title: 'Resident finance', text: 'Payment information and financial activity in one place.', callouts: [{ y: 19, label: 'Bank account and QR for payment' }, { y: 32, label: 'Send proof of payment' }, { y: 49, label: 'Amount and due date per item' }] },
];

const screensTh: Screen[] = [
  { src: '/portfolio/condomate-resident-dashboard.png', w: 390, h: 1105, title: 'แดชบอร์ดลูกบ้าน', text: 'รวมประกาศ พัสดุ งานแจ้งซ่อม และบริการประจำวันไว้ในที่เดียว', callouts: [{ y: 29, label: 'พัสดุรอรับและงานแจ้งซ่อมของห้อง นับให้อัตโนมัติ' }, { y: 56, label: 'ประกาศล่าสุดจากนิติบุคคล' }, { y: 83, label: 'ทางลัดสำหรับงานประจำวัน' }] },
  { src: '/portfolio/condomate-resident-repairs.png', w: 390, h: 844, title: 'ระบบแจ้งซ่อม', text: 'แจ้งเรื่อง ติดตามความคืบหน้า และตรวจสอบสถานะงานซ่อมได้ในที่เดียว', callouts: [{ y: 25, label: 'สถานะ: รอรับงาน · กำลังดำเนินการ · เสร็จสิ้น' }, { y: 31, label: 'แจ้งซ่อมใหม่ได้ในแตะเดียว' }, { y: 46, label: 'ทุกงานมีเลขอ้างอิง' }] },
  { src: '/portfolio/condomate-resident-parcels.png', w: 390, h: 844, title: 'ติดตามพัสดุ', text: 'ตรวจสอบพัสดุและรายละเอียดการรับได้สะดวก', callouts: [{ y: 25, label: 'รอรับหรือรับแล้ว' }, { y: 40, label: 'ผู้ให้บริการและเลขพัสดุ' }] },
  { src: '/portfolio/condomate-resident-booking.png', w: 390, h: 844, title: 'ระบบจองพื้นที่ส่วนกลาง', text: 'ตรวจสอบช่วงเวลาว่าง จำนวนผู้ใช้ และความจุของพื้นที่ได้อย่างชัดเจน', callouts: [{ y: 13, label: 'จองพื้นที่เป็นรอบ รอบละ 1 ชั่วโมง' }, { y: 25, label: 'รออนุมัติ · อนุมัติแล้ว · ยกเลิกแล้ว' }, { y: 50, label: 'แจ้งชัดเมื่อยังไม่มีรายการ' }] },
  { src: '/portfolio/condomate-resident-finance.png', w: 390, h: 844, title: 'การเงินลูกบ้าน', text: 'ดูข้อมูลชำระเงินและรายการทางการเงินในที่เดียว', callouts: [{ y: 19, label: 'บัญชีรับเงินและ QR สำหรับชำระ' }, { y: 32, label: 'แจ้งชำระพร้อมหลักฐาน' }, { y: 49, label: 'ยอดเงินและวันครบกำหนดแต่ละรายการ' }] },
];

export const copy: Record<Lang, Copy> = {
  en: {
    skip: 'Skip to content',
    menu: 'Sheet index',
    langLabel: 'อ่านภาษาไทย',
    talk: 'Talk to us',
    sheets: {
      problem: { no: 'A-01', title: 'Problem first' },
      services: { no: 'A-02', title: 'Services' },
      condomate: { no: 'A-03', title: 'CondoMate' },
      process: { no: 'A-04', title: 'How we work' },
      about: { no: 'A-05', title: 'About' },
      contact: { no: 'A-06', title: 'Contact' },
    },
    hero: {
      sheetTitle: 'From zero to solution',
      title: <><span className="h1-line">From Zero</span><span className="h1-line h1-strong">to Solution.</span></>,
      text: 'We begin with the business problem—not a preferred technology. Then we design software that makes the work simpler, clearer, and ready to scale.',
      primary: 'Talk to us',
      secondary: 'See CondoMate',
      plan: { excel: 'Excel', line: 'LINE chats', paper: 'Paper forms', reentry: 'typed again ×3', friction: 'friction', system: 'One system', live: 'live', asis: 'As-is', asbuilt: 'As-built' },
    },
    problem: {
      title: <>Before we write code,<br />we read the work.</>,
      text: 'Most software problems are not really software problems. They are disconnected steps, repeated data entry, unclear ownership, and information trapped between people and tools.',
      close: 'We map the reality first. Then we remove friction with the smallest system that can create meaningful change.',
      steps: [
        { n: '01', title: 'Observe', text: 'How work actually moves—not how it is supposed to.' },
        { n: '02', title: 'Find the friction', text: 'Where time, data, and responsibility fall between tools.' },
        { n: '03', title: 'Define the outcome', text: 'What should become faster, clearer, or more dependable.' },
        { n: '04', title: 'Build the system', text: 'Only then do we choose the right architecture and technology.' },
      ],
    },
    legacy: {
      words: ['Excel.', 'Chats.', 'Paper.', 'Re-entry.'],
      title: 'A familiar starting point',
      text: 'Fragmented tools are often a sign that the business has outgrown its current workflow—not that the team is doing something wrong.',
      cta: 'Tell us what is not working',
      legendOld: 'Dashed: how the work runs today',
      legendNew: 'Solid: the system we build',
    },
    services: {
      title: <>One partner.<br />The whole system.</>,
      text: 'Strategy, design, engineering, integration, and long-term care—connected by one understanding of your business.',
      head: ['Code', 'Service', 'What it does', 'Includes'],
      rows: [
        { code: 'S-01', title: 'Custom Software', text: 'Web applications and internal systems built around the way your team works.', items: 'Web applications · Internal management systems · Business management systems' },
        { code: 'S-02', title: 'Business Automation', text: 'Reduce repeated work and turn manual steps into clear workflows.', items: 'Workflow automation · Data processing · Reporting and dashboards' },
        { code: 'S-03', title: 'Web Solutions', text: 'Corporate sites, portals, and online services with purpose and clarity.', items: 'Corporate websites · Customer portals · Online services' },
        { code: 'S-04', title: 'System Integration', text: 'Connect APIs, databases, existing tools, and operational data.', items: 'API integration · Database integration · Existing-system integration' },
        { code: 'S-05', title: 'Support & Maintenance', text: 'Monitoring, backup, updates, and ongoing technical care.', items: 'Monitoring · Backup · Updates · Technical support' },
      ],
    },
    condo: {
      title: 'CondoMate',
      sub: 'Condominium Management System',
      text: 'A real operational platform for condominium management teams and residents. CondoMate brings maintenance, parcels, shared-space booking, announcements, finance, accounts, and reporting into one connected workflow.',
      live: 'Live product environment',
      resident: 'Resident experience',
      management: 'Management console',
      note: 'Illustrative screen mockups of the CondoMate experience at Punna Residence 5, shown with test data.',
      stageTitle: 'One operational system. Two clear experiences.',
      screens: screensEn,
      more: 'More resident screens',
      moreScreens: [
        { src: '/portfolio/condomate-resident-announcements.png', title: 'Announcements' },
        { src: '/portfolio/condomate-resident-my-room.png', title: 'My room' },
        { src: '/portfolio/condomate-resident-payment-info.png', title: 'Payment details' },
        { src: '/portfolio/condomate-resident-juristic-info.png', title: 'Juristic information' },
        { src: '/portfolio/condomate-resident-phone-directory.png', title: 'Phone directory' },
      ],
      console: {
        title: 'Management console',
        text: 'The juristic office runs the same data from a desktop console.',
        items: [
          { name: 'finance', title: 'Finance workspace', text: 'Manage condominium income and expenses in one workflow.' },
          { name: 'report', title: 'Financial reports', text: 'Review daily totals, transactions, and printable reports.' },
        ],
      },
      legend: 'Connected in one system',
      features: ['Resident management', 'Maintenance requests', 'Parcel tracking', 'Shared-space booking', 'Announcements', 'Finance and accounting', 'Reporting', 'Admin tools', 'Audit logs'],
      cta: 'Discuss a similar system',
    },
    process: {
      title: <>Zero assumptions.<br />Five clear stages.</>,
      text: 'We do not begin with a predetermined technology. A clear five-stage process helps us discover, shape, and deliver the solution that fits your business.',
      steps: [
        { n: '01', title: 'Understand', text: 'Understand the business, users, and workflow.' },
        { n: '02', title: 'Define', text: 'Define scope, requirements, and priorities.' },
        { n: '03', title: 'Design', text: 'Design the system and user experience.' },
        { n: '04', title: 'Build', text: 'Develop, test, and iterate.' },
        { n: '05', title: 'Support', text: 'Deploy, maintain, and improve.' },
      ],
      liveNote: 'Support continues after launch',
    },
    about: {
      title: <>Technology should solve problems,<br />not create new ones.</>,
      text: 'CeroSoft combines software engineering with an understanding of business operations. We translate complex workflows into systems that people can actually use, maintain, and trust.',
      notesTitle: 'General notes',
      notes: [
        { title: 'Mission', text: 'Make technology simpler and more accessible through practical software that solves real-world problems.' },
        { title: 'Vision', text: 'Become the trusted technology partner for businesses seeking practical and sustainable digital systems.' },
        { title: 'Simple', text: 'Complex behind. Simple in front.' },
        { title: 'Practical', text: 'Build what matters.' },
        { title: 'Reliable', text: 'Software you can depend on.' },
        { title: 'Adaptable', text: 'Built around your workflow.' },
        { title: 'Transparent', text: 'Clear technology. Clear communication.' },
      ],
    },
    contact: {
      title: <>Bring us the problem.<br />We’ll find the path.</>,
      text: 'You do not need a technical specification. Show us how the work happens today and what needs to improve.',
      next: 'We listen first, map the workflow, and recommend a practical next step.',
      formTitle: 'Project request',
      fields: ['Name', 'Company / Organization', 'Email', 'Phone', 'What do you want to improve?', 'Message'],
      optional: 'optional',
      select: 'Select a topic',
      interests: ['Custom Software', 'Business Automation', 'Web Solutions', 'System Integration', 'Support & Maintenance'],
      send: 'Start a conversation',
      sending: 'Sending…',
      success: 'Thank you. Your message has been sent. We’ll be in touch soon.',
      invalid: 'Please fill in the required fields and check the email format.',
      failed: 'Message could not be sent. Please try again or email info@cerosoft.net.',
      honeypot: 'Leave this field empty',
    },
    footer: { tagline: 'From Zero to Solution.', line: 'Simple Software. Real Solutions.', index: 'Sheet index', online: 'Online', city: 'Thailand', drawn: 'Drawn and built in Thailand' },
  },
  th: {
    skip: 'ข้ามไปยังเนื้อหา',
    menu: 'สารบัญแผ่นงาน',
    langLabel: 'Read in English',
    talk: 'ปรึกษาเรา',
    sheets: {
      problem: { no: 'A-01', title: 'เริ่มที่ปัญหา' },
      services: { no: 'A-02', title: 'บริการ' },
      condomate: { no: 'A-03', title: 'ผลงาน CondoMate' },
      process: { no: 'A-04', title: 'ขั้นตอนการทำงาน' },
      about: { no: 'A-05', title: 'รู้จักเรา' },
      contact: { no: 'A-06', title: 'ติดต่อเรา' },
    },
    hero: {
      sheetTitle: 'เริ่มจากศูนย์ สู่โซลูชัน',
      title: <><span className="h1-line">เริ่มจากศูนย์</span><span className="h1-line h1-strong">สู่โซลูชันที่ใช่</span></>,
      text: 'เราเริ่มจากโจทย์ของธุรกิจ ไม่ได้เริ่มจากการเลือกเทคโนโลยี เราทำความเข้าใจปัญหาและวิธีทำงานของคุณอย่างรอบด้าน ก่อนออกแบบซอฟต์แวร์ที่ช่วยให้งานง่ายขึ้น เป็นระบบขึ้น และพร้อมเติบโตไปพร้อมกับธุรกิจ',
      primary: 'ปรึกษาเรา',
      secondary: 'ดูผลงาน CondoMate',
      plan: { excel: 'Excel', line: 'แชต LINE', paper: 'เอกสารกระดาษ', reentry: 'กรอกซ้ำ ×3', friction: 'จุดติดขัด', system: 'ระบบเดียว', live: 'ใช้งานจริง', asis: 'งานวันนี้', asbuilt: 'หลังมีระบบ' },
    },
    problem: {
      title: <>ก่อนเขียนโค้ด<br /><span className="nowrap">เราทำความเข้าใจหน้างาน</span></>,
      text: 'ปัญหาที่ดูเหมือนเป็นเรื่องซอฟต์แวร์ หลายครั้งเกิดจากขั้นตอนที่ไม่เชื่อมต่อกัน การกรอกข้อมูลซ้ำ หน้าที่รับผิดชอบที่ไม่ชัดเจน หรือข้อมูลที่กระจัดกระจายอยู่ในหลายเครื่องมือ',
      close: 'เราจึงเริ่มจากการทำความเข้าใจงานจริงและค้นหาจุดติดขัด ก่อนออกแบบระบบที่พอดีกับธุรกิจและสร้างความเปลี่ยนแปลงได้จริง',
      steps: [
        { n: '01', title: 'ดูงานจริง', text: 'ทำความเข้าใจว่างานดำเนินไปอย่างไรในแต่ละวัน ไม่ใช่แค่ภาพที่ควรจะเป็น' },
        { n: '02', title: 'หาจุดติดขัด', text: 'ค้นหาจุดที่ทำให้เวลา ข้อมูล หรือความรับผิดชอบขาดช่วงระหว่างการทำงาน' },
        { n: '03', title: 'กำหนดเป้าหมาย', text: 'ระบุให้ชัดว่าอะไรควรเร็วขึ้น ง่ายขึ้น หรือเชื่อถือได้มากขึ้น' },
        { n: '04', title: 'ออกแบบระบบ', text: 'จากนั้นจึงเลือกโครงสร้างและเทคโนโลยีที่เหมาะกับโจทย์' },
      ],
    },
    legacy: {
      words: ['Excel', 'แชต', 'เอกสาร', 'กรอกซ้ำ'],
      title: 'จุดเริ่มต้นที่หลายธุรกิจคุ้นเคย',
      text: 'เมื่อธุรกิจเติบโต เครื่องมือและวิธีทำงานเดิมอาจเริ่มตามไม่ทัน ไม่ใช่เพราะทีมทำงานผิด แต่เพราะระบบเดิมไม่ได้ถูกออกแบบมาให้รองรับธุรกิจในวันนี้',
      cta: 'เล่าให้เราฟังว่าอะไรยังติดขัด',
      legendOld: 'เส้นประ: วิธีทำงานวันนี้',
      legendNew: 'เส้นทึบ: ระบบที่เราสร้าง',
    },
    services: {
      title: <><span className="nowrap">พาร์ตเนอร์หนึ่งเดียว</span><br />ดูแลครบทั้งระบบ</>,
      text: 'ตั้งแต่วางกลยุทธ์ ออกแบบ พัฒนา และเชื่อมต่อระบบ ไปจนถึงการดูแลระยะยาว ทุกขั้นตอนต่อเนื่องด้วยความเข้าใจธุรกิจชุดเดียวกัน',
      head: ['รหัส', 'บริการ', 'ช่วยอะไร', 'ครอบคลุม'],
      rows: [
        { code: 'S-01', title: 'ซอฟต์แวร์เฉพาะธุรกิจ', text: 'เว็บแอปและระบบภายในที่ออกแบบให้สอดคล้องกับวิธีทำงานของทีมคุณ', items: 'เว็บแอป · ระบบจัดการภายใน · ระบบบริหารธุรกิจ' },
        { code: 'S-02', title: 'ระบบงานอัตโนมัติ', text: 'ลดงานซ้ำซ้อน และเปลี่ยนขั้นตอนที่ต้องทำด้วยมือให้เป็นระบบที่ชัดเจน', items: 'ระบบงานอัตโนมัติ · ประมวลผลข้อมูล · รายงานและแดชบอร์ด' },
        { code: 'S-03', title: 'โซลูชันเว็บไซต์', text: 'เว็บไซต์องค์กร พอร์ทัล และบริการออนไลน์ที่ออกแบบอย่างตรงจุด', items: 'เว็บไซต์องค์กร · พอร์ทัลลูกค้า · บริการออนไลน์' },
        { code: 'S-04', title: 'การเชื่อมต่อระบบ', text: 'เชื่อมต่อ API ฐานข้อมูล เครื่องมือเดิม และข้อมูลจากการทำงานจริง', items: 'เชื่อมต่อ API · เชื่อมต่อฐานข้อมูล · เชื่อมต่อระบบเดิม' },
        { code: 'S-05', title: 'ดูแลและบำรุงรักษา', text: 'เฝ้าระวังระบบ สำรองข้อมูล อัปเดต และให้คำปรึกษาด้านเทคนิคอย่างต่อเนื่อง', items: 'เฝ้าระวังระบบ · สำรองข้อมูล · อัปเดต · สนับสนุนด้านเทคนิค' },
      ],
    },
    condo: {
      title: 'CondoMate',
      sub: 'ระบบบริหารจัดการคอนโดมิเนียม',
      text: 'แพลตฟอร์มที่พัฒนาขึ้นเพื่อการใช้งานจริงของนิติบุคคลและลูกบ้าน เชื่อมงานแจ้งซ่อม รับพัสดุ จองพื้นที่ส่วนกลาง ประกาศ การเงิน บัญชี และรายงานไว้ในระบบเดียว',
      live: 'ใช้งานจริงแล้ว',
      resident: 'สำหรับลูกบ้าน',
      management: 'สำหรับนิติบุคคล',
      note: 'ภาพจำลองหน้าจอการใช้งาน CondoMate สำหรับ Punna Residence 5 แสดงด้วยข้อมูลทดสอบ',
      stageTitle: 'ระบบเดียว ใช้งานลงตัวทั้งลูกบ้านและนิติบุคคล',
      screens: screensTh,
      more: 'หน้าจออื่นสำหรับลูกบ้าน',
      moreScreens: [
        { src: '/portfolio/condomate-resident-announcements.png', title: 'ประกาศข่าวสาร' },
        { src: '/portfolio/condomate-resident-my-room.png', title: 'ห้องของฉัน' },
        { src: '/portfolio/condomate-resident-payment-info.png', title: 'รายละเอียดการชำระเงิน' },
        { src: '/portfolio/condomate-resident-juristic-info.png', title: 'ข้อมูลนิติบุคคล' },
        { src: '/portfolio/condomate-resident-phone-directory.png', title: 'สมุดโทรศัพท์' },
      ],
      console: {
        title: 'ระบบสำหรับนิติบุคคล',
        text: 'สำนักงานนิติบุคคลใช้ข้อมูลชุดเดียวกันผ่านหน้าจอบนคอมพิวเตอร์',
        items: [
          { name: 'finance', title: 'งานการเงิน', text: 'จัดการรายรับและรายจ่ายของคอนโดในขั้นตอนเดียว' },
          { name: 'report', title: 'รายงานการเงิน', text: 'ดูยอดประจำวัน รายการธุรกรรม และรายงานสำหรับพิมพ์' },
        ],
      },
      legend: 'เชื่อมต่อกันในระบบเดียว',
      features: ['จัดการข้อมูลลูกบ้าน', 'งานแจ้งซ่อม', 'ติดตามพัสดุ', 'จองพื้นที่ส่วนกลาง', 'ประกาศข่าวสาร', 'การเงินและบัญชี', 'รายงาน', 'เครื่องมือผู้ดูแล', 'บันทึกการใช้งาน'],
      cta: 'ปรึกษาเรื่องระบบแบบนี้',
    },
    process: {
      title: <>ไม่ด่วนสรุป<br /><span className="nowrap">ค่อย ๆ หาคำตอบที่ใช่</span></>,
      text: 'เราไม่กำหนดเทคโนโลยีไว้ล่วงหน้า แต่ใช้กระบวนการทำงาน 5 ขั้นตอนเพื่อทำความเข้าใจ กำหนดทิศทาง และพัฒนาโซลูชันที่เหมาะกับธุรกิจของคุณจริง ๆ',
      steps: [
        { n: '01', title: 'เข้าใจ', text: 'เข้าใจธุรกิจ ผู้ใช้ และวิธีทำงาน' },
        { n: '02', title: 'กำหนด', text: 'กำหนดขอบเขต ความต้องการ และลำดับความสำคัญ' },
        { n: '03', title: 'ออกแบบ', text: 'ออกแบบระบบและประสบการณ์การใช้งาน' },
        { n: '04', title: 'พัฒนา', text: 'พัฒนา ทดสอบ และปรับปรุง' },
        { n: '05', title: 'ดูแล', text: 'ติดตั้ง ดูแล และพัฒนาต่อ' },
      ],
      liveNote: 'ดูแลต่อเนื่องหลังเปิดใช้งาน',
    },
    about: {
      title: <><span className="nowrap">เทคโนโลยีควรช่วยแก้ปัญหา</span><br />ไม่ใช่เพิ่มปัญหาใหม่</>,
      text: 'CeroSoft ผสานความเชี่ยวชาญด้านวิศวกรรมซอฟต์แวร์เข้ากับความเข้าใจในการดำเนินธุรกิจ เพื่อเปลี่ยนกระบวนการที่ซับซ้อนให้เป็นระบบที่คนใช้งานได้จริง ดูแลต่อได้ และไว้วางใจได้',
      notesTitle: 'หมายเหตุทั่วไป',
      notes: [
        { title: 'พันธกิจ', text: 'ทำให้เทคโนโลยีเป็นเรื่องง่ายและเข้าถึงได้ ผ่านซอฟต์แวร์ที่ตอบโจทย์การใช้งานและแก้ปัญหาได้จริง' },
        { title: 'วิสัยทัศน์', text: 'เป็นพาร์ตเนอร์ด้านเทคโนโลยีที่ธุรกิจไว้วางใจ ในการสร้างระบบดิจิทัลที่ใช้ได้จริงและเติบโตได้อย่างยั่งยืน' },
        { title: 'เรียบง่าย', text: 'ระบบเบื้องหลังอาจซับซ้อน แต่ประสบการณ์ของผู้ใช้ควรง่าย' },
        { title: 'ใช้ได้จริง', text: 'พัฒนาเฉพาะสิ่งที่สร้างคุณค่าและตอบโจทย์การใช้งานจริง' },
        { title: 'เชื่อถือได้', text: 'ออกแบบให้เสถียร ปลอดภัย ดูแลรักษาได้ และมีแนวทางดูแลที่ชัดเจน' },
        { title: 'ยืดหยุ่น', text: 'ระบบควรปรับเข้ากับกระบวนการของธุรกิจ ไม่ใช่บังคับธุรกิจให้เข้ากับระบบ' },
        { title: 'โปร่งใส', text: 'สื่อสารขอบเขต ค่าใช้จ่าย ข้อจำกัด และความสามารถของระบบอย่างชัดเจน' },
      ],
    },
    contact: {
      title: <><span className="nowrap">เริ่มคุยจากปัญหา</span><br /><span className="nowrap">แล้วหาทางไปด้วยกัน</span></>,
      text: 'คุณไม่จำเป็นต้องเตรียมเอกสารสเปก เพียงเล่าให้เราฟังว่าวันนี้งานเป็นอย่างไร และอยากเห็นอะไรดีขึ้น',
      next: 'เราจะรับฟัง ทำความเข้าใจกระบวนการทำงาน และแนะนำขั้นตอนถัดไปที่เหมาะกับธุรกิจของคุณ',
      formTitle: 'แบบฟอร์มขอคำปรึกษา',
      fields: ['ชื่อ', 'บริษัท / องค์กร', 'อีเมล', 'เบอร์โทรศัพท์', 'เรื่องที่อยากปรับปรุง', 'เล่ารายละเอียดเพิ่มเติม'],
      optional: 'ไม่บังคับ',
      select: 'เลือกหัวข้อ',
      interests: ['ซอฟต์แวร์เฉพาะธุรกิจ', 'ระบบงานอัตโนมัติ', 'โซลูชันเว็บไซต์', 'การเชื่อมต่อระบบ', 'ดูแลและบำรุงรักษา'],
      send: 'ส่งข้อความถึงเรา',
      sending: 'กำลังส่ง…',
      success: 'ขอบคุณครับ เราได้รับข้อความแล้ว และจะติดต่อกลับโดยเร็ว',
      invalid: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบ และตรวจสอบรูปแบบอีเมลอีกครั้ง',
      failed: 'ยังส่งข้อความไม่ได้ กรุณาลองอีกครั้ง หรือติดต่อเราทางอีเมล info@cerosoft.net',
      honeypot: 'เว้นช่องนี้ว่างไว้',
    },
    footer: { tagline: 'จากศูนย์ สู่โซลูชันที่ใช่', line: 'ซอฟต์แวร์ที่เรียบง่าย แก้ปัญหาได้จริง', index: 'สารบัญแผ่นงาน', online: 'ช่องทางออนไลน์', city: 'ประเทศไทย', drawn: 'ออกแบบและพัฒนาในประเทศไทย' },
  },
};
