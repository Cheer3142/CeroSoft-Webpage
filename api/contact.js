const RECIPIENT=process.env.CONTACT_TO_EMAIL||'cheer3142@gmail.com';
const SENDER=process.env.CONTACT_FROM_EMAIL||'CeroSoft Website <onboarding@resend.dev>';
const escapeHtml=(value='')=>String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const EMAIL_RE=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const trim=value=>String(value??'').trim();
export default async function handler(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
  if(!process.env.RESEND_API_KEY)return res.status(503).json({error:'Email service is not configured'});
  const body=req.body||{};
  if(body.website)return res.status(200).json({ok:true});
  const name=trim(body.name),company=trim(body.company),email=trim(body.email),phone=trim(body.phone),interest=trim(body.interest),message=trim(body.message),language=trim(body.language)||'en';
  // Email OR phone is enough; company is optional (matches the form).
  const digits=phone.replace(/\D/g,'').length;
  if(!name||!interest||!message||(!email&&!phone))return res.status(400).json({error:'Invalid form data'});
  if(email&&!EMAIL_RE.test(email))return res.status(400).json({error:'Invalid email'});
  // Any phone text is fine as long as it carries at least 9 digits ("081-234-5678 คุณเอ" is valid).
  if(phone&&(digits<9||phone.length>60))return res.status(400).json({error:'Invalid phone'});
  const fields={name,company,email,phone,interest,message,language};
  if(Object.values(fields).some(value=>value.length>3000))return res.status(400).json({error:'Form data is too long'});
  const payload={from:SENDER,to:[RECIPIENT],subject:`[CeroSoft Website] ${interest} — ${name}`,html:`<h2>New CeroSoft website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Company:</strong> ${escapeHtml(company||'-')}</p><p><strong>Email:</strong> ${escapeHtml(email||'-')}</p><p><strong>Phone:</strong> ${escapeHtml(phone||'-')}</p><p><strong>Interest:</strong> ${escapeHtml(interest)}</p><p><strong>Language:</strong> ${escapeHtml(language)}</p><hr><p>${escapeHtml(message).replace(/\n/g,'<br>')}</p>`};
  if(email)payload.reply_to=email;
  const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${process.env.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify(payload)});
  if(!response.ok)return res.status(502).json({error:'Email provider rejected the request'});
  return res.status(200).json({ok:true});
}
