import {
  signature,
  coffee,
  coldBrew,
  nonCoffee,
  dessert,
  ade,
  tea,
  bakedSnacks,
  croffle,
  sandwich,
} from './menuData';

// 전역
// 메뉴 위치 ( menu01 | menu02 | menu03 으로 구분함)
const FIRST_AREA = document.querySelector('.menu01');
const SECOND_AREA = document.querySelector('.menu02');
const THIRD_AREA = document.querySelector('.menu03');

const appendChild = (target, children) => {
  children.forEach((child) => target.appendChild(child));
};

const createMenuCategory = (menuTitle, temperatureType = '', description = []) => {
  const categoryEl = document.createElement('div');
  categoryEl.className = 'menu-category';

  const categoryHeaderEl = document.createElement('div');
  categoryHeaderEl.className = 'menu-category-header';

  const titleEl = document.createElement('p');
  titleEl.className = 'title';
  titleEl.textContent = menuTitle;

  const temperTypeEl = document.createElement('p');
  temperTypeEl.className = 'temper-type';
  temperTypeEl.textContent = temperatureType;

  categoryHeaderEl.appendChild(titleEl);
  categoryHeaderEl.appendChild(temperTypeEl);
  categoryEl.appendChild(categoryHeaderEl);

  // 설명 추가
  description?.forEach((v) => {
    const descriptionEl = document.createElement('p')
    descriptionEl.className = 'description';
    descriptionEl.textContent = v;
    categoryEl.appendChild(descriptionEl);
  })

  return categoryEl;
}
const createMenuItem = (menu) => {
  const menuItemEl = document.createElement('div');
  menuItemEl.className = 'menu-item';

  const menuNameEl = document.createElement('p');
  menuNameEl.className = 'menu-name';
  menuNameEl.textContent = menu.name;

  // if (menu.isNew) {
  //   const newEl = document.createElement('span');
  //   newEl.className = 'menu-badge new-menu';
  //   newEl.textContent = '신메뉴';
  //   menuNameEl.appendChild(newEl);
  // }

  if (menu.isHit) {
    const hitEl = document.createElement('span');
    hitEl.className = 'menu-badge hit-menu';
    hitEl.textContent = '인기';
    menuNameEl.appendChild(hitEl);
  }

  if (menu.isDiscount) {
    const hitEl = document.createElement('span');
    hitEl.className = 'menu-badge discount-menu';
    hitEl.textContent = '할인';
    menuNameEl.appendChild(hitEl);
  }

  const priceEl = document.createElement('p');
  priceEl.className = 'menu-price';
  priceEl.textContent = menu.price;

  menuItemEl.appendChild(menuNameEl);
  menuItemEl.appendChild(priceEl);

  return menuItemEl;
}

const menuDraw = () => {
  // 시그니쳐
  const signatureMenuWrap = createMenuCategory('대표메뉴', '시원');
  signature.forEach((menu) => {
    signatureMenuWrap.appendChild(createMenuItem(menu));
  });

  // 커피
  const coffeeMenuWrap = createMenuCategory(
    '커피',
    '따뜻/시원',
    ['⭐️디카페인으로 변경 시 가격 동일⭐']
  );
  coffee.forEach((menu) => {
    coffeeMenuWrap.appendChild(createMenuItem(menu));
  });

  // 콜드브루
  const coldBrewMenuWrap = createMenuCategory('콜드브루', '시원');
  coldBrew.forEach((menu) => {
    coldBrewMenuWrap.appendChild(createMenuItem(menu));
  });

  // NON COFFEE
  const nonCoffeeMenuWrap = createMenuCategory('논 커피', '따뜻/시원');
  nonCoffee.forEach((menu) => {
    nonCoffeeMenuWrap.appendChild(createMenuItem(menu));
  });

  // 디저트
  const dessertMenuWrap = createMenuCategory('디저트');
  dessert.forEach((menu) => {
    dessertMenuWrap.appendChild(createMenuItem(menu));
  });

  // 에이드
  const adeMenuWrap = createMenuCategory('에이드', '시원');
  ade.forEach((menu) => {
    adeMenuWrap.appendChild(createMenuItem(menu));
  });

  // 티
  const teaMenuWrap = createMenuCategory('티', '따뜻/시원');
  tea.forEach((menu) => {
    teaMenuWrap.appendChild(createMenuItem(menu));
  });

  // 오늘의 구움과자
  const bakedSnacksMenuWrap = createMenuCategory('오늘의 구움과자');
  bakedSnacks.forEach((menu) => {
    bakedSnacksMenuWrap.appendChild(createMenuItem(menu));
  });

  // 크로플
  const croffleMenuWrap = createMenuCategory('크로플');
  croffle.forEach((menu) => {
    croffleMenuWrap.appendChild(createMenuItem(menu));
  })

  // 샌드위치
  const sandwichMenuWrap = createMenuCategory(
    '샌드위치',
    '',
    [
      '세트 주문 시 🌟1000원 할인🌟 & 아메리카노 또는 아이스티 택 1',
      '음료 변경 시 차액이 추가 결제'
    ]
  );
  sandwich.forEach((menu) => {
    sandwichMenuWrap.appendChild(createMenuItem(menu));
  })

  appendChild(FIRST_AREA, [signatureMenuWrap, coffeeMenuWrap, coldBrewMenuWrap]);
  appendChild(SECOND_AREA, [nonCoffeeMenuWrap, adeMenuWrap, teaMenuWrap]);
  appendChild(THIRD_AREA, [dessertMenuWrap, croffleMenuWrap, sandwichMenuWrap, bakedSnacksMenuWrap]);
}

document.addEventListener('DOMContentLoaded', () => {
  menuDraw();
});