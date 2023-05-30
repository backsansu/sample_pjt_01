let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const getCurrentDateTime = () => {
    console.log('getCurrentDateTime() CALLED!!');

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = today.getDay();

    return `[${year}/${month}/${date}/${days[day]}] `;
}