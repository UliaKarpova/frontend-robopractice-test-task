/* преобразуем данные о начале и окончании работы в длительность в часах и минутах */ 
const getTime = (data) => {
    const start = data.Start.replace(/-/gi, ':');
    const end = data.End.replace(/-/, ':');

    const timeInMilisec = new Date(data.Date + ' ' + end).getTime() - new Date(data.Date + ' ' + start).getTime();

    const hours = Math.floor(timeInMilisec / 1000 / 60 / 60);
    let minutes = Math.floor(timeInMilisec / 1000 / 60) - (hours * 60);
    minutes = (minutes < 10 ? '0' : '') + minutes;

    return { hours, minutes };
}

/* выделяем число из даты */
const getDay = (data) => {
     const number = data.Date.replace('2021-05-', '');
     return number.startsWith(0) ? number.slice(1) : number;
}

/* добавляем в исходный массив новые данные (длительность работы для каждого дня, общая длительность за месяц, ключ, число) */
const newWorkersElements = (data) => {
    const newData = data.workers.map((worker) => {
        worker.key = worker.id;
        let monthly = 0;
            worker.Days.map((day) => {
                const time = getTime(day);
                day.Time = time.hours + ":" + time.minutes;

                const timeInMinutes = time.hours * 60 + Number(time.minutes);
                monthly = monthly + timeInMinutes;

                day.Day = Number(getDay(day));

                const name = 'Time' + day.Day;
                worker[name] =  day.Time;
                return worker;
            });

        const totalHours = Math.floor(monthly / 60);
        const totalMinutes = Math.floor(monthly - (totalHours * 60));
        worker.Monthly = totalHours + ':' + totalMinutes;

        for (let i = 1; i <= 31; ++i) {
            let testName = 'Time' + i;
            if (!Object.keys(worker).includes(testName)) {
                worker[testName] = '0';
            }
        }
        return worker;
    });
    return newData;
}

export default newWorkersElements;