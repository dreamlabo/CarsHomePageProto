const meetingsDetailsSection = document.getElementById('meeting-details-section');

const currentMeeting = returnUpcomingMeeting();

if(currentMeeting) {
    const meetingDetailsTemplate = document.getElementById('meeting-details-template');
    const meetingDetails = meetingDetailsTemplate.content.cloneNode(true);

    const meetingDate = meetingDetails.querySelector('#date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const formattedDate = currentMeeting.date.toLocaleDateString('en-US', options);
    meetingDate.textContent = formattedDate;

    const meetingTime = meetingDetails.querySelector('#meeting-time');
    meetingTime.textContent = currentMeeting.time
  
    const meetingPlaceOne = meetingDetails.querySelector('#meeting-place-one');
    meetingPlaceOne.textContent = `This month ${currentMeeting.host} is hosting (Thanks ${currentMeeting.host}!).`
    
    const meetingPlaceTwo = meetingDetails.querySelector('#meeting-place-two');
    meetingPlaceTwo.textContent = `For directions to join the meeting and to RSVP, email ${currentMeeting.host} at ${currentMeeting.hostEmail}`

    if(currentMeeting.additionalInfo.length > 0) {
        const additionalInfoTemplate = document.getElementById('additional-info-template')
        const additionalInfoElement =  additionalInfoTemplate.content.cloneNode(true);
        const infoContainer = additionalInfoElement.querySelector('.additional-info-container');
        
        currentMeeting.additionalInfo.forEach(element => {
            const info = document.createElement('p');
            info.textContent = element;
            infoContainer.appendChild(info);
        })

        meetingDetails.appendChild(additionalInfoElement);
    }
    meetingsDetailsSection.appendChild(meetingDetails);
}
else {
    const comingSoonTemplate = document.getElementById("coming-soon-template");
    const comingSoonSection = comingSoonTemplate.content.cloneNode(true);
    meetingsDetailsSection.appendChild(comingSoonSection);
}