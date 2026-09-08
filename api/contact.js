const RECIPIENT=process.env.CONTACT_TO_EMAIL||'cheer3142@gmail.com';
const SENDER=process.env.CONTACT_FROM_EMAIL||'CeroSoft Website <onboarding@resend.dev>';
const escapeHtml=(value='')=>String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
export default async function handler(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
  if(!process.env.RESEND_API_KEY)return res.status(503).json({error:'Email service is not configured'});
  const{name,company,email,phone='',interest,message,language='en',website=''}=req.body||{};
  if(website)return res.status(200).json({ok:true});
  if(!name||!company||!email||!interest||!message||!/^\S+@\S+\.\S+$/.test(email))return res.status(400).json({error:'Invalid form data'});
  const fields={name,company,email,phone,interest,message,language};
  if(Object.values(fields).some(value=>String(value).length>3000))return res.status(400).json({error:'Form data is too long'});
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:SENDER,to:[RECIPIENT],reply_to:email,subject:`[CeroSoft Website] ${interest} — ${name}`,html:`<h2>New CeroSoft website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Company:</strong> ${escapeHtml(company)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone)}</p><p><strong>Interest:</strong> ${escapeHtml(interest)}</p><p><strong>Language:</strong> ${escapeHtml(language)}</p><hr><p>${escapeHtml(message).replace(/\n/g,'<br>')}</p>`})});
  if(!response.ok)return res.status(502).json({error:'Email provider rejected the request'});
  return res.status(200).json({ok:true});
}
