import React, {ReactNode, useEffect, useState} from "react";
import {Button, ButtonGroup, CircularProgress, Modal, Stack} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import './HostnamePage.css';

const HostnamePage = () => {

    const [hostName, setHostName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHostName();
    }, []);

    const fetchHostName = async () => {
        try {
            const response = await fetch('http://ip.jsontest.com/');
            const data = await response.json();
            setHostName(data.ip);
        } catch (error) {
            console.error('에러: ', error);
            //호출 실패 시 알림 문구창 뜨게도 하면 좋을 듯
        } finally {
            setLoading(false);
            //호출 성공 시 알림 문구창 뜨게도 하면 좋을 듯
        }
    };

    const openModal = () => {
        alert("confirm창 하나 만들기");
    };

    // fetch('http://ip.jsontest.com/').then(async function (response) {
    //     const data = await response.json();
    //     setHostName(data.ip);
    // });

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




    return (

        <>
            <h1>hostname</h1>

            <div className="boxflex">
                <div>현재 호스트 네임</div>
                {loading ? (
                    <LoadingButton loading variant="outlined" className="inputSize"/>
                ) : (
                    <input type="text" className="inputSize" value={hostName}/>
                )}
            </div>
            <div className="boxflex">
            <div>변경할 호스트 네임</div>
            <TextField id="outlined-basic" label="Change IP" variant="outlined" className="inputSize"/>
            <Button variant="outlined" onClick={openModal}>Submit</Button>
            </div>
        </>

    );
    // Submit 버튼 클릭 시 재시작할 건지 묻기
    // hostname 적용하려면 재시작 해야함
}

export default HostnamePage;
