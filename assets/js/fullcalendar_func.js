        /* initialize the calendar
        -----------------------------------------------------------------*/
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            views: {
    dayGridMonth: { // name of view
      titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
      // other view-specific options here
    }
  },
            locale: 'fa',
            direction: 'rtl',
            firstDay: 6,
            timeZone: 'Asia/Tehran',
            events: 'calendar-data/'
        });
        calendar.render();
