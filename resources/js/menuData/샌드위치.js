// ############## 오늘의 구움과자 ##############
/*
no: 메뉴 표시 순번
name: 메뉴 이름
price: 가격
isNew: 신상인지?
isDiscount: 할인된 가격인지?
isHit: 인기 메뉴
 */
const sandwich = [{
  no: 1,
  name: '햄치즈 샌드위치',
  price: '6.5',
  isNew: true,
  isDiscount: false,
  isHit: false,
}, {
  no: 2,
  name: '햄치즈 샌드위치 세트',
  price: '8.5',
  isNew: true,
  isDiscount: true,
  isHit: true,
}, {
  no: 3,
  name: '와사비 크래미 샌드위치',
  price: '6.8',
  isNew: true,
  isDiscount: false,
  isHit: false,
}, {
  no: 4,
  name: '와사비 크래미 샌드위치 세트',
  price: '8.8',
  isNew: true,
  isDiscount: true,
  isHit: false,
}];

export {
  sandwich,
}