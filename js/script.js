const CopyNumber = document.querySelector('.Number'),
      CopyMail = document.querySelector('.Mail'),
      CopyTelegram = document.querySelector('.Telegram'),
      CopyOnlyPhone = document.querySelector('.con'),
      Hobbies = document.querySelector('.hob'),
      Clickk = document.querySelectorAll('.information p')

CopyNumber.addEventListener('click',function(){
    navigator.clipboard.writeText('+375292284213')
    Copied()})
CopyMail.addEventListener('click',function(){
    navigator.clipboard.writeText('egorlavrinovich@gmail.com')
    Copied()})
CopyTelegram.addEventListener('click',function()
{navigator.clipboard.writeText('dark_money_dol')
Copied()})
CopyOnlyPhone.addEventListener('click',function()
{navigator.clipboard.writeText('+375292284213 : egorlavrinovich@gmail.com')
Copied()})
function Copied() {
    alert('Скопировано в буфер')
}
Hobbies.addEventListener('click',()=>
  Clickk[10].classList.toggle('red'))
