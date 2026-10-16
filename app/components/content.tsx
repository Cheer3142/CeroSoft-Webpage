export type Lang = 'en' | 'th';

export const PHONE = '095-447-0925';
export const PHONE_HREF = 'tel:+66954470925';

export const navIds = ['condomate', 'services', 'process', 'about', 'faq'] as const;
export type NavId = (typeof navIds)[number];

type Step = { n: string; title: string; text: string };
type Path = { key: 'one' | 'few' | 'all'; title: string; text: string; service: string };
type Service = { title: string; text: string; items: string[] };
type Callout = { label: string };
type Screen = { key: 'home' | 'repairs' | 'booking' | 'finance' | 'room'; src: string; w: number; h: number; tag: string; title: string; text: string; callouts: Callout[] };
type Faq = { q: string; a: string };

type Copy = {
  skip: string;
  menu: string;
  langLabel: string;
  talk: string;
  nav: Record<NavId, string>;
  hero: {
    line1: string;
    line2: string;
    text: string;
    primary: string;
    secondary: string;
    markers: { repair: string; parcel: string; booking: string; finance: string };
    canvasLabel: string;
    dataNote: string;
  };
  statement: { text: string; sub: string };
  paths: { title: string; text: string; items: Path[]; cta: string };
  calc: {
    title: string;
    text: string;
    formTitle: string;
    people: string;
    hours: string;
    days: string;
    wage: string;
    unitPeople: string;
    unitHours: string;
    unitDays: string;
    unitWage: string;
    resultTitle: string;
    hoursYear: string;
    costYear: string;
    perYear: string;
    note: string;
    cta: string;
  };
  condo: {
    title: string;
    text: string;
    live: string;
    screens: Screen[];
    note: string;
    demo: string;
    bridge: string;
    console: { title: string; text: string; tabs: { name: string; src: string; w: number; h: number; title: string; text: string }[] };
    features: string[];
    cta: string;
  };
  services: { title: string; text: string; items: Service[] };
  process: { title: string; text: string; steps: Step[] };
  about: { title: string; text: string; mission: [string, string]; vision: [string, string]; valuesTitle: string; values: [string, string][]; founder: { title: string; role: string; name: string; text: string; available: string; experience: { org: string; role: string; when: string }[]; cta: string } };
  faq: { title: string; text: string; items: Faq[] };
  contact: {
    title: string;
    text: string;
    bullets: string[];
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
    callTitle: string;
    callNote: string;
    contactHint: string;
    errors: { name: string; contact: string; email: string; phone: string; interest: string; message: string };
    failedCall: string;
  };
  closing: { title: string; cta: string };
  footer: { tagline: string; line: string; menu: string; services: string; contact: string; city: string; founder: string; call: string };
};

// Real CondoMate Online captures (15 Oct 2026, personal data pixelated), exported from CondoMateV2/docs/manuals/UI/current.
const screen = (key: Screen['key']) => ({ key, src: `/portfolio/v2/resident-${key}.webp`, w: 628, h: 1208 });
const desk = (name: string, h: number) => ({ name, src: `/portfolio/v2/console-${name}.webp`, w: 1600, h });

