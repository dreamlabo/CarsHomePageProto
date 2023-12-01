meetings = [
    {
        date: new Date('2023/12/9'),
        time: '6:00pm',
        host: 'Kent',
        hostEmail: 'kentsEmail@mail.com',
        additionalInfo: [
                        "This month's meeting is our annual holiday party.", 
                        "It's a holiday potluck and BYOB, so please bring whatever you'd like to drink, along with a side dish, salad or dessert to share. Kent is providing a holiday ham.",
                        "If you want to participate in the gift exchange bring a music-related wrapped gift (CDs, books, etc.)."
                    ]
    },
    {
        date: new Date('2023/11/11'),
        time: '6:00pm',
        host: 'Kent',
        hostEmail: 'kentsEmail@mail.com',
        additionalInfo: []
    }
]



function returnUpcomingMeeting() {
    const currentDate = new Date();
    const currentDateFormatted = currentDate.toLocaleDateString('en-US', {  timeZone: 'America/Denver' });
    
    return meetings.find(meeting => {
        const meetingDateFormatted = meeting.date.toLocaleDateString('en-US', {  timeZone: 'America/Denver' });
        return meetingDateFormatted >= currentDateFormatted;
      });
}