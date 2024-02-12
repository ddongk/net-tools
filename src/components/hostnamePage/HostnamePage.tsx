import React, {useState} from "react";

const HostnamePage = () => {

    const [hostName, setHostName] = useState('');
    // TODO
    // 해당 페이지 렌더링 될 때 서버 호출해서 현재 호스트네임 받아온다.
    // axios, ajax, fetch
    // 3개를 호출할때 어디 url 로 어떻게 호출할지는 정호매니저님이랑 얘기
    //$nst.is('gethostname' ,function (res) {
    // console.log(res) -> hostname 이 나와있을거임.
    // })

    // todo useEffect 를 사용해서 해봐라~

    // 호스트네임페이지를 클릭할때마다 지금은 서버를 호출
    // 사실 호스트네임이란건 바뀔게없잖아요
    // 이런것도 로컬스토리지에 넣어놓는다던가
    // 캐시화를 해야된다.

    // 로딩페이지 넣어야 함!!!!!!!!!!!!!!!!!!!!!!!!


    //아래와 같은 가짜 데이터 호출 사이트를 사용하여 테스트하기
    fetch('http://ip.jsontest.com/').then(async function (response) {
        const data = await response.json();
        setHostName(data.ip);
    });



    return (
        <>
            <h1>hostname</h1>
            <div>현재 호스트 네임</div> <input type="text" readOnly value={hostName}/>
            <div>변경할 호스트 네임</div> <input type="text"/>
        </>
    );
}

export default HostnamePage;
