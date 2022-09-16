import ResizableAntdTable from 'resizable-antd-table';
import columns from './Colunms';

/* импортирую массив с данными, так ка не получилось получить данные от сервера */
import workers from '../utils/workers';

import newWorkersElements from '../utils/newWorkersElements';

/* преобразуем исходный массив для отрисовки данных */
const newData = newWorkersElements(workers);

const TableReady = () => {
    return (
        <ResizableAntdTable
            border={true} 
            dataSource={newData}
            columns={columns}
            pagination={{
                pageSize: 7,
                showSizeChanger: false
            }}
        />
    )
}

export default TableReady;
