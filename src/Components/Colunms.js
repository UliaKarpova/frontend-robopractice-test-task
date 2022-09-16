import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

/* преобразуем часы и минуты из формата hh:mm в минуты, 
чтобы было возможно использовать их для подсчёта итога за месяц */
function getTimeInMinutes (data) {
    const hours = data.split(':')[0];
    const minutes = data.slice(3);
    const timeInMinutes = (hours * 60) + minutes;
    return timeInMinutes;
}

/* создаём колонки */
const columns = [
    {
        title: 'User',
        dataIndex: 'Fullname',
        key: 'name',
        width: 150,
        fixed: 'left',
        align: 'center',
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm}) => {
            return <Input 
            value={selectedKeys[0]}
            autoFocus 
            onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
            }}
            placeholder='Search'
            onPressEnter={() => {
                confirm()
            }}
            onBlur={() => {
                confirm()
            }} ></Input> 
        },
        filterIcon: () => {
            return <SearchOutlined />
        },
        onFilter: (value, record) => {
            return record.Fullname.toLowerCase().includes(value.toLowerCase())
        }
    },
    {
        title: '1',
        dataIndex: 'Time1',
        key: '1',        
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time1) - getTimeInMinutes(b.Time1)
    },
    {
        title: '2',
        dataIndex: 'Time2',
        key: '2',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time2) - getTimeInMinutes(b.Time2)
    },
    {
        title: '3',
        dataIndex: 'Time3',
        key: '3',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time3) - getTimeInMinutes(b.Time3)
    },
    {
        title: '4',
        dataIndex: 'Time4',
        key: '4',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time4) - getTimeInMinutes(b.Time4)

    },
    {
        title: '5',
        dataIndex: 'Time5',
        key: '5',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time5) - getTimeInMinutes(b.Time5)

    },
    {
        title: '6',
        dataIndex: 'Time6',
        key: '6',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time6) - getTimeInMinutes(b.Time6)
    },
    {
        title: '7',
        dataIndex: 'Time7',
        key: '7',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time7) - getTimeInMinutes(b.Time7)
    },
    {
        title: '8',
        dataIndex: 'Time8',
        key: '8',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time8) - getTimeInMinutes(b.Time8)
    },
    {
        title: '9',
        dataIndex: 'Time9' ,
        key: '9',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time9) - getTimeInMinutes(b.Time9)
    },
    {
        title: '10',
        dataIndex: 'Time10',
        key: '10',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time10) - getTimeInMinutes(b.Time10)
    },
    {
        title: '11',
        dataIndex: 'Time11',
        key: '11',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time11) - getTimeInMinutes(b.Time11)
    },
    {
        title: '12',
        dataIndex: 'Time12',
        key: '12',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time12) - getTimeInMinutes(b.Time12)
    },
    {
        title: '13',
        dataIndex: 'Time13',
        key: '13',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time13) - getTimeInMinutes(b.Time13)
    },
    {
        title: '14',
        dataIndex: 'Time14',
        key: '14',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time14) - getTimeInMinutes(b.Time14)
    },
    {
        title: '15',
        dataIndex: 'Time15',
        key: '15',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time15) - getTimeInMinutes(b.Time15)
    },
    {
        title: '16',
        dataIndex: 'Time16',
        key: '16',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time16) - getTimeInMinutes(b.Time16)
    },
    {
        title: '17',
        dataIndex: 'Time17',
        key: '17',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time17) - getTimeInMinutes(b.Time17)
    },
    {
        title: '18',
        dataIndex: 'Time18',
        key: '18',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time18) - getTimeInMinutes(b.Time18)
    },
    {
        title: '19',
        dataIndex: 'Time19',
        key: '19',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time19) - getTimeInMinutes(b.Time19)
    },
    {
        title: '20',
        dataIndex: 'Time20',
        key: '20',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time20) - getTimeInMinutes(b.Time20)
    },
    {
        title: '21',
        dataIndex: 'Time21',
        key: '21',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time21) - getTimeInMinutes(b.Time21)
    },
    {
        title: '22',
        dataIndex: 'Time22',
        key: '22',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time22) - getTimeInMinutes(b.Time22)
    },
    {
        title: '23',
        dataIndex: 'Time23',
        key: '23',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time23) - getTimeInMinutes(b.Time23)
    },
    {
        title: '24',
        dataIndex: 'Time24',
        key: '24',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time24) - getTimeInMinutes(b.Time24)
    },
    {
        title: '25',
        dataIndex: 'Time25',
        key: '25',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time25) - getTimeInMinutes(b.Time25)
    },
    {
        title: '26',
        dataIndex: 'Time26',
        key: '26',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time26) - getTimeInMinutes(b.Time26)
    },
    {
        title: '27',
        dataIndex: 'Time27',
        key: '27',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time27) - getTimeInMinutes(b.Time27)
    },
    {
        title: '28',
        dataIndex: 'Time28',
        key: '28',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time28) - getTimeInMinutes(b.Time28)
    },
    {
        title: '29',
        dataIndex: 'Time29',
        key: '29',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time29) - getTimeInMinutes(b.Time29)
    },
    {
        title: '30',
        dataIndex: 'Time30',
        key: '30',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time30) - getTimeInMinutes(b.Time30)
    },
    {
        title: '31',
        dataIndex: 'Time31',
        key: '31',
        align: 'center',
        sorter: (a, b) => getTimeInMinutes(a.Time31) - getTimeInMinutes(b.Time31)
    },
    {
        title: 'Monthly total',
        dataIndex: 'Monthly',
        key: 'Monthly',
        align: 'center',
        width: 150,
        fixed: 'right',
        sorter: (a, b) => getTimeInMinutes(a.Monthly) - getTimeInMinutes(b.Monthly)

    },
]

export default columns;