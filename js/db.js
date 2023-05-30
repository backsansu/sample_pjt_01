const memberDB = new Map();

const diaryDB = new Map();

/* MEMBER DB START */
const addMember = (id, pw, mail) => {
    console.log('addMeber() CALLED!!');

    memberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail,
    });

    diaryDB.set(id, []);

    console.log(memberDB.get(id));


}

const searchMeber = (id, pw) => {
    console.log('searchMeber() CALLED!!');

    let memobj = memberDB.get(id);
    if (memObj !== undefined && memObj.u_pw === pw) {
        console.log('SIGN In SUCCESS!!');
        return true;
    }
    console.log('SIGN In FAIL!!');
    return false;
}
/* MEMBER DB END */


/* DIARY DB START*/
const addDiary = () => {
    console.log('addDiary() CALLED!!');

    let diaryArr = diaryDB.get(signInedMemberId);
    diaryArr.push(txt);

    //개발 목적으로 잘 들어갔는지 보기 위해 확인차
    console.log('diaryArr: ', diaryArr);

}

const searchDiary = () => {
    console.log('searchDiary() CALLED!!');

    let diaryArr = diaryDB.get(signInedMemberId);
    console.log('diaryArr: ', diaryArr);

    return diaryArr;

}
/* DIARY DB END*/