// Parenthesis-less function & template literal

div = function(s, ...v) { //s: 템플릿 리터럴에서 고정된 문자열 부분이 배열로 전달됩니다.
                            // ...v: 템플릿 리터럴에서 변수로 삽입된 값들이 배열로 전달됩니다.
    console.log(s, v);
    return function() {
        return <div style={{}}></div>;
    }
}

div`
    color: #fff
    font-size: 20px;
    font-weight: 20px;
`;