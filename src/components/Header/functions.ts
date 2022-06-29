export function respMenu(e: boolean) {
  const menu:any = document.querySelector('ul');
  e ? menu.style.left = 0 : menu.style.left = '-100vw'
}