export const URL = 'https://shift-intensive.ru/api/cinema/';
export const PART_URL_PHOTO = 'https://shift-intensive.ru/api/';

export const WEEK_DAYS = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
export const MONTHS = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"];

export const PERSONAL_DATE_MASK = /^[А-Яа-яЁё]{1,58}$/;
export const EMAIL_MASK = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PHONE_NUMBER_MASK = /^(\+(7))\d{10}$/
export const CARD_NUMBER_MASK = /^\d{4}\s\d{4}$/
export const CARD_TERM_MASK = /^((1[0-2])|(0[1-9]))\/(\d{2})/
export const CARD_CVV_MASK = /^\d{3}$/
export const OTP_CODE_MASK = /^\d{6}$/

export const PHONE_NUMBER_PLACEHOLDER = "+{7}(000)-000-00-00"
export const EMAIL_PLACEHOLDER = "a-z{@}"
export const CODE_CARD_PLACEHOLDER = "0000 0000"
export const EXPIRE_DATE_PLACEHOLDER = "00{/}00"

export const NOT_VALID_PHONE = "Введите номер телефона!";
export const NOT_VALID_CODE = "Неверный код";