export const copy: Record<Lang, Copy> = {
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    langLabel: 'อ่านภาษาไทย',
    talk: 'Talk to us',
    nav: { condomate: 'CondoMate', services: 'Services', process: 'How we work', about: 'About', faq: 'FAQ' },
    hero: {
      line1: 'From Zero',
      line2: 'to Solution.',
      text: 'We begin with the business problem—not a preferred technology. Then we design software that makes the work simpler, clearer, and ready to scale.',
      primary: 'Talk to us',
      secondary: 'See CondoMate',
      markers: { repair: 'Room 415 · Repair received', parcel: 'Room 415 · 3 parcels waiting', booking: 'Meeting room · 1-hour slots', finance: 'Room 415 · Paid, receipt issued' },
      canvasLabel: 'Punna Residence 5 drawn as one connected system: repairs, parcels, bookings and finance in one place.',
      dataNote: 'Model of Punna Residence 5. Labels show CondoMate demo data.',
    },
    statement: {
      text: 'Most software problems are not really software problems. They are disconnected steps, repeated data entry, unclear ownership, and information trapped between people and tools.',
      sub: 'Before we write code, we read the work.',
    },
    paths: {
      title: 'Fix one problem today. Grow on your timeline.',
      text: 'We map the reality first. Then we remove friction with the smallest system that can create meaningful change.',
      items: [
        { key: 'one', title: 'One repeated task', text: 'Start with the single step that eats the most time—an Excel sheet, a paper form, a report rebuilt every week.', service: 'Business Automation' },
        { key: 'few', title: 'A few disconnected tools', text: 'Connect the spreadsheets, chats, and systems you already use so data is entered once and flows everywhere.', service: 'System Integration' },
        { key: 'all', title: 'One system for the whole operation', text: 'A system designed around your workflow, for staff and customers, like CondoMate for a condominium.', service: 'Custom Software' },
      ],
      cta: 'Tell us where to start',
    },
    calc: {
      title: 'What is repeated work costing you?',
      text: 'A quick estimate from your own numbers. It shows the time spent today, not a promise of savings.',
      formTitle: 'Tell us about your team',
      people: 'People who re-type or copy data',
      hours: 'Hours per person per day on it',
      days: 'Working days per month',
      wage: 'Average cost per hour',
      unitPeople: 'people',
      unitHours: 'hours',
      unitDays: 'days',
      unitWage: 'THB',
      resultTitle: 'Your team spends on repeated work',
      hoursYear: 'hours a year',
      costYear: 'in labour cost a year',
      perYear: 'per year',
      note: 'Estimate = people × hours × days × 12 months × cost per hour.',
      cta: 'Ask what we can remove',
    },
    condo: {
      title: 'CondoMate: one system for the whole condominium.',
      text: 'A real operational platform for condominium management teams and residents. Maintenance, parcels, shared-space booking, announcements, finance, accounts, and reporting in one connected workflow.',
      live: 'Live at Punna Residence 5',
      screens: [
        { ...screen('home'), tag: 'Resident home', title: 'Everything for the room on one screen', text: 'What is due, parcels waiting, repairs still open, and the next booking, with announcements below.', callouts: [{ label: 'Amount due · View bills' }, { label: 'Parcels · Repairs · Next booking' }] },
        { ...screen('repairs'), tag: 'Maintenance', title: 'Report a repair. Follow it to done.', text: 'Residents submit, track, and review repair requests in one place. Every job gets a reference number.', callouts: [{ label: 'Received · In progress · Done' }, { label: 'Reference number on every job' }] },
        { ...screen('booking'), tag: 'Shared spaces', title: 'Book the meeting room by the hour', text: 'Pick a space, the number of people, the date, and a 1-hour slot. The system checks total capacity before the request goes to the office.', callouts: [{ label: 'Space · People · Date' }, { label: '1-hour slots, capacity checked' }] },
        { ...screen('finance'), tag: 'Finance', title: 'Pay, send the slip, get the receipt', text: 'Every bill shows where it stands: proof sent, office checking, paid. Once confirmed, the receipt can be shared or saved as PDF.', callouts: [{ label: 'Proof sent → Checking → Paid' }, { label: 'Receipt · Share · Save PDF' }] },
        { ...screen('room'), tag: 'My room', title: 'The room and everyone in it', text: 'Residents see their room number and household members, and can copy the address in one tap.', callouts: [{ label: 'Room number · Members' }, { label: 'Copy address' }] },
      ],
      note: 'Real CondoMate screens. All data shown is demo data; other people’s names are blurred.',
      demo: 'Demo data',
      bridge: 'This example is a condominium, but the same approach fits a shop, an office or a factory: start from the real work, then bring it into one system.',
      console: {
        title: 'The office runs the same data from a desktop console.',
        text: 'One operational system. Two clear experiences.',
        tabs: [
          { ...desk('today', 735), title: 'Today', text: 'Pending work, repairs waiting, bookings to approve, and parcels to hand over, at a glance.' },
          { ...desk('parcels', 737), title: 'Parcels', text: 'Log incoming parcels and track pickup status for every room.' },
          { ...desk('reports', 732), title: 'Financial reports', text: 'Monthly income and expenses with a printable daily report.' },
          { ...desk('overdue', 738), title: 'Overdue', text: 'Who still owes what, with collection status at a glance.' },
        ],
      },
      features: ['Resident management', 'Maintenance requests', 'Parcel tracking', 'Shared-space booking', 'Announcements', 'Finance and accounting', 'Reporting', 'Admin tools', 'Audit logs'],
      cta: 'Discuss a similar system',
    },
    services: {
      title: 'One partner. The whole system.',
      text: 'Strategy, design, engineering, integration, and long-term care—connected by one understanding of your business.',
      items: [
        { title: 'Custom Software', text: 'Web applications and internal systems built around the way your team works.', items: ['Web applications', 'Internal management systems', 'Business management systems'] },
        { title: 'Business Automation', text: 'Reduce repeated work and turn manual steps into clear workflows.', items: ['Workflow automation', 'Data processing', 'Reporting and dashboards'] },
        { title: 'Web Solutions', text: 'Corporate sites, portals, and online services with purpose and clarity.', items: ['Corporate websites', 'Customer portals', 'Online services'] },
        { title: 'System Integration', text: 'Connect APIs, databases, existing tools, and operational data.', items: ['API integration', 'Database integration', 'Existing-system integration'] },
        { title: 'Support & Maintenance', text: 'Monitoring, backup, updates, and ongoing technical care.', items: ['Monitoring', 'Backup', 'Updates', 'Technical support'] },
      ],
    },
    process: {
      title: 'Zero assumptions. Five clear stages.',
      text: 'We do not begin with a predetermined technology. A clear five-stage process helps us discover, shape, and deliver the solution that fits your business.',
      steps: [
        { n: '01', title: 'Understand', text: 'Understand the business, users, and workflow.' },
        { n: '02', title: 'Define', text: 'Define scope, requirements, and priorities.' },
        { n: '03', title: 'Design', text: 'Design the system and user experience.' },
        { n: '04', title: 'Build', text: 'Develop, test, and iterate.' },
        { n: '05', title: 'Support', text: 'Deploy, maintain, and improve.' },
      ],
    },
    about: {
      title: 'Technology should solve problems, not create new ones.',
      text: 'CeroSoft combines software engineering with an understanding of business operations. We translate complex workflows into systems that people can actually use, maintain, and trust.',
      mission: ['Mission', 'Make technology simpler and more accessible through practical software that solves real-world problems.'],
      vision: ['Vision', 'Become the trusted technology partner for businesses seeking practical and sustainable digital systems.'],
      founder: {
        title: 'Who builds your system',
        role: 'Founder and Software Developer',
        name: 'Patcharadanai Sombatsatien (Cheer)',
        text: 'Designs and builds CeroSoft systems end to end, from requirements to deployment and support, including CondoMate. The background is engineering work where software has to run reliably on real hardware and production lines.',
        available: 'Taking on new projects, and supporting every system after handover',
        experience: [
          { org: 'CeroSoft', role: 'Founder and Software Developer', when: 'Aug 2026 – present' },
          { org: 'AirGradient', role: 'Embedded Firmware Engineer', when: 'From Nov 2026' },
          { org: 'NARIT · National Astronomical Research Institute of Thailand', role: 'Embedded Software Engineer', when: '2023–2024' },
          { org: 'Hana Microelectronics × Keysight Technologies', role: 'Electrical Test Engineer', when: '2021–2023' },
        ],
        cta: 'Full profile at cheer.cerosoft.net',
      },
      valuesTitle: 'Values',
      values: [['Simple', 'Complex behind. Simple in front.'], ['Practical', 'Build what matters.'], ['Reliable', 'Software you can depend on.'], ['Adaptable', 'Built around your workflow.'], ['Transparent', 'Clear technology. Clear communication.']],
    },
    faq: {
      title: 'Questions owners ask first',
      text: 'Short answers. Ask us anything else in the form below.',
      items: [
        { q: 'How much does it cost?', a: 'The price depends on scope. We first talk to understand the work, then agree on scope, price and limitations clearly before any work starts. The first conversation is free.' },
        { q: 'How long does it take?', a: 'That depends on scope too. A single problem can start quickly; larger systems are split into phases, and we give the timeline for each phase when we agree on scope.' },
        { q: 'Do I need a technical specification before we talk?', a: 'No. Show us how the work happens today and what needs to improve. We listen first, map the workflow, and recommend a practical next step.' },
        { q: 'Do you start with a particular technology?', a: 'No. We begin with the business problem. Only after we understand the work and define the outcome do we choose the architecture and technology.' },
        { q: 'Can we start small?', a: 'Yes. We remove friction with the smallest system that can create meaningful change, then grow it on your timeline.' },
        { q: 'What happens after launch?', a: 'Support & Maintenance covers monitoring, backup, updates, and ongoing technical support, so the system keeps working as the business changes.' },
        { q: 'Can you connect the tools we already use?', a: 'Yes. System Integration connects APIs, databases, existing tools, and operational data so information is entered once.' },
      ],
    },
    contact: {
      title: 'Bring us the problem. We’ll find the path.',
      text: 'You do not need a technical specification. Show us how the work happens today and what needs to improve.',
      bullets: ['We listen first', 'We map your workflow', 'We recommend a practical next step'],
      fields: ['Name', 'Company / Organization', 'Email', 'Phone', 'What do you want to improve?', 'Message'],
      optional: 'optional',
      select: 'Select a topic',
      interests: ['Not sure yet, help me figure it out', 'Custom Software', 'Business Automation', 'Web Solutions', 'System Integration', 'Support & Maintenance'],
      send: 'Start a conversation',
      sending: 'Sending…',
      success: 'Thank you. Your message has been sent. We’ll reply by the email or phone you gave us.',
      invalid: 'Please check the highlighted fields.',
      failed: 'Message could not be sent. Please try again, or call us on',
      honeypot: 'Leave this field empty',
      callTitle: 'Rather talk now?',
      callNote: 'Call us. Or leave a message and we’ll get back to you.',
      contactHint: 'Email or phone, at least one.',
      errors: {
        name: 'Please enter your name.',
        contact: 'Add an email or a phone number so we can reply.',
        email: 'This email doesn’t look right, e.g. name@company.com.',
        phone: 'Please enter a phone number with at least 9 digits.',
        interest: 'Choose a topic, or pick “Not sure yet”.',
        message: 'Tell us a little about the work you want to improve.',
      },
      failedCall: 'Call',
    },
    closing: { title: 'Every solution starts from zero.', cta: 'Start from zero with us' },
    footer: { tagline: 'From Zero to Solution.', line: 'Simple Software. Real Solutions.', menu: 'Explore', services: 'Services', contact: 'Contact', city: 'Thailand', founder: 'Founder · cheer.cerosoft.net', call: 'Call' },
  },
  th: {
    skip: 'ข้ามไปยังเนื้อหา',
    menu: 'เมนู',
    langLabel: 'Read in English',
    talk: 'ปรึกษาเรา',
    nav: { condomate: 'CondoMate', services: 'บริการ', process: 'ขั้นตอนการทำงาน', about: 'รู้จักเรา', faq: 'คำถามที่พบบ่อย' },
    hero: {
      line1: 'เริ่มจากศูนย์',
      line2: 'สู่โซลูชันที่ใช่',
      text: 'เราเริ่มจากโจทย์ของธุรกิจ ไม่ได้เริ่มจากการเลือกเทคโนโลยี แล้วจึงออกแบบซอฟต์แวร์ที่ช่วยให้งานง่ายขึ้น เป็นระบบขึ้น และพร้อมเติบโตไปพร้อมกับธุรกิจ',
      primary: 'ปรึกษาเรา',
      secondary: 'ดูผลงาน CondoMate',
      markers: { repair: 'ห้อง 415 · แจ้งซ่อม รอรับงาน', parcel: 'ห้อง 415 · พัสดุรอรับ 3 ชิ้น', booking: 'ห้องประชุม · จองรอบละ 1 ชม.', finance: 'ห้อง 415 · ชำระแล้ว ออกใบสำคัญรับ' },
      canvasLabel: 'Punna Residence 5 ที่ถูกวาดเป็นระบบเดียว: งานแจ้งซ่อม พัสดุ การจอง และการเงิน เชื่อมกันในที่เดียว',
      dataNote: 'โมเดลอาคาร Punna Residence 5 ป้ายกำกับเป็นข้อมูลตัวอย่าง (Demo) จาก CondoMate',
    },
    statement: {
      text: 'ปัญหาที่ดูเหมือนเป็นเรื่องซอฟต์แวร์ หลายครั้งเกิดจากขั้นตอนที่ไม่เชื่อมต่อกัน การกรอกข้อมูลซ้ำ หน้าที่รับผิดชอบที่ไม่ชัดเจน หรือข้อมูลที่กระจัดกระจายอยู่ในหลายเครื่องมือ',
      sub: 'ก่อนเขียนโค้ด เราทำความเข้าใจหน้างาน',
    },
    paths: {
      title: 'แก้ปัญหาเดียวได้ตั้งแต่วันนี้ แล้วค่อยขยายตามจังหวะของคุณ',
      text: 'เราเริ่มจากการทำความเข้าใจงานจริงและค้นหาจุดติดขัด ก่อนออกแบบระบบที่เล็กที่สุดที่สร้างความเปลี่ยนแปลงได้จริง',
      items: [
        { key: 'one', title: 'งานซ้ำ ๆ งานเดียว', text: 'เริ่มจากขั้นตอนที่กินเวลาที่สุด เช่น ไฟล์ Excel แบบฟอร์มกระดาษ หรือรายงานที่ต้องทำใหม่ทุกสัปดาห์', service: 'ระบบงานอัตโนมัติ' },
        { key: 'few', title: 'หลายเครื่องมือที่ไม่เชื่อมกัน', text: 'เชื่อมไฟล์ แชต และระบบที่ใช้อยู่ ให้กรอกข้อมูลครั้งเดียวแล้วใช้ได้ทุกที่', service: 'การเชื่อมต่อระบบ' },
        { key: 'all', title: 'ระบบเดียวสำหรับทั้งองค์กร', text: 'ระบบที่ออกแบบตามวิธีทำงานของคุณ ทั้งพนักงานและลูกค้า แบบที่ CondoMate ทำให้คอนโดมิเนียม', service: 'ซอฟต์แวร์เฉพาะธุรกิจ' },
      ],
      cta: 'เล่าให้เราฟังว่าควรเริ่มตรงไหน',
    },
    calc: {
      title: 'งานกรอกซ้ำทำให้ธุรกิจเสียเท่าไร',
      text: 'ประเมินคร่าว ๆ จากตัวเลขของคุณเอง ตัวเลขนี้คือเวลาที่ใช้อยู่วันนี้ ไม่ใช่คำสัญญาว่าจะประหยัดได้เท่าไร',
      formTitle: 'เล่าเรื่องทีมของคุณ',
      people: 'จำนวนคนที่ต้องกรอกหรือคัดลอกข้อมูลซ้ำ',
      hours: 'ชั่วโมงต่อคนต่อวันที่ใช้กับงานนี้',
      days: 'วันทำงานต่อเดือน',
      wage: 'ค่าแรงเฉลี่ยต่อชั่วโมง',
      unitPeople: 'คน',
      unitHours: 'ชั่วโมง',
      unitDays: 'วัน',
      unitWage: 'บาท',
      resultTitle: 'ทีมของคุณใช้เวลากับงานซ้ำ ๆ',
      hoursYear: 'ชั่วโมงต่อปี',
      costYear: 'เป็นค่าแรงต่อปี',
      perYear: 'ต่อปี',
      note: 'วิธีคำนวณ = จำนวนคน × ชั่วโมงต่อวัน × วันทำงาน × 12 เดือน × ค่าแรงต่อชั่วโมง',
      cta: 'ปรึกษาว่าลดส่วนนี้ได้แค่ไหน',
    },
    condo: {
      title: 'CondoMate ระบบเดียวสำหรับทั้งคอนโดมิเนียม',
      text: 'แพลตฟอร์มที่พัฒนาขึ้นเพื่อการใช้งานจริงของนิติบุคคลและลูกบ้าน เชื่อมงานแจ้งซ่อม รับพัสดุ จองพื้นที่ส่วนกลาง ประกาศ การเงิน บัญชี และรายงานไว้ในระบบเดียว',
      live: 'ใช้งานจริงที่ Punna Residence 5',
      screens: [
        { ...screen('home'), tag: 'หน้าหลักลูกบ้าน', title: 'ทุกเรื่องของห้องอยู่ในหน้าเดียว', text: 'ยอดค้างชำระ พัสดุรอรับ งานซ่อมที่ยังไม่เสร็จ และการจองครั้งถัดไป รวมไว้ในหน้าแรก พร้อมประกาศล่าสุดด้านล่าง', callouts: [{ label: 'ยอดค้างชำระ · ดูค่าใช้จ่าย' }, { label: 'พัสดุ · งานซ่อม · การจองถัดไป' }] },
        { ...screen('repairs'), tag: 'แจ้งซ่อม', title: 'แจ้งซ่อม แล้วติดตามได้จนเสร็จ', text: 'แจ้งเรื่อง ติดตามความคืบหน้า และตรวจสอบสถานะงานซ่อมได้ในที่เดียว ทุกงานมีเลขอ้างอิง', callouts: [{ label: 'รอรับงาน · กำลังดำเนินการ · เสร็จสิ้น' }, { label: 'ทุกงานมีเลขอ้างอิง' }] },
        { ...screen('booking'), tag: 'พื้นที่ส่วนกลาง', title: 'จองห้องประชุมเป็นรายชั่วโมง', text: 'เลือกพื้นที่ จำนวนผู้ใช้ วันที่ และรอบเวลา 1 ชั่วโมง ระบบตรวจสอบความจุรวมให้ก่อนส่งคำขอถึงนิติบุคคล', callouts: [{ label: 'พื้นที่ · จำนวนคน · วันที่' }, { label: 'รอบละ 1 ชั่วโมง ตรวจความจุให้' }] },
        { ...screen('finance'), tag: 'การเงิน', title: 'ชำระ ส่งสลิป แล้วได้ใบสำคัญรับ', text: 'ทุกรายการบอกชัดว่าอยู่ขั้นไหน ส่งหลักฐานแล้ว นิติกำลังตรวจสอบ หรือชำระแล้ว เมื่อยืนยันแล้วแชร์หรือบันทึกใบสำคัญรับเป็น PDF ได้', callouts: [{ label: 'ส่งหลักฐาน → ตรวจสอบ → ชำระแล้ว' }, { label: 'ใบสำคัญรับ · แชร์ · บันทึก PDF' }] },
        { ...screen('room'), tag: 'ห้องของฉัน', title: 'ข้อมูลห้องและสมาชิกในห้อง', text: 'ลูกบ้านดูเลขห้องและสมาชิกในห้องได้เอง และคัดลอกที่อยู่ได้ในแตะเดียว', callouts: [{ label: 'เลขห้อง · สมาชิก' }, { label: 'คัดลอกที่อยู่' }] },
      ],
      note: 'ภาพหน้าจอจริงจาก CondoMate ข้อมูลในภาพทั้งหมดเป็นข้อมูลตัวอย่าง (Demo) ชื่อบุคคลอื่นถูกเบลอไว้',
      demo: 'ข้อมูลตัวอย่าง (Demo)',
      bridge: 'ตัวอย่างนี้เป็นคอนโด แต่วิธีทำงานเดียวกันใช้ได้กับร้านค้า สำนักงาน หรือโรงงาน คือเริ่มจากงานจริง แล้วรวมให้เป็นระบบเดียว',
      console: {
        title: 'นิติบุคคลใช้ข้อมูลชุดเดียวกันผ่านหน้าจอคอมพิวเตอร์',
        text: 'ระบบเดียว ใช้งานลงตัวทั้งลูกบ้านและนิติบุคคล',
        tabs: [
          { ...desk('today', 735), title: 'งานวันนี้', text: 'เห็นงานรอดำเนินการ งานซ่อมรอรับ คำขอจองรออนุมัติ และพัสดุรอส่งมอบในหน้าเดียว' },
          { ...desk('parcels', 737), title: 'พัสดุ', text: 'บันทึกพัสดุเข้าและติดตามสถานะการรับของทุกห้อง' },
          { ...desk('reports', 732), title: 'รายงานการเงิน', text: 'รายรับรายจ่ายรายเดือน พร้อมรายงานประจำวันสำหรับพิมพ์' },
          { ...desk('overdue', 738), title: 'ค้างชำระ', text: 'ดูว่าใครค้างชำระเท่าไร และสถานะการเรียกเก็บในภาพเดียว' },
        ],
      },
      features: ['จัดการข้อมูลลูกบ้าน', 'งานแจ้งซ่อม', 'ติดตามพัสดุ', 'จองพื้นที่ส่วนกลาง', 'ประกาศข่าวสาร', 'การเงินและบัญชี', 'รายงาน', 'เครื่องมือผู้ดูแล', 'บันทึกการใช้งาน'],
      cta: 'ปรึกษาเรื่องระบบแบบนี้',
    },
    services: {
      title: 'พาร์ตเนอร์หนึ่งเดียว ดูแลครบทั้งระบบ',
      text: 'ตั้งแต่วางกลยุทธ์ ออกแบบ พัฒนา และเชื่อมต่อระบบ ไปจนถึงการดูแลระยะยาว ทุกขั้นตอนต่อเนื่องด้วยความเข้าใจธุรกิจชุดเดียวกัน',
      items: [
        { title: 'ซอฟต์แวร์เฉพาะธุรกิจ', text: 'เว็บแอปและระบบภายในที่ออกแบบให้สอดคล้องกับวิธีทำงานของทีมคุณ', items: ['เว็บแอป', 'ระบบจัดการภายใน', 'ระบบบริหารธุรกิจ'] },
        { title: 'ระบบงานอัตโนมัติ', text: 'ลดงานซ้ำซ้อน และเปลี่ยนขั้นตอนที่ต้องทำด้วยมือให้เป็นระบบที่ชัดเจน', items: ['ระบบงานอัตโนมัติ', 'ประมวลผลข้อมูล', 'รายงานและแดชบอร์ด'] },
        { title: 'โซลูชันเว็บไซต์', text: 'เว็บไซต์องค์กร พอร์ทัล และบริการออนไลน์ที่ออกแบบอย่างตรงจุด', items: ['เว็บไซต์องค์กร', 'พอร์ทัลลูกค้า', 'บริการออนไลน์'] },
        { title: 'การเชื่อมต่อระบบ', text: 'เชื่อมต่อ API ฐานข้อมูล เครื่องมือเดิม และข้อมูลจากการทำงานจริง', items: ['เชื่อมต่อ API', 'เชื่อมต่อฐานข้อมูล', 'เชื่อมต่อระบบเดิม'] },
        { title: 'ดูแลและบำรุงรักษา', text: 'เฝ้าระวังระบบ สำรองข้อมูล อัปเดต และให้คำปรึกษาด้านเทคนิคอย่างต่อเนื่อง', items: ['เฝ้าระวังระบบ', 'สำรองข้อมูล', 'อัปเดต', 'สนับสนุนด้านเทคนิค'] },
      ],
    },
    process: {
      title: 'ไม่ด่วนสรุป ค่อย ๆ หาคำตอบที่ใช่',
      text: 'เราไม่กำหนดเทคโนโลยีไว้ล่วงหน้า แต่ใช้กระบวนการทำงาน 5 ขั้นตอนเพื่อทำความเข้าใจ กำหนดทิศทาง และพัฒนาโซลูชันที่เหมาะกับธุรกิจของคุณจริง ๆ',
      steps: [
        { n: '01', title: 'เข้าใจ', text: 'เข้าใจธุรกิจ ผู้ใช้ และวิธีทำงาน' },
        { n: '02', title: 'กำหนด', text: 'กำหนดขอบเขต ความต้องการ และลำดับความสำคัญ' },
        { n: '03', title: 'ออกแบบ', text: 'ออกแบบระบบและประสบการณ์การใช้งาน' },
        { n: '04', title: 'พัฒนา', text: 'พัฒนา ทดสอบ และปรับปรุง' },
        { n: '05', title: 'ดูแล', text: 'ติดตั้ง ดูแล และพัฒนาต่อ' },
      ],
    },
    about: {
      title: 'เทคโนโลยีควรช่วยแก้ปัญหา ไม่ใช่เพิ่มปัญหาใหม่',
      text: 'CeroSoft ผสานความเชี่ยวชาญด้านวิศวกรรมซอฟต์แวร์เข้ากับความเข้าใจในการดำเนินธุรกิจ เพื่อเปลี่ยนกระบวนการที่ซับซ้อนให้เป็นระบบที่คนใช้งานได้จริง ดูแลต่อได้ และไว้วางใจได้',
      mission: ['พันธกิจ', 'ทำให้เทคโนโลยีเป็นเรื่องง่ายและเข้าถึงได้ ผ่านซอฟต์แวร์ที่ตอบโจทย์การใช้งานและแก้ปัญหาได้จริง'],
      vision: ['วิสัยทัศน์', 'เป็นพาร์ตเนอร์ด้านเทคโนโลยีที่ธุรกิจไว้วางใจ ในการสร้างระบบดิจิทัลที่ใช้ได้จริงและเติบโตได้อย่างยั่งยืน'],
      founder: {
        title: 'ใครเป็นคนสร้างระบบให้คุณ',
        role: 'ผู้ก่อตั้งและนักพัฒนาซอฟต์แวร์',
        name: 'Patcharadanai Sombatsatien (Cheer)',
        text: 'ออกแบบและพัฒนาระบบของ CeroSoft เองตั้งแต่เก็บความต้องการจนถึงติดตั้งและดูแลหลังส่งมอบ รวมถึง CondoMate พื้นฐานมาจากงานวิศวกรรมที่ซอฟต์แวร์ต้องทำงานกับฮาร์ดแวร์และสายการผลิตจริงอย่างเชื่อถือได้',
        available: 'พร้อมรับงานใหม่ และดูแลระบบที่ส่งมอบต่อเนื่อง',
        experience: [
          { org: 'CeroSoft', role: 'ผู้ก่อตั้งและนักพัฒนาซอฟต์แวร์', when: 'ส.ค. 2569–ปัจจุบัน' },
          { org: 'AirGradient', role: 'Embedded Firmware Engineer', when: 'เริ่ม พ.ย. 2569' },
          { org: 'NARIT · สถาบันวิจัยดาราศาสตร์แห่งชาติ', role: 'Embedded Software Engineer', when: '2566–2567' },
          { org: 'Hana Microelectronics × Keysight Technologies', role: 'Electrical Test Engineer', when: '2564–2566' },
        ],
        cta: 'ดูโปรไฟล์เต็มที่ cheer.cerosoft.net',
      },
      valuesTitle: 'คุณค่าที่เรายึดถือ',
      values: [['เรียบง่าย', 'ระบบเบื้องหลังอาจซับซ้อน แต่ประสบการณ์ของผู้ใช้ควรง่าย'], ['ใช้ได้จริง', 'พัฒนาเฉพาะสิ่งที่สร้างคุณค่าและตอบโจทย์การใช้งานจริง'], ['เชื่อถือได้', 'เสถียร ปลอดภัย ดูแลรักษาได้'], ['ยืดหยุ่น', 'ระบบปรับตามธุรกิจ ไม่ใช่บังคับธุรกิจให้เข้ากับระบบ'], ['โปร่งใส', 'สื่อสารขอบเขต ค่าใช้จ่าย และข้อจำกัดอย่างชัดเจน']],
    },
    faq: {
      title: 'คำถามที่เจ้าของธุรกิจถามบ่อย',
      text: 'คำตอบสั้น ๆ ถ้ามีคำถามอื่น ถามเราได้ในแบบฟอร์มด้านล่าง',
      items: [
        { q: 'ราคาเท่าไร ประเมินงบอย่างไร', a: 'ราคาขึ้นกับขอบเขตงาน เราจะคุยเพื่อทำความเข้าใจงานก่อน แล้วสรุปขอบเขต ราคา และข้อจำกัดให้ชัดเจนก่อนเริ่มงาน การคุยครั้งแรกไม่มีค่าใช้จ่าย' },
        { q: 'ใช้เวลานานแค่ไหน', a: 'ขึ้นกับขอบเขตเช่นกัน งานเล็กอย่างการแก้ปัญหาเดียวเริ่มได้เร็ว ส่วนระบบขนาดใหญ่จะแบ่งเป็นช่วง และเราจะแจ้งกรอบเวลาของแต่ละช่วงตอนสรุปขอบเขต' },
        { q: 'ต้องเตรียมเอกสารสเปกก่อนคุยไหม', a: 'ไม่จำเป็น เพียงเล่าให้เราฟังว่าวันนี้งานเป็นอย่างไร และอยากเห็นอะไรดีขึ้น เราจะรับฟัง ทำความเข้าใจกระบวนการทำงาน และแนะนำขั้นตอนถัดไปที่เหมาะกับธุรกิจของคุณ' },
        { q: 'CeroSoft เริ่มจากเทคโนโลยีตัวไหน', a: 'เราไม่กำหนดเทคโนโลยีไว้ล่วงหน้า เราเริ่มจากโจทย์ของธุรกิจ ทำความเข้าใจงานและกำหนดเป้าหมายก่อน แล้วจึงเลือกโครงสร้างและเทคโนโลยีที่เหมาะกับโจทย์' },
        { q: 'เริ่มจากโปรเจกต์เล็ก ๆ ได้ไหม', a: 'ได้ เราออกแบบระบบที่เล็กที่สุดที่สร้างความเปลี่ยนแปลงได้จริงก่อน แล้วค่อยขยายตามจังหวะของธุรกิจ' },
        { q: 'หลังส่งมอบแล้วมีคนดูแลไหม', a: 'มีบริการดูแลและบำรุงรักษา ครอบคลุมการเฝ้าระวังระบบ สำรองข้อมูล อัปเดต และสนับสนุนด้านเทคนิคอย่างต่อเนื่อง' },
        { q: 'เชื่อมกับโปรแกรมที่ใช้อยู่ได้ไหม', a: 'ได้ บริการเชื่อมต่อระบบช่วยเชื่อม API ฐานข้อมูล เครื่องมือเดิม และข้อมูลจากการทำงานจริง ให้กรอกข้อมูลครั้งเดียว' },
      ],
    },
    contact: {
      title: 'เริ่มคุยจากปัญหา แล้วหาทางไปด้วยกัน',
      text: 'คุณไม่จำเป็นต้องเตรียมเอกสารสเปก เพียงเล่าให้เราฟังว่าวันนี้งานเป็นอย่างไร และอยากเห็นอะไรดีขึ้น',
      bullets: ['เรารับฟังก่อน', 'ทำความเข้าใจวิธีทำงานของคุณ', 'แนะนำขั้นตอนถัดไปที่ทำได้จริง'],
      fields: ['ชื่อ', 'บริษัท / องค์กร', 'อีเมล', 'เบอร์โทรศัพท์', 'เรื่องที่อยากปรับปรุง', 'เล่ารายละเอียดเพิ่มเติม'],
      optional: 'ไม่บังคับ',
      select: 'เลือกหัวข้อ',
      interests: ['ยังไม่แน่ใจ อยากให้ช่วยดู', 'ซอฟต์แวร์เฉพาะธุรกิจ', 'ระบบงานอัตโนมัติ', 'โซลูชันเว็บไซต์', 'การเชื่อมต่อระบบ', 'ดูแลและบำรุงรักษา'],
      send: 'ส่งข้อความถึงเรา',
      sending: 'กำลังส่ง…',
      success: 'ขอบคุณครับ เราได้รับข้อความแล้ว และจะติดต่อกลับทางอีเมลหรือโทรศัพท์ที่ให้ไว้',
      invalid: 'กรุณาตรวจสอบช่องที่ทำเครื่องหมายไว้',
      failed: 'ยังส่งข้อความไม่ได้ กรุณาลองอีกครั้ง หรือโทรหาเราที่',
      honeypot: 'เว้นช่องนี้ว่างไว้',
      callTitle: 'อยากคุยเลยไหม',
      callNote: 'โทรหาเราได้เลย หรือฝากข้อความไว้ แล้วเราจะติดต่อกลับ',
      contactHint: 'กรอกอีเมลหรือเบอร์โทร อย่างน้อยหนึ่งช่อง',
      errors: {
        name: 'กรุณากรอกชื่อ',
        contact: 'ใส่อีเมลหรือเบอร์โทรอย่างน้อยหนึ่งช่อง เพื่อให้เราติดต่อกลับได้',
        email: 'รูปแบบอีเมลไม่ถูกต้อง เช่น name@company.com',
        phone: 'กรุณาใส่เบอร์โทรอย่างน้อย 9 หลัก',
        interest: 'เลือกหัวข้อ หรือเลือก “ยังไม่แน่ใจ”',
        message: 'เล่าสั้น ๆ ว่าอยากปรับปรุงงานส่วนไหน',
      },
      failedCall: 'โทร',
    },
    closing: { title: 'ทุกโซลูชันเริ่มต้นจากศูนย์', cta: 'เริ่มจากศูนย์ไปกับเรา' },
    footer: { tagline: 'จากศูนย์ สู่โซลูชันที่ใช่', line: 'ซอฟต์แวร์ที่เรียบง่าย แก้ปัญหาได้จริง', menu: 'เมนู', services: 'บริการ', contact: 'ติดต่อ', city: 'ประเทศไทย', founder: 'ผู้ก่อตั้ง · cheer.cerosoft.net', call: 'โทร' },
  },
};
