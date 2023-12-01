
const meetingInfoSection = document.getElementById('meeting-info');

const futureMeeting = returnUpcomingMeeting();

if (futureMeeting) {
    placeMeetingElement();
}
else {
    placeComingSoonElement();
}

// function returnUpcomingMeeting() {
//     const currentDate = new Date();
//     const currentDateFormatted = currentDate.toLocaleDateString('en-US', {  timeZone: 'America/Denver' });
    
//     return meetings.find(meeting => {
//         const meetingDateFormatted = meeting.date.toLocaleDateString('en-US', {  timeZone: 'America/Denver' });
//         return meetingDateFormatted >= currentDateFormatted;
//       });
// }

function placeComingSoonElement() {
    const comingSoonTemplate = document.getElementById("meeting-coming-soon-template")
    const comingSoonElement = comingSoonTemplate.content.cloneNode(true);
    meetingInfoSection.appendChild(comingSoonElement);
}

function  placeMeetingElement() {
        const date = futureMeeting.date;
        const meetingInfoTemplate = document.getElementById('meeting-info-template');
        const meetingInfo = meetingInfoTemplate.content.cloneNode(true);
    
        const dayOfWeek_format = { weekday: 'long' };
        const month_format = { month: 'long' };
        const dateNum_format = { day: 'numeric'  };
    
        const day = meetingInfo.querySelector('.meeting-info__day');
        day.textContent = `${date.toLocaleDateString('en-US', dayOfWeek_format)},`;
    
        const monthElem = meetingInfo.querySelector('.meeting-info__month');
        monthElem.textContent = `${date.toLocaleDateString('en-US', month_format)}`;
    
        const dateElem = meetingInfo.querySelector('.meeting-info__date-number');
        dateElem.textContent = `${date.toLocaleDateString('en-US', dateNum_format)}`;
        
        const timeElem = meetingInfo.querySelector('.meeting-time');
        timeElem.textContent = futureMeeting.time;
    
        meetingInfoSection.appendChild(meetingInfo);
}


