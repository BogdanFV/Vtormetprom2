import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.copyright}>©2022 Все права защищены </div>
      <div className={s.contacts}>
        <div className={s.mail}><a href="mailto:info@vtormetprom.pro">info@vtormetprom.pro</a></div>
        <div className={s.phone}>+7 915 321-23-69</div>
      </div>
    </footer>
  );
}

export default Footer;
