import { AppWindow, Blocks, Cable, ChartNoAxesCombined, FileText, Headphones, LayoutDashboard, Megaphone, PackageCheck, ReceiptText, Settings2, ShieldCheck, Users, Workflow } from 'lucide-react';

export const navItems = [['Home','home'],['Solutions','solutions'],['Products','products'],['About','about'],['Projects','projects'],['Contact','contact']] as const;
export const solutions = [
  { icon:AppWindow,title:'Custom Software',text:'Purpose-built systems shaped around your operations—not the other way around.',items:['Web Applications','Internal Management Systems','Business Management Systems'] },
  { icon:Workflow,title:'Business Automation',text:'Replace repetitive work with clear, dependable digital workflows.',items:['Workflow Automation','Data Processing','Reporting & Dashboards'] },
  { icon:Blocks,title:'Web Solutions',text:'Fast, accessible digital experiences that connect your business and customers.',items:['Corporate Websites','Customer Portals','Online Services'] },
  { icon:Cable,title:'System Integration',text:'Make existing tools, data, and teams work as one connected system.',items:['API Integration','Database Integration','Existing System Integration'] },
  { icon:Headphones,title:'Support & Maintenance',text:'Practical ongoing care that keeps your software secure and effective.',items:['Monitoring & Backup','Updates','Technical Support'] },
] as const;
export const values = [
  ['01','Simple','Complex behind. Simple in front.'],['02','Practical','Build what matters.'],['03','Reliable','Software you can depend on.'],['04','Adaptable','Built around your workflow.'],['05','Transparent','Clear technology. Clear communication.'],
] as const;
export const process = [['01','Understand','Understand the business, users, and workflow.'],['02','Define','Define scope, requirements, and priorities.'],['03','Design','Design the system and user experience.'],['04','Build','Develop, test, and iterate.'],['05','Support','Deploy, maintain, and improve.']] as const;
export const projectFeatures = [[Users,'Resident management'],[PackageCheck,'Parcel tracking'],[ReceiptText,'Financial records'],[FileText,'Receipts & vouchers'],[Megaphone,'Announcements'],[LayoutDashboard,'Dashboard'],[ChartNoAxesCombined,'Reports'],[Settings2,'Admin tools'],[ShieldCheck,'Audit logs']] as const;
