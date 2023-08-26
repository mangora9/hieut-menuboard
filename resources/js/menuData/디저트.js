// ############## 디저트 ##############
/*
no: 메뉴 표시 순번
name: 메뉴 이름
price: 가격
isNew: 신상인지?
isDiscount: 할인된 가격인지?
isHit: 인기 메뉴
 */
const dessert = [{
  no: 1,
  name: '크림 브륄레( + 토스트)',
  price: '5.5',
  isNew: false,
  isDiscount: false,
  isHit: false,
}, {
  no: 2,
  name: '브라우니',
  price: '3.0',
  isNew: false,
  isDiscount: false,
  isHit: false,
}, {
  no: 3,
  name: '소프트 아이스크림',
  price: '2.0',
  isNew: false,
  isDiscount: true,
  isHit: false,
}];

export {
  dessert,
}