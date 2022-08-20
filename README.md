React - typescript-webpack-babel-styled-Components
로 초기셋팅을 하고 컴포넌트와 페이지 단위로 나눠서 계획을 하고 진행을 하였습니다.

---

# 1.nav

메뉴탭은 About me , project , Resume , Contact me 로 구성을 했습니다.

1. APP.tsx에 각 메뉴의 path를 지정을 하였습니다.
2. 메뉴의 상수데이터를 interface를 사용하여 drop이 될지 말지를 boolean 속성을 주었고
   서브 메뉴가 활성화 되는 project와 Contact me 만 true 값을 주어 onMouseEnter시에 서브메뉴가 활성화 되도록 하였습니다.

---

# 2.Footer

1. 상수 데이터와 map 함수를 활용하여 반복되는 UI를 구현했습니다.

---

# 3.Main

## slider

1.Slider: slider는 버튼 클릭시 해당 id 로 이동을 해야하고 자동으로도 슬라이더는 반복이 되야했습니다.
먼저 useState훅을 이용해서 슬라이더의 id를 스테이트에 저장을 하고 3객의 버튼을 array로 만들었고 해당 id가 index+1의 값이 맞으면 버튼이 활성화가 되고 아니면 활성화 되지 않도록 삼항연산자를 사용했습니다.

```
<SlidePagination>
          {Array.from({ length: 3 }).map((item, index) => (
            <button
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot-active' : 'dot'}
            ></button>
          ))}
</SlidePagination>
```

2. 또한 버튼의 인덱스와 슬라이드 배경이미지가 일치 했을 때 역시 삼항연산자를 사용을 했습니다.

```
SliderImg>
      {DATA_SLIDER.map(({ id, srcImg }) => {
        return (
          <div
            key={id}
            className={slideIndex === id ? 'slide-active-anim' : 'slide'}
          >
            <img src={srcImg} />
          </div>
        )
      })}
```

3.useEffect의 의존성 배열과 setInterval , clearInterval 함수를 사용하여 해당 인덱스가 맞으면 자동으로 슬라이드가 동작하도록 구현했습니다.

## 4.video

1. IFrame tag를 사용하여 video를 가져왔습니다.

---


