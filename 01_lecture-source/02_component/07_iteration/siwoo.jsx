

function Test() {

    // 화살표 함수 구현부 중괄호 생략 (한줄 간단단)
    const onChange = (event) => console.log('dddd');

    function onChange2(num1){
        let sum = 0;
        sum = num1 + sum;
        
        const sum2 = 0;
        sum2 = num1 + sum2;

    }
    

    return(
        <>
            <h1>로그인 화면</h1>
            <label>아이디 : </label>
            <input 
                type="text"
                value={useId}
                onClick={(e)=>setUseId(e.target.value)}
                onChange={(e)=>{
                    // 화살표 함수 구현부 중괄호 있음 (두줄 이상)
                    setUseId(e.target.value);
                    console.log('dddd');
                }}
            />
        </>
    );
}

export default Test